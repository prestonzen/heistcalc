# HeistCalc

**[heistcalc.com](https://heistcalc.com)**: free heist payout calculators and guides for Grand Theft Auto.

Plan a Cayo Perico run, split a Diamond Casino take, or compare every GTA Online heist side by side. Fast on a phone, no sign-up, and every number cites its source. GTA 6 calculators will be added after launch (Nov 19, 2026), once values can be verified in game.

## Features

- **Calculators** that run entirely client-side: heist cut splitter, Cayo Perico loot optimizer, Diamond Casino Heist cuts
- **Cooldown timers** with browser notifications: Cayo Perico cooldown, the 48-minute Hard Mode window, custom timers, and a DST-aware weekly reset countdown
- **Weekly bonus checklist** for the post-TU 1.73 first-run bonuses that auto-clears at the Thursday reset
- **Shareable plans**: every calculator input round-trips through the URL, so a crew can open the exact same plan
- **Installable PWA** with offline support (service worker, manifest, app shortcuts)
- **No accounts**: all user state lives in `localStorage`
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

## Deployment

- Every push to `main` builds and deploys automatically via Cloudflare Workers Builds.
- `src/data/weekly.ts` is refreshed every Thursday after GTA Online's weekly reset by a scheduled Claude Code routine, which commits straight to `main`.
- D1 schema changes live in `migrations/` and are applied with `npx wrangler d1 migrations apply heistcalc --remote`.

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
