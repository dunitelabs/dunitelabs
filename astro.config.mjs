// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  outDir: "dist",
  site: "https://dunitelabs.pages.dev",
  // When the custom domain goes live, update the site URL above to:
  // site: "https://dunitelabs.com",
  integrations: [sitemap()],
});
