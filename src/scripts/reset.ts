// GTA Online's weekly reset: Thursday 2:00 AM Pacific (5:00 AM Eastern), DST-aware.
const LA = new Intl.DateTimeFormat("en-US", {
  timeZone: "America/Los_Angeles",
  weekday: "short",
  hour: "numeric",
  hourCycle: "h23",
});

function isReset(t: number) {
  const parts = Object.fromEntries(LA.formatToParts(new Date(t)).map((p) => [p.type, p.value]));
  return parts.weekday === "Thu" && Number(parts.hour) === 2;
}

/** Next weekly reset strictly after `now` (ms epoch). */
export function nextReset(now = Date.now()): number {
  const day = 86_400_000;
  const startOfUtcDay = Math.floor(now / day) * day;
  for (let d = 0; d <= 8; d++) {
    // 2 AM Pacific is 09:00 UTC (PDT) or 10:00 UTC (PST).
    for (const h of [9, 10]) {
      const t = startOfUtcDay + d * day + h * 3_600_000;
      if (t > now && isReset(t)) return t;
    }
  }
  return now + 7 * day; // unreachable in practice
}

/** Most recent weekly reset at or before `now`. Used as the key for weekly state. */
export function lastReset(now = Date.now()): number {
  let t = nextReset(now - 8 * 86_400_000);
  while (nextReset(t) <= now) t = nextReset(t);
  return t;
}

export function formatDuration(ms: number, withSeconds = true): string {
  const t = Math.max(0, Math.floor(ms / 1000));
  const d = Math.floor(t / 86400), h = Math.floor(t / 3600) % 24, m = Math.floor(t / 60) % 60, s = t % 60;
  const pad = (n: number) => String(n).padStart(2, "0");
  if (d) return `${d}d ${pad(h)}h ${pad(m)}m`;
  if (h) return `${h}h ${pad(m)}m${withSeconds ? ` ${pad(s)}s` : ""}`;
  return `${m}m ${pad(s)}s`;
}
