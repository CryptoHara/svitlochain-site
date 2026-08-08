// Published-site-only i18n overrides. Loaded after i18n.js (which is shared
// verbatim with the self-hosted/Tauri source build) -- this patches the one
// key whose correct text differs between deployments: the RPC-URL default
// hint. Source build's default is really localhost:8080 (self-hosted use);
// this deployment's default is the public relay (see nodeUrl() above).
(function () {
  'use strict';
  if (!window.svitI18N) return;
  const overrides = {
    en: 'Default: the public Svitlo Chain relay',
    uk: 'За замовчуванням: публічний релей Svitlo Chain',
    no: 'Standard: den offentlige Svitlo Chain-releen',
    sv: 'Standard: den offentliga Svitlo Chain-relän',
    it: 'Predefinito: il relay pubblico di Svitlo Chain',
    es: 'Predeterminado: el relay público de Svitlo Chain',
    pt: 'Padrão: o relay público da Svitlo Chain',
    fr: 'Par défaut : le relais public de Svitlo Chain',
    fi: 'Oletus: julkinen Svitlo Chain -välityspalvelin',
    ja: 'デフォルト: Svitlo Chainのパブリックリレー',
    ko: '기본값: 공개 Svitlo Chain 릴레이',
    zh: '默认：公开的 Svitlo Chain 中继',
    de: 'Standard: das öffentliche Svitlo-Chain-Relay',
  };
  for (const lang in overrides) {
    if (window.svitI18N[lang]) window.svitI18N[lang]['settings.rpc_default'] = overrides[lang];
  }
})();
