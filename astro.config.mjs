import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
export default defineConfig({
  site: 'https://khulabusinesssolutions.co.za',
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (p) => !p.includes('thank-you') && !p.includes('corporate-training-south-africa') })],
});
