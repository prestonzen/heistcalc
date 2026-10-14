// Client side of Discord alerts. The connection (id + manage token) lives in localStorage only.
const KEY = "hc-discord";

export interface Conn { id: string; token: string; weekly: boolean; timers: boolean }
export interface AlertReq { fireAt: number; title: string; body: string }

export function getConn(): Conn | null {
  try { return JSON.parse(localStorage.getItem(KEY) || "null"); } catch { return null; }
}
function setConn(c: Conn | null) {
  try { c ? localStorage.setItem(KEY, JSON.stringify(c)) : localStorage.removeItem(KEY); } catch {}
}

async function call<T>(path: string, body: object): Promise<T> {
  const res = await fetch(path, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(body) });
  const data = await res.json().catch(() => ({}));
  if (res.status === 401 || res.status === 410) setConn(null); // connection is gone server-side
  if (!res.ok) throw new Error(data.error || "Request failed.");
  return data as T;
}

export async function connect(webhook: string, weekly: boolean, timers: boolean): Promise<Conn> {
  const r = await call<{ id: string; token: string; weekly: boolean }>("/api/discord/connect", { webhook, weekly });
  const c = { id: r.id, token: r.token, weekly: r.weekly, timers };
  setConn(c);
  return c;
}

export async function updateSettings(patch: Partial<Pick<Conn, "weekly" | "timers">>) {
  const c = getConn();
  if (!c) return;
  const next = { ...c, ...patch };
  if (patch.weekly !== undefined) await call("/api/discord/settings", { id: c.id, token: c.token, weekly: next.weekly });
  setConn(next);
}

export async function disconnect() {
  const c = getConn();
  setConn(null);
  if (c) await call("/api/discord/disconnect", { id: c.id, token: c.token }).catch(() => {});
}

export async function sendTest() {
  const c = getConn();
  if (!c) throw new Error("Not connected.");
  await call("/api/discord/test", { id: c.id, token: c.token });
}

/** Schedules alerts if Discord timer alerts are on. Returns server ids (empty if off or failed). */
export async function scheduleAlerts(alerts: AlertReq[]): Promise<string[]> {
  const c = getConn();
  if (!c?.timers || !alerts.length) return [];
  try {
    const r = await call<{ ids: string[] }>("/api/alerts", { id: c.id, token: c.token, alerts });
    return r.ids;
  } catch { return []; }
}

export async function cancelAlerts(ids: string[]) {
  const c = getConn();
  if (!c || !ids.length) return;
  await call("/api/alerts/cancel", { id: c.id, token: c.token, ids }).catch(() => {});
}
