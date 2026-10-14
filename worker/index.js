// Serves the static Astro build. Only special-cases ads.txt (Ezoic Ads.txt Manager) and www -> apex.
const ADS_TXT = "https://srv.adstxtmanager.com/19390/heistcalc.com";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === "www.heistcalc.com") {
      url.hostname = "heistcalc.com";
      return Response.redirect(url.toString(), 301);
    }
    if (url.pathname === "/ads.txt") return Response.redirect(ADS_TXT, 301);
    return env.ASSETS.fetch(request);
  },
};
