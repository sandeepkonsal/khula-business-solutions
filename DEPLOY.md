# Putting khulabusinesssolutions.co.za live

**Where the site lives today:** the domain's website is a WordPress hosting package at Domains.co.za (server `wp29.domains.co.za`, IP 41.222.32.29). The domain's DNS is already pointing at it, and its mail records are set up there too.

## Do NOT change DNS
Going live means replacing the *files* on that hosting package. No DNS record needs to change.
- The page in the Domains.co.za "Manage DNS Records" screen is empty because the live DNS is served by the nameservers `ns1-4.anycast-ns.com/.net`. Do not add, import or copy records there, and do not change nameservers. That could take the website and email offline.
- DNS only needs to change if you ever move the site to a different host.

## 1. Back up the old site
In your Domains.co.za client area open the hosting package (cPanel / File Manager, or FTP). Download everything in `public_html`, and export the WordPress database (phpMyAdmin > Export) if you may want it. Keep this backup. It is your way back.

## 2. Clear the old site
Move or delete the old WordPress files in `public_html` (wp-admin, wp-content, wp-includes, index.php, wp-*.php and the old `.htaccess`). Leave `cgi-bin` and any email-related folders alone.

## 3. Upload the new site
Upload `release/khula-live-site.zip` to `public_html` and extract it (File Manager > Upload > Extract).
Check that `.htaccess` (hidden file; turn on "show hidden files"), `index.html`, `contact.php`, `assets/`, `_astro/`, `images/` and the page folders sit directly inside `public_html`, not in a sub-folder.

(Alternative: in GitHub add secrets FTP_SERVER, FTP_USERNAME, FTP_PASSWORD, then run "Deploy over FTP (manual)" from the Actions tab.)

## 4. Check it works (5 minutes)
- https://khulabusinesssolutions.co.za and https://www.khulabusinesssolutions.co.za both land on https://khulabusinesssolutions.co.za
- Old links redirect: /about-us/, /contact-us/, /service/, /services/nlp-executive-business-life-coaching/
- Send a real enquiry through /contact/. You should land on /thank-you/ and the email should arrive at thilo@khulabs.co.za (also check spam). If it does not, ask Domains.co.za support to confirm PHP mail() is enabled for the package.
- Open the site on a phone.

## 5. After launch
- Add the GTM or GA4 ID in `src/data/site.js`, run `npm run build` and upload again.
- In Google Search Console submit https://khulabusinesssolutions.co.za/sitemap-index.xml and request indexing of the home page.
- Point Google Ads final URLs at the new pages (landing page: /corporate-training-south-africa/).
- Have Thilo read the Privacy Policy (/privacy-policy/). It is a standard POPIA-style template.

## Roll back
Delete the new files in `public_html` and restore the backup from step 1.
