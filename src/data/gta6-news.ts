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
