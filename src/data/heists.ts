// Heist payout data for GTA Online, current as of Title Update 1.73 (July 14, 2026).
// Rockstar's patch notes confirm the mechanics but not the figures; numbers come from the
// Tez2 datamine (via RockstarINTEL) cross-checked against GTA BOOM, gta.guide and GTABase.
// `verified: false` marks values only one source gives, or where sources conflict.

export const DATA_AS_OF = "2026-10-14";
export const LATEST_PATCH = { name: "Title Update 1.73 (The Kortz Center Heist)", date: "2026-07-14" };

export const SOURCES = {
  rockstarintelCuts: { href: "https://rockstarintel.com/rockstar-just-reduced-gta-online-heist-payouts-and-heres-what-has-changed/", label: "RockstarINTEL: heist payout reductions in TU 1.73" },
  rockstarintel173: { href: "https://rockstarintel.com/gta-online-the-kortz-center-heist-update-patch-notes-1-73/", label: "RockstarINTEL: TU 1.73 patch notes" },
  rockstarSupport173: { href: "https://support.rockstargames.com/articles/4vRqEDvjUs9h7nqRUgc8YO/gtav-title-update-1-73-notes-ps5-ps4-xbox-series-x-or-s-xbox-one-pc-enhanced-legacy", label: "Rockstar Support: Title Update 1.73 notes" },
  gtaGuide: { href: "https://gta.guide/article/heist-payouts-update", label: "gta.guide: heist payouts after the update" },
  gtaboomCayo: { href: "https://www.gtaboom.com/cayo-perico-heist-payout-list-cooldowns-bonus-payouts-and-all-targets-035d", label: "GTA BOOM: Cayo Perico payouts, cooldowns and targets" },
  gtaboomAll: { href: "https://www.gtaboom.com/gta-heist-payouts-complete-list-7c7f", label: "GTA BOOM: complete heist payout list" },
  wikiCayoFinale: { href: "https://gta.fandom.com/wiki/The_Cayo_Perico_Heist/Finale", label: "GTA Wiki: The Cayo Perico Heist finale" },
  gtabaseCasino: { href: "https://www.gtabase.com/gta-online/jobs/heists/the-diamond-casino-heist", label: "GTABase: The Diamond Casino Heist" },
  wikiCasinoCrew: { href: "https://gta.fandom.com/wiki/Heist_Crew_Members_in_GTA_Online", label: "GTA Wiki: heist crew members in GTA Online" },
  wikiHeists: { href: "https://gta.fandom.com/wiki/Heists_in_GTA_Online", label: "GTA Wiki: heists in GTA Online" },
  gtaboomDoomsday: { href: "https://www.gtaboom.com/the-doomsday-heist-payout-details-0d98", label: "GTA BOOM: Doomsday Heist payouts" },
  rockstarintelBacklash: { href: "https://rockstarintel.com/rockstar-responds-to-gta-online-heist-payout-reduction-backlash/", label: "RockstarINTEL: Rockstar responds to payout backlash" },
} as const;

/* ---------------- Cayo Perico ---------------- */

export const CAYO = {
  primaries: [
    { id: "tequila", name: "Sinsimito Tequila", normal: 400_000, hard: 440_000, prev: 630_000 },
    { id: "ruby", name: "Ruby Necklace", normal: 560_000, hard: 616_000, prev: 700_000 },
    { id: "bonds", name: "Bearer Bonds", normal: 616_000, hard: 677_600, prev: 770_000 },
    { id: "pinkDiamond", name: "Pink Diamond", normal: 910_000, hard: 1_001_000, prev: 1_300_000 },
    { id: "panther", name: "Panther Statue (events only)", normal: 1_900_000, hard: 2_090_000, prev: 1_900_000 },
    { id: "madrazoFiles", name: "Madrazo Files (first run only)", normal: 1_100_000, hard: 1_100_000, prev: 1_100_000 },
  ],
  // Chance of each target when you scope the island (TU 1.73).
  odds: {
    firstAfterReset: { tequila: 0, ruby: 0.4, bonds: 0.4, pinkDiamond: 0.2 },
    repeatSameWeek: { tequila: 0.8, ruby: 0.1, bonds: 0.08, pinkDiamond: 0.02 },
  },
  // perStack = value of one full stack; bag = share of one player's bag a full stack fills.
  secondary: [
    { id: "gold", name: "Gold", min: 295_500, max: 300_000, avg: 297_750, bag: 2 / 3, prevAvg: 330_833, needsTwo: true },
    { id: "cocaine", name: "Cocaine", min: 178_200, max: 182_250, avg: 180_225, bag: 0.5, prevAvg: 200_250, needsTwo: false },
    { id: "weed", name: "Weed", min: 117_450, max: 121_500, avg: 119_475, bag: 0.375, prevAvg: 132_750, needsTwo: false },
    { id: "paintings", name: "Paintings", min: 141_750, max: 162_000, avg: 151_875, bag: 0.5, prevAvg: 168_750, needsTwo: false },
    { id: "cash", name: "Cash", min: 70_875, max: 74_925, avg: 72_900, bag: 0.25, prevAvg: 81_000, needsTwo: false },
  ],
  safe: { min: 18_000, max: 99_000 },
  hardMultiplier: 1.1,
  fees: { pavel: 0.02, fencing: 0.1 },
  setupFee: 100_000,
  elite: { normal: 50_000, hard: 100_000 },
  cooldownMinutes: { solo: 144, crew: 48 },
  hardModeWindowMinutes: 48,
  minCut: 0.15,
} as const;

/* ---------------- Diamond Casino ---------------- */

export const CASINO = {
  targets: [
    { id: "cash", name: "Cash", normal: 1_480_500, hard: 1_628_550, prevHard: 2_326_500 },
    { id: "artwork", name: "Artwork", normal: 1_645_000, hard: 1_809_500, prevHard: 2_585_000 },
    { id: "gold", name: "Gold", normal: 1_809_500, hard: 1_990_450, prevHard: 2_843_500 },
    { id: "diamonds", name: "Diamonds (event weeks)", normal: 2_303_000, hard: 2_533_300, prevHard: 3_619_000 },
  ],
  firstWeeklyMultiplier: 1.86,
  lester: 0.05,
  // Unverified: widely repeated community values, no reliable source states them.
  buyerFee: { low: 0.1, mid: 0.05, high: 0 },
  gunmen: [
    { name: "Karl Abolaji", cut: 0.05, skill: "Poor" },
    { name: "Charlie Reed", cut: 0.07, skill: "Good" },
    { name: "Patrick McReary", cut: 0.08, skill: "Expert" },
    { name: "Gustavo Mota", cut: 0.09, skill: "Expert" },
    { name: "Chester McCoy", cut: 0.1, skill: "Expert" },
  ],
  drivers: [
    { name: "Karim Denz", cut: 0.05, skill: "Poor" },
    { name: "Zach Nelson", cut: 0.06, skill: "Good" },
    { name: "Taliana Martinez", cut: 0.07, skill: "Good" },
    { name: "Eddie Toh", cut: 0.09, skill: "Expert" },
    { name: "Chester McCoy", cut: 0.1, skill: "Expert" },
  ],
  hackers: [
    { name: "Rickie Lukens", cut: 0.03, skill: "Poor", vault: "2:26", vaultDetected: "1:42" },
    { name: "Yohan Blair", cut: 0.05, skill: "Good", vault: "2:52", vaultDetected: "2:01" },
    { name: "Christian Feltz", cut: 0.07, skill: "Good", vault: "2:59", vaultDetected: "2:05" },
    { name: "Paige Harris", cut: 0.09, skill: "Expert", vault: "3:25", vaultDetected: "2:23" },
    { name: "Avi Schwartzman", cut: 0.1, skill: "Expert", vault: "3:30", vaultDetected: "2:26" },
  ],
  setupFee: 25_000,
  elite: { normal: 50_000, hard: 100_000 },
  minTake: 150_000,
  minCut: 0.15,
} as const;

/* ---------------- Original heists (2015) ---------------- */

export const ORIGINAL_HEISTS = {
  firstWeeklyMultiplier: 1.5,
  heists: [
    { name: "The Fleeca Job", players: 2, setup: 11_500, easy: 100_625, normal: 201_250, hard: 251_563, elite: 50_000 },
    { name: "The Prison Break", players: 4, setup: 25_000, easy: 350_000, normal: 700_000, hard: 875_000, elite: 100_000 },
    { name: "The Humane Labs Raid", players: 4, setup: 25_000, easy: 472_500, normal: 945_000, hard: 1_181_250, elite: 100_000 },
    { name: "Series A Funding", players: 4, setup: 25_000, easy: 353_500, normal: 707_000, hard: 883_750, elite: 100_000 },
    { name: "The Pacific Standard Job", players: 4, setup: 25_000, easy: 750_000, normal: 1_500_000, hard: 1_875_000, elite: 100_000 },
  ],
  bonuses: [
    { name: "All in Order", amount: 1_000_000, req: "Every setup and finale, in order" },
    { name: "Loyalty", amount: 1_000_000, req: "Every setup and finale with the same crew" },
    { name: "Criminal Mastermind", amount: 10_000_000, req: "In order, same crew, Hard, no lives lost" },
    { name: "Another Perspective", amount: 100_000, req: "Everything in first-person" },
    { name: "Supporting Role", amount: 100_000, req: "All 26 setups and finales as a crew member" },
  ],
} as const;

/* ---------------- Doomsday ---------------- */

export const DOOMSDAY = {
  firstWeeklyMultiplier: 1.222,
  acts: [
    { name: "Act I: The Data Breaches", normal: 877_500, hard: 1_096_875, prevHard: 1_218_750 },
    { name: "Act II: The Bogdan Problem", normal: 1_282_500, hard: 1_603_125, prevHard: 1_781_250 },
    { name: "Act III: The Doomsday Scenario", normal: 1_620_000, hard: 2_025_000, prevHard: 2_250_000 },
  ],
  elite: 50_000,
} as const;

/* ---------------- Other current earners (host payout) ---------------- */

export const OTHER_EARNERS = [
  { name: "The Kortz Center Heist", repeat: "$304,500–$481,250", firstWeekly: "$1,218,000–$1,925,000", note: "Needs a Mansion with the Art Studio. $100k planning cost per run. 4x on the first run of the week." },
  { name: "Oscar Guzman Flies Again (Titan Job)", repeat: "$500,000 / $750,000 Hard", firstWeekly: "$750,000 / $1,125,000 Hard", note: "Base payout unchanged by TU 1.73." },
  { name: "The Contract (Dr. Dre)", repeat: "$900,000", firstWeekly: "$1,099,800", note: "Was $1,000,000 before TU 1.73." },
  { name: "The Cluckin' Bell Farm Raid", repeat: "$400,000", firstWeekly: "$600,000", note: "Was $500,000 before TU 1.73. Playable solo." },
  { name: "KnoWay Out (A Clean Break)", repeat: "$245,000 / $367,500 Hard", firstWeekly: "$455,700 / $683,550 Hard", note: "Was $350,000 / $525,000 before TU 1.73." },
  { name: "Auto Shop Robbery Contracts", repeat: "$153,000–$337,500 (leader)", firstWeekly: "No weekly bonus", note: "Not affected by TU 1.73. Union Depository pays the most." },
] as const;

/* ---------------- GTA V story mode ---------------- */

export const STORY_HEISTS = [
  { name: "The Jewel Store Job", approaches: "Smart or Loud", take: "Up to $4.95M gross", best: "Michael ~$1.22M, Franklin ~$294k", note: "$2.5M goes to Madrazo; Lester takes 14%." },
  { name: "The Merryweather Heist", approaches: "Freighter or Offshore", take: "No cash", best: "None", note: "The device is handed over; no payout." },
  { name: "The Paleto Score", approaches: "Single approach", take: "$8.02M gross", best: "~$464k each with Daryl", note: "The FIB takes 78%; Lester 12%." },
  { name: "The Bureau Raid", approaches: "Roof or Firecrew", take: "$332k total", best: "Franklin up to ~$242k", note: "Michael gets nothing." },
  { name: "The Big Score", approaches: "Obvious or Subtle", take: "$201.6M gross", best: "~$41.7M each (Obvious)", note: "Lose the pilot and you lose half the take." },
] as const;

export const money = (n: number) => "$" + Math.round(n).toLocaleString("en-US");
