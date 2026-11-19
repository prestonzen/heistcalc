// IndexNow: tells Bing, Yandex, Seznam, Naver and other IndexNow engines which pages changed, so they recrawl fast.
// `prepare` (runs after astro build): hashes every page in the sitemap, compares with the hash list published on the
//   live site (/indexnow-state.json), writes the new list into dist/ and the changed URLs to .indexnow-pending.json.
//   In CI (Cloudflare Workers Builds sets WORKERS_CI / CI) it also submits straight away.
// `submit` (runs after a local `wrangler deploy`): submits the pending URLs.
import { readFileSync, writeFileSync, existsSync, rmSync } from "node:fs";
import { createHash } from "node:crypto";
import path from "node:path";

const HOST = "heistcalc.com";
const KEY = "ff8a70bcd34dc4fdc7e5561f3b67c602";
const PENDING = ".indexnow-pending.json";
const mode = process.argv[2] ?? "prepare";

async function submit(urls) {
  if (urls.length === 0) return console.log("IndexNow: nothing changed");
  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList: urls }),
  });
  console.log(`IndexNow: submitted ${urls.length} URL(s), HTTP ${res.status}`);
  if (!res.ok) console.log(await res.text());
  return res.ok;
}

if (mode === "prepare") {
  const sitemap = readFileSync("dist/sitemap-0.xml", "utf8");
  const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const file = (u) => path.join("dist", decodeURIComponent(new URL(u).pathname), "index.html");
  // Ignore hashed asset names so only real content changes count.
  const hash = (u) => existsSync(file(u)) ? createHash("sha1").update(readFileSync(file(u), "utf8").replace(/\/_astro\/[^"'\s)]+/g, "")).digest("hex").slice(0, 16) : null;
  let live = {};
  try { const r = await fetch(`https://${HOST}/indexnow-state.json`, { signal: AbortSignal.timeout(8000) }); if (r.ok) live = await r.json(); } catch {}
  const next = {}, changed = [];
  for (const u of urls) { const h = hash(u); if (!h) continue; next[u] = h; if (live[u] !== h) changed.push(u); }
  writeFileSync("dist/indexnow-state.json", JSON.stringify(next));
  writeFileSync(PENDING, JSON.stringify(changed));
  console.log(`IndexNow: ${changed.length} changed page(s) pending`);
  if (process.env.WORKERS_CI || process.env.CI) {
    // Workers Builds can run the build twice (build step + wrangler's [build] command); submit each list once.
    const sent = existsSync(".indexnow-sent.json") ? readFileSync(".indexnow-sent.json", "utf8") : "";
    if (sent !== JSON.stringify(changed) && await submit(changed)) writeFileSync(".indexnow-sent.json", JSON.stringify(changed));
    rmSync(PENDING, { force: true });
  }
} else if (mode === "submit") {
  const urls = existsSync(PENDING) ? JSON.parse(readFileSync(PENDING, "utf8")) : [];
  if (await submit(urls) !== false) rmSync(PENDING, { force: true });
}
