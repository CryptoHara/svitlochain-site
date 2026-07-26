import { LANGS } from './langs.mjs';

const esc = (s) => String(s ?? '');

function navHtml(c, lang) {
  const links = c.nav.links.map(l => `<a href="${l.href}">${esc(l.label)}</a>`).join('');
  const langItems = LANGS.map(l => `<li><a href="/${l.code}/" class="${l.code === lang ? 'current' : ''}">${l.flag} ${l.label}</a></li>`).join('');
  const current = LANGS.find(l => l.code === lang);
  return `
<nav class="site-nav glass">
  <a href="/${lang}/" class="brand"><img class="logo" src="/assets/images/logo.jpg" alt="Svitlo Chain">Svitlo<b>Chain</b></a>
  <button type="button" class="nav-toggle" id="nav-toggle" aria-label="Menu" aria-expanded="false" onclick="document.getElementById('nav-links').classList.toggle('open');this.setAttribute('aria-expanded', document.getElementById('nav-links').classList.contains('open'))">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
  </button>
  <div class="links" id="nav-links">
    ${links}
    <div class="lang-switch" id="lang-switch">
      <button type="button" onclick="document.getElementById('lang-switch').classList.toggle('open')">${current.flag} ${current.code.toUpperCase()} <span aria-hidden="true">▾</span></button>
      <ul>${langItems}</ul>
    </div>
    <button type="button" class="theme-toggle" id="theme-toggle" aria-label="Toggle dark mode" onclick="window.__toggleTheme()"><span class="theme-icon-light">☀️</span><span class="theme-icon-dark">🌙</span></button>
  </div>
</nav>`;
}

function heroHtml(c) {
  return `
<section class="hero hero-cosmic">
  <div class="hero-spheres" aria-hidden="true">
    <span class="hero-sphere s1"></span>
    <span class="hero-sphere s2"></span>
    <span class="hero-sphere s3"></span>
    <span class="hero-sphere s4"></span>
  </div>
  <div class="wrap hero-copy">
    <div class="eyebrow">${esc(c.hero.eyebrow)}</div>
    <h1>${esc(c.hero.title)}</h1>
    <p class="lede">${esc(c.hero.lede)}</p>
    <div class="cta-row">
      <a href="#contact" class="btn btn-primary">${esc(c.hero.ctaPrimary)}</a>
      <a href="#developers" class="btn btn-glass glass-sm">${esc(c.hero.ctaGlass)}</a>
    </div>
  </div>
</section>`;
}

function ideaHtml(c) {
  const body = c.idea.body.map(p => `<p>${p}</p>`).join('');
  const cards = c.idea.cards.map(card => `
    <div class="card">
      <div class="eyebrow" style="margin-bottom:10px">${esc(card.label)}</div>
      <h3>${esc(card.title)}</h3>
      <p style="margin-top:8px">${card.body}</p>
    </div>`).join('');
  return `
<section id="idea">
  <div class="wrap">
    <div class="section-head">
      <div class="eyebrow">${esc(c.idea.eyebrow)}</div>
      <h2>${esc(c.idea.title)}</h2>
      ${body}
    </div>
    <div class="grid grid-3">${cards}</div>
  </div>
</section>`;
}

function codeStepsHtml(steps) {
  return steps.map(s => `
    <div class="card" style="margin-bottom:16px">
      <div class="eyebrow" style="margin-bottom:8px">${esc(s.n)}</div>
      <h3>${esc(s.title)}</h3>
      <p style="margin-top:8px">${s.body}</p>
      ${s.code ? `<div class="code">${s.code}</div>` : ''}
    </div>`).join('');
}

function developersHtml(c) {
  const body = c.developers.body.map(p => `<p>${p}</p>`).join('');
  const steps = c.developers.steps.map(s => `
    <div class="step">
      <span class="arrow">→</span>
      <div><h3>${esc(s.title)}</h3><p style="margin-top:4px">${s.body}</p></div>
    </div>`).join('');
  return `
<section id="developers">
  <div class="wrap">
    <div class="section-banner" style="background-image:url('/assets/images/bg-laptop-desk.jpg')"></div>
    <div class="section-head">
      <div class="eyebrow">${esc(c.developers.eyebrow)}</div>
      <h2>${esc(c.developers.title)}</h2>
      ${body}
    </div>
    <div class="grid" style="gap:22px;margin-bottom:56px">${steps}</div>

    <h2 style="margin-top:8px">${esc(c.developers.quickstartTitle)}</h2>
    <p class="lede" style="margin-bottom:28px">${esc(c.developers.quickstartLede)}</p>
    ${codeStepsHtml(c.developers.steps2)}
    <div class="card card-accent">
      <h3>${esc(c.developers.billingTitle)}</h3>
      <p style="margin-top:8px">${esc(c.developers.billingBody)}</p>
    </div>
  </div>
</section>`;
}

function gpuOwnersHtml(c) {
  const cards = c.gpuOwners.cards.map(card => `
    <div class="card card-accent">
      <h3>${esc(card.title)}</h3>
      <p style="margin-top:8px">${card.body}</p>
    </div>`).join('');
  return `
<section id="gpu-owners">
  <div class="wrap">
    <div class="section-banner" style="background-image:url('/assets/images/bg-gaming-pc.jpg')"></div>
    <div class="section-head">
      <div class="eyebrow">${esc(c.gpuOwners.eyebrow)}</div>
      <h2>${esc(c.gpuOwners.title)}</h2>
      <p>${c.gpuOwners.body}</p>
    </div>
    <div class="grid grid-3" style="margin-bottom:56px">${cards}</div>

    <h2>${esc(c.gpuOwners.installTitle)}</h2>
    <p class="lede" style="margin-bottom:28px">${esc(c.gpuOwners.installLede)}</p>
    ${codeStepsHtml(c.gpuOwners.installSteps)}
  </div>
</section>`;
}

function minerModeHtml(c) {
  const m = c.minerMode;
  const cards = m.cards.map(card => `
    <div class="card"><h3>${esc(card.title)}</h3><p style="margin-top:8px">${card.body}</p></div>`).join('');
  const whyBody = m.whyBody.map(p => `<p>${p}</p>`).join('');
  const steps = m.steps.map((s, i) => `
    <div>
      <div class="when">${esc(s.n)}</div>
      <h3 style="margin:6px 0 6px">${esc(s.title)}</h3>
      <p style="font-size:13.5px">${s.body}</p>
    </div>`).join('<hr style="border:none;border-top:1px solid var(--bd2);margin:16px 0">');
  return `
<section id="miner-mode" class="tight">
  <div class="wrap">
    <div class="section-head">
      <div class="eyebrow">${esc(m.eyebrow)}</div>
      <h2>${esc(m.title)}</h2>
      ${m.body.map(p => `<p>${p}</p>`).join('')}
    </div>
    <div class="grid grid-3" style="margin-bottom:56px">${cards}</div>

    <div class="grid grid-2" style="align-items:start">
      <div class="card" style="background:var(--brown);color:#fff;border:none">
        <h3 style="color:#fff">${esc(m.whyTitle)}</h3>
        <div style="color:rgba(255,255,255,.88);margin-top:8px">${whyBody}</div>
        <a href="#faq" class="btn btn-glass glass-sm" style="margin-top:14px;background:rgba(255,255,255,.14);color:#fff;border:1px solid rgba(255,255,255,.3)">${esc(m.cta)}</a>
      </div>
      <div class="card">
        <h3 style="margin-bottom:14px">${esc(m.howTitle)}</h3>
        ${steps}
      </div>
    </div>
  </div>
</section>`;
}

function pricingHtml(c) {
  const p = c.pricing;
  const cards = p.cards.map(card => `
    <div class="card">
      <h3>${esc(card.title)}</h3>
      <p style="margin-top:8px">${card.body}</p>
      <div class="pill">${esc(card.price)}</div>
    </div>`).join('');
  const rows = p.rows.map(r => `<tr>${r.map(x => `<td>${esc(x)}</td>`).join('')}</tr>`).join('');
  const headers = p.tableHeaders.map(h => `<th>${esc(h)}</th>`).join('');
  const stats = p.stats.map(s => `
    <div class="card glass stat-glass">
      <div class="stat-num">${esc(s.num)}</div>
      <div class="stat-label">${esc(s.label)}</div>
      <div class="stat-desc">${s.body}</div>
    </div>`).join('');
  return `
<section id="pricing">
  <div class="wrap">
    <div class="section-head">
      <div class="eyebrow">${esc(p.eyebrow)}</div>
      <h2>${esc(p.title)}</h2>
      <p>${p.body}</p>
    </div>
    <div class="grid grid-3" style="margin-bottom:20px">${cards}</div>
    <div class="callout" style="margin-bottom:56px">💡 ${p.note}</div>

    <h2>${esc(p.revenueTitle)}</h2>
    <p class="lede" style="margin-bottom:24px">${p.revenueLede}</p>
    <div class="table-wrap" style="margin-bottom:32px">
      <table class="data"><thead><tr>${headers}</tr></thead><tbody>${rows}</tbody></table>
    </div>
    <div class="grid grid-3">${stats}</div>
  </div>
</section>`;
}

function tokenHtml(c) {
  const t = c.token;
  const cards = t.cards.map(card => `
    <div class="card">
      <div class="ico">${card.icon}</div>
      <h3>${esc(card.title)}</h3>
      <p style="margin-top:8px">${card.body}</p>
    </div>`).join('');
  const infraCards = t.infraCards.map(card => `
    <div class="card card-accent"><h3>${esc(card.title)}</h3><p style="margin-top:8px">${card.body}</p></div>`).join('');
  return `
<section id="token">
  <div class="wrap">
    <div class="section-banner" style="background-image:url('/assets/images/bg-circuit-devices-1.jpg')"></div>
    <div class="section-head">
      <div class="eyebrow">${esc(t.eyebrow)}</div>
      <h2>${esc(t.title)}</h2>
      <p>${t.body}</p>
    </div>
    <div class="grid grid-3" style="margin-bottom:20px">${cards}</div>
    <div class="callout" style="margin-bottom:48px">ℹ️ ${t.callout}</div>
    <h2>${esc(t.infraTitle)}</h2>
    <p class="lede" style="margin-bottom:24px">${t.infraBody}</p>
    <div class="grid grid-2">${infraCards}</div>
  </div>
</section>`;
}

function enterpriseHtml(c) {
  const e = c.enterprise;
  const tierRows = e.tiers.map(t => `<tr><td><b>${esc(t[0])}</b></td><td>${esc(t[1])}</td></tr>`).join('');
  const trust = e.trustItems.map(i => `
    <div class="card-accent" style="padding:14px 0 14px 16px;margin-bottom:4px">
      <h3>${esc(i.title)}</h3><p style="margin-top:6px;font-size:13.5px">${i.body}</p>
    </div>`).join('');
  const join = e.joinCards.map(card => `
    <div class="card"><div class="ico">${card.icon}</div><h3>${esc(card.title)}</h3><p style="margin-top:8px">${card.body}</p></div>`).join('');
  return `
<section id="enterprise">
  <div class="wrap">
    <div class="section-head"><div class="eyebrow">${esc(e.eyebrow)}</div><h2>${esc(e.title)}</h2></div>
    <div class="grid grid-2" style="align-items:start;margin-bottom:56px">
      <div>
        <h3 style="font-family:var(--serif);font-size:20px;margin-bottom:10px">${esc(e.companyTitle)}</h3>
        <p>${e.companyBody}</p>
        <div class="table-wrap"><table class="data"><thead><tr><th>${esc(e.tableHeaders[0])}</th><th>${esc(e.tableHeaders[1])}</th></tr></thead><tbody>${tierRows}</tbody></table></div>
      </div>
      <div>
        <h3 style="font-family:var(--serif);font-size:20px;margin-bottom:10px">${esc(e.trustTitle)}</h3>
        ${trust}
      </div>
    </div>
    <h3 style="font-family:var(--serif);font-size:20px;margin-bottom:16px">${esc(e.joinTitle)}</h3>
    <div class="grid grid-3">${join}</div>
  </div>
</section>`;
}

function roadmapHtml(c) {
  const r = c.roadmap;
  const items = r.milestones.map(m => `
    <div><div class="when">${esc(m.when)}</div><h3>${esc(m.title)}</h3><p style="font-size:13.5px;margin-top:4px">${m.body}</p></div>`).join('');
  const pts = r.milestones.map((_, i) => `<span class="pt" style="left:${(i / (r.milestones.length - 1)) * 100}%"></span>`).join('');
  return `
<section id="roadmap">
  <div class="wrap">
    <div class="section-banner" style="background-image:url('/assets/images/banner-phoenix-dawn.jpg')"></div>
    <div class="section-head"><div class="eyebrow">${esc(r.eyebrow)}</div><h2>${esc(r.title)}</h2><p>${r.body}</p></div>
    <div class="timeline">
      <div class="timeline-items">${items}</div>
      <div class="timeline-track">${pts}</div>
    </div>
    <p style="margin-top:24px;color:var(--ink-m);font-size:13.5px">${r.footer}</p>
  </div>
</section>`;
}

function faqHtml(c) {
  const f = c.faq;
  const items = f.items.map(i => `<div class="faq-item"><h3>${esc(i.q)}</h3><p style="margin-top:8px">${i.a}</p></div>`).join('');
  return `
<section id="faq">
  <div class="wrap">
    <div class="section-head"><div class="eyebrow">${esc(f.eyebrow)}</div><h2>${esc(f.title)}</h2><p>${f.body}</p></div>
    <div class="card glass" style="padding:8px 26px">${items}</div>
  </div>
</section>`;
}

function statsHtml(c) {
  const s = c.stats;
  const items = s.items.map(i => `
    <div class="card glass stat-glass">
      <div class="stat-num">${esc(i.num)}</div>
      <div class="stat-label">${esc(i.label)}</div>
      <div class="stat-desc">${i.body}</div>
    </div>`).join('');
  return `
<section id="stats" class="atmosphere">
  <div class="wrap">
    <div class="section-banner" style="background-image:url('/assets/images/banner-comet-icefield.jpg')"></div>
    <div class="section-head center"><div class="eyebrow">${esc(s.eyebrow)}</div><h2>${esc(s.title)}</h2><p class="center">${s.body}</p></div>
    <div class="grid grid-4">${items}</div>
  </div>
</section>`;
}

function architectureHtml(c) {
  const a = c.architecture;
  const lanes = a.lanes.map(lane => `
    <div class="arch-row">
      <div class="arch-lane">${esc(lane.label)}</div>
      <div class="arch-cells">${lane.cells.map(cell => cell === '→' ? `<span class="arch-arrow">→</span>` : `<span class="arch-box">${esc(cell)}</span>`).join('')}</div>
    </div>`).join('');
  const cards = a.cards.map(card => `<div class="card"><h3>${esc(card.title)}</h3><p style="margin-top:8px">${card.body}</p></div>`).join('');
  return `
<section id="architecture">
  <div class="wrap">
    <div class="section-head"><div class="eyebrow">${esc(a.eyebrow)}</div><h2>${esc(a.title)}</h2><p>${a.body}</p></div>
    <div class="arch" style="margin-bottom:28px">${lanes}</div>
    <p style="margin-bottom:32px">${a.body2}</p>
    <div class="grid grid-3">${cards}</div>
  </div>
</section>`;
}

function glossaryHtml(c) {
  const g = c.glossary;
  const terms = g.terms.map(t => `
    <div class="glossary-item"><div class="glossary-term">${esc(t.term)}</div><p style="font-size:13.5px;margin:0">${t.body}</p></div>`).join('');
  return `
<section id="glossary">
  <div class="wrap">
    <div class="section-head"><div class="eyebrow">${esc(g.eyebrow)}</div><h2>${esc(g.title)}</h2><p>${g.body}</p></div>
    <div class="grid grid-3" style="gap:0 32px">${terms}</div>
    <p style="margin-top:24px;color:var(--ink-m);font-size:13.5px">${g.footer}</p>
  </div>
</section>`;
}

function compareHtml(c) {
  const cmp = c.compare;
  const rows = cmp.rows.map(r => `<tr>${r.map(x => `<td>${x}</td>`).join('')}</tr>`).join('');
  const headers = cmp.tableHeaders.map(h => `<th>${esc(h)}</th>`).join('');
  return `
<section id="compare">
  <div class="wrap">
    <div class="section-head"><div class="eyebrow">${esc(cmp.eyebrow)}</div><h2>${esc(cmp.title)}</h2><p>${cmp.body}</p></div>
    <div class="table-wrap"><table class="data"><thead><tr>${headers}</tr></thead><tbody>${rows}</tbody></table></div>
    <p style="margin-top:24px">${cmp.footer}</p>
  </div>
</section>`;
}

function ctaHtml(c) {
  return `
<section id="cta" class="atmosphere tight">
  <div class="wrap center" style="max-width:640px">
    <div class="section-banner" style="background-image:url('/assets/images/banner-cosmic-lotus.jpg');height:180px"></div>
    <h2>${esc(c.cta.title)}</h2>
    <p class="lede center">${c.cta.body}</p>
    <div class="cta-row" style="justify-content:center">
      <a href="#contact" class="btn btn-primary">${esc(c.cta.ctaPrimary)}</a>
      <a href="#developers" class="btn btn-glass glass-sm">${esc(c.cta.ctaGlass)}</a>
    </div>
  </div>
</section>`;
}

function contactHtml(c) {
  const items = c.contact.items.map(i => `
    <div class="card" style="display:flex;gap:14px;align-items:flex-start">
      <div style="font-size:20px">${i.icon}</div>
      <div><h3>${esc(i.title)}</h3><p style="margin-top:4px;font-size:13.5px">${i.href ? `<a href="${i.href}">${i.body}</a>` : i.body}</p></div>
    </div>`).join('');
  return `
<section id="contact">
  <div class="wrap">
    <div class="section-head"><div class="eyebrow">${esc(c.contact.eyebrow)}</div><h2>${esc(c.contact.title)}</h2><p>${c.contact.body}</p></div>
    <div class="grid grid-2">${items}</div>
  </div>
</section>`;
}

function footerHtml(c, lang) {
  const cols = c.footer.cols.map(col => `
    <div><h4>${esc(col.title)}</h4><ul>${col.links.map(l => `<li><a href="${l.href}">${esc(l.label)}</a></li>`).join('')}</ul></div>`).join('');
  return `
<footer class="site-footer">
  <div class="wrap">
    <div>
      <a href="/${lang}/" class="brand" style="margin-bottom:10px;display:flex"><span class="dot"></span>Svitlo<b>Chain</b></a>
      <p style="max-width:32ch">${c.footer.tagline}</p>
      <p>${c.footer.copyright}</p>
    </div>
    <div class="cols">${cols}</div>
  </div>
</footer>`;
}

export function renderPage(c, lang) {
  const html = `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(c.meta.title)}</title>
<meta name="description" content="${esc(c.meta.description)}">
<link rel="stylesheet" href="/assets/platform.css">
<script>
try {
  var t = localStorage.getItem('svitlo-theme');
  if (t === 'light' || t === 'dark') document.documentElement.setAttribute('data-theme', t);
} catch (e) {}
</script>
</head>
<body>
${navHtml(c, lang)}
${heroHtml(c)}
${ideaHtml(c)}
${developersHtml(c)}
${gpuOwnersHtml(c)}
${minerModeHtml(c)}
${pricingHtml(c)}
${tokenHtml(c)}
${enterpriseHtml(c)}
${roadmapHtml(c)}
${faqHtml(c)}
${statsHtml(c)}
${architectureHtml(c)}
${glossaryHtml(c)}
${compareHtml(c)}
${ctaHtml(c)}
${contactHtml(c)}
${footerHtml(c, lang)}
<script>
document.addEventListener('click', (e) => {
  const sw = document.getElementById('lang-switch');
  if (sw && !sw.contains(e.target)) sw.classList.remove('open');
  const nav = document.getElementById('nav-links');
  const toggle = document.getElementById('nav-toggle');
  if (nav && nav.classList.contains('open') && !nav.contains(e.target) && !toggle.contains(e.target)) {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }
});
window.__toggleTheme = function() {
  var cur = document.documentElement.getAttribute('data-theme');
  var isDark = cur ? cur === 'dark' : window.matchMedia('(prefers-color-scheme:dark)').matches;
  var next = isDark ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  try { localStorage.setItem('svitlo-theme', next); } catch (e) {}
};
try { localStorage.setItem('svitlo-lang', '${lang}'); } catch (e) {}
</script>
</body>
</html>
`;
  return html;
}
