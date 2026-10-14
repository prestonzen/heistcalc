// HeistCalc Worker: serves the static Astro build, plus
//  - www -> apex and /ads.txt (Ezoic Ads.txt Manager) redirects
//  - /api/discord/* and /api/alerts: Discord webhook alerts (D1-backed, no accounts)
//  - a per-minute cron that delivers due alerts and the weekly reset summary
import { lastReset } from "../src/scripts/reset.ts";
import { WEEKS } from "../src/data/weekly.ts";

const ADS_TXT = "https://srv.adstxtmanager.com/19390/heistcalc.com";
const SITE = "https://heistcalc.com";
// Search Console HTML-file verification (served by the Worker because static assets 307 away from .html).
const GSC_FILES = ["googled57078d3b0c41bb7.html"];
// IndexNow (Bing, Yandex, Seznam, Naver): the key file must be served at /<key>.txt.
const INDEXNOW_KEY = "1d2d41c2967e7f085c877da42aced1ea";
const WEBHOOK_RE = /^https:\/\/(?:ptb\.|canary\.)?discord(?:app)?\.com\/api\/webhooks\/(\d{17,20})\/([\w-]{60,80})$/;
const MAX_PENDING = 20;
const MAX_AHEAD = 8 * 86_400_000;
const CONNECTS_PER_HOUR = 10;
const PINK = 0xff3d8b;

/* ---------- helpers ---------- */

const json = (data, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { "content-type": "application/json", "cache-control": "no-store" } });
const bad = (msg, status = 400) => json({ error: msg }, status);

async function sha256(s) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(s));
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
}
const randomHex = (bytes) => [...crypto.getRandomValues(new Uint8Array(bytes))].map((b) => b.toString(16).padStart(2, "0")).join("");
const clip = (s, n) => String(s ?? "").slice(0, n);

async function readJson(request) {
  if (!(request.headers.get("content-type") || "").includes("application/json")) return null;
  try { return await request.json(); } catch { return null; }
}

async function auth(env, body) {
  if (typeof body?.id !== "string" || typeof body?.token !== "string") return null;
  const sub = await env.DB.prepare("SELECT * FROM subs WHERE id = ?").bind(body.id).first();
  if (!sub || sub.manage_hash !== (await sha256(body.token))) return null;
  return sub;
}

/** Post an embed to a Discord webhook. Returns "ok", "gone" (webhook deleted) or "error". */
async function postDiscord(webhook, { title, description, url = `${SITE}/timers/`, fields }) {
  const res = await fetch(`${webhook}?wait=false`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      username: "HeistCalc",
      avatar_url: `${SITE}/icon-192.png`,
      allowed_mentions: { parse: [] },
      embeds: [{ title: clip(title, 256), description: clip(description, 2000), url, color: PINK, fields, footer: { text: "heistcalc.com" } }],
    }),
  });
  if (res.ok) return "ok";
  if (res.status === 404 || res.status === 401) return "gone";
  return "error";
}

/* ---------- API ---------- */

async function connect(request, env) {
  const body = await readJson(request);
  const webhook = typeof body?.webhook === "string" ? body.webhook.trim().replace(/\/$/, "") : "";
  if (!WEBHOOK_RE.test(webhook)) return bad("That doesn't look like a Discord webhook URL.");

  const ipHash = await sha256((request.headers.get("cf-connecting-ip") || "unknown") + "|heistcalc");
  const hourAgo = Date.now() - 3_600_000;
  const { n } = await env.DB.prepare("SELECT COUNT(*) AS n FROM hits WHERE ip_hash = ? AND ts > ?").bind(ipHash, hourAgo).first();
  if (n >= CONNECTS_PER_HOUR) return bad("Too many attempts. Try again in an hour.", 429);
  await env.DB.batch([
    env.DB.prepare("INSERT INTO hits (ip_hash, ts) VALUES (?, ?)").bind(ipHash, Date.now()),
    env.DB.prepare("DELETE FROM hits WHERE ts < ?").bind(hourAgo),
  ]);

  // Proves the webhook works (and that the caller holds it) before we store anything.
  const test = await postDiscord(webhook, {
    title: "HeistCalc is connected",
    description: "This channel will get your HeistCalc timer alerts" + (body.weekly === false ? "." : " and a heads-up at every GTA Online weekly reset."),
    url: `${SITE}/discord-alerts/`,
  });
  if (test !== "ok") return bad("Discord rejected that webhook. Check that it still exists and try again.");

  const token = randomHex(24);
  const existing = await env.DB.prepare("SELECT id FROM subs WHERE webhook = ?").bind(webhook).first();
  const id = existing?.id ?? randomHex(12);
  const weekly = body.weekly === false ? 0 : 1;
  if (existing) {
    await env.DB.prepare("UPDATE subs SET manage_hash = ?, weekly = ? WHERE id = ?").bind(await sha256(token), weekly, id).run();
  } else {
    await env.DB.prepare("INSERT INTO subs (id, webhook, manage_hash, weekly, created) VALUES (?, ?, ?, ?, ?)")
      .bind(id, webhook, await sha256(token), weekly, Date.now()).run();
  }
  return json({ id, token, weekly: !!weekly });
}

async function settings(request, env) {
  const body = await readJson(request);
  const sub = await auth(env, body);
  if (!sub) return bad("Not connected.", 401);
  await env.DB.prepare("UPDATE subs SET weekly = ? WHERE id = ?").bind(body.weekly ? 1 : 0, sub.id).run();
  return json({ ok: true, weekly: !!body.weekly });
}

async function disconnect(request, env) {
  const body = await readJson(request);
  const sub = await auth(env, body);
  if (!sub) return bad("Not connected.", 401);
  await env.DB.batch([
    env.DB.prepare("DELETE FROM alerts WHERE sub_id = ?").bind(sub.id),
    env.DB.prepare("DELETE FROM subs WHERE id = ?").bind(sub.id),
  ]);
  return json({ ok: true });
}

async function testAlert(request, env) {
  const body = await readJson(request);
  const sub = await auth(env, body);
  if (!sub) return bad("Not connected.", 401);
  const r = await postDiscord(sub.webhook, { title: "Test alert", description: "If you can see this, HeistCalc alerts are working." });
  if (r === "gone") { await env.DB.prepare("DELETE FROM subs WHERE id = ?").bind(sub.id).run(); return bad("That webhook was deleted in Discord.", 410); }
  return r === "ok" ? json({ ok: true }) : bad("Discord didn't accept the message. Try again shortly.", 502);
}

async function scheduleAlerts(request, env) {
  const body = await readJson(request);
  const sub = await auth(env, body);
  if (!sub) return bad("Not connected.", 401);
  const list = Array.isArray(body.alerts) ? body.alerts.slice(0, 5) : [];
  const now = Date.now();
  const valid = list.filter((a) => Number.isFinite(a?.fireAt) && a.fireAt > now && a.fireAt < now + MAX_AHEAD);
  if (!valid.length) return bad("No valid alerts.");
  const { n } = await env.DB.prepare("SELECT COUNT(*) AS n FROM alerts WHERE sub_id = ?").bind(sub.id).first();
  if (n + valid.length > MAX_PENDING) return bad(`You can have up to ${MAX_PENDING} pending Discord alerts.`, 429);
  const rows = valid.map((a) => ({ id: randomHex(10), fireAt: Math.round(a.fireAt), title: clip(a.title, 120) || "Timer finished", body: clip(a.body, 300) }));
  await env.DB.batch(rows.map((r) =>
    env.DB.prepare("INSERT INTO alerts (id, sub_id, fire_at, title, body, created) VALUES (?, ?, ?, ?, ?, ?)").bind(r.id, sub.id, r.fireAt, r.title, r.body, now)));
  return json({ ids: rows.map((r) => r.id) });
}

async function cancelAlerts(request, env) {
  const body = await readJson(request);
  const sub = await auth(env, body);
  if (!sub) return bad("Not connected.", 401);
  const ids = Array.isArray(body.ids) ? body.ids.filter((x) => typeof x === "string").slice(0, 20) : [];
  if (ids.length) {
    await env.DB.batch(ids.map((x) => env.DB.prepare("DELETE FROM alerts WHERE id = ? AND sub_id = ?").bind(x, sub.id)));
  }
  return json({ ok: true });
}

const ROUTES = {
  "POST /api/discord/connect": connect,
  "POST /api/discord/settings": settings,
  "POST /api/discord/disconnect": disconnect,
  "POST /api/discord/test": testAlert,
  "POST /api/alerts": scheduleAlerts,
  "POST /api/alerts/cancel": cancelAlerts,
};

/* ---------- cron ---------- */

function weeklyMessage(resetAt) {
  const week = WEEKS.find((w) => Date.parse(w.start + "T00:00:00Z") >= resetAt - 86_400_000 && Date.parse(w.start + "T00:00:00Z") <= resetAt + 86_400_000);
  const fields = [];
  if (week?.bonuses?.length) fields.push({ name: "Bonuses", value: clip(week.bonuses.slice(0, 6).map((b) => `• ${b.activity}: ${b.reward}`).join("\n"), 1024) });
  if (week?.pantherGuaranteed) fields.push({ name: "Cayo Perico", value: "Panther Statue is guaranteed this week." });
  return {
    title: week ? `GTA Online weekly reset: ${week.title}` : "GTA Online weekly reset",
    description: "Your first-run heist bonuses are back. Host each finale once this week for the bonus payout." +
      (week ? "" : " This week's event details are coming soon."),
    url: week ? `${SITE}/gta-online-weekly-update/` : `${SITE}/weekly-checklist/`,
    fields: [...fields, { name: "Checklist", value: `${SITE}/weekly-checklist/` }],
  };
}

async function deliver(env) {
  const now = Date.now();
  const due = await env.DB.prepare(
    "SELECT a.id, a.title, a.body, s.id AS sub_id, s.webhook FROM alerts a JOIN subs s ON s.id = a.sub_id WHERE a.fire_at <= ? ORDER BY a.fire_at LIMIT 50"
  ).bind(now).all();
  for (const a of due.results) {
    const r = await postDiscord(a.webhook, { title: a.title, description: a.body });
    if (r === "gone") await env.DB.prepare("DELETE FROM subs WHERE id = ?").bind(a.sub_id).run();
    if (r !== "error") await env.DB.prepare("DELETE FROM alerts WHERE id = ?").bind(a.id).run();
  }
  // Drop anything that failed repeatedly for over an hour.
  await env.DB.prepare("DELETE FROM alerts WHERE fire_at < ?").bind(now - 3_600_000).run();

  // Weekly reset summary, once per reset, within 30 minutes after it.
  const reset = lastReset(now);
  if (now - reset < 30 * 60_000) {
    const sent = await env.DB.prepare("SELECT value FROM meta WHERE key = 'last_weekly'").first();
    if (sent?.value !== String(reset)) {
      await env.DB.prepare("INSERT INTO meta (key, value) VALUES ('last_weekly', ?) ON CONFLICT(key) DO UPDATE SET value = excluded.value").bind(String(reset)).run();
      const msg = weeklyMessage(reset);
      const subs = await env.DB.prepare("SELECT id, webhook FROM subs WHERE weekly = 1").all();
      for (const s of subs.results) {
        const r = await postDiscord(s.webhook, msg);
        if (r === "gone") await env.DB.prepare("DELETE FROM subs WHERE id = ?").bind(s.id).run();
      }
    }
  }
}

/* ---------- entry ---------- */

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === "www.heistcalc.com") {
      url.hostname = "heistcalc.com";
      return Response.redirect(url.toString(), 301);
    }
    if (url.pathname === "/ads.txt") return Response.redirect(ADS_TXT, 301);
    const file = url.pathname.slice(1);
    if (file === `${INDEXNOW_KEY}.txt`) return new Response(INDEXNOW_KEY, { headers: { "content-type": "text/plain; charset=utf-8" } });
    if (GSC_FILES.includes(file)) return new Response(`google-site-verification: ${file}`, { headers: { "content-type": "text/html; charset=utf-8" } });
    if (url.pathname.startsWith("/api/")) {
      const handler = ROUTES[`${request.method} ${url.pathname}`];
      if (!handler) return bad("Not found.", 404);
      if (request.headers.get("origin") && request.headers.get("origin") !== url.origin) return bad("Forbidden.", 403);
      try { return await handler(request, env); } catch { return bad("Something went wrong.", 500); }
    }
    return env.ASSETS.fetch(request);
  },

  async scheduled(_event, env, ctx) {
    ctx.waitUntil(deliver(env).catch((err) => console.error("cron failed:", err?.stack || err)));
  },
};
