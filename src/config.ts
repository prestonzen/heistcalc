export const SITE = {
  name: "HeistCalc",
  url: "https://heistcalc.com",
  tagline: "Heist payout calculators for every GTA",
  description:
    "Free heist payout calculators and guides for GTA Online, GTA 5 and GTA 6. Work out your Cayo Perico take, Diamond Casino cuts and crew splits in seconds.",
  author: "the HeistCalc team",
  email: "hello@heistcalc.com",
  locale: "en_US",
};

// Flip to true once heistcalc.com is approved in the Ezoic dashboard.
export const EZOIC_ENABLED = false;

export const NAV = [
  { href: "/cayo-perico-calculator/", label: "Cayo Perico" },
  { href: "/diamond-casino-heist-calculator/", label: "Casino Heist" },
  { href: "/gta-online-heist-payouts/", label: "All Heists" },
  { href: "/timers/", label: "Timers" },
  { href: "/weekly-checklist/", label: "Weekly" },
  { href: "/gta-6/", label: "GTA 6" },
  { href: "/guides/", label: "Guides" },
];

// GTA VI unlock: midnight local time Nov 19, 2026 (per PS Store listings).
export const GTA6_RELEASE = { year: 2026, month: 11, day: 19 };
