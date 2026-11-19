// Verified GTA 6 cheat codes. Maintained by the "GTA 6 launch watcher" routine and by hand.
// Rules: only add a code when Rockstar publishes it, or 2+ reputable outlets independently list the SAME
// input for the SAME effect (set `verified: "reported"`), or we tested it ourselves (`verified: "tested"`).
// Never add rumored, leaked-build or "might work" codes. Single-source codes stay out until a second outlet confirms.
export interface Cheat {
  effect: string;          // e.g. "Max health and armor"
  category: "Player" | "Weapons" | "Vehicles" | "World" | "Filters";
  input?: string;          // D-pad sequence, same on PS5 and Xbox: U/D/L/R separated by spaces
  ps5?: string;            // only if the PS5 input differs from `input`
  xbox?: string;           // only if the Xbox input differs from `input`
  phone?: string;          // in-game phone number, if a cheat ever uses one
  unlock?: string;         // in-game challenge that unlocks the cheat
  notes?: string;          // e.g. conflicting inputs reported by one outlet
  verified: "rockstar" | "reported" | "tested";
  sources: string[];
}

const V = "https://www.vice.com/en/article/gta-6-cheat-codes-list/";
const BB = "https://beebom.com/gta-6-cheat-codes/";
const BL = "https://www.thebiglead.com/gta-6-cheat-codes/";
const PS = "https://www.pushsquare.com/guides/gta-6-cheats-and-unlock-conditions";
const PX = "https://www.purexbox.com/guides/gta-6-cheat-codes-all-reveals-so-far-and-how-to-unlock-them-on-xbox";
const DX = "https://www.dexerto.com/wikis/gta-6/cheat-codes/";

export const CHEATS: Cheat[] = [
  { effect: "+$250,000", category: "Player", input: "U R D L U L D R", unlock: "Finish the story", notes: "The cash doesn't carry over to your save.", verified: "reported", sources: [V, BB, BL, PS] },
  { effect: "Unlimited Focus", category: "Player", input: "D U U D U D U D U R", unlock: "Finish the story", notes: "One outlet lists D U U D U D U U D R.", verified: "reported", sources: [V, BB, BL, PS] },
  { effect: "Body Armor", category: "Player", input: "D U L U U U U U D D", unlock: "Complete 100 workouts", verified: "reported", sources: [V, BB, BL, PS] },
  { effect: "Drunk (you and your partner)", category: "Player", input: "U L R U U L R U L R", unlock: "Spend $2,500 on alcohol", verified: "reported", sources: [BL, PX, DX] },
  { effect: "Raise Wanted Level", category: "Player", input: "L D R D U R U", unlock: "Lose a 3-star wanted level 50 times", notes: "One outlet lists L D R D U U R U.", verified: "reported", sources: [V, BB, BL, PX] },
  { effect: "Raise Heat Level (across the map)", category: "Player", input: "L D R D U D U", unlock: "Lose a 3-star wanted level 25 times", verified: "reported", sources: [V, BB, BL, PS] },
  { effect: "Max Ammo", category: "Weapons", input: "D U R D L L U U D L", unlock: "Earn 25 shooting range medals (bronze or better)", verified: "reported", sources: [V, BB, BL, DX] },
  { effect: "Infinite Ammo", category: "Weapons", input: "D U R D L L U D D D", unlock: "Earn 25 shooting range medals (silver or better)", verified: "reported", sources: [V, BB, BL, PS] },
  { effect: "No Reload", category: "Weapons", input: "D U R D L L U D D U", unlock: "Earn 25 gold shooting range medals", verified: "reported", sources: [V, BB, BL, DX] },
  { effect: "Attack Force (hits launch targets)", category: "Weapons", input: "D U L L R D D U D", unlock: "Finish the story", verified: "reported", sources: [V, BB, BL, PS] },
  { effect: "Exploding Balls", category: "Weapons", input: "D U L L R D D U R", unlock: "Deal explosive damage to 20 enemies", verified: "reported", sources: [V, BB, BL, PS] },
  { effect: "Vehicle Force (collisions launch targets)", category: "Vehicles", input: "D U L L R D L U D", unlock: "Kill 25 enemies with a vehicle", verified: "reported", sources: [V, BB, BL, PS] },
  { effect: "Spawn Maibatsu Boomazoom", category: "Vehicles", input: "L U R D L L U L", unlock: "Complete 5 shopping challenges", verified: "reported", sources: [V, BB, BL, DX] },
  { effect: "Spawn MTL Pumper", category: "Vehicles", input: "L U R D L R R U", unlock: "Discover it in the Progress menu", verified: "reported", sources: [V, BB, BL, PX] },
  { effect: "Spawn HVY Bulldozer", category: "Vehicles", input: "L U R D L R R D", unlock: "Discover it in the Progress menu", verified: "reported", sources: [V, BB, BL, PX] },
  { effect: "Cycle Weather", category: "World", input: "D R U D R U R", unlock: "Finish the story (some outlets say: reveal the whole map)", notes: "One outlet lists D R U D R U R R.", verified: "reported", sources: [V, BB, BL, PS] },
  { effect: "Cataclysm filter (murky smoke)", category: "Filters", input: "D D U R R U L L R R", unlock: "Discover Martha's Vamos in the Progress menu", notes: "One outlet lists D D U R R U L L R.", verified: "reported", sources: [V, BB, PX] },
  { effect: "Dollhouse filter", category: "Filters", input: "D D U R R U L L D R", unlock: "Spend 8 hours with your partner", verified: "reported", sources: [V, BB, BL, PS] },
  { effect: "Faded Glory filter (color CRT)", category: "Filters", input: "D D U R R U L L L R", unlock: "Rob 50 stores with your partner", verified: "reported", sources: [V, BB, BL, PX] },
];

// Cheats that outlets name but no source has published an input for yet. Move one into CHEATS once 2+ outlets agree on its input.
export const CHEATS_PENDING: string[] = [
  "No Fall Damage", "Parachute", "Repair Vehicle", "Unlimited Nitrous",
  "All Explosive Weapons", "Incendiary Ammo", "Exploding Bottles", "Explosive Shotgun", "Hauners H-AT",
  "Interstate Ambulance", "Airboat 09", "Bravado Banshee", "Tuff BMX", "Nagasaki Carbon RS", "'65 Vapid Dominator",
  "Progen Emerus", "Inflatable Flamingo", "Vapid Stanier G2 Taxi", "Hauners P-996 Lazer", "Lapwing Mallard",
  "Brimstone Golfer", "Hauners Rhino Tank", "Maibatsu Sanchez", "Nagasaki Sea Sparrow", "Speeder 700 GT",
  "Truffade Thrax", "Western Zombie Bobber",
  "Move Time Forward", "Pause Time of Day",
  "Pinhole filter", "Golden Hour filter", "Powdered Sugar filter", "Neon Jungle filter", "Yesteryear filter", "Videotape filter",
  "Dark Mirror filter", "Migraine filter", "Bubblegum filter", "Fast Forward filter", "Fisheye filter", "Pixel Art filter", "Hellscape filter",
];

// One-line summary of how cheats work in GTA 6.
export const CHEATS_HOW = "Cheats only work after you finish the story, and each one has its own unlock challenge you can chip away at during the story. Unlocked cheats appear under Progress > Cheats. To enter one, press Up on the D-pad to open the phone, hold L1 + R1 (PS5) or LB + RB (Xbox), then enter the D-pad sequence. A notification confirms it. There are no phone-number cheats.";
