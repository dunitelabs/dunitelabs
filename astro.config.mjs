// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  outDir: "dist",
  site: "https://dunitelabs.com",
  trailingSlash: "always",
  integrations: [sitemap()],
});