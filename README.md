# Khula Business Solutions – Astro site

- Dev: `npm run dev` · Build: `npm run build` → upload the contents of `dist/` to the web host public_html (includes .htaccess, contact.php, robots.txt, sitemap-index.xml).
- Copy/content: `src/data/site.js`. Tracking: set `SITE.gtm` (or `SITE.ga4`) there, rebuild.
- PPC landing page: /corporate-training-south-africa/ (noindex, excluded from sitemap).
- Client preview: `npm run build && node preview.mjs` regenerates ../khula-website/preview (flat, self-contained), then republish the artifact.
- Form posts to /contact.php (PHP mail → thilo@khulabs.co.za), then redirects to /thank-you/.
