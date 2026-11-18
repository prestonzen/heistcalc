// Rockstar's official Leonida map (released November 19, 2026 as a free printable download).
// While `image` is null the map page links to Rockstar instead. Set `image` ONLY if Rockstar's page offers the
// file to download and share (as its Media & Artwork section does); otherwise leave null and just set `page`.
export const OFFICIAL_MAP: {
  page: string | null;   // Rockstar page where the map is offered
  image: string | null;  // our copy under /public, e.g. "/maps/official/leonida-official.jpg"
  width: number;         // pixel size of that image
  height: number;
  note: string;          // credit/terms line shown under the viewer
} = {
  page: null,
  image: null,
  width: 0,
  height: 0,
  note: "",
};
