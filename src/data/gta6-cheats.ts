// Verified GTA 6 cheat codes. Empty until codes are confirmed; the cheat codes page switches to a table
// automatically once this has entries. Maintained by the "GTA 6 launch watcher" routine and by hand.
// Rules: only add a code when Rockstar publishes it, or 2+ reputable outlets independently list the SAME
// input for the SAME effect (set `verified: "reported"`), or we tested it ourselves (`verified: "tested"`).
// Never add rumored, leaked-build or "might work" codes.
export interface Cheat {
  effect: string;          // e.g. "Max health and armor"
  ps5?: string;            // button sequence, e.g. "R1, R2, L1, X, Left, Down, Right, Up, Left, Down, Right, Up"
  xbox?: string;
  phone?: string;          // in-game phone number, if cheats use the phone
  notes?: string;          // e.g. "Disables trophies for the session"
  verified: "rockstar" | "reported" | "tested";
  sources: string[];
}

export const CHEATS: Cheat[] = [];

// One-line summary of how cheats work in GTA 6 once known (entry method, trophy impact). Empty until confirmed.
export const CHEATS_HOW = "";
