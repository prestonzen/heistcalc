// GTA Online weekly event data, newest first. Updated each Thursday after Rockstar's weekly reset.
// Used by /gta-online-weekly-update/ and the Worker's weekly Discord summary.

export interface Week {
  start: string; // Thursday the event starts, YYYY-MM-DD
  end: string;
  title: string;
  summary: string;
  bonuses: { activity: string; reward: string }[];
  heistNotes: string[];
  discounts: { item: string; off: string }[];
  podium: string | null;
  prizeRide: string | null;
  salvageYard: string[];
  events: string[];
  gtaPlus: string[];
  pantherGuaranteed: boolean | null;
  confirmedBy: "newswire" | "third-party";
  sources: string[];
  /** Items only reported by third-party sites, not Rockstar's Newswire. */
  thirdParty?: string[];
}

export const WEEKS: Week[] = [
  {
    "start": "2026-10-15",
    "end": "2026-10-21",
    "title": "Halloween Event Week 3: New Kortz Center Targets",
    "summary": "The Halloween event enters its third week with triple payouts still running on Slasher, the Halloween Survivals and the race series. A new trio of Kortz Center Heist primary targets rotates in, and the Lucky Wheel podium car is the LSCM Cheetah Classic.",
    "bonuses": [
      {
        "activity": "Slasher modes in the Halloween Featured Series (incl. Ramius – Slasher)",
        "reward": "3X GTA$ and RP"
      },
      {
        "activity": "Halloween Survivals (Ludendorff Cemetery, Cayo Perico, Alien Survivals)",
        "reward": "3X GTA$ and RP (6X for GTA+)"
      },
      {
        "activity": "San Andreas Super Sport Series (Hotring and Random Transform Races)",
        "reward": "3X GTA$ and RP"
      },
      {
        "activity": "Community Race Series",
        "reward": "3X GTA$ and RP"
      },
      {
        "activity": "Bail Office Standard and Most Wanted Targets",
        "reward": "2X GTA$ and RP"
      },
      {
        "activity": "Dispatch Work",
        "reward": "2X GTA$ and RP"
      },
      {
        "activity": "UFO Business Battles",
        "reward": "2X GTA$ and RP"
      },
      {
        "activity": "Jack O' Lanterns",
        "reward": "2X GTA$ and RP (4X for GTA+)"
      },
      {
        "activity": "Ghosts Exposed",
        "reward": "2X GTA$ (4X for GTA+)"
      },
      {
        "activity": "Weekly Challenge: win three Races",
        "reward": "Orange Glow Skeleton Onesie + GTA$100,000"
      },
      {
        "activity": "Complete \"Don't F* With Dre\" by Oct 21",
        "reward": "GTA$500,000"
      },
      {
        "activity": "Complete all five October Weekly Challenges by Nov 4",
        "reward": "GTA$2,000,000 extra"
      }
    ],
    "heistNotes": [
      "Kortz Center Heist primary targets this week: Twindifference, Teckels, and A Cast of Characters.",
      "FIB Priority File of the week: The Brute Force File."
    ],
    "discounts": [
      {
        "item": "LCC Sanctus",
        "off": "40%"
      },
      {
        "item": "Albany Brigham",
        "off": "40%"
      },
      {
        "item": "Albany Lurcher",
        "off": "40%"
      },
      {
        "item": "Albany Fränken Stange",
        "off": "40%"
      },
      {
        "item": "Declasse Tornado Rat Rod",
        "off": "40%"
      },
      {
        "item": "Agency properties (incl. upgrades and modifications)",
        "off": "40%"
      },
      {
        "item": "Annis Hardy",
        "off": "30%"
      },
      {
        "item": "BF Raptor",
        "off": "30%"
      },
      {
        "item": "Buckingham Miljet",
        "off": "30%"
      },
      {
        "item": "Buckingham Tug",
        "off": "30%"
      },
      {
        "item": "Dinka Sugoi",
        "off": "30%"
      },
      {
        "item": "Karin Calico GTF",
        "off": "30%"
      },
      {
        "item": "Nagasaki Weaponized Dinghy",
        "off": "30%"
      },
      {
        "item": "Vapid Winky",
        "off": "30%"
      },
      {
        "item": "Western Company Annihilator",
        "off": "30%"
      }
    ],
    "podium": "Grotti LSCM Cheetah Classic",
    "prizeRide": "Dinka Kanjo SJ: place top 5 in the LS Car Meet Series",
    "salvageYard": [
      "The Gangbanger Robbery: Grotti Itali RSX",
      "The Podium Robbery: Albany Fränken Stange",
      "The Cargo Ship Robbery: BF Weevil"
    ],
    "events": [
      "Halloween event (Oct 1 – Nov 4) continues: Slashers, Phantom Car, Jack O' Lantern and Ghosts Exposed collectibles, Peyote Plants",
      "Free Butchery and Other Hobbies T-Shirt for playing through Oct 21",
      "Gun Van: The Shocker free, Service Carbine 30% off",
      "Test Track: Declasse Vamos, Dewbauchee Seven-70, Ocelot Locust; Hao's Special Works Test Ride: Maibatsu MonstroCiti"
    ],
    "gtaPlus": [
      "Free Pegassi Oppressor with the limited Skulls livery",
      "6X GTA$ and RP on Halloween Survivals; 4X on Jack O' Lanterns and Ghosts Exposed",
      "50% off Up-n-Atomizer, Widowmaker and Unholy Hellbringer at the Gun Van",
      "Free MTL Brickade 6x6 and Acid Lab Supplies, Red/Orange Flip Chameleon paints, and Halloween outfits"
    ],
    "pantherGuaranteed": null,
    "confirmedBy": "third-party",
    "sources": [
      "https://rockstarintel.com/gta-online-event-week-halloween-event-continues-october-15th-21st/",
      "https://www.sportskeeda.com/gta/gta-online-weekly-update-october-15-21-2026",
      "https://www.pcquest.com/gaming/gta-online-halloween-update-continues-for-october-15-to-21-2026-get-3x-gta-money-12677656",
      "https://www.gtaboss.gg/gta-5-online/gta-online-weekly-updates",
      "https://holdtoreset.com/gta-online-weekly-reset/"
    ]
  },
  {
    "start": "2026-10-08",
    "end": "2026-10-14",
    "title": "Halloween Event Week 2: New Kortz Center Targets",
    "summary": "Week two of the month-long Halloween event keeps triple payouts on Slasher, the Halloween Survivals and the Halloween race series. It also brings a fresh set of Kortz Center Heist primary targets with a GTA$400,000 bonus for finishing without a death, plus a free Oppressor for GTA+ members.",
    "bonuses": [
      {
        "activity": "Slasher modes in the Halloween Featured Series (incl. Ramius – Slasher)",
        "reward": "3X GTA$ and RP"
      },
      {
        "activity": "Halloween Survivals (Ludendorff Cemetery, Cayo Perico, Alien Survivals)",
        "reward": "3X GTA$ and RP (6X for GTA+)"
      },
      {
        "activity": "San Andreas Super Sport Series (Hotring and Random Transform Races)",
        "reward": "3X GTA$ and RP"
      },
      {
        "activity": "Community Race Series (incl. Zombie Town Circuit)",
        "reward": "3X GTA$ and RP"
      },
      {
        "activity": "Bail Office Standard and Most Wanted Targets",
        "reward": "2X GTA$ and RP"
      },
      {
        "activity": "Dispatch Work",
        "reward": "2X GTA$ and RP"
      },
      {
        "activity": "UFO Business Battles (Spaceship Parts from Fort Zancudo)",
        "reward": "2X GTA$ and RP"
      },
      {
        "activity": "Jack O' Lanterns",
        "reward": "2X GTA$ and RP (4X for GTA+)"
      },
      {
        "activity": "Ghosts Exposed",
        "reward": "2X GTA$ (4X for GTA+)"
      },
      {
        "activity": "Weekly Challenge: win two Adversary modes",
        "reward": "Pink Skull Emissive Mask + GTA$100,000"
      },
      {
        "activity": "Complete five Payphone Hits by Oct 14",
        "reward": "GTA$500,000"
      },
      {
        "activity": "Complete all five October Weekly Challenges by Nov 4",
        "reward": "GTA$2,000,000 extra"
      }
    ],
    "heistNotes": [
      "Kortz Center Heist primary targets this week: Pumpkin, A Winding Road Home, and Winter, Nowhere in Particular.",
      "Kortz Center Heist first-completion bonus is reset.",
      "Finishing the Kortz Center Heist with no deaths pays an extra GTA$400,000.",
      "FIB Priority File of the week: The Black Box File."
    ],
    "discounts": [
      {
        "item": "LCC Sanctus",
        "off": "40%"
      },
      {
        "item": "Albany Brigham",
        "off": "40%"
      },
      {
        "item": "Albany Lurcher",
        "off": "40%"
      },
      {
        "item": "Albany Fränken Stange",
        "off": "40%"
      },
      {
        "item": "Declasse Tornado Rat Rod",
        "off": "40%"
      },
      {
        "item": "Agency properties (incl. upgrades and modifications)",
        "off": "40%"
      },
      {
        "item": "Annis Remus",
        "off": "30%"
      },
      {
        "item": "Benefactor Terrorbyte",
        "off": "30%"
      },
      {
        "item": "BF Club",
        "off": "30%"
      },
      {
        "item": "Bravado Greenwood",
        "off": "30%"
      },
      {
        "item": "Dinka Jester RR",
        "off": "30%"
      },
      {
        "item": "Emperor ETR1",
        "off": "30%"
      },
      {
        "item": "Grotti Itali GTO",
        "off": "30%"
      },
      {
        "item": "Karin Hotring Everon",
        "off": "30%"
      },
      {
        "item": "Pegassi Tempesta",
        "off": "30%"
      },
      {
        "item": "Übermacht SC1",
        "off": "30%"
      },
      {
        "item": "Gun Van: Service Carbine",
        "off": "30%"
      }
    ],
    "podium": "Annis Savestra",
    "prizeRide": "Declasse Walton L35: place top 4 in LS Car Meet races two days in a row",
    "salvageYard": [
      "The McTony Robbery: Pfister Growler",
      "The Gangbanger Robbery: Albany Fränken Stange",
      "The Podium Robbery: Willard Eudora"
    ],
    "events": [
      "Halloween event (Oct 1 – Nov 4): free-roam Slashers incl. the Clone Slasher, Phantom Car, Jack O' Lantern and Ghosts Exposed collectibles, Peyote Plants",
      "Free Twilight Knife T-Shirt for playing this week",
      "Gun Van: Baseball Bat and The Shocker free",
      "Photograph all 10 ghosts in Ghosts Exposed to unlock the Ghosts Exposed Jacket"
    ],
    "gtaPlus": [
      "Free Pegassi Oppressor with the limited Skulls livery (The Vinewood Car Club)",
      "6X GTA$ and RP on Halloween Survivals; 4X on Jack O' Lanterns and Ghosts Exposed",
      "50% off Up-n-Atomizer, Widowmaker and Unholy Hellbringer at the Gun Van",
      "Free MTL Brickade 6x6 and Acid Lab Supplies, Red/Orange Flip Chameleon paints, and Halloween outfits"
    ],
    "pantherGuaranteed": null,
    "confirmedBy": "newswire",
    "sources": [
      "https://www.rockstargames.com/newswire/article/39a22k25434a53/experience-halloween-thrills-all-throughout-october-in-gta-online",
      "https://www.rockstargames.com/newswire/article/1788115957a317/claim-a-free-pegassi-oppressor-with-gta",
      "https://rockstarintel.com/?p=43605",
      "https://www.gtaboom.com/gta-online-halloween-update-october-8-14-8d53",
      "https://timesaver.gg/blog/gta-online-weekly-update-october-8-14-2026",
      "https://gtaintel.com/news/gta-online-event-week-oct-8-2026"
    ],
    "thirdParty": [
      "Kortz Center targets, first-completion reset and GTA$400,000 no-death bonus",
      "Payphone Hits GTA$500,000 bonus",
      "Agency 40% discount and the 30% vehicle list",
      "Podium vehicle, Prize Ride, Salvage Yard targets, Gun Van Service Carbine/free items",
      "FIB Black Box File"
    ]
  },
  {
    "start": "2026-10-01",
    "end": "2026-10-07",
    "title": "Halloween Event Begins",
    "summary": "Rockstar opened its five-week Halloween event with triple rewards on Slasher, Halloween Survivals and the themed race series, plus a GTA$2M bonus for clearing every October Weekly Challenge. The Kortz Center Heist got its first set of Halloween primary targets and a GTA$400,000 no-death bonus.",
    "bonuses": [
      {
        "activity": "Slasher modes in the Halloween Featured Series (incl. Ramius – Slasher)",
        "reward": "3X GTA$ and RP"
      },
      {
        "activity": "Halloween Survivals (Ludendorff Cemetery, Cayo Perico, Alien Survivals)",
        "reward": "3X GTA$ and RP"
      },
      {
        "activity": "San Andreas Super Sport Series (Hotring and Random Transform Races)",
        "reward": "3X GTA$ and RP"
      },
      {
        "activity": "Community Race Series (incl. Zombie Town Circuit)",
        "reward": "3X GTA$ and RP"
      },
      {
        "activity": "Bail Office Standard and Most Wanted Targets",
        "reward": "2X GTA$ and RP"
      },
      {
        "activity": "Dispatch Work",
        "reward": "2X GTA$ and RP"
      },
      {
        "activity": "UFO Business Battles",
        "reward": "2X GTA$ and RP"
      },
      {
        "activity": "Jack O' Lanterns",
        "reward": "2X GTA$ and RP"
      },
      {
        "activity": "Ghosts Exposed",
        "reward": "2X GTA$"
      },
      {
        "activity": "Weekly Challenge: secure two Bail Office Bounties",
        "reward": "Green Vintage Skull Mask + GTA$100,000"
      },
      {
        "activity": "Complete five Security Contracts by Oct 7",
        "reward": "GTA$500,000"
      },
      {
        "activity": "Complete all five October Weekly Challenges by Nov 4",
        "reward": "GTA$2,000,000 extra"
      }
    ],
    "heistNotes": [
      "Kortz Center Heist primary targets this week: Chat on Fruit, Juiced, and The Downfall of Rome.",
      "Kortz Center Heist first-completion bonus is reset.",
      "Finishing the Kortz Center Heist with no deaths pays an extra GTA$400,000.",
      "FIB Priority File of the week: The Project Breakaway File."
    ],
    "discounts": [
      {
        "item": "LCC Sanctus",
        "off": "40%"
      },
      {
        "item": "Albany Brigham",
        "off": "40%"
      },
      {
        "item": "Albany Lurcher",
        "off": "40%"
      },
      {
        "item": "Albany Fränken Stange",
        "off": "40%"
      },
      {
        "item": "Declasse Tornado Rat Rod",
        "off": "40%"
      },
      {
        "item": "Agency properties (incl. upgrades)",
        "off": "40%"
      },
      {
        "item": "Declasse Vigero ZX",
        "off": "30%"
      },
      {
        "item": "Sea Sparrow",
        "off": "30%"
      },
      {
        "item": "Nagasaki Buzzard Attack Chopper",
        "off": "30%"
      },
      {
        "item": "Lampadati Komoda",
        "off": "30%"
      },
      {
        "item": "Western Powersurge",
        "off": "30%"
      },
      {
        "item": "Benefactor Schlagen GT",
        "off": "30%"
      },
      {
        "item": "Ocelot Ardent",
        "off": "30%"
      },
      {
        "item": "Nagasaki Ultralight",
        "off": "30%"
      },
      {
        "item": "Grotti Brioso 300",
        "off": "30%"
      },
      {
        "item": "Gun Van: Service Carbine",
        "off": "30%"
      }
    ],
    "podium": "Lampadati Cinquemila",
    "prizeRide": "Vapid Dominator GTT: place top 5 in LS Car Meet races three days in a row",
    "salvageYard": [
      "The Cargo Ship Robbery: Bravado Buffalo EVX",
      "The McTony Robbery: Karin Everon",
      "The Duggan Robbery: Albany Fränken Stange"
    ],
    "events": [
      "Halloween event launches (runs to Nov 4): free-roam Slashers incl. the Clone Slasher, Phantom Car, Jack O' Lanterns, Ghosts Exposed, Peyote Plants, and Ludendorff Cemetery Survival returns",
      "Free Cheerleader Massacre 3 T-Shirt for playing this week",
      "Gun Van: Baseball Bat and The Shocker free"
    ],
    "gtaPlus": [
      "Free Pegassi Horus supercar from The Vinewood Car Club (through Oct 7)",
      "50% off Up-n-Atomizer, Widowmaker and Unholy Hellbringer at the Gun Van"
    ],
    "pantherGuaranteed": null,
    "confirmedBy": "newswire",
    "sources": [
      "https://www.rockstargames.com/newswire/article/39a22k25434a53/experience-halloween-thrills-all-throughout-october-in-gta-online",
      "https://www.gtaboss.gg/gta-5-online/gta-online-weekly-updates/2026-10-01",
      "https://timesaver.gg/blog/gta-online-halloween-event-2026-rewards-payouts",
      "https://rockstarintel.com/?p=43491"
    ],
    "thirdParty": [
      "Kortz Center targets, first-completion reset and GTA$400,000 no-death bonus",
      "Security Contracts GTA$500,000 bonus",
      "Agency 40% discount",
      "Podium vehicle, Prize Ride, Salvage Yard targets, Gun Van items and discounts",
      "FIB Project Breakaway File"
    ]
  }
];
