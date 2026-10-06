# Hosting khulabusinesssolutions.co.za on GitHub Pages

The site is built and deployed by GitHub (`.github/workflows/pages.yml`) every time `main` is pushed. No web hosting package is needed.

## What has to happen, in order
1. **Contact form key.** GitHub cannot run PHP, so enquiries are sent by Web3Forms (free). Go to web3forms.com, enter `thilo@khulabs.co.za`, and copy the access key emailed to that address. Put it in `src/data/site.js` as `formKey` and push. (The key is public by design; it can only send to that address.)
2. **DNS (at Domains.co.za).** Change only the website records. **Leave MX and TXT (email) records exactly as they are.**
   - Delete the old `A` record for `khulabusinesssolutions.co.za` (41.222.32.29) and any old `www` record.
   - Add four `A` records, host `@` (or blank): `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Add four `AAAA` records, host `@`: `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`
   - Add one `CNAME` record, host `www`, value `sandeepkonsal.github.io`
   - Do not change the nameservers.
3. **Connect the domain in GitHub** (once DNS resolves, 15 min to a few hours):
   `gh api -X PUT repos/sandeepkonsal/khula-business-solutions/pages -f cname=khulabusinesssolutions.co.za`
   `gh variable set CUSTOM_DOMAIN --body khulabusinesssolutions.co.za --repo sandeepkonsal/khula-business-solutions`
   Re-run the deploy, then switch on "Enforce HTTPS" in the repository's Pages settings once the certificate is issued.
4. **Check:** the site, https and www, an old link such as /about-us/, and a test enquiry arriving at thilo@khulabs.co.za.
5. **Only then** consider cancelling the Domains.co.za hosting package, and first confirm nobody uses mailboxes hosted on it.

## Differences from normal web hosting
- Old WordPress addresses redirect with small redirect pages (not server redirects). Google follows them.
- No server settings file (`.htaccess`) and no PHP.
