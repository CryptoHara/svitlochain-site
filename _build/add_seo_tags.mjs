// Post-processes already-built static HTML: adds <link rel="canonical"> and
// hreflang alternates, and writes sitemap.xml. Runs against the output
// files directly (not the per-generator templates) since /wallet/,
// /platform/, /documentation/, and the per-language variants of those are
// currently produced by at least two different generator scripts (build.mjs
// via template.mjs, and gen_static_pages.mjs) plus an unaccounted-for path
// for en/uk/sv/no/it -- patching the output is the one place that covers
// all of them. Idempotent: skips any file that already has a canonical tag,
// so it's safe to re-run after future builds.
import { readFileSync, writeFileSync, existsSync } from 'fs';

const ROOT = new URL('../', import.meta.url).pathname;
const BASE = 'https://www.svitlochain.com';
const LANGS = ['en','uk','sv','no','it','es','fr','de','fi','pt','ja','ko','zh'];
const PAGE_GROUPS = ['wallet', 'platform', 'documentation'];

const sitemapUrls = [];

function urlFor(parts) {
  return BASE + '/' + (parts.length ? parts.join('/') + '/' : '');
}

function injectTags(relPath, canonicalUrl, hreflangs) {
  const filePath = ROOT + relPath;
  if (!existsSync(filePath)) {
    console.log('WARN missing file, skipping:', relPath);
    return;
  }
  let html = readFileSync(filePath, 'utf8');
  if (html.includes('rel="canonical"')) {
    console.log('skip (already has canonical):', relPath);
  } else {
    const marker = /<meta name="description"[^>]*>\n?/;
    if (!marker.test(html)) {
      console.log('WARN no description meta found, skipping tag injection:', relPath);
    } else {
      let tags = `<link rel="canonical" href="${canonicalUrl}">\n`;
      if (hreflangs) {
        for (const h of hreflangs) {
          tags += `<link rel="alternate" hreflang="${h.lang}" href="${h.url}">\n`;
        }
      }
      html = html.replace(marker, (m) => m + tags);
      writeFileSync(filePath, html);
      console.log('updated:', relPath);
    }
  }
  sitemapUrls.push(canonicalUrl);
}

// 1. Root language-chooser page -- standalone, self-canonical only.
injectTags('index.html', urlFor([]), null);

// 2. Per-language homepages -- hreflang cluster, x-default -> /en/.
{
  const hreflangs = LANGS.map(l => ({ lang: l, url: urlFor([l]) }));
  hreflangs.push({ lang: 'x-default', url: urlFor(['en']) });
  for (const l of LANGS) injectTags(`${l}/index.html`, urlFor([l]), hreflangs);
}

// 3. wallet / platform / documentation -- per-language hreflang cluster;
//    the root-level (no-prefix) copy is a duplicate alias, canonicalized
//    to the English version instead of carrying its own hreflang set.
for (const page of PAGE_GROUPS) {
  const hreflangs = LANGS.map(l => ({ lang: l, url: urlFor([l, page]) }));
  hreflangs.push({ lang: 'x-default', url: urlFor(['en', page]) });
  for (const l of LANGS) injectTags(`${l}/${page}/index.html`, urlFor([l, page]), hreflangs);
  injectTags(`${page}/index.html`, urlFor(['en', page]), null);
}

// 4. Standalone singles with no per-language variants.
injectTags('privacy/index.html', urlFor(['privacy']), null);
injectTags('support/index.html', urlFor(['support']), null);

// --- sitemap.xml -----------------------------------------------------------
const uniqueUrls = [...new Set(sitemapUrls)].sort();
const body = uniqueUrls.map(u => `  <url><loc>${u}</loc></url>`).join('\n');
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
writeFileSync(ROOT + 'sitemap.xml', sitemap);
console.log(`wrote sitemap.xml (${uniqueUrls.length} URLs)`);
