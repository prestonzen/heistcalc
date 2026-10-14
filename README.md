# HeistCalc

**[heistcalc.com](https://heistcalc.com)**: free heist payout calculators and guides for Grand Theft Auto.

Plan a Cayo Perico run, split a Diamond Casino take, or compare every GTA Online heist side by side. Fast on a phone, no sign-up, and every number cites its source. GTA 6 calculators will be added after launch (Nov 19, 2026), once values can be verified in game.

## Features

- **Calculators** that run entirely client-side: heist cut splitter, Cayo Perico loot optimizer, Diamond Casino Heist cuts
- **Sourced data**: payout values live in typed data files with source URLs and a last-checked date
- **SEO by default**: per-page titles and descriptions, canonical URLs, Open Graph, JSON-LD (`Article`, `WebApplication`, `FAQPage`, `BreadcrumbList`), sitemap, and fast static HTML
- **Ads-ready**: Ezoic integration behind one flag (`EZOIC_ENABLED` in `src/config.ts`), with ads.txt served via the Worker

## Stack

| Layer | Choice |
|---|---|
| Site | [Astro](https://astro.build) (static output, zero JS frameworks; small inline scripts power the calculators) |
| Hosting | Cloudflare Workers static assets (`worker/index.js` handles `www` → apex and `/ads.txt`) |
| Styling | Hand-written CSS, dark theme, mobile-first |

## Develop

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
npm run preview   # build + wrangler dev
npm run deploy    # build + deploy to Cloudflare
```

## Project layout

```
src/
  config.ts          site settings, nav, Ezoic flag
  data/              heist payout data (sourced)
  layouts/           Base (head/SEO) and Article (schema, FAQ, sources)
  components/        Ad slot, countdown
  pages/             one file per calculator / guide
worker/index.js      Cloudflare Worker entry
```

## Disclaimer

HeistCalc is an unofficial fan project. It is not affiliated with or endorsed by Rockstar Games or Take-Two Interactive. Grand Theft Auto and related marks are trademarks of Take-Two Interactive Software, Inc.

## License

Code: MIT. Written content and data compilation © HeistCalc.
