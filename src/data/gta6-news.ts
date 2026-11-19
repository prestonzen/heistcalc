// GTA 6 news feed, newest first. Maintained by the "GTA 6 launch watcher" routine and by hand.
// Rules: one entry per real development, written in our own words, with the sources actually used.
// `confirmed`: "rockstar" for Rockstar/PlayStation/Xbox official sources, "reported" for 2+ reputable outlets.
export interface NewsItem {
  date: string; // YYYY-MM-DD (UTC) the news broke
  title: string;
  summary: string;
  confirmed: "rockstar" | "reported";
  sources: string[];
  href?: string; // our page with the details, if any
}

export const NEWS: NewsItem[] = [
  {
    date: "2026-11-16",
    title: "Second pre-launch update, 1.002.001, reaches PS5 and Xbox",
    summary: "A follow-up patch, version 01.002.001 on PS5, rolled out on November 16, three days before launch: about 602.5 MB on PS5 and about 1.59 GB on Xbox. The PS5 release was reportedly staged over 24 hours, so some players saw it later. Rockstar has not published patch notes, so what it changes is unconfirmed.",
    confirmed: "reported",
    sources: ["https://beebom.com/gta-6-gets-second-pre-launch-update/", "https://news.instant-gaming.com/en/articles/23055-gta-vi-update-01-002-001-is-currently-being-deployed", "https://mp1st.com/news/gta-6-update-1-002-001-released-latest-ps5-firmware-gets-cracked-days-before-release"],
    href: "/gta-6/preload/",
  },
  {
    date: "2026-11-13",
    title: "Pre-launch update 1.002.000 (about 1 GB) rolls out on PS5 and Xbox",
    summary: "A roughly 1 GB update, version 1.002.000, reached consoles on November 13, reportedly in waves, with the first half of players getting it about 11 hours before the rest. Rockstar has not published patch notes, so what it changes is unconfirmed; the size reported for Xbox differs between outlets.",
    confirmed: "reported",
    sources: ["https://comicbook.com/gaming/news/gta-6-update-patch-notes-1002000/", "https://mp1st.com/?p=318409", "https://www.keengamer.com/articles/news/gta-6-update-1-002-starts-rolling-out-on-ps5-and-xbox-ahead-of-launch/"],
    href: "/gta-6/preload/",
  },
  {
    date: "2026-11-18",
    title: "GTA 6 starts unlocking around the world, beginning in New Zealand",
    summary: "Rockstar confirmed GTA 6 releases at midnight local time on November 19 in every region, so New Zealand gets it first at 11:00 UTC on November 18, with the US Eastern unlock about 18 hours later.",
    confirmed: "rockstar",
    sources: ["https://support.rockstargames.com/articles/29jV3Cv2cCgvwM1XgtMO5o/grand-theft-auto-vi-regional-pre-load-and-release-times-on-playstation-5-and-xbox-series-x-or-s"],
    href: "/gta-6/release-date/",
  },
  {
    date: "2026-11-03",
    title: "Preload moved up to November 10, needs up to 212 GB",
    summary: "Rockstar opened digital preloading two days earlier than first announced: midnight local time on PS5 and 12 a.m. GMT worldwide on Xbox. Code-in-box copies reached stores on November 12.",
    confirmed: "rockstar",
    sources: ["https://www.rockstargames.com/newswire/article/k4ak9okk485712/grand-theft-auto-vi-pre-load-begins-on-november-10"],
    href: "/gta-6/preload/",
  },
  {
    date: "2026-11-03",
    title: "Free printable Leonida map and cover poster coming on launch day",
    summary: "Rockstar will add a printable cover art poster and map of Leonida to its GTA VI site on November 19, with a double-sided print sold for $0.99 at the Rockstar Store.",
    confirmed: "rockstar",
    sources: ["https://www.rockstargames.com/newswire/article/k4ak9okk485712/grand-theft-auto-vi-pre-load-begins-on-november-10"],
    href: "/gta-6/map/",
  },
  {
    date: "2026-10-29",
    title: "Justice's GTA 6 score album arrives December 11",
    summary: "The adaptive score by French duo Justice gets a 30-track album on streaming, CD and vinyl, including the launch trailer song \"Flower in a Hurricane\".",
    confirmed: "rockstar",
    sources: ["https://www.rockstargames.com/newswire/article/39ak8a12395591/grand-theft-auto-vi-original-score-by-justice"],
    href: "/gta-6/radio-stations/",
  },
];
