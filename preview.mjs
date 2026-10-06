// Builds a flat, self-contained client preview from ./dist (run `npm run build` first).
import fs from 'fs'; import path from 'path';
const DIST = path.resolve('dist'), OUT = path.resolve('../khula-website/preview');
fs.rmSync(OUT, { recursive: true, force: true }); fs.mkdirSync(path.join(OUT, 'assets'), { recursive: true });
['logo.png', 'favicon.png', 'og-image.jpg'].forEach((f) => fs.copyFileSync(path.join(DIST, 'assets', f), path.join(OUT, 'assets', f)));
if (fs.existsSync(path.join(DIST, 'images'))) fs.cpSync(path.join(DIST, 'images'), path.join(OUT, 'images'), { recursive: true });
const read = (p) => fs.readFileSync(path.join(DIST, p), 'utf8');
const map = (u) => {
  if (u.startsWith('/assets/') || u.startsWith('/images/')) return u.slice(1);
  const [p, h] = u.split('#'); const hash = h ? '#' + h : '';
  if (p === '/') return 'index.html' + hash;
  const parts = p.split('/').filter(Boolean);
  return (parts[0] === 'services' && parts.length === 2 ? `service-${parts[1]}` : parts.join('-')) + '.html' + hash;
};
const pages = [['index.html', 'index.html'], ['about/index.html', 'about.html'], ['services/index.html', 'services.html'], ['contact/index.html', 'contact.html'], ['thank-you/index.html', 'thank-you.html'], ['privacy-policy/index.html', 'privacy-policy.html'], ['corporate-training-south-africa/index.html', 'corporate-training-south-africa.html']];
fs.readdirSync(path.join(DIST, 'services'), { withFileTypes: true }).filter((d) => d.isDirectory() && !read(`services/${d.name}/index.html`).includes('http-equiv="refresh"')).forEach((d) => pages.push([`services/${d.name}/index.html`, `service-${d.name}.html`]));
const badge = '<div style="position:fixed;left:14px;bottom:14px;z-index:300;background:#fff;color:#111;font:600 12px Inter,system-ui,sans-serif;padding:8px 14px;border-radius:999px;box-shadow:0 6px 20px rgba(0,0,0,.35)">Design preview · not live</div>';
for (const [src, dest] of pages) {
  let h = read(src);
  const css = [...h.matchAll(/<link rel="stylesheet" href="(\/_astro\/[^"]+)">/g)].map((m) => read(m[1].slice(1))).join('\n');
  let js = [...h.matchAll(/<script type="module" src="(\/_astro\/[^"]+)"><\/script>/g)].map((m) => read(m[1].slice(1))).join('\n');
  js = js.replace(/fetch\(\w+\.action,\{method:"POST",body:\w+,headers:\{Accept:"application\/json"\}\}\)\.then\(function\(\w+\)\{return \w+\.json\(\)\}\)/, 'Promise.resolve({success:!0})').replace('location.href="/thank-you/"', 'location.href="thank-you.html"');
  if (!js.includes('Promise.resolve({success:!0})')) throw new Error('form patch failed on ' + src);
  h = h.replace(/name="access_key" value=""/g, 'name="access_key" value="preview"').replace(/action="https:\/\/api\.web3forms\.com\/submit"/g, 'action="#"');
  h = h.replace(/(href|src|action)="(\/[^"]*)"/g, (m, a, u) => u.startsWith('/_astro/') ? m : `${a}="${map(u)}"`);
  const title = h.match(/<title>[\s\S]*?<\/title>/)[0];
  const fonts = h.match(/<link href="https:\/\/fonts\.googleapis[^>]*>/)[0];
  const body = h.slice(h.indexOf('<body>') + 6, h.lastIndexOf('</body>')).replace(/<script type="module"[^>]*><\/script>/g, '').replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g, '');
  const inner = `${title}\n<meta name="description" content="Khula Business Solutions website design preview">\n${fonts}\n<style>${css}</style>\n${body}\n${badge}\n<script>${js}</script>\n`;
  const out = dest === 'index.html' ? inner : `<!doctype html><html lang="en-ZA"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex">${title}\n${fonts}\n<link rel="icon" href="assets/favicon.png"><style>${css}</style></head><body>\n${body}\n${badge}\n<script>${js}</script></body></html>`;
  fs.writeFileSync(path.join(OUT, dest), out);
}
console.log('preview pages:', pages.length);
