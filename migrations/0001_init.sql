-- Discord webhook subscriptions. The webhook URL is the credential for posting into the channel,
-- so possession of it is treated as ownership. manage_hash is SHA-256 of the client's manage token.
CREATE TABLE IF NOT EXISTS subs (
  id TEXT PRIMARY KEY,
  webhook TEXT NOT NULL UNIQUE,
  manage_hash TEXT NOT NULL,
  weekly INTEGER NOT NULL DEFAULT 1,
  created INTEGER NOT NULL
);

-- One-off scheduled alerts (timer finished, Hard Mode window closing).
CREATE TABLE IF NOT EXISTS alerts (
  id TEXT PRIMARY KEY,
  sub_id TEXT NOT NULL REFERENCES subs(id) ON DELETE CASCADE,
  fire_at INTEGER NOT NULL,
  title TEXT NOT NULL,
  body TEXT NOT NULL,
  created INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS alerts_fire_at ON alerts(fire_at);
CREATE INDEX IF NOT EXISTS alerts_sub ON alerts(sub_id);

-- Simple abuse throttle: hashed IPs of recent connect attempts.
CREATE TABLE IF NOT EXISTS hits (
  ip_hash TEXT NOT NULL,
  ts INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS hits_ip_ts ON hits(ip_hash, ts);

CREATE TABLE IF NOT EXISTS meta (
  key TEXT PRIMARY KEY,
  value TEXT NOT NULL
);
