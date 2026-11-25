// All 22 GTA 6 bank jobs. Numbering and take ranges from PowerPyx's bank list (2026-11-18).
// seen = we read the same take range off the in-game map card on stream. ours = what we actually carried out.
export interface Bank { n: number; name: string; area: string; county: string; size: "small" | "large"; lo: number; hi: number; seen?: boolean; ours?: string }
export const banks: Bank[] = [
  { n: 1, name: "Fleeca", area: "Key Lento", county: "Mariana County", size: "small", lo: 5000, hi: 20000 },
  { n: 2, name: "ShoreFront", area: "Watson Bay", county: "Mariana County", size: "small", lo: 5000, hi: 20000 },
  { n: 3, name: "Gibson Brothers Bank", area: "", county: "Mariana County", size: "small", lo: 10000, hi: 30000 },
  { n: 4, name: "Lombank", area: "Peacock Bay", county: "Vice-Dale County", size: "small", lo: 5000, hi: 20000 },
  { n: 5, name: "Fleeca", area: "Peacock Bay", county: "Vice-Dale County", size: "small", lo: 5000, hi: 20000 },
  { n: 6, name: "ShoreFront", area: "Downtown", county: "Vice-Dale County", size: "small", lo: 5000, hi: 15000, seen: true, ours: "About $10,400 in marked bills, lost when the cops caught us" },
  { n: 7, name: "ShoreFront", area: "Rockridge", county: "Vice-Dale County", size: "small", lo: 5000, hi: 20000 },
  { n: 8, name: "Lombank", area: "Bayside", county: "Vice-Dale County", size: "small", lo: 15000, hi: 45000 },
  { n: 9, name: "Fleeca", area: "Washington Beach", county: "Vice-Dale County", size: "small", lo: 10000, hi: 30000 },
  { n: 10, name: "Lombank", area: "Ocean Beach", county: "Vice-Dale County", size: "small", lo: 15000, hi: 45000 },
  { n: 11, name: "Fleeca", area: "Ocean Beach", county: "Vice-Dale County", size: "small", lo: 5000, hi: 15000 },
  { n: 12, name: "ShoreFront", area: "Ocean Beach", county: "Vice-Dale County", size: "small", lo: 5000, hi: 15000, ours: "About $13,300 in marked bills plus $600 cash" },
  { n: 13, name: "Druthers State Bank", area: "", county: "Leonard County", size: "small", lo: 15000, hi: 45000 },
  { n: 14, name: "ShoreFront", area: "Ambrosia", county: "Kelly County", size: "small", lo: 5000, hi: 15000 },
  { n: 15, name: "Fleeca", area: "VCIA", county: "Vice-Dale County", size: "large", lo: 100000, hi: 150000 },
  { n: 16, name: "Fleeca", area: "Tequesta", county: "Vice-Dale County", size: "large", lo: 65000, hi: 110000 },
  { n: 17, name: "Lombank", area: "Downtown", county: "Vice-Dale County", size: "large", lo: 135000, hi: 205000 },
  { n: 18, name: "Fleeca", area: "Downtown", county: "Vice-Dale County", size: "large", lo: 100000, hi: 150000, seen: true },
  { n: 19, name: "Lombank", area: "Ocean Beach", county: "Vice-Dale County", size: "large", lo: 135000, hi: 205000 },
  { n: 20, name: "Fleeca", area: "Ocean Beach", county: "Vice-Dale County", size: "large", lo: 75000, hi: 135000 },
  { n: 21, name: "Lombank", area: "Ocean Beach", county: "Vice-Dale County", size: "large", lo: 75000, hi: 135000, seen: true, ours: "Counter grab only in Chapter 3: Lucia's bag hit $6,480" },
  { n: 22, name: "ShoreFront", area: "Ocean Beach", county: "Vice-Dale County", size: "large", lo: 95000, hi: 140000 },
];
