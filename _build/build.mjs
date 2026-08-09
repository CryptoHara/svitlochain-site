import { writeFileSync, mkdirSync } from 'fs';
import { LANGS } from './langs.mjs';
import { renderPage } from './template.mjs';

import en from './content/en.mjs';
import uk from './content/uk.mjs';
import sv from './content/sv.mjs';
import no from './content/no.mjs';
import it from './content/it.mjs';
import es from './content/es.mjs';
import fr from './content/fr.mjs';
import de from './content/de.mjs';
import fi from './content/fi.mjs';
import pt from './content/pt.mjs';
import ja from './content/ja.mjs';
import ko from './content/ko.mjs';
import zh from './content/zh.mjs';

const CONTENT = { en, uk, sv, no, it, es, fr, de, fi, pt, ja, ko, zh };
const OUT_ROOT = new URL('../', import.meta.url).pathname;

for (const { code } of LANGS) {
  const c = CONTENT[code];
  const html = renderPage(c, code);
  const dir = OUT_ROOT + code;
  mkdirSync(dir, { recursive: true });
  writeFileSync(dir + '/index.html', html);
  console.log('wrote', dir + '/index.html', `(${(html.length / 1024).toFixed(0)} KB)`);
}
