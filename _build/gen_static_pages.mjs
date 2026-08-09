import { writeFileSync, mkdirSync } from 'fs';

const ROOT = new URL('../', import.meta.url).pathname;
const ALL_LANGS = ['en','uk','sv','no','it','es','fr','de','fi','pt','ja','ko','zh'];

function langMini(page, cur) {
  return `<span class="lang-mini">` + ALL_LANGS.map(l =>
    `<a href="/${l}/${page}/"${l===cur?' class="current"':''}>${l.toUpperCase()}</a>`
  ).join('') + `</span>`;
}

// ---------------------------------------------------------------------------
// Per-language dictionaries
// ---------------------------------------------------------------------------
const D = {
es: {
  htmlLang:'es',
  nav:{platform:'Plataforma',wallet:'Wallet',documentation:'Documentación',privacy:'Privacidad',support:'Soporte'},
  wallet:{
    title:'Wallet — Svitlo Chain',
    desc:'Svitlo Wallet — un wallet no custodial para SVIT, BTC, ETH y más de 10 blockchains. Úsalo ahora en el navegador, o instala la app Android/iOS.',
    eyebrow:'Svitlo Wallet', h1:'Tu wallet multichain no custodial',
    lede:'Guarda, envía y recibe SVIT junto con BTC, ETH, USDT, SOL, XRP y más — todo en un solo wallet. Tus claves se generan y cifran en tu dispositivo — nunca las vemos, nunca las almacenamos, y no podemos recuperarlas por ti.',
    ctaWeb:'Abrir Web Wallet →', ctaAndroid:'Descargar para Android (APK)', ctaIOS:'iOS — Únete a la beta de TestFlight',
    note:'El web wallet funciona completamente en el navegador — nada que instalar. En Android debes habilitar una vez "instalar desde fuentes desconocidas", ya que esta versión aún no está en Play Store. iOS requiere la app gratuita TestFlight.',
    ctaPrivacy:'Lee la política de privacidad →',
    webH3:'Web Wallet', webLi:['Abre <a href="/app/">svitlochain.com/app</a> en cualquier navegador moderno (escritorio o móvil).','Elige <strong>Crear nuevo</strong> o <strong>Restaurar desde frase</strong>, y establece una contraseña.','Guarda tu frase de recuperación — se muestra una sola vez y nunca se almacena en ningún lugar.'],
    webNote:'Opcional: el menú de tu navegador te permite "instalarlo" como icono de app para acceso con un toque — no se necesita ninguna tienda de aplicaciones.',
    andH3:'Android', andLi:['Toca <strong>Descargar para Android</strong> arriba para obtener el APK.','Abre el archivo descargado y permite "instalar desde fuentes desconocidas" cuando se te pida (solo una vez).','Abre Svitlo Wallet y crea o restaura tu wallet.'],
    iosH3:'iOS (beta TestFlight)', iosLi:['Instala <strong>TestFlight</strong> desde el App Store si aún no lo tienes.','Toca <strong>Únete a la beta de TestFlight</strong> arriba y acepta la invitación.','Instala Svitlo Wallet desde TestFlight, luego crea o restaura tu wallet.'],
    f1H3:'No custodial', f1P:'Tu frase de recuperación y claves privadas nunca salen de tu dispositivo. Tu almacén de claves se cifra en el dispositivo (AES-256-GCM) antes de tocar el disco.',
    f2H3:'Multiplataforma', f2P:'Diseñado para navegador, iOS, Android, macOS, Windows y Linux — el mismo wallet en todos tus dispositivos.',
    f3H3:'Multichain', f3P:'Envía, recibe y haz staking de SVIT, además de mantener y mover BTC, ETH, USDT, USDC, SOL, XRP, LTC, DOGE, ATOM, DOT, NEAR y más — conectado a la red Svitlo Chain, o a tu propio nodo.',
    footer:'© 2026 Svitlo Chain. Svitlo Wallet es software no custodial provisto tal cual.',
  },
  platform:{
    title:'Plataforma — Svitlo Chain',
    desc:'La plataforma Svitlo Chain — un mercado de GPU descentralizado para IA. Los clientes de Windows, macOS y Linux están en desarrollo.',
    eyebrow:'Plataforma Svitlo Chain', h1:'Un mercado de GPU descentralizado para IA',
    lede:'Libérate del monopolio de precios de GPU de las grandes nubes. Alquila GPU inactivas, o pon tu hardware a trabajar y gana ingresos reales — impulsado por IA, protegido por blockchain.',
    winSoon:'🪟 Windows — Próximamente', macSoon:'🍎 macOS — Próximamente', linuxSoon:'🐧 Linux — Próximamente',
    note:'El cliente de la plataforma aún no se ha lanzado — esta página pasará a descargas reales en cuanto lo haga. Mientras tanto, el wallet ya está disponible si quieres adelantarte.',
    ctaWallet:'Abrir el wallet →', ctaLearn:'Lee cómo funciona →',
    s1H3:'1. Instala el cliente', s1P:'Descarga el cliente de Svitlo Chain para tu sistema operativo y conecta tu GPU. Windows, macOS y Linux estarán todos soportados en el lanzamiento.',
    s2H3:'2. Conecta tu wallet', s2P:'Vincula una dirección de Svitlo Wallet — el mismo wallet no custodial ya <a href="/es/wallet/">disponible hoy</a> — para recibir ganancias o pagar por cómputo.',
    s3H3:'3. Empieza a ganar o desarrollar', s3P:'Los propietarios de GPU fijan precio y disponibilidad; los desarrolladores de IA despliegan tareas vía CLI o API. Todo se liquida en SVIT en Svitlo Chain.',
    devH3:'Para desarrolladores de IA', devP:'Despliega vía CLI o API, especifica tus requisitos de GPU, y paga solo por el cómputo realmente usado — sin contratos a largo plazo, sin compromisos mínimos.',
    gpuH3:'Para propietarios de GPU', gpuP:'Conecta hardware inactivo — equipo de gaming, minería o centro de datos — y gana ingresos pasivos. Tú fijas el precio, la ventana de disponibilidad y las especificaciones.',
    secH3:'Protegido por Svitlo Chain', secP:'Cada tarea se verifica criptográficamente y se liquida en SVIT en la blockchain Layer-1 propia de Svitlo Chain — sin intermediarios, sin sobreprecios.',
    footer:'© 2026 Svitlo Chain.',
  },
  documentation:{
    title:'Documentación — Svitlo Chain',
    desc:'Documentación de Svitlo Chain: white paper, plataforma, wallet y el lenguaje de contratos inteligentes SVIT.',
    eyebrow:'Documentación de Svitlo Chain', h1:'Todo sobre Svitlo Chain, en un solo lugar',
    lede:'White paper, referencia de la plataforma, guías del wallet y documentación de SVIT — el lenguaje de contratos inteligentes detrás de Svitlo Chain. Algunas secciones ya están disponibles; otras se marcarán a medida que se escriban.',
    wpH3:'📄 White Paper', wpP1:'El diseño técnico y económico de Svitlo Chain y SVIT — consenso, tokenomics y el modelo de burn/staking.',
    wpP2:'Próximamente. Mientras tanto, la tokenomics y la hoja de ruta ya están cubiertas en el <a href="/es/#token">sitio principal</a>.',
    platH3:'🖥️ Documentación de la plataforma', platP1:'Arquitectura, referencia de CLI y API para desarrolladores de IA, y guías de configuración para proveedores de GPU.',
    platP2:'Próximamente, junto con el propio cliente de la plataforma. Consulta el estado actual en la <a href="/es/platform/">página de Plataforma</a>.',
    svitH3:'🌐 Lenguaje SVIT', svitP1:'Documentación de referencia de SVIT, el lenguaje de contratos inteligentes que impulsa la lógica on-chain de Svitlo Chain.',
    svitP2:'Próximamente.',
    walletEyebrow:'👛 Documentación del Wallet', walletH2:'Svitlo Wallet — disponible hoy',
    walletLede:'El wallet es real y ya está en uso, así que aquí tienes la referencia real — no un marcador de posición.',
    startH3:'Primeros pasos', startP:'Abre el <a href="/es/wallet/">web wallet</a> en cualquier navegador y elige <strong>Crear nuevo</strong> o <strong>Restaurar desde frase</strong>, o instala la app Android (APK) o iOS (TestFlight). Tu frase de recuperación se muestra una sola vez, al crearla, y Svitlo Chain nunca la almacena en ningún lugar.',
    chainsH3:'Blockchains soportadas', chainsP:'SVIT, además de BTC, ETH, USDT, USDC, SOL, XRP, LTC, DOGE, ATOM, DOT y NEAR — envía, recibe y (para SVIT) haz staking, todo desde un solo wallet. El wallet se conecta por defecto a la red Svitlo Chain, o a un nodo que operes tú mismo.',
    secH3d:'Modelo de seguridad', secPd:'No custodial: las claves se generan y cifran en tu dispositivo (AES-256-GCM) y nunca lo abandonan. Svitlo Chain nunca ve tu frase de recuperación ni contraseña, y no puede recuperar un wallet por ti si ambas se pierden — consulta la <a href="/privacy/">política de privacidad</a> para el modelo de datos completo.',
    footer:'© 2026 Svitlo Chain.',
  },
},
};

D.fr = {
  htmlLang:'fr',
  nav:{platform:'Plateforme',wallet:'Wallet',documentation:'Documentation',privacy:'Confidentialité',support:'Support'},
  wallet:{
    title:'Wallet — Svitlo Chain',
    desc:'Svitlo Wallet — un wallet non-dépositaire pour SVIT, BTC, ETH et plus de 10 blockchains. Utilisez-le dès maintenant dans le navigateur, ou installez l’app Android/iOS.',
    eyebrow:'Svitlo Wallet', h1:'Votre wallet multi-chaînes non-dépositaire',
    lede:'Conservez, envoyez et recevez du SVIT ainsi que du BTC, ETH, USDT, SOL, XRP et plus — le tout dans un seul wallet. Vos clés sont générées et chiffrées sur votre appareil — nous ne les voyons jamais, ne les stockons jamais, et ne pouvons pas les récupérer pour vous.',
    ctaWeb:'Ouvrir le Web Wallet →', ctaAndroid:'Télécharger pour Android (APK)', ctaIOS:'iOS — Rejoindre la bêta TestFlight',
    note:'Le web wallet fonctionne entièrement dans le navigateur — rien à installer. Sur Android, vous devez autoriser une fois « installation de sources inconnues », cette version n’étant pas encore sur le Play Store. iOS nécessite l’app gratuite TestFlight.',
    ctaPrivacy:'Lire la politique de confidentialité →',
    webH3:'Web Wallet', webLi:['Ouvrez <a href="/app/">svitlochain.com/app</a> dans un navigateur moderne (ordinateur ou mobile).','Choisissez <strong>Créer un nouveau</strong> ou <strong>Restaurer depuis une phrase</strong>, et définissez un mot de passe.','Sauvegardez votre phrase de récupération — elle n’est affichée qu’une seule fois et n’est jamais stockée nulle part.'],
    webNote:'Optionnel : le menu de votre navigateur permet de l’« installer » comme icône d’app pour un accès en un geste — aucun app store nécessaire.',
    andH3:'Android', andLi:['Appuyez sur <strong>Télécharger pour Android</strong> ci-dessus pour obtenir l’APK.','Ouvrez le fichier téléchargé et autorisez « sources inconnues » si demandé (une seule fois).','Lancez Svitlo Wallet et créez ou restaurez votre wallet.'],
    iosH3:'iOS (bêta TestFlight)', iosLi:['Installez <strong>TestFlight</strong> depuis l’App Store si ce n’est pas déjà fait.','Appuyez sur <strong>Rejoindre la bêta TestFlight</strong> ci-dessus et acceptez l’invitation.','Installez Svitlo Wallet depuis TestFlight, puis créez ou restaurez votre wallet.'],
    f1H3:'Non-dépositaire', f1P:'Votre phrase de récupération et vos clés privées ne quittent jamais votre appareil. Votre coffre de clés est chiffré sur l’appareil (AES-256-GCM) avant même de toucher le disque.',
    f2H3:'Multi-plateforme', f2P:'Conçu pour navigateur, iOS, Android, macOS, Windows et Linux — le même wallet sur tous vos appareils.',
    f3H3:'Multi-chaînes', f3P:'Envoyez, recevez et stakez du SVIT, en plus de détenir et déplacer BTC, ETH, USDT, USDC, SOL, XRP, LTC, DOGE, ATOM, DOT, NEAR et plus — connecté au réseau Svitlo Chain, ou à votre propre nœud.',
    footer:'© 2026 Svitlo Chain. Svitlo Wallet est un logiciel non-dépositaire fourni tel quel.',
  },
  platform:{
    title:'Plateforme — Svitlo Chain',
    desc:'La plateforme Svitlo Chain — un marché de GPU décentralisé pour l’IA. Les clients Windows, macOS et Linux sont en développement.',
    eyebrow:'Plateforme Svitlo Chain', h1:'Un marché de GPU décentralisé pour l’IA',
    lede:'Libérez-vous du monopole des prix GPU du Big Cloud. Louez des GPU inactifs, ou mettez votre matériel au travail et gagnez un revenu réel — propulsé par l’IA, sécurisé par la blockchain.',
    winSoon:'🪟 Windows — Bientôt disponible', macSoon:'🍎 macOS — Bientôt disponible', linuxSoon:'🐧 Linux — Bientôt disponible',
    note:'Le client de la plateforme n’a pas encore été lancé — cette page passera à de vrais téléchargements dès que ce sera le cas. En attendant, le wallet est déjà disponible si vous voulez prendre de l’avance.',
    ctaWallet:'Ouvrir le wallet →', ctaLearn:'Découvrir comment ça marche →',
    s1H3:'1. Installez le client', s1P:'Téléchargez le client Svitlo Chain pour votre OS et connectez votre GPU. Windows, macOS et Linux seront tous pris en charge au lancement.',
    s2H3:'2. Connectez votre wallet', s2P:'Liez une adresse Svitlo Wallet — le même wallet non-dépositaire déjà <a href="/fr/wallet/">disponible aujourd’hui</a> — pour recevoir des gains ou payer du calcul.',
    s3H3:'3. Commencez à gagner ou développer', s3P:'Les propriétaires de GPU fixent le prix et la disponibilité ; les développeurs IA déploient des tâches via CLI ou API. Tout est réglé en SVIT sur Svitlo Chain.',
    devH3:'Pour les développeurs IA', devP:'Déployez via CLI ou API, précisez vos besoins en GPU, et ne payez que le calcul réellement utilisé — aucun contrat long terme, aucun engagement minimum.',
    gpuH3:'Pour les propriétaires de GPU', gpuP:'Connectez du matériel inactif — PC gaming, rig de minage, data center — et gagnez un revenu passif. Vous fixez le prix, la fenêtre de disponibilité et les spécifications.',
    secH3:'Sécurisé par Svitlo Chain', secP:'Chaque tâche est vérifiée cryptographiquement et réglée en SVIT sur la blockchain Layer-1 propre de Svitlo Chain — aucun intermédiaire, aucune marge cachée.',
    footer:'© 2026 Svitlo Chain.',
  },
  documentation:{
    title:'Documentation — Svitlo Chain',
    desc:'Documentation de Svitlo Chain : white paper, plateforme, wallet et le langage de smart contracts SVIT.',
    eyebrow:'Documentation Svitlo Chain', h1:'Tout sur Svitlo Chain, au même endroit',
    lede:'White paper, référence de la plateforme, guides du wallet et documentation de SVIT — le langage de smart contracts derrière Svitlo Chain. Certaines sections sont déjà disponibles ; d’autres seront signalées au fur et à mesure de leur rédaction.',
    wpH3:'📄 White Paper', wpP1:'La conception technique et économique de Svitlo Chain et SVIT — consensus, tokenomics et modèle de burn/staking.',
    wpP2:'Bientôt disponible. En attendant, la tokenomics et la feuille de route sont déjà couvertes sur le <a href="/fr/#token">site principal</a>.',
    platH3:'🖥️ Documentation de la plateforme', platP1:'Architecture, référence CLI et API pour les développeurs IA, et guides de configuration pour les fournisseurs de GPU.',
    platP2:'Bientôt disponible, en même temps que le client de la plateforme lui-même. Voir l’état actuel sur la <a href="/fr/platform/">page Plateforme</a>.',
    svitH3:'🌐 Langage SVIT', svitP1:'Documentation de référence pour SVIT, le langage de smart contracts qui alimente la logique on-chain de Svitlo Chain.',
    svitP2:'Bientôt disponible.',
    walletEyebrow:'👛 Documentation du Wallet', walletH2:'Svitlo Wallet — disponible dès aujourd’hui',
    walletLede:'Le wallet est réel et déjà utilisable, voici donc la vraie référence — pas un espace réservé.',
    startH3:'Premiers pas', startP:'Ouvrez le <a href="/fr/wallet/">web wallet</a> dans n’importe quel navigateur et choisissez <strong>Créer un nouveau</strong> ou <strong>Restaurer depuis une phrase</strong>, ou installez l’app Android (APK) ou iOS (TestFlight). Votre phrase de récupération est affichée une seule fois, à la création, et n’est jamais stockée nulle part par Svitlo Chain.',
    chainsH3:'Blockchains prises en charge', chainsP:'SVIT, plus BTC, ETH, USDT, USDC, SOL, XRP, LTC, DOGE, ATOM, DOT et NEAR — envoyez, recevez et (pour SVIT) stakez, le tout depuis un seul wallet. Le wallet se connecte par défaut au réseau Svitlo Chain, ou à un nœud que vous gérez vous-même.',
    secH3d:'Modèle de sécurité', secPd:'Non-dépositaire : les clés sont générées et chiffrées sur votre appareil (AES-256-GCM) et ne le quittent jamais. Svitlo Chain ne voit jamais votre phrase de récupération ni votre mot de passe, et ne peut pas récupérer un wallet pour vous si les deux sont perdus — voir la <a href="/privacy/">politique de confidentialité</a> pour le modèle de données complet.',
    footer:'© 2026 Svitlo Chain.',
  },
};

D.fi = {
  htmlLang:'fi',
  nav:{platform:'Alusta',wallet:'Lompakko',documentation:'Dokumentaatio',privacy:'Tietosuoja',support:'Tuki'},
  wallet:{
    title:'Lompakko — Svitlo Chain',
    desc:'Svitlo Wallet — säilytyksetön lompakko SVIT:lle, BTC:lle, ETH:lle ja yli 10 lohkoketjulle. Käytä heti selaimessa tai asenna Android/iOS-sovellus.',
    eyebrow:'Svitlo Wallet', h1:'Säilytyksetön monilohkoketjulompakkosi',
    lede:'Säilytä, lähetä ja vastaanota SVIT:iä sekä BTC:tä, ETH:ta, USDT:tä, SOL:ia, XRP:tä ja muita — kaikki yhdessä lompakossa. Avaimesi luodaan ja salataan laitteellasi — emme koskaan näe niitä, emme koskaan tallenna niitä, emmekä voi palauttaa niitä puolestasi.',
    ctaWeb:'Avaa Web-lompakko →', ctaAndroid:'Lataa Androidille (APK)', ctaIOS:'iOS — Liity TestFlight-betaan',
    note:'Web-lompakko toimii kokonaan selaimessa — ei mitään asennettavaa. Androidilla sinun täytyy kerran sallia "asennus tuntemattomista lähteistä", koska tätä versiota ei vielä ole Play Kaupassa. iOS vaatii ilmaisen TestFlight-sovelluksen.',
    ctaPrivacy:'Lue tietosuojakäytäntö →',
    webH3:'Web-lompakko', webLi:['Avaa <a href="/app/">svitlochain.com/app</a> missä tahansa nykyaikaisessa selaimessa (tietokone tai mobiili).','Valitse <strong>Luo uusi</strong> tai <strong>Palauta lauseesta</strong>, ja aseta salasana.','Tallenna palautuslauseesi — se näytetään vain kerran eikä sitä koskaan tallenneta minnekään.'],
    webNote:'Valinnainen: selaimesi valikosta voit "asentaa" sen sovelluskuvakkeeksi yhden napautuksen käyttöä varten — ei sovelluskauppaa tarvita.',
    andH3:'Android', andLi:['Napauta yllä <strong>Lataa Androidille</strong> saadaksesi APK:n.','Avaa ladattu tiedosto ja salli "asennus tuntemattomista lähteistä" kysyttäessä (vain kerran).','Käynnistä Svitlo Wallet ja luo tai palauta lompakkosi.'],
    iosH3:'iOS (TestFlight-beta)', iosLi:['Asenna <strong>TestFlight</strong> App Storesta, jos sitä ei vielä ole.','Napauta yllä <strong>Liity TestFlight-betaan</strong> ja hyväksy kutsu.','Asenna Svitlo Wallet TestFlightin kautta, ja luo tai palauta sitten lompakkosi.'],
    f1H3:'Säilytyksetön', f1P:'Palautuslauseesi ja yksityiset avaimesi eivät koskaan poistu laitteeltasi. Avainsäiliösi salataan laitteella (AES-256-GCM) ennen kuin se edes koskettaa levyä.',
    f2H3:'Monialustainen', f2P:'Rakennettu selaimelle, iOS:lle, Androidille, macOS:lle, Windowsille ja Linuxille — sama lompakko kaikilla laitteillasi.',
    f3H3:'Monilohkoketju', f3P:'Lähetä, vastaanota ja stakea SVIT:iä sekä pidä hallussa ja siirrä BTC:tä, ETH:ta, USDT:tä, USDC:tä, SOL:ia, XRP:tä, LTC:tä, DOGE:a, ATOM:ia, DOT:ia, NEAR:ia ja muita — yhdistettynä Svitlo Chain -verkkoon tai omaan noodiisi.',
    footer:'© 2026 Svitlo Chain. Svitlo Wallet on säilytyksetön ohjelmisto, joka toimitetaan sellaisenaan.',
  },
  platform:{
    title:'Alusta — Svitlo Chain',
    desc:'Svitlo Chain -alusta — hajautettu GPU-markkinapaikka tekoälylle. Windows-, macOS- ja Linux-asiakasohjelmat ovat kehitteillä.',
    eyebrow:'Svitlo Chain -alusta', h1:'Hajautettu GPU-markkinapaikka tekoälylle',
    lede:'Vapaudu suurten pilvitoimijoiden GPU-hintamonopolista. Vuokraa käyttämättömiä GPU:ita tai laita omat laitteesi töihin ja ansaitse oikeaa tuloa — tekoälyn voimin, lohkoketjun turvaamana.',
    winSoon:'🪟 Windows — Tulossa pian', macSoon:'🍎 macOS — Tulossa pian', linuxSoon:'🐧 Linux — Tulossa pian',
    note:'Alustan asiakasohjelmaa ei ole vielä julkaistu — tämä sivu vaihtuu oikeisiin latauksiin heti kun se julkaistaan. Sillä välin lompakko on jo saatavilla, jos haluat valmistautua etukäteen.',
    ctaWallet:'Avaa lompakko →', ctaLearn:'Lue, miten se toimii →',
    s1H3:'1. Asenna asiakasohjelma', s1P:'Lataa Svitlo Chain -asiakasohjelma käyttöjärjestelmällesi ja yhdistä GPU:si. Windows, macOS ja Linux tuetaan kaikki julkaisussa.',
    s2H3:'2. Yhdistä lompakkosi', s2P:'Liitä Svitlo Wallet -osoite — sama säilytyksetön lompakko, joka on jo <a href="/fi/wallet/">käytettävissä tänään</a> — ansioiden vastaanottamiseen tai laskentatehon maksamiseen.',
    s3H3:'3. Ala ansaita tai kehittää', s3P:'GPU:iden omistajat asettavat hinnan ja saatavuuden; tekoälykehittäjät jaottelevat töitä CLI:n tai API:n kautta. Kaikki selvitetään SVIT:issä Svitlo Chainilla.',
    devH3:'Tekoälykehittäjille', devP:'Ota käyttöön CLI:n tai API:n kautta, määrittele GPU-vaatimuksesi ja maksa vain todella käytetystä laskentatehosta — ei pitkäaikaisia sopimuksia, ei minimisitoumuksia.',
    gpuH3:'GPU:iden omistajille', gpuP:'Yhdistä käyttämätöntä laitteistoa — pelikone, louhintalaite, konesali — ja ansaitse passiivista tuloa. Sinä asetat hinnan, saatavuusikkunan ja laitteistospesifikaatiot.',
    secH3:'Svitlo Chainin turvaama', secP:'Jokainen työ varmennetaan kryptografisesti ja selvitetään SVIT:issä Svitlo Chainin omalla Layer-1-lohkoketjulla — ei välikäsiä, ei ylihinnoittelua.',
    footer:'© 2026 Svitlo Chain.',
  },
  documentation:{
    title:'Dokumentaatio — Svitlo Chain',
    desc:'Svitlo Chainin dokumentaatio: white paper, alusta, lompakko ja SVIT-älysopimuskieli.',
    eyebrow:'Svitlo Chainin dokumentaatio', h1:'Kaikki Svitlo Chainista, yhdessä paikassa',
    lede:'White paper, alustan viiteopas, lompakko-oppaat ja dokumentaatio SVIT:istä — Svitlo Chainin taustalla olevasta älysopimuskielestä. Osa osioista on jo käytettävissä; muut merkitään sitä mukaa kun ne kirjoitetaan.',
    wpH3:'📄 White Paper', wpP1:'Svitlo Chainin ja SVIT:in tekninen ja taloudellinen suunnittelu — konsensus, tokenomiikka ja poltto-/stakemalli.',
    wpP2:'Tulossa pian. Sillä välin tokenomiikka ja etenemissuunnitelma on jo käsitelty <a href="/fi/#token">pääsivustolla</a>.',
    platH3:'🖥️ Alustan dokumentaatio', platP1:'Arkkitehtuuri, CLI- ja API-viitteet tekoälykehittäjille sekä asennusoppaat GPU-tarjoajille.',
    platP2:'Tulossa pian yhdessä itse alustan asiakasohjelman kanssa. Katso nykytila <a href="/fi/platform/">Alusta-sivulta</a>.',
    svitH3:'🌐 SVIT-kieli', svitP1:'Viitedokumentaatio SVIT:istä, älysopimuskielestä, joka pyörittää Svitlo Chainin ketjun sisäistä logiikkaa.',
    svitP2:'Tulossa pian.',
    walletEyebrow:'👛 Lompakon dokumentaatio', walletH2:'Svitlo Wallet — käytettävissä jo tänään',
    walletLede:'Lompakko on oikea ja jo käytössä, joten tässä on aito viiteopas — ei paikkamerkkiä.',
    startH3:'Aloittaminen', startP:'Avaa <a href="/fi/wallet/">web-lompakko</a> missä tahansa selaimessa ja valitse <strong>Luo uusi</strong> tai <strong>Palauta lauseesta</strong>, tai asenna Android- (APK) tai iOS-sovellus (TestFlight). Palautuslauseesi näytetään vain kerran, luontihetkellä, eikä Svitlo Chain koskaan tallenna sitä minnekään.',
    chainsH3:'Tuetut lohkoketjut', chainsP:'SVIT sekä BTC, ETH, USDT, USDC, SOL, XRP, LTC, DOGE, ATOM, DOT ja NEAR — lähetä, vastaanota ja (SVIT:lle) stakea, kaikki yhdestä lompakosta. Lompakko yhdistää oletuksena Svitlo Chain -verkkoon tai itse ylläpitämääsi noodiin.',
    secH3d:'Turvallisuusmalli', secPd:'Säilytyksetön: avaimet luodaan ja salataan laitteellasi (AES-256-GCM) eivätkä ne koskaan poistu siltä. Svitlo Chain ei koskaan näe palautuslausettasi tai salasanaasi, eikä voi palauttaa lompakkoa puolestasi, jos molemmat katoavat — katso täydellinen tietomalli <a href="/privacy/">tietosuojakäytännöstä</a>.',
    footer:'© 2026 Svitlo Chain.',
  },
};

D.pt = {
  htmlLang:'pt',
  nav:{platform:'Plataforma',wallet:'Wallet',documentation:'Documentação',privacy:'Privacidade',support:'Suporte'},
  wallet:{
    title:'Wallet — Svitlo Chain',
    desc:'Svitlo Wallet — uma wallet não-custodial para SVIT, BTC, ETH e mais de 10 blockchains. Use agora no navegador ou instale o app Android/iOS.',
    eyebrow:'Svitlo Wallet', h1:'A sua wallet multichain não-custodial',
    lede:'Guarde, envie e receba SVIT junto com BTC, ETH, USDT, SOL, XRP e mais — tudo numa única wallet. As suas chaves são geradas e criptografadas no seu dispositivo — nunca as vemos, nunca as armazenamos e não podemos recuperá-las por si.',
    ctaWeb:'Abrir Web Wallet →', ctaAndroid:'Baixar para Android (APK)', ctaIOS:'iOS — Entrar na beta TestFlight',
    note:'A web wallet funciona inteiramente no navegador — nada para instalar. No Android é preciso permitir uma vez a "instalação de fontes desconhecidas", já que esta versão ainda não está na Play Store. O iOS requer o app gratuito TestFlight.',
    ctaPrivacy:'Ler a política de privacidade →',
    webH3:'Web Wallet', webLi:['Abra <a href="/app/">svitlochain.com/app</a> em qualquer navegador moderno (desktop ou móvel).','Escolha <strong>Criar nova</strong> ou <strong>Restaurar a partir de frase</strong>, e defina uma senha.','Guarde a sua frase de recuperação — ela é mostrada apenas uma vez e nunca é armazenada em nenhum lugar.'],
    webNote:'Opcional: o menu do seu navegador permite "instalá-la" como ícone de app para acesso com um toque — nenhuma loja de apps necessária.',
    andH3:'Android', andLi:['Toque em <strong>Baixar para Android</strong> acima para obter o APK.','Abra o arquivo baixado e permita "instalação de fontes desconhecidas" quando solicitado (apenas uma vez).','Abra a Svitlo Wallet e crie ou restaure a sua wallet.'],
    iosH3:'iOS (beta TestFlight)', iosLi:['Instale o <strong>TestFlight</strong> pela App Store, se ainda não tiver.','Toque em <strong>Entrar na beta TestFlight</strong> acima e aceite o convite.','Instale a Svitlo Wallet pelo TestFlight e, depois, crie ou restaure a sua wallet.'],
    f1H3:'Não-custodial', f1P:'A sua frase de recuperação e chaves privadas nunca saem do seu dispositivo. O seu keystore é criptografado no dispositivo (AES-256-GCM) antes mesmo de tocar no disco.',
    f2H3:'Multiplataforma', f2P:'Construída para navegador, iOS, Android, macOS, Windows e Linux — a mesma wallet em todos os seus dispositivos.',
    f3H3:'Multichain', f3P:'Envie, receba e faça staking de SVIT, além de guardar e movimentar BTC, ETH, USDT, USDC, SOL, XRP, LTC, DOGE, ATOM, DOT, NEAR e mais — conectado à rede Svitlo Chain, ou ao seu próprio nó.',
    footer:'© 2026 Svitlo Chain. A Svitlo Wallet é um software não-custodial fornecido tal como está.',
  },
  platform:{
    title:'Plataforma — Svitlo Chain',
    desc:'A plataforma Svitlo Chain — um mercado de GPU descentralizado para IA. Clientes para Windows, macOS e Linux estão em desenvolvimento.',
    eyebrow:'Plataforma Svitlo Chain', h1:'Um mercado de GPU descentralizado para IA',
    lede:'Liberte-se do monopólio de preços de GPU das grandes nuvens. Alugue GPUs ociosas, ou coloque o seu hardware para trabalhar e ganhe renda real — impulsionado por IA, protegido por blockchain.',
    winSoon:'🪟 Windows — Em breve', macSoon:'🍎 macOS — Em breve', linuxSoon:'🐧 Linux — Em breve',
    note:'O cliente da plataforma ainda não foi lançado — esta página mudará para downloads reais assim que estiver disponível. Enquanto isso, a wallet já está disponível se quiser adiantar-se.',
    ctaWallet:'Abrir a wallet →', ctaLearn:'Veja como funciona →',
    s1H3:'1. Instale o cliente', s1P:'Baixe o cliente Svitlo Chain para o seu sistema operacional e conecte a sua GPU. Windows, macOS e Linux serão todos suportados no lançamento.',
    s2H3:'2. Conecte a sua wallet', s2P:'Vincule um endereço Svitlo Wallet — a mesma wallet não-custodial já <a href="/pt/wallet/">disponível hoje</a> — para receber ganhos ou pagar por computação.',
    s3H3:'3. Comece a ganhar ou desenvolver', s3P:'Os proprietários de GPU definem preço e disponibilidade; desenvolvedores de IA distribuem tarefas via CLI ou API. Tudo é liquidado em SVIT na Svitlo Chain.',
    devH3:'Para desenvolvedores de IA', devP:'Implante via CLI ou API, especifique os seus requisitos de GPU e pague apenas pela computação realmente usada — sem contratos de longo prazo, sem compromissos mínimos.',
    gpuH3:'Para proprietários de GPU', gpuP:'Conecte hardware ocioso — rig de jogos, rig de mineração, data center — e ganhe renda passiva. Você define o preço, a janela de disponibilidade e as especificações do hardware.',
    secH3:'Protegido pela Svitlo Chain', secP:'Cada tarefa é verificada criptograficamente e liquidada em SVIT na blockchain Layer-1 própria da Svitlo Chain — sem intermediários, sem sobretaxas.',
    footer:'© 2026 Svitlo Chain.',
  },
  documentation:{
    title:'Documentação — Svitlo Chain',
    desc:'Documentação da Svitlo Chain: white paper, plataforma, wallet e a linguagem de smart contracts SVIT.',
    eyebrow:'Documentação Svitlo Chain', h1:'Tudo sobre a Svitlo Chain, num só lugar',
    lede:'White paper, referência da plataforma, guias da wallet e documentação do SVIT — a linguagem de smart contracts por trás da Svitlo Chain. Algumas seções já estão disponíveis; outras serão marcadas à medida que forem escritas.',
    wpH3:'📄 White Paper', wpP1:'O design técnico e econômico da Svitlo Chain e do SVIT — consenso, tokenomics e o modelo de burn/staking.',
    wpP2:'Em breve. Enquanto isso, a tokenomics e o roadmap já estão cobertos no <a href="/pt/#token">site principal</a>.',
    platH3:'🖥️ Documentação da plataforma', platP1:'Arquitetura, referência de CLI e API para desenvolvedores de IA, e guias de configuração para provedores de GPU.',
    platP2:'Em breve, junto com o próprio cliente da plataforma. Veja o estado atual na <a href="/pt/platform/">página Plataforma</a>.',
    svitH3:'🌐 Linguagem SVIT', svitP1:'Documentação de referência para o SVIT, a linguagem de smart contracts que alimenta a lógica on-chain da Svitlo Chain.',
    svitP2:'Em breve.',
    walletEyebrow:'👛 Documentação da Wallet', walletH2:'Svitlo Wallet — disponível hoje',
    walletLede:'A wallet é real e já está em uso, então aqui está a referência real — não um placeholder.',
    startH3:'Primeiros passos', startP:'Abra a <a href="/pt/wallet/">web wallet</a> em qualquer navegador e escolha <strong>Criar nova</strong> ou <strong>Restaurar a partir de frase</strong>, ou instale o app Android (APK) ou iOS (TestFlight). A sua frase de recuperação é mostrada apenas uma vez, na criação, e nunca é armazenada em nenhum lugar pela Svitlo Chain.',
    chainsH3:'Blockchains suportadas', chainsP:'SVIT, além de BTC, ETH, USDT, USDC, SOL, XRP, LTC, DOGE, ATOM, DOT e NEAR — envie, receba e (para SVIT) faça staking, tudo a partir de uma única wallet. A wallet conecta-se por padrão à rede Svitlo Chain, ou a um nó que você mesmo administra.',
    secH3d:'Modelo de segurança', secPd:'Não-custodial: as chaves são geradas e criptografadas no seu dispositivo (AES-256-GCM) e nunca o deixam. A Svitlo Chain nunca vê a sua frase de recuperação ou senha, e não pode recuperar uma wallet por si caso ambas se percam — veja a <a href="/privacy/">política de privacidade</a> para o modelo de dados completo.',
    footer:'© 2026 Svitlo Chain.',
  },
};

D.ja = {
  htmlLang:'ja',
  nav:{platform:'プラットフォーム',wallet:'ウォレット',documentation:'ドキュメント',privacy:'プライバシー',support:'サポート'},
  wallet:{
    title:'ウォレット — Svitlo Chain',
    desc:'Svitlo Wallet — SVIT、BTC、ETHなど10以上のブロックチェーンに対応した非管理型ウォレット。ブラウザですぐに使えるほか、Android/iOSアプリもインストール可能です。',
    eyebrow:'Svitlo Wallet', h1:'非管理型マルチチェーンウォレット',
    lede:'SVITをBTC、ETH、USDT、SOL、XRPなどと一緒に保管・送受信 — すべて1つのウォレットで。秘密鍵はお使いのデバイス上で生成・暗号化され、当社が閲覧・保存することは一切なく、代わりに復元することもできません。',
    ctaWeb:'Webウォレットを開く →', ctaAndroid:'Android用をダウンロード (APK)', ctaIOS:'iOS — TestFlightベータに参加',
    note:'Webウォレットはブラウザ内で完結し、インストール不要です。Androidでは、このビルドがまだPlayストアにないため「提供元不明のアプリ」を一度だけ許可する必要があります。iOSでは無料のTestFlightアプリが必要です。',
    ctaPrivacy:'プライバシーポリシーを読む →',
    webH3:'Webウォレット', webLi:['最新のブラウザ(デスクトップまたはモバイル)で<a href="/app/">svitlochain.com/app</a>を開きます。','<strong>新規作成</strong>または<strong>フレーズから復元</strong>を選び、パスワードを設定します。','リカバリーフレーズを保存してください — 一度しか表示されず、どこにも保存されません。'],
    webNote:'任意: ブラウザのメニューからアプリアイコンとして「インストール」すればワンタップでアクセスできます — アプリストアは不要です。',
    andH3:'Android', andLi:['上の<strong>Android用をダウンロード</strong>をタップしてAPKを取得します。','ダウンロードしたファイルを開き、求められたら「提供元不明のアプリ」を許可します(一度のみ)。','Svitlo Walletを起動し、ウォレットを作成または復元します。'],
    iosH3:'iOS (TestFlightベータ)', iosLi:['まだの場合はApp Storeから<strong>TestFlight</strong>をインストールします。','上の<strong>TestFlightベータに参加</strong>をタップして招待を承認します。','TestFlightからSvitlo Walletをインストールし、ウォレットを作成または復元します。'],
    f1H3:'非管理型', f1P:'リカバリーフレーズと秘密鍵はお使いのデバイスから外部に出ることはありません。キーストアはディスクに書き込まれる前にデバイス上で暗号化されます (AES-256-GCM)。',
    f2H3:'マルチプラットフォーム', f2P:'ブラウザ、iOS、Android、macOS、Windows、Linuxに対応 — すべてのデバイスで同じウォレットを使用できます。',
    f3H3:'マルチチェーン', f3P:'SVITの送受信・ステーキングに加え、BTC、ETH、USDT、USDC、SOL、XRP、LTC、DOGE、ATOM、DOT、NEARなどを保有・移動可能 — Svitlo Chainネットワーク、または自分のノードに接続できます。',
    footer:'© 2026 Svitlo Chain. Svitlo Walletは現状有姿で提供される非管理型ソフトウェアです。',
  },
  platform:{
    title:'プラットフォーム — Svitlo Chain',
    desc:'Svitlo Chainプラットフォーム — AIのための分散型GPUマーケットプレイス。Windows、macOS、Linuxクライアントは開発中です。',
    eyebrow:'Svitlo Chainプラットフォーム', h1:'AIのための分散型GPUマーケットプレイス',
    lede:'大手クラウドのGPU価格独占から解放されましょう。遊休GPUをレンタルするか、自分のハードウェアを稼働させて実収入を得る — AIが動力源、ブロックチェーンが安全性の担保です。',
    winSoon:'🪟 Windows — 近日公開', macSoon:'🍎 macOS — 近日公開', linuxSoon:'🐧 Linux — 近日公開',
    note:'プラットフォームクライアントはまだリリースされていません — 公開され次第、このページは実際のダウンロードに切り替わります。事前に準備しておきたい方は、既に利用可能なウォレットをご利用ください。',
    ctaWallet:'ウォレットを開く →', ctaLearn:'仕組みを読む →',
    s1H3:'1. クライアントをインストール', s1P:'お使いのOS向けにSvitlo Chainクライアントをダウンロードし、GPUを接続します。ローンチ時にはWindows、macOS、Linuxすべてに対応します。',
    s2H3:'2. ウォレットを接続', s2P:'Svitlo Walletアドレスをリンクします — 既に<a href="/ja/wallet/">今日から利用可能</a>な同じ非管理型ウォレットで、収益の受け取りや計算リソースの支払いに使用します。',
    s3H3:'3. 稼ぐ、または開発を始める', s3P:'GPU所有者は価格と稼働可能時間を設定し、AI開発者はCLIまたはAPI経由でジョブをデプロイします。すべてSvitlo Chain上でSVITにより決済されます。',
    devH3:'AI開発者向け', devP:'CLIまたはAPI経由でデプロイし、GPU要件を指定し、実際に使用した計算リソースの分だけ支払います — 長期契約も最低利用条件もありません。',
    gpuH3:'GPU所有者向け', gpuP:'ゲーミングリグ、マイニングリグ、データセンターなど遊休ハードウェアを接続し、受動的収入を得ましょう。価格、稼働可能時間帯、ハードウェア仕様はご自身で設定できます。',
    secH3:'Svitlo Chainによる保護', secP:'すべてのジョブは暗号学的に検証され、Svitlo Chain独自のLayer-1ブロックチェーン上でSVITにより決済されます — 仲介者なし、上乗せ料金なし。',
    footer:'© 2026 Svitlo Chain.',
  },
  documentation:{
    title:'ドキュメント — Svitlo Chain',
    desc:'Svitlo Chainのドキュメント: ホワイトペーパー、プラットフォーム、ウォレット、SVITスマートコントラクト言語。',
    eyebrow:'Svitlo Chainドキュメント', h1:'Svitlo Chainのすべてを1か所に',
    lede:'ホワイトペーパー、プラットフォームリファレンス、ウォレットガイド、そしてSvitlo Chainを支えるスマートコントラクト言語SVITのドキュメント。既に公開済みのセクションもあれば、執筆が完了次第公開されるセクションもあります。',
    wpH3:'📄 ホワイトペーパー', wpP1:'Svitlo ChainとSVITの技術的・経済的設計 — コンセンサス、トークノミクス、バーン/ステーキングモデル。',
    wpP2:'近日公開。それまでの間、トークノミクスとロードマップは<a href="/ja/#token">メインサイト</a>で既にご覧いただけます。',
    platH3:'🖥️ プラットフォームドキュメント', platP1:'AI開発者向けのアーキテクチャ、CLI・APIリファレンス、およびGPU提供者向けのセットアップガイド。',
    platP2:'プラットフォームクライアント本体と共に近日公開予定です。現在の状況は<a href="/ja/platform/">プラットフォームページ</a>をご覧ください。',
    svitH3:'🌐 SVIT言語', svitP1:'Svitlo Chainのオンチェーンロジックを支えるスマートコントラクト言語SVITのリファレンスドキュメント。',
    svitP2:'近日公開。',
    walletEyebrow:'👛 ウォレットドキュメント', walletH2:'Svitlo Wallet — 今日から利用可能',
    walletLede:'ウォレットは実在し、既に利用可能です。そのため、ここではプレースホルダーではなく実際のリファレンスをご紹介します。',
    startH3:'はじめに', startP:'任意のブラウザで<a href="/ja/wallet/">Webウォレット</a>を開き、<strong>新規作成</strong>または<strong>フレーズから復元</strong>を選択するか、Android (APK) またはiOS (TestFlight) アプリをインストールします。リカバリーフレーズは作成時に一度だけ表示され、Svitlo Chainがどこかに保存することは決してありません。',
    chainsH3:'対応ブロックチェーン', chainsP:'SVITに加え、BTC、ETH、USDT、USDC、SOL、XRP、LTC、DOGE、ATOM、DOT、NEAR — 送金、受取、(SVITについては) ステーキングまで、すべて1つのウォレットから行えます。ウォレットはデフォルトでSvitlo Chainネットワークに接続しますが、自分で運用するノードに接続することもできます。',
    secH3d:'セキュリティモデル', secPd:'非管理型: 秘密鍵はお使いのデバイス上で生成・暗号化され (AES-256-GCM)、外部に出ることはありません。Svitlo Chainがリカバリーフレーズやパスワードを見ることは決してなく、両方を紛失した場合にウォレットを代わりに復元することもできません — 完全なデータモデルについては<a href="/privacy/">プライバシーポリシー</a>をご覧ください。',
    footer:'© 2026 Svitlo Chain.',
  },
};

D.ko = {
  htmlLang:'ko',
  nav:{platform:'플랫폼',wallet:'월렛',documentation:'문서',privacy:'개인정보',support:'지원'},
  wallet:{
    title:'월렛 — Svitlo Chain',
    desc:'Svitlo Wallet — SVIT, BTC, ETH 등 10개 이상의 블록체인을 지원하는 비수탁형 월렛. 지금 바로 브라우저에서 사용하거나 Android/iOS 앱을 설치하세요.',
    eyebrow:'Svitlo Wallet', h1:'비수탁형 멀티체인 월렛',
    lede:'SVIT을 BTC, ETH, USDT, SOL, XRP 등과 함께 보관, 전송, 수신하세요 — 모두 하나의 월렛에서. 개인 키는 사용자의 기기에서 생성 및 암호화되며, 저희는 이를 절대 보거나 저장하지 않으며 대신 복구해 드릴 수도 없습니다.',
    ctaWeb:'웹 월렛 열기 →', ctaAndroid:'Android용 다운로드 (APK)', ctaIOS:'iOS — TestFlight 베타 참여',
    note:'웹 월렛은 브라우저에서 완전히 동작하며 설치가 필요 없습니다. Android에서는 이 빌드가 아직 Play 스토어에 없으므로 "출처를 알 수 없는 앱 설치"를 한 번 허용해야 합니다. iOS에서는 무료 TestFlight 앱이 필요합니다.',
    ctaPrivacy:'개인정보 처리방침 읽기 →',
    webH3:'웹 월렛', webLi:['최신 브라우저(데스크톱 또는 모바일)에서 <a href="/app/">svitlochain.com/app</a>을 엽니다.','<strong>새로 만들기</strong> 또는 <strong>구문으로 복원</strong>을 선택하고 비밀번호를 설정합니다.','복구 구문을 저장하세요 — 한 번만 표시되며 어디에도 저장되지 않습니다.'],
    webNote:'선택 사항: 브라우저 메뉴에서 앱 아이콘으로 "설치"하면 한 번의 탭으로 접근할 수 있습니다 — 앱 스토어가 필요 없습니다.',
    andH3:'Android', andLi:['위의 <strong>Android용 다운로드</strong>를 눌러 APK를 받습니다.','다운로드한 파일을 열고 요청 시 "출처를 알 수 없는 앱 설치"를 허용합니다(한 번만).','Svitlo Wallet을 실행하고 월렛을 생성하거나 복원합니다.'],
    iosH3:'iOS (TestFlight 베타)', iosLi:['아직 없다면 App Store에서 <strong>TestFlight</strong>를 설치합니다.','위의 <strong>TestFlight 베타 참여</strong>를 눌러 초대를 수락합니다.','TestFlight를 통해 Svitlo Wallet을 설치한 후, 월렛을 생성하거나 복원합니다.'],
    f1H3:'비수탁형', f1P:'복구 구문과 개인 키는 절대 기기 밖으로 나가지 않습니다. 키스토어는 디스크에 기록되기 전에 기기에서 암호화됩니다 (AES-256-GCM).',
    f2H3:'멀티플랫폼', f2P:'브라우저, iOS, Android, macOS, Windows, Linux용으로 제작 — 모든 기기에서 동일한 월렛을 사용할 수 있습니다.',
    f3H3:'멀티체인', f3P:'SVIT을 전송, 수신 및 스테이킹하고, BTC, ETH, USDT, USDC, SOL, XRP, LTC, DOGE, ATOM, DOT, NEAR 등을 보유 및 이동할 수 있습니다 — Svitlo Chain 네트워크 또는 자체 운영 노드에 연결됩니다.',
    footer:'© 2026 Svitlo Chain. Svitlo Wallet은 있는 그대로 제공되는 비수탁형 소프트웨어입니다.',
  },
  platform:{
    title:'플랫폼 — Svitlo Chain',
    desc:'Svitlo Chain 플랫폼 — AI를 위한 탈중앙화 GPU 마켓플레이스. Windows, macOS, Linux 클라이언트는 개발 중입니다.',
    eyebrow:'Svitlo Chain 플랫폼', h1:'AI를 위한 탈중앙화 GPU 마켓플레이스',
    lede:'대형 클라우드의 GPU 가격 독점에서 벗어나세요. 유휴 GPU를 대여하거나, 자신의 하드웨어를 가동해 실질적인 수익을 올리세요 — AI가 동력을, 블록체인이 보안을 담당합니다.',
    winSoon:'🪟 Windows — 출시 예정', macSoon:'🍎 macOS — 출시 예정', linuxSoon:'🐧 Linux — 출시 예정',
    note:'플랫폼 클라이언트는 아직 출시되지 않았습니다 — 출시되는 즉시 이 페이지는 실제 다운로드로 전환됩니다. 그동안 미리 준비하고 싶다면 이미 사용 가능한 월렛을 이용하세요.',
    ctaWallet:'월렛 열기 →', ctaLearn:'작동 방식 알아보기 →',
    s1H3:'1. 클라이언트 설치', s1P:'사용 중인 OS용 Svitlo Chain 클라이언트를 다운로드하고 GPU를 연결하세요. 출시 시 Windows, macOS, Linux 모두 지원됩니다.',
    s2H3:'2. 월렛 연결', s2P:'수익을 받거나 컴퓨팅 비용을 지불하기 위해 Svitlo Wallet 주소를 연결하세요 — <a href="/ko/wallet/">오늘 이미 사용 가능한</a> 동일한 비수탁형 월렛입니다.',
    s3H3:'3. 수익 창출 또는 개발 시작', s3P:'GPU 소유자는 가격과 가용성을 설정하고, AI 개발자는 CLI 또는 API를 통해 작업을 배포합니다. 모든 정산은 Svitlo Chain에서 SVIT으로 이루어집니다.',
    devH3:'AI 개발자를 위한', devP:'CLI 또는 API를 통해 배포하고, GPU 요구 사항을 지정하고, 실제로 사용한 컴퓨팅만큼만 지불하세요 — 장기 계약도, 최소 약정도 없습니다.',
    gpuH3:'GPU 소유자를 위한', gpuP:'게이밍 리그, 마이닝 리그, 데이터센터 등 유휴 하드웨어를 연결해 수동 수익을 창출하세요. 가격, 가용 시간대, 하드웨어 사양은 직접 설정합니다.',
    secH3:'Svitlo Chain으로 보호', secP:'모든 작업은 암호학적으로 검증되며 Svitlo Chain 고유의 Layer-1 블록체인에서 SVIT으로 정산됩니다 — 중개자도, 웃돈도 없습니다.',
    footer:'© 2026 Svitlo Chain.',
  },
  documentation:{
    title:'문서 — Svitlo Chain',
    desc:'Svitlo Chain 문서: 백서, 플랫폼, 월렛, SVIT 스마트 컨트랙트 언어.',
    eyebrow:'Svitlo Chain 문서', h1:'Svitlo Chain에 관한 모든 것을 한 곳에서',
    lede:'백서, 플랫폼 레퍼런스, 월렛 가이드, 그리고 Svitlo Chain을 움직이는 스마트 컨트랙트 언어 SVIT의 문서. 일부 섹션은 이미 제공 중이며, 나머지는 작성이 완료되는 대로 표시됩니다.',
    wpH3:'📄 백서', wpP1:'Svitlo Chain과 SVIT의 기술적, 경제적 설계 — 합의, 토크노믹스, 소각/스테이킹 모델.',
    wpP2:'출시 예정. 그동안 토크노믹스와 로드맵은 <a href="/ko/#token">메인 사이트</a>에서 이미 확인하실 수 있습니다.',
    platH3:'🖥️ 플랫폼 문서', platP1:'AI 개발자를 위한 아키텍처, CLI 및 API 레퍼런스, GPU 제공자를 위한 설정 가이드.',
    platP2:'플랫폼 클라이언트 자체와 함께 출시 예정입니다. 현재 상태는 <a href="/ko/platform/">플랫폼 페이지</a>에서 확인하세요.',
    svitH3:'🌐 SVIT 언어', svitP1:'Svitlo Chain의 온체인 로직을 구동하는 스마트 컨트랙트 언어 SVIT에 대한 레퍼런스 문서.',
    svitP2:'출시 예정.',
    walletEyebrow:'👛 월렛 문서', walletH2:'Svitlo Wallet — 오늘부터 사용 가능',
    walletLede:'월렛은 실제로 존재하며 이미 사용 중이므로, 여기에는 자리 표시자가 아닌 실제 레퍼런스를 제공합니다.',
    startH3:'시작하기', startP:'어떤 브라우저에서든 <a href="/ko/wallet/">웹 월렛</a>을 열고 <strong>새로 만들기</strong> 또는 <strong>구문으로 복원</strong>을 선택하거나, Android(APK) 또는 iOS(TestFlight) 앱을 설치하세요. 복구 구문은 생성 시 한 번만 표시되며 Svitlo Chain은 이를 절대 어디에도 저장하지 않습니다.',
    chainsH3:'지원 블록체인', chainsP:'SVIT과 함께 BTC, ETH, USDT, USDC, SOL, XRP, LTC, DOGE, ATOM, DOT, NEAR — 하나의 월렛에서 전송, 수신, (SVIT의 경우) 스테이킹까지 모두 가능합니다. 월렛은 기본적으로 Svitlo Chain 네트워크에 연결되며, 직접 운영하는 노드에 연결할 수도 있습니다.',
    secH3d:'보안 모델', secPd:'비수탁형: 키는 사용자의 기기에서 생성 및 암호화되며(AES-256-GCM) 절대 기기를 벗어나지 않습니다. Svitlo Chain은 복구 구문이나 비밀번호를 절대 확인하지 않으며, 둘 다 분실한 경우 대신 월렛을 복구해 드릴 수 없습니다 — 전체 데이터 모델은 <a href="/privacy/">개인정보 처리방침</a>을 참고하세요.',
    footer:'© 2026 Svitlo Chain.',
  },
};

D.zh = {
  htmlLang:'zh',
  nav:{platform:'平台',wallet:'钱包',documentation:'文档',privacy:'隐私',support:'支持'},
  wallet:{
    title:'钱包 — Svitlo Chain',
    desc:'Svitlo Wallet — 支持 SVIT、BTC、ETH 及 10 多条区块链的非托管钱包。现在即可在浏览器中使用,或安装 Android/iOS 应用。',
    eyebrow:'Svitlo Wallet', h1:'您的非托管多链钱包',
    lede:'在一个钱包中保存、发送和接收 SVIT,以及 BTC、ETH、USDT、SOL、XRP 等。您的密钥在您的设备上生成和加密 —— 我们从不查看、从不存储,也无法为您找回。',
    ctaWeb:'打开网页钱包 →', ctaAndroid:'下载 Android 版 (APK)', ctaIOS:'iOS — 加入 TestFlight 测试版',
    note:'网页钱包完全在浏览器中运行 —— 无需安装任何东西。由于该版本尚未上架 Play 商店,Android 用户需要一次性允许"安装未知来源应用"。iOS 需要免费的 TestFlight 应用。',
    ctaPrivacy:'阅读隐私政策 →',
    webH3:'网页钱包', webLi:['在任意现代浏览器(桌面或移动端)中打开 <a href="/app/">svitlochain.com/app</a>。','选择<strong>创建新钱包</strong>或<strong>通过助记词恢复</strong>,并设置密码。','保存好您的助记词 —— 它只会显示一次,且永远不会被存储在任何地方。'],
    webNote:'可选:通过浏览器菜单可将其"安装"为应用图标,一键即可访问 —— 无需任何应用商店。',
    andH3:'Android', andLi:['点击上方的<strong>下载 Android 版</strong>获取 APK。','打开下载的文件,在提示时允许"安装未知来源应用"(仅需一次)。','启动 Svitlo Wallet,创建或恢复您的钱包。'],
    iosH3:'iOS(TestFlight 测试版)', iosLi:['如果尚未安装,请从 App Store 安装 <strong>TestFlight</strong>。','点击上方的<strong>加入 TestFlight 测试版</strong>并接受邀请。','通过 TestFlight 安装 Svitlo Wallet,然后创建或恢复您的钱包。'],
    f1H3:'非托管', f1P:'您的助记词和私钥永远不会离开您的设备。您的密钥库在写入磁盘之前就已在设备上加密(AES-256-GCM)。',
    f2H3:'跨平台', f2P:'支持浏览器、iOS、Android、macOS、Windows 和 Linux —— 所有设备使用同一个钱包。',
    f3H3:'多链', f3P:'发送、接收和质押 SVIT,同时持有和转移 BTC、ETH、USDT、USDC、SOL、XRP、LTC、DOGE、ATOM、DOT、NEAR 等 —— 可连接 Svitlo Chain 网络,也可连接您自己的节点。',
    footer:'© 2026 Svitlo Chain。Svitlo Wallet 是按现状提供的非托管软件。',
  },
  platform:{
    title:'平台 — Svitlo Chain',
    desc:'Svitlo Chain 平台 —— 面向 AI 的去中心化 GPU 市场。Windows、macOS 和 Linux 客户端正在开发中。',
    eyebrow:'Svitlo Chain 平台', h1:'面向 AI 的去中心化 GPU 市场',
    lede:'摆脱大型云厂商对 GPU 价格的垄断。租用闲置 GPU,或让您的硬件为您工作,赚取真实收入 —— 由 AI 驱动,由区块链保障安全。',
    winSoon:'🪟 Windows — 即将推出', macSoon:'🍎 macOS — 即将推出', linuxSoon:'🐧 Linux — 即将推出',
    note:'平台客户端尚未发布 —— 一旦发布,本页面将替换为真实的下载链接。与此同时,如果您想提前做好准备,钱包已经可用。',
    ctaWallet:'打开钱包 →', ctaLearn:'了解运作方式 →',
    s1H3:'1. 安装客户端', s1P:'下载适用于您操作系统的 Svitlo Chain 客户端并连接您的 GPU。发布时将全面支持 Windows、macOS 和 Linux。',
    s2H3:'2. 连接您的钱包', s2P:'关联一个 Svitlo Wallet 地址 —— 即今天已经<a href="/zh/wallet/">可用</a>的同一个非托管钱包 —— 用于接收收益或支付算力费用。',
    s3H3:'3. 开始赚取收益或进行开发', s3P:'GPU 持有者设定价格和可用时段;AI 开发者通过 CLI 或 API 部署任务。所有结算均在 Svitlo Chain 上以 SVIT 完成。',
    devH3:'面向 AI 开发者', devP:'通过 CLI 或 API 部署,指定您的 GPU 需求,只需为实际使用的算力付费 —— 无需长期合约,无最低使用量要求。',
    gpuH3:'面向 GPU 持有者', gpuP:'接入闲置硬件 —— 游戏主机、挖矿设备、数据中心 —— 赚取被动收入。价格、可用时段和硬件规格均由您自行设置。',
    secH3:'由 Svitlo Chain 保障安全', secP:'每个任务都经过密码学验证,并在 Svitlo Chain 自有的 Layer-1 区块链上以 SVIT 结算 —— 没有中间商,没有加价。',
    footer:'© 2026 Svitlo Chain。',
  },
  documentation:{
    title:'文档 — Svitlo Chain',
    desc:'Svitlo Chain 文档:白皮书、平台、钱包以及 SVIT 智能合约语言。',
    eyebrow:'Svitlo Chain 文档', h1:'关于 Svitlo Chain 的一切,尽在一处',
    lede:'白皮书、平台参考、钱包指南,以及支撑 Svitlo Chain 的智能合约语言 SVIT 的相关文档。部分章节已经上线;其余章节将在编写完成后逐步标注上线。',
    wpH3:'📄 白皮书', wpP1:'Svitlo Chain 与 SVIT 的技术与经济设计 —— 共识机制、代币经济学以及销毁/质押模型。',
    wpP2:'即将推出。与此同时,代币经济学与路线图已在<a href="/zh/#token">主站</a>上介绍。',
    platH3:'🖥️ 平台文档', platP1:'面向 AI 开发者的架构、CLI 及 API 参考,以及面向 GPU 提供者的配置指南。',
    platP2:'将与平台客户端本身一同推出。当前状态请参见<a href="/zh/platform/">平台页面</a>。',
    svitH3:'🌐 SVIT 语言', svitP1:'SVIT 参考文档 —— SVIT 是支撑 Svitlo Chain 链上逻辑的智能合约语言。',
    svitP2:'即将推出。',
    walletEyebrow:'👛 钱包文档', walletH2:'Svitlo Wallet —— 今日即可使用',
    walletLede:'钱包是真实存在且已投入使用的,因此这里提供的是真实的参考内容 —— 而非占位说明。',
    startH3:'快速上手', startP:'在任意浏览器中打开<a href="/zh/wallet/">网页钱包</a>,选择<strong>创建新钱包</strong>或<strong>通过助记词恢复</strong>,或安装 Android(APK)或 iOS(TestFlight)应用。您的助记词仅在创建时显示一次,Svitlo Chain 绝不会将其存储在任何地方。',
    chainsH3:'支持的区块链', chainsP:'SVIT,以及 BTC、ETH、USDT、USDC、SOL、XRP、LTC、DOGE、ATOM、DOT 和 NEAR —— 在同一个钱包中发送、接收,并(针对 SVIT)进行质押。钱包默认连接 Svitlo Chain 网络,也可连接您自行运行的节点。',
    secH3d:'安全模型', secPd:'非托管:密钥在您的设备上生成并加密(AES-256-GCM),永远不会离开设备。Svitlo Chain 绝不会看到您的助记词或密码,若两者同时丢失,也无法代您恢复钱包 —— 完整数据模型请参见<a href="/privacy/">隐私政策</a>。',
    footer:'© 2026 Svitlo Chain。',
  },
};

D.de = {
  htmlLang:'de',
  nav:{platform:'Plattform',wallet:'Wallet',documentation:'Dokumentation',privacy:'Datenschutz',support:'Support'},
  wallet:{
    title:'Wallet — Svitlo Chain',
    desc:'Svitlo Wallet — eine non-custodial Wallet für SVIT, BTC, ETH und über 10 Blockchains. Jetzt direkt im Browser nutzen oder die Android/iOS-App installieren.',
    eyebrow:'Svitlo Wallet', h1:'Deine non-custodial Multi-Chain-Wallet',
    lede:'Verwalte, sende und empfange SVIT zusammen mit BTC, ETH, USDT, SOL, XRP und mehr — alles in einer Wallet. Deine Schlüssel werden auf deinem Gerät erzeugt und verschlüsselt — wir sehen sie nie, speichern sie nie und können sie nicht für dich wiederherstellen.',
    ctaWeb:'Web Wallet öffnen →', ctaAndroid:'Für Android herunterladen (APK)', ctaIOS:'iOS — TestFlight-Beta beitreten',
    note:'Die Web Wallet läuft vollständig im Browser — nichts zu installieren. Unter Android musst du einmalig „Installation aus unbekannten Quellen“ erlauben, da diese Version noch nicht im Play Store ist. iOS benötigt die kostenlose TestFlight-App.',
    ctaPrivacy:'Datenschutzerklärung lesen →',
    webH3:'Web Wallet', webLi:['Öffne <a href="/app/">svitlochain.com/app</a> in einem beliebigen modernen Browser (Desktop oder mobil).','Wähle <strong>Neu erstellen</strong> oder <strong>Aus Phrase wiederherstellen</strong> und lege ein Passwort fest.','Speichere deine Wiederherstellungsphrase — sie wird nur einmal angezeigt und niemals gespeichert.'],
    webNote:'Optional: Über das Browsermenü kannst du sie als App-Symbol „installieren“ für Zugriff mit einem Klick — kein App Store nötig.',
    andH3:'Android', andLi:['Tippe oben auf <strong>Für Android herunterladen</strong>, um die APK zu erhalten.','Öffne die heruntergeladene Datei und erlaube bei Bedarf „Installation aus unbekannten Quellen“ (nur einmalig).','Starte Svitlo Wallet und erstelle oder stelle deine Wallet wieder her.'],
    iosH3:'iOS (TestFlight-Beta)', iosLi:['Installiere <strong>TestFlight</strong> aus dem App Store, falls noch nicht vorhanden.','Tippe oben auf <strong>TestFlight-Beta beitreten</strong> und akzeptiere die Einladung.','Installiere Svitlo Wallet über TestFlight und erstelle oder stelle dann deine Wallet wieder her.'],
    f1H3:'Non-custodial', f1P:'Deine Wiederherstellungsphrase und privaten Schlüssel verlassen niemals dein Gerät. Dein Keystore wird auf dem Gerät verschlüsselt (AES-256-GCM), bevor er überhaupt auf die Festplatte gelangt.',
    f2H3:'Plattformübergreifend', f2P:'Gebaut für Browser, iOS, Android, macOS, Windows und Linux — dieselbe Wallet auf all deinen Geräten.',
    f3H3:'Multi-Chain', f3P:'Sende, empfange und stake SVIT, halte und bewege außerdem BTC, ETH, USDT, USDC, SOL, XRP, LTC, DOGE, ATOM, DOT, NEAR und mehr — verbunden mit dem Svitlo-Chain-Netzwerk oder deinem eigenen Node.',
    footer:'© 2026 Svitlo Chain. Svitlo Wallet ist non-custodial Software, bereitgestellt „wie besehen“.',
  },
  platform:{
    title:'Plattform — Svitlo Chain',
    desc:'Die Svitlo-Chain-Plattform — ein dezentraler GPU-Marktplatz für KI. Windows-, macOS- und Linux-Clients befinden sich in Entwicklung.',
    eyebrow:'Svitlo-Chain-Plattform', h1:'Ein dezentraler GPU-Marktplatz für KI',
    lede:'Befreie dich vom GPU-Preismonopol der Big-Cloud-Anbieter. Miete ungenutzte GPUs, oder lass deine Hardware arbeiten und verdiene echtes Einkommen — angetrieben von KI, gesichert durch Blockchain.',
    winSoon:'🪟 Windows — Demnächst', macSoon:'🍎 macOS — Demnächst', linuxSoon:'🐧 Linux — Demnächst',
    note:'Der Plattform-Client wurde noch nicht veröffentlicht — diese Seite wechselt zu echten Downloads, sobald er verfügbar ist. In der Zwischenzeit steht die Wallet bereits zur Verfügung, falls du vorbereitet sein möchtest.',
    ctaWallet:'Wallet öffnen →', ctaLearn:'Lies, wie es funktioniert →',
    s1H3:'1. Client installieren', s1P:'Lade den Svitlo-Chain-Client für dein Betriebssystem herunter und verbinde deine GPU. Windows, macOS und Linux werden beim Start alle unterstützt.',
    s2H3:'2. Wallet verbinden', s2P:'Verknüpfe eine Svitlo-Wallet-Adresse — dieselbe non-custodial Wallet, die schon <a href="/de/wallet/">heute verfügbar</a> ist — um Einnahmen zu empfangen oder Rechenleistung zu bezahlen.',
    s3H3:'3. Verdienen oder entwickeln', s3P:'GPU-Besitzer legen Preis und Verfügbarkeit fest; KI-Entwickler verteilen Jobs über CLI oder API. Alles wird in SVIT auf Svitlo Chain abgerechnet.',
    devH3:'Für KI-Entwickler', devP:'Deploye über CLI oder API, gib deine GPU-Anforderungen an und zahle nur für tatsächlich genutzte Rechenleistung — keine Langzeitverträge, keine Mindestverpflichtungen.',
    gpuH3:'Für GPU-Besitzer', gpuP:'Verbinde ungenutzte Hardware — Gaming-Rig, Mining-Rig, Rechenzentrum — und erziele passives Einkommen. Du legst Preis, Verfügbarkeitsfenster und Hardware-Spezifikationen selbst fest.',
    secH3:'Gesichert durch Svitlo Chain', secP:'Jeder Job wird kryptografisch verifiziert und in SVIT auf der eigenen Layer-1-Blockchain von Svitlo Chain abgerechnet — keine Zwischenhändler, keine Aufschläge.',
    footer:'© 2026 Svitlo Chain.',
  },
  documentation:{
    title:'Dokumentation — Svitlo Chain',
    desc:'Dokumentation für Svitlo Chain: White Paper, Plattform, Wallet und die Smart-Contract-Sprache SVIT.',
    eyebrow:'Svitlo-Chain-Dokumentation', h1:'Alles über Svitlo Chain, an einem Ort',
    lede:'White Paper, Plattform-Referenz, Wallet-Anleitungen und Dokumentation zu SVIT — der Smart-Contract-Sprache hinter Svitlo Chain. Manche Bereiche sind bereits verfügbar; andere werden markiert, sobald sie geschrieben sind.',
    wpH3:'📄 White Paper', wpP1:'Das technische und ökonomische Design von Svitlo Chain und SVIT — Konsens, Tokenomics und das Burn-/Staking-Modell.',
    wpP2:'Demnächst verfügbar. In der Zwischenzeit sind Tokenomics und Roadmap bereits auf der <a href="/de/#token">Hauptseite</a> beschrieben.',
    platH3:'🖥️ Plattform-Dokumentation', platP1:'Architektur, CLI- und API-Referenz für KI-Entwickler sowie Einrichtungsanleitungen für GPU-Anbieter.',
    platP2:'Demnächst verfügbar, zusammen mit dem Plattform-Client selbst. Aktuellen Status auf der <a href="/de/platform/">Plattform-Seite</a> ansehen.',
    svitH3:'🌐 SVIT-Sprache', svitP1:'Referenzdokumentation für SVIT, die Smart-Contract-Sprache, die die On-Chain-Logik von Svitlo Chain antreibt.',
    svitP2:'Demnächst verfügbar.',
    walletEyebrow:'👛 Wallet-Dokumentation', walletH2:'Svitlo Wallet — schon heute verfügbar',
    walletLede:'Die Wallet ist real und bereits nutzbar — hier also die echte Referenz, kein Platzhalter.',
    startH3:'Erste Schritte', startP:'Öffne die <a href="/de/wallet/">Web Wallet</a> in einem beliebigen Browser und wähle <strong>Neu erstellen</strong> oder <strong>Aus Phrase wiederherstellen</strong>, oder installiere die Android- (APK) oder iOS-App (TestFlight). Deine Wiederherstellungsphrase wird bei der Erstellung nur einmal angezeigt und von Svitlo Chain niemals gespeichert.',
    chainsH3:'Unterstützte Blockchains', chainsP:'SVIT sowie BTC, ETH, USDT, USDC, SOL, XRP, LTC, DOGE, ATOM, DOT und NEAR — senden, empfangen und (für SVIT) staken, alles aus einer Wallet. Die Wallet verbindet sich standardmäßig mit dem Svitlo-Chain-Netzwerk oder mit einem selbst betriebenen Node.',
    secH3d:'Sicherheitsmodell', secPd:'Non-custodial: Schlüssel werden auf deinem Gerät erzeugt und verschlüsselt (AES-256-GCM) und verlassen es niemals. Svitlo Chain sieht niemals deine Wiederherstellungsphrase oder dein Passwort und kann eine Wallet nicht für dich wiederherstellen, falls beide verloren gehen — die vollständige Datenmodell-Beschreibung findest du in der <a href="/privacy/">Datenschutzerklärung</a>.',
    footer:'© 2026 Svitlo Chain.',
  },
};


// ---------------------------------------------------------------------------
// Templates (structurally identical to the hand-written en/it pages)
// ---------------------------------------------------------------------------
function walletPage(lang, t) {
  const n = t.nav, w = t.wallet;
  return `<!doctype html>
<html lang="${t.htmlLang}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${w.title}</title>
<meta name="description" content="${w.desc}">
<link rel="stylesheet" href="/assets/style.css">
</head>
<body>

<nav class="site-nav">
  <a href="/" class="brand">Svitlo<span>Chain</span></a>
  <div class="links">
    <a href="/${lang}/platform/">${n.platform}</a>
    <a href="/${lang}/wallet/" class="current">${n.wallet}</a>
    <a href="/${lang}/documentation/">${n.documentation}</a>
    <a href="/privacy/">${n.privacy}</a>
    <a href="/support/">${n.support}</a>
    ${langMini('wallet', lang)}
  </div>
</nav>

<div class="hero">
  <div class="eyebrow">${w.eyebrow}</div>
  <h1>${w.h1}</h1>
  <p class="lede">${w.lede}</p>
  <div class="cta-row">
    <a href="/app/" class="btn btn-primary">${w.ctaWeb}</a>
    <a href="/downloads/SvitloApp.apk" class="btn btn-outline">${w.ctaAndroid}</a>
    <a href="https://testflight.apple.com/join/BrCquhAS" class="btn btn-outline">${w.ctaIOS}</a>
  </div>
  <p class="lede" style="margin-top:12px;font-size:.85em;opacity:.75;">${w.note}</p>
  <div class="cta-row">
    <a href="/privacy/" class="btn btn-outline">${w.ctaPrivacy}</a>
  </div>
</div>

<div class="grid-3" style="padding-bottom:0">
  <div class="card">
    <h3>${w.webH3}</h3>
    <ol class="plain">
      <li>${w.webLi[0]}</li>
      <li>${w.webLi[1]}</li>
      <li>${w.webLi[2]}</li>
    </ol>
    <p style="font-size:.85em;color:var(--txm);margin-top:8px">${w.webNote}</p>
  </div>
  <div class="card">
    <h3>${w.andH3}</h3>
    <ol class="plain">
      <li>${w.andLi[0]}</li>
      <li>${w.andLi[1]}</li>
      <li>${w.andLi[2]}</li>
    </ol>
  </div>
  <div class="card">
    <h3>${w.iosH3}</h3>
    <ol class="plain">
      <li>${w.iosLi[0]}</li>
      <li>${w.iosLi[1]}</li>
      <li>${w.iosLi[2]}</li>
    </ol>
  </div>
</div>

<div class="grid-3">
  <div class="card">
    <h3>${w.f1H3}</h3>
    <p>${w.f1P}</p>
  </div>
  <div class="card">
    <h3>${w.f2H3}</h3>
    <p>${w.f2P}</p>
  </div>
  <div class="card">
    <h3>${w.f3H3}</h3>
    <p>${w.f3P}</p>
  </div>
</div>

<footer class="site-footer">
  <span>${w.footer}</span>
  <span><a href="/">Home</a> · <a href="/${lang}/platform/">${n.platform}</a> · <a href="/${lang}/documentation/">${n.documentation}</a> · <a href="/privacy/">${n.privacy}</a> · <a href="/support/">${n.support}</a></span>
</footer>

</body>
</html>
`;
}

function platformPage(lang, t) {
  const n = t.nav, p = t.platform;
  return `<!doctype html>
<html lang="${t.htmlLang}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${p.title}</title>
<meta name="description" content="${p.desc}">
<link rel="stylesheet" href="/assets/style.css">
</head>
<body>

<nav class="site-nav">
  <a href="/" class="brand">Svitlo<span>Chain</span></a>
  <div class="links">
    <a href="/${lang}/platform/" class="current">${n.platform}</a>
    <a href="/${lang}/wallet/">${n.wallet}</a>
    <a href="/${lang}/documentation/">${n.documentation}</a>
    <a href="/privacy/">${n.privacy}</a>
    <a href="/support/">${n.support}</a>
    ${langMini('platform', lang)}
  </div>
</nav>

<div class="hero">
  <div class="eyebrow">${p.eyebrow}</div>
  <h1>${p.h1}</h1>
  <p class="lede">${p.lede}</p>
  <div class="cta-row">
    <span class="btn btn-primary" style="opacity:.55;cursor:default;pointer-events:none;">${p.winSoon}</span>
    <span class="btn btn-outline" style="opacity:.65;cursor:default;pointer-events:none;">${p.macSoon}</span>
    <span class="btn btn-outline" style="opacity:.65;cursor:default;pointer-events:none;">${p.linuxSoon}</span>
  </div>
  <p class="lede" style="margin-top:12px;font-size:.85em;opacity:.75;">${p.note}</p>
  <div class="cta-row">
    <a href="/${lang}/wallet/" class="btn btn-outline">${p.ctaWallet}</a>
    <a href="/${lang}/#developers" class="btn btn-outline">${p.ctaLearn}</a>
  </div>
</div>

<div class="grid-3" style="padding-bottom:0">
  <div class="card">
    <h3>${p.s1H3}</h3>
    <p>${p.s1P}</p>
  </div>
  <div class="card">
    <h3>${p.s2H3}</h3>
    <p>${p.s2P}</p>
  </div>
  <div class="card">
    <h3>${p.s3H3}</h3>
    <p>${p.s3P}</p>
  </div>
</div>

<div class="grid-3">
  <div class="card">
    <h3>${p.devH3}</h3>
    <p>${p.devP}</p>
  </div>
  <div class="card">
    <h3>${p.gpuH3}</h3>
    <p>${p.gpuP}</p>
  </div>
  <div class="card">
    <h3>${p.secH3}</h3>
    <p>${p.secP}</p>
  </div>
</div>

<footer class="site-footer">
  <span>${p.footer}</span>
  <span><a href="/">Home</a> · <a href="/${lang}/wallet/">${n.wallet}</a> · <a href="/${lang}/documentation/">${n.documentation}</a> · <a href="/privacy/">${n.privacy}</a> · <a href="/support/">${n.support}</a></span>
</footer>

</body>
</html>
`;
}

function docPage(lang, t) {
  const n = t.nav, d = t.documentation;
  return `<!doctype html>
<html lang="${t.htmlLang}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${d.title}</title>
<meta name="description" content="${d.desc}">
<link rel="stylesheet" href="/assets/style.css">
</head>
<body>

<nav class="site-nav">
  <a href="/" class="brand">Svitlo<span>Chain</span></a>
  <div class="links">
    <a href="/${lang}/platform/">${n.platform}</a>
    <a href="/${lang}/wallet/">${n.wallet}</a>
    <a href="/${lang}/documentation/" class="current">${n.documentation}</a>
    <a href="/privacy/">${n.privacy}</a>
    <a href="/support/">${n.support}</a>
    ${langMini('documentation', lang)}
  </div>
</nav>

<div class="hero">
  <div class="eyebrow">${d.eyebrow}</div>
  <h1>${d.h1}</h1>
  <p class="lede">${d.lede}</p>
</div>

<div class="grid-3" style="padding-bottom:0">
  <div class="card">
    <h3>${d.wpH3}</h3>
    <p style="margin-bottom:10px">${d.wpP1}</p>
    <p style="font-size:.85em;color:var(--txm)">${d.wpP2}</p>
  </div>
  <div class="card">
    <h3>${d.platH3}</h3>
    <p style="margin-bottom:10px">${d.platP1}</p>
    <p style="font-size:.85em;color:var(--txm)">${d.platP2}</p>
  </div>
  <div class="card">
    <h3>${d.svitH3}</h3>
    <p style="margin-bottom:10px">${d.svitP1}</p>
    <p style="font-size:.85em;color:var(--txm)">${d.svitP2}</p>
  </div>
</div>

<div class="hero" style="padding-top:8px">
  <div class="eyebrow">${d.walletEyebrow}</div>
  <h2 style="margin-top:6px">${d.walletH2}</h2>
  <p class="lede">${d.walletLede}</p>
</div>

<div class="grid-3">
  <div class="card">
    <h3>${d.startH3}</h3>
    <p>${d.startP}</p>
  </div>
  <div class="card">
    <h3>${d.chainsH3}</h3>
    <p>${d.chainsP}</p>
  </div>
  <div class="card">
    <h3>${d.secH3d}</h3>
    <p>${d.secPd}</p>
  </div>
</div>

<footer class="site-footer">
  <span>${d.footer}</span>
  <span><a href="/">Home</a> · <a href="/${lang}/platform/">${n.platform}</a> · <a href="/${lang}/wallet/">${n.wallet}</a> · <a href="/privacy/">${n.privacy}</a> · <a href="/support/">${n.support}</a></span>
</footer>

</body>
</html>
`;
}

// ---------------------------------------------------------------------------
// Generate
// ---------------------------------------------------------------------------
const TARGET_LANGS = ['es','fr','de','fi','pt','ja','ko','zh'];

for (const lang of TARGET_LANGS) {
  const t = D[lang];
  if (!t) { console.error('missing dict for', lang); continue; }
  for (const [page, render] of [['wallet', walletPage], ['platform', platformPage], ['documentation', docPage]]) {
    const dir = ROOT + lang + '/' + page;
    mkdirSync(dir, { recursive: true });
    const html = render(lang, t);
    writeFileSync(dir + '/index.html', html);
    console.log('wrote', dir + '/index.html', `(${(html.length/1024).toFixed(1)} KB)`);
  }
}
