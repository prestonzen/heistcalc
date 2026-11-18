// Leonida regions as confirmed on Rockstar's "Only in Leonida" page (rockstargames.com/VI/only-in-leonida).
// x/y are in-game coordinates for map labels, placed from community landmark data (gtadb.org, CC BY 4.0).
// Descriptions are our own summaries of Rockstar's text.
export interface Region {
  id: string;
  name: string;
  x: number;
  y: number;
  zoom: number;
  inspiredBy: string;
  summary: string;
}

export const REGIONS: Region[] = [
  {
    id: "vice-city", name: "Vice City", x: -500, y: 400, zoom: 3.5,
    inspiredBy: "Miami",
    summary: "The state's big city and the heart of the game: art deco hotels and white sand at Ocean Beach, Little Cuba's bakeries, the Tisha-Wocka flea market and a cruise-ship port.",
  },
  {
    id: "leonida-keys", name: "Leonida Keys", x: -3600, y: -6100, zoom: 3,
    inspiredBy: "the Florida Keys",
    summary: "A laid-back island chain at the southern tip, where Jason lives. Cheap bars and deck chairs on the surface, dangerous water and smuggling just offshore.",
  },
  {
    id: "grassrivers", name: "Grassrivers", x: -3600, y: -4200, zoom: 3,
    inspiredBy: "the Everglades",
    summary: "Leonida's wild wetland interior. Alligators are the famous residents, and Rockstar teases worse predators and strange finds among the mangroves.",
  },
  {
    id: "port-gellhorn", name: "Port Gellhorn", x: -6700, y: 4000, zoom: 3.25,
    inspiredBy: "Florida's Gulf Coast",
    summary: "The \"forgotten coast\": a fading resort town of cheap motels, closed attractions and empty strip malls, now running on a rougher off-the-books economy.",
  },
  {
    id: "ambrosia", name: "Ambrosia", x: -2769, y: 3882, zoom: 3.5,
    inspiredBy: "the sugar towns around Lake Okeechobee",
    summary: "Industrial heartland built around the Allied Crystal sugar refinery, with a local biker gang running most of what the refinery doesn't.",
  },
  {
    id: "mount-kalaga", name: "Mount Kalaga", x: -3700, y: 6200, zoom: 3,
    inspiredBy: "north Florida's forests and national parks",
    summary: "A national park on the northern border with hunting, fishing and off-road trails, and backwoods communities living far from the government.",
  },
];

// Map area. Our measurement: land pixels on the YANIS v18 community map at zoom 4
// (2 game units per pixel, 1 unit ~ 1 m), with lakes and sea excluded.
export const LAND_KM2 = 83.6;
