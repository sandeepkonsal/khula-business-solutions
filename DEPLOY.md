# Putting khulabusinesssolutions.co.za live (Xneelo)

The current site on this domain is WordPress. Replacing it is the go-live step. Do it in this order.

## 1. Back up the old site
In Xneelo's control panel (or over FTP) download everything in `public_html`, and export the WordPress database if you may need it. Keep this backup. It is your way back.

## 2. Clear the old site
Move or delete the old WordPress files in `public_html` (wp-admin, wp-content, wp-includes, index.php, wp-*.php, and the old `.htaccess`). Leave `cgi-bin` alone if it exists.

## 3. Upload the new site
Upload `release/khula-live-site.zip` to `public_html`, then extract it there (Xneelo File Manager > Upload > Extract).
Check that `.htaccess` (a hidden file), `index.html`, `contact.php`, `assets/`, `_astro/`, `images/` and the page folders are directly inside `public_html`, not in a sub-folder.

(Alternative: in GitHub, add secrets FTP_SERVER, FTP_USERNAME, FTP_PASSWORD, then run "Deploy to Xneelo (manual)" from the Actions tab.)

## 4. Check it works (5 minutes)
- https://khulabusinesssolutions.co.za and https://www.khulabusinesssolutions.co.za both land on https://khulabusinesssolutions.co.za
- Old links redirect: /about-us/, /contact-us/, /service/, /services/nlp-executive-business-life-coaching/
- Send a real enquiry through /contact/. You should land on /thank-you/ and the email should arrive at thilo@khulabs.co.za (also check spam). If it does not arrive, tell your developer to check PHP mail() on the hosting.
- Open the site on a phone.

## 5. After launch
- Add the GTM or GA4 ID in `src/data/site.js`, run `npm run build` and upload again.
- In Google Search Console submit https://khulabusinesssolutions.co.za/sitemap-index.xml and request indexing of the home page.
- Point Google Ads final URLs at the new pages (landing page: /corporate-training-south-africa/).
- Have Thilo read the Privacy Policy (/privacy-policy/). It is a standard POPIA-style template and should be reviewed.

## Roll back
Delete the new files in `public_html` and restore the backup from step 1.
