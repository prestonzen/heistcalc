import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://heistcalc.com",
  trailingSlash: "always",
  build: { format: "directory" },
  integrations: [sitemap()],
});
