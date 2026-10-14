// HeistCalc service worker: offline support and notification clicks.
// Pages: network first (always fresh after deploys), cached copy when offline.
// Static assets: cache first.
const CACHE = "heistcalc-v1";
const CORE = ["/", "/timers/", "/weekly-checklist/", "/cayo-perico-calculator/", "/diamond-casino-heist-calculator/", "/heist-cut-calculator/"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  const url = new URL(req.url);
  if (req.method !== "GET" || url.origin !== location.origin || url.pathname === "/ads.txt") return;

  if (req.mode === "navigate") {
    e.respondWith(
      fetch(req)
        .then((res) => { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(url.pathname, copy)); return res; })
        .catch(() => caches.match(url.pathname).then((r) => r || caches.match("/")))
    );
    return;
  }
  if (url.pathname.startsWith("/_astro/") || /\.(png|svg|webmanifest)$/.test(url.pathname)) {
    e.respondWith(
      caches.match(req).then((hit) => hit || fetch(req).then((res) => { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); return res; }))
    );
  }
});

self.addEventListener("notificationclick", (e) => {
  e.notification.close();
  e.waitUntil(
    self.clients.matchAll({ type: "window", includeUncontrolled: true }).then((wins) => {
      const w = wins.find((c) => new URL(c.url).pathname.startsWith("/timers"));
      return w ? w.focus() : self.clients.openWindow("/timers/");
    })
  );
});
