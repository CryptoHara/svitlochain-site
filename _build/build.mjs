import { writeFileSync, mkdirSync } from 'fs';
import { LANGS } from './langs.mjs';
import { renderPage } from './template.mjs';

import en from './content/en.mjs';
import uk from './content/uk.mjs';
import sv from './content/sv.mjs';
import no from './content/no.mjs';

const CONTENT = { en, uk, sv, no };
const OUT_ROOT = new URL('../', import.meta.url).pathname;

for (const { code } of LANGS) {
  const c = CONTENT[code];
  const html = renderPage(c, code);
  const dir = OUT_ROOT + code;
  mkdirSync(dir, { recursive: true });
  writeFileSync(dir + '/index.html', html);
  console.log('wrote', dir + '/index.html', `(${(html.length / 1024).toFixed(0)} KB)`);
}
