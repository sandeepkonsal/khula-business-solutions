// GitHub Pages serves this repo under /<repo>/, so prefix root-relative URLs after `astro build`.
// The the web host build (domain root) skips this step. Test copy is also marked noindex.
import fs from 'fs'; import path from 'path';
const BASE = process.env.PAGES_BASE; // e.g. /khula-business-solutions
if (!BASE) throw new Error('PAGES_BASE not set');
const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]);
for (const f of walk('dist')) {
  if (!/\.(html|js|css)$/.test(f)) continue;
  let s = fs.readFileSync(f, 'utf8');
  if (f.endsWith('.html')) {
    s = s.replace(/(href|src|action)="\/(?!\/)/g, `$1="${BASE}/`).replace(/content="index,follow[^"]*"/, 'content="noindex,nofollow"').replace(/<link rel="canonical"[^>]*>/, '');
  } else if (f.endsWith('.js')) {
    s = s.replace(/"\/thank-you\/"/g, `"${BASE}/thank-you/"`).replace(/"\/contact\.php"/g, `"${BASE}/contact.php"`);
  }
  fs.writeFileSync(f, s);
}
fs.writeFileSync('dist/robots.txt', 'User-agent: *\nDisallow: /\n');
console.log('rewrote for', BASE);
