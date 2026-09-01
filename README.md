# Dunite Labs — Website

The source for the [Dunite Labs](https://dunitelabs.pages.dev) company website — a usability-first product studio from India. Built with [Astro](https://astro.build) as a static, SEO-friendly site.

## Features

- ⚡ **Astro static site** — zero runtime JS, fast loads
- 🔍 **Full technical SEO** — canonical URLs, Open Graph, Twitter cards, JSON-LD structured data
- 🗺️ **Auto-generated sitemap** + `robots.txt`
- 🌗 **Light/dark mode** with a `data-theme` toggle
- 🎨 **Brutalist design** with per-page themed favicons
- 📱 **Mobile-optimized** across `768px`, `480px`, `375px`, and `320px` breakpoints

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
- `/app/[slug]/` — Product detail
- `/app/[slug]/privacy/` — Privacy policy
- `/app/[slug]/delete-data/` — Data deletion

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
| `npm run build`  | Builds production site to `./dist/` + `./out/` |
| `npm run preview`| Previews the build locally before deploying |

## Deployment

Deployed on **Cloudflare Pages**:

- **Build command:** `npm run build`
- **Build output:** `out`
- **Production branch:** `main` (auto-deploys on push)

## Site configuration

Central config lives in [`src/site.ts`](src/site.ts):

- Name, tagline, description
- Base URL (switch `https://dunitelabs.pages.dev` → `https://dunitelabs.com` when the custom domain goes live)
- Contact email and all social links

Mirror URL changes in [`astro.config.mjs`](astro.config.mjs) (`site`) so canonical tags and the sitemap stay correct.
