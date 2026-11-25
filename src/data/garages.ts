// GTA 6 garages. Not checked in game yet: every price is "reported".
// `price` = the price GTABase, LootMapped and RetroBroker all list (RetroBroker says it already includes BuckMe Gold's 20% off).
// `base` = RetroBroker's price before that discount. Sources disagree on whether the listed price is pre- or post-discount.
export interface Garage { id: string; name: string; area: string; county: string; price: number; base: number; spaces: number; unlock: string; note?: string }
export interface FreeGarage { name: string; area: string; spaces: number | null; how: string; src: "2+" | "1" | "disputed" }

export const garages: Garage[] = [
  { id: "mitchell", name: "Mitchell Auto Center", area: "Historic Route 628, east of Port Gellhorn", county: "Kelly County", price: 4000, base: 5000, spaces: 1, unlock: "Chapter 2, Daily Driver", note: "Cheapest. Close to Moses for car selling." },
  { id: "persistence", name: "Persistence Road Garage", area: "Belville", county: "Leonard County", price: 7600, base: 9500, spaces: 1, unlock: "Chapter 2, Daily Driver" },
  { id: "7th", name: "7th Avenue Garage", area: "Salton, east of VCIA", county: "Vice-Dale County", price: 12000, base: 15000, spaces: 1, unlock: "Chapter 2, Daily Driver" },
  { id: "storenbolt", name: "Store n' Bolt", area: "Northern Ambrosia", county: "Kelly County", price: 16800, base: 21000, spaces: 1, unlock: "Chapter 3, Dubious Provenance", note: "Shows up in the app after Dubious Provenance (2 sources)." },
  { id: "wyatt", name: "Wyatt Motors", area: "Allied Crystal, central Ambrosia", county: "Kelly County", price: 21600, base: 27000, spaces: 1, unlock: "Chapter 2, Daily Driver"},
  { id: "velarota", name: "Vela Rota Drive Garage", area: "Central Capri", county: "Mariana County", price: 24000, base: 30000, spaces: 1, unlock: "Chapter 2, Daily Driver" },
  { id: "bonita", name: "Bonita Court Garage", area: "Washington Island, Vice Beach", county: "Vice-Dale County", price: 34000, base: 42500, spaces: 1, unlock: "Chapter 2, Daily Driver" },
  { id: "atlantic", name: "Atlantic Court Garage", area: "Ocean Beach, by The Y Hotel", county: "Vice-Dale County", price: 40000, base: 50000, spaces: 1, unlock: "Chapter 2, Daily Driver", note: "Most expensive. Next to the Chapter 4 Y Hotel safehouse." },
];

export const freeGarages: FreeGarage[] = [
  { name: "Port Gellhorn Station Garage", area: "Port Gellhorn, north of Moses's shop", spaces: 1, how: "Moses gives it to you after Daily Driver (Chapter 2)", src: "2+" },
  { name: "Thompson Court Garage", area: "Ocean Beach", spaces: 2, how: "Story reward: Company Cars (Chapter 4)", src: "2+" },
  { name: "NE 15th Street Garage", area: "Stockyard", spaces: 2, how: "Story reward: Operation Savage Glory (Chapter 5)", src: "2+" },
  { name: "Pegassi Residences Garage", area: "Tequesta Retreat", spaces: 3, how: "Story reward: Operation Savage Glory (Chapter 5). Biggest garage in the game", src: "2+" },
  { name: "Southside Storage", area: "Southern tip of Salton", spaces: 1, how: "Photograph all five 1010 murals, then type 1010 on the keypad. A 1010 Cheetah is inside", src: "1" },
  { name: "Paradise Garage", area: "Watson Bay, Leonida Keys", spaces: 1, how: "Ultimate Edition: Wyman's task in Chapter 2. One guide calls it free for everyone", src: "disputed" },
  { name: "Shore Court Garage", area: "Shore Drive, Ocean Beach", spaces: 1, how: "Vintage Vice City Pack (came with orders before Nov 20, 2026), Chapter 3", src: "2+" },
  { name: "GTA+ Crosstown Garage", area: "Crosstown", spaces: 1, how: "Active GTA+ membership, Chapter 3", src: "2+" },
];

export const GARAGE_TOTAL = garages.reduce((s, g) => s + g.price, 0); // 160,000
export const GARAGE_BASE_TOTAL = garages.reduce((s, g) => s + g.base, 0); // 200,000
