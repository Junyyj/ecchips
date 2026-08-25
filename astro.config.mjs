import { defineConfig } from 'astro/config';

// ECCHIPS V1 — static site generation. No SSR, no Workers, no database.
// Output is plain static assets deployable to Cloudflare / any static host.
export default defineConfig({
  site: 'https://ecchips.com',
  output: 'static',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});
