# Dunite Labs — Website

The source for the [Dunite Labs](https://dunitelabs.com) company website — a usability-first product studio from India. Built with [Astro](https://astro.build) as a static, SEO-friendly site.

## Features

- ⚡ **Astro static site** — zero runtime JS, fast loads
- 🔍 **Full technical SEO** — canonical URLs, keyword meta, Open Graph, Twitter cards, JSON-LD graph
  (`Organization`, `WebSite`, `CollectionPage`, `ItemList`, `SoftwareApplication`, `BreadcrumbList`)
- 🖼️ **Rich preview cards** — 1200×630 OG images per page (`public/og-*.png`)
- 🗺️ **Auto-generated sitemap** + `robots.txt` + `llms.txt`
- 🌗 **Light/dark mode** with a `data-theme` toggle
- 🎨 **Brutalist design** with per-page themed favicons
- 📱 **Mobile-optimized** across `768px`, `480px`, `375px`, and `320px` breakpoints

## Brand assets

Generated from `public/dunitelabs_logo.svg` — never hand-edit the rasters:

```powershell
node _brand-icons.mjs   # favicon.svg / .ico, favicon-48..512.png, apple-touch-icon, maskable, webmanifest
node _brand-og.mjs      # og-home.png + one OG card per app
node _links.mjs         # after a build: fails loudly on broken internal links
```

Google shows the **raster** favicon in search results (it ignores SVG), so `Layout.astro` links the
48/96/144/192/512 PNG set alongside `favicon.ico`. Keep `favicon-48.png` present and square.

## Projects

The site showcases Dunite Labs products:

| Project | Type | Notes |
| :------ | :--- | :---- |
| **Speedmaths Pro** | Android app | `src/data/apps.ts` |
| **Govt Jobs Notice** | Website | `src/data/apps.ts` |
| **Guava Music** | Android app | `src/data/apps.ts` |

Edit `src/data/apps.ts` to add, update, or remove products.

## Pages

- `/` — Home
- `/about/` — About Dunite Labs
- `/app/[slug]/` — Product detail
- `/app/[slug]/privacy/` — Privacy policy
- `/app/[slug]/delete-data/` — Data deletion

Legal pages are only published for apps with `hasLegal: true` in `src/data/apps.ts`. Guava Music has
hand-written pages under `src/pages/app/guava-music/`; the generic `[slug]` templates cover SpeedMaths Pro.

## Project structure

```text
src/
  layouts/Layout.astro   # Global head, SEO meta, theme
  pages/                 # Routes
  data/apps.ts           # Product data
  data/legal.ts          # Privacy / delete-data content
  site.ts                # Central site config (name, URL, social)
public/                  # Static assets (logos, screenshots, robots.txt)
```

## Commands

| Command          | Action                                      |
| :--------------- | :------------------------------------------ |
| `npm install`    | Installs dependencies                       |
| `npm run dev`    | Starts local dev server at `localhost:4321` |
| `npm run build`  | Builds production site to `./dist/`          |
| `npm run preview`| Previews the build locally before deploying |

## Deployment

Deployed on **Cloudflare Pages**:

- **Build command:** `npm run build`
- **Build output:** `dist`
- **Production branch:** `main` (auto-deploys on push)

## Site configuration

Central config lives in [`src/site.ts`](src/site.ts):

- Name, tagline, description
- Base URL (`https://dunitelabs.com`, live on Cloudflare Pages)
- Contact email and all social links

Mirror URL changes in [`astro.config.mjs`](astro.config.mjs) (`site`) so canonical tags and the sitemap stay correct.

The auto-generated `dunitelabs.pages.dev` host 301-redirects to `https://dunitelabs.com` through an
account-level **Bulk Redirect** (Cloudflare dashboard → *Bulk Redirects*), with subpath matching and
path suffix preserved. It cannot live in `public/_redirects` — Cloudflare Pages does not support
domain-level redirects in that file.
