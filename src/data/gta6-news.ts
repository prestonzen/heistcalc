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
    date: "2026-11-23",
    title: "First post-launch update, 01.002.002, fixes crashes, autosave and missed phone calls",
    summary: "Rockstar's first update since launch lists seven fixes: several crashes, weather that stayed the same too long, autosave problems that cost some players progress, story and mission phone calls that failed to trigger, a wanted level that wouldn't clear, the unusable gym deadlift bar, and partners not handing over bags to sell to fences. It's roughly 600 MB on PS5 and 1.6 GB on Xbox. The notes don't mention performance or frame rate.",
    confirmed: "reported",
    sources: ["https://rockstarintel.com/new-gta-vi-update-01-002-002-patch-notes-released/", "https://mp1st.com/title-updates-and-patches/gta-6-first-update-1-002-002-released-on-november-23", "https://www.gtabase.com/gta-6/articles/gta-6-update-01-002-002-patch-notes"],
    href: "/gta-6/preload/",
  },
  {
    date: "2026-11-20",
    title: "Take-Two: GTA 6 made $3.79 billion on day one",
    summary: "Take-Two says GTA 6 took $3.79 billion in worldwide retail sales on November 19, a record for any entertainment launch, after 32.5 million copies sold before release. It's the company's own unaudited estimate of retail spending, not Take-Two's revenue.",
    confirmed: "reported",
    sources: ["https://www.take2games.com/ir/news/grand-theft-auto-vi-shatters-entertainment-box-office-records", "https://www.cnn.com/2026/11/20/media/gta-vi-launch-sales-numbers"],
  },
  {
    date: "2026-11-21",
    title: "GTA 6 fast travel explained: Paradise Taxi, RydeMe and a $100 skip",
    summary: "There's no map teleport. Early on you call the Paradise Taxi, and after the BuckMe mission the RydeMe app unlocks. Skipping a ride costs an extra $100. Rides reach most drivable spots but not remote keys or deep swamp.",
    confirmed: "reported",
    sources: ["https://www.videogameschronicle.com/guide/gta-6-fast-travel-explained-how-to-fast-travel-in-gta-6/", "https://www.gtabase.com/gta-6/articles/how-to-fast-travel-in-gta-6", "https://www.keengamer.com/articles/guides/gta-vi-how-to-fast-travel-and-unlock-rydeme/"],
    href: "/gta-6/fast-travel/",
  },
  {
    date: "2026-11-21",
    title: "GTA 6 trophy list: 55 trophies, 28 of them hidden",
    summary: "The full list is out: one Platinum, two Gold, six Silver and 46 Bronze on PS5, and 55 achievements worth 1,000 Gamerscore on Xbox. Rockstar hasn't published the list itself, so this comes from outlets that have tracked it in game.",
    confirmed: "reported",
    sources: ["https://insider-gaming.com/complete-gta-6-trophy-list-how-to-get-all-trophies-achievements/", "https://www.gtabase.com/gta-6/achievements"],
    href: "/gta-6/trophies/",
  },
  {
    date: "2026-11-18",
    title: "PSN sign-in outage hits PS5 players hours before GTA 6 unlocks",
    summary: "PlayStation Network users reported widespread sign-in problems on November 18, just ahead of the global release, and PlayStation acknowledged an outage affecting its online services. Reports say it was resolved the same day. Sony has not given a cause, and any link to GTA 6 demand is speculation.",
    confirmed: "reported",
    sources: ["https://www.ibtimes.co.uk/psn-sign-problems-before-gta-6-release-1833247", "https://newsweek.com/playstation-users-report-access-issues-hours-before-gta-vi-launch-12736310", "https://mp1st.com/?p=318535"],
    href: "/gta-6/release-date/",
  },
  {
    date: "2026-11-19",
    title: "Rockstar's official Leonida map is out as a free download",
    summary: "Rockstar's GTA VI media page now offers a print-ready Leonida map poster, plus a cover art poster, as free downloads. The map labels the state's counties, main roads and islands on a grid, and we've added a viewable copy to our map page.",
    confirmed: "rockstar",
    sources: ["https://www.rockstargames.com/VI/media", "https://www.rockstargames.com/newswire/article/39akk424a9oo53/grand-theft-auto-vi-now-available"],
    href: "/gta-6/map/#official-map",
  },
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
