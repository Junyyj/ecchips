import { defineConfig } from 'astro/config';

// ECCHIPS V1 — static site generation. No SSR, no Workers, no database.
// Output is plain static assets deployable to Cloudflare / any static host.
//
// Canonical host is www.ecchips.com (verified reachable). The bare apex
// ecchips.com must 301-redirect here — see public/_redirects and DEPLOY-FIX.md.
export default defineConfig({
  site: 'https://www.ecchips.com',
  output: 'static',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});
