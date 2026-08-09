export default {
  meta: {
    lang: 'fr',
    title: 'Svitlo Chain — Cloud GPU décentralisé',
    description: 'Une place de marché GPU décentralisée pour l\'IA — louez des GPU inactifs ou mettez votre propre matériel à disposition, sécurisé par la blockchain.',
  },
  nav: {
    links: [
      { href: '/fr/wallet/', label: 'Wallet' },
      { href: '/fr/platform/', label: 'Plateforme' },
      { href: '/fr/documentation/', label: 'Documentation' },
    ],
  },
  hero: {
    eyebrow: 'Blockchain Layer-1',
    title: 'Svitlo Chain : cloud GPU décentralisé',
    lede: 'Libérez-vous du monopole des grands clouds sur les prix des GPU. Louez des GPU inactifs, ou mettez votre propre matériel à disposition et gagnez un revenu réel — propulsé par l\'IA, sécurisé par la blockchain.',
    ctaPrimary: 'Devenir fournisseur',
    ctaGlass: 'Commencer à développer',
  },
  idea: {
    eyebrow: 'Pourquoi Svitlo Chain',
    title: 'L\'idée derrière Svitlo Chain',
    body: [
      'Le marché des GPU cloud est contrôlé par une poignée de géants — AWS, Google, Azure — qui fixent des prix premium, tandis que des millions de GPU restent inactifs dans des PC de gaming, des fermes de minage et des data centers d\'entreprise. Svitlo Chain existe pour changer cela.',
      'Le concept est simple : une place de marché GPU décentralisée où les propriétaires de matériel gagnent grâce à la puissance de calcul inutilisée, et les développeurs IA obtiennent une capacité abordable et évolutive sans être liés à un fournisseur unique. Aucun intermédiaire. Aucune majoration. Juste une connexion directe et sans confiance préalable entre l\'offre et la demande — sécurisée par des preuves cryptographiques et un système de réputation transparent.',
    ],
    cards: [
      { label: 'Problème', title: 'GPU cloud centralisés', body: 'Les fournisseurs cloud centralisés contrôlent le prix, la disponibilité et l\'accès — créant des goulots d\'étranglement pour l\'innovation en IA.' },
      { label: 'Solution', title: 'Un marché pair-à-pair', body: 'Une place de marché GPU pair-à-pair qui transforme le matériel inactif en infrastructure productive qui rémunère ses propriétaires.' },
      { label: 'Vision', title: 'Une couche de calcul mondiale', body: 'Une couche mondiale et résistante à la censure pour la puissance de calcul, propulsant la prochaine génération d\'applications IA.' },
    ],
  },
  developers: {
    eyebrow: 'Comment ça marche',
    title: 'Pour les développeurs IA et les builders',
    body: [
      'Svitlo Chain donne aux développeurs IA un accès instantané à un pool GPU mondial — des cartes RTX grand public aux A100 professionnelles — pour une fraction du coût du cloud traditionnel. Que vous entraîniez un grand modèle de langage, exécutiez de l\'inférence à grande échelle, ou rendiez des simulations complexes, Svitlo Chain associe votre charge de travail au bon matériel en quelques secondes.',
      'La plateforme gère automatiquement la planification des tâches, la conteneurisation sécurisée et la facturation. Les builders déploient via CLI ou API, spécifient leurs besoins en GPU, et ne paient que pour le calcul réellement utilisé — aucun contrat à long terme, aucun engagement minimum.',
    ],
    steps: [
      { title: 'Spécifiez vos besoins GPU', body: 'Choisissez la VRAM, la puissance de calcul et la région.' },
      { title: 'Déployez via CLI ou API', body: 'Soumettez votre conteneur et commencez à calculer immédiatement.' },
      { title: 'Payez à l\'usage', body: 'Aucun contrat. Facturé en SVIT ou stablecoin.' },
    ],
    quickstartTitle: 'Guide développeur : démarrage rapide avec Svitlo Chain',
    quickstartLede: 'En tant que développeur IA, vous avez besoin d\'un accès rapide, économique et évolutif aux ressources GPU. Ce guide rapide vous mène de l\'authentification à votre premier job et résultat.',
    steps2: [
      {
        n: '1', title: 'Authentification et configuration de l\'API',
        body: 'Pour interagir avec l\'API Svitlo Chain, vous avez besoin de votre clé API depuis votre tableau de bord développeur après inscription. Pour les développeurs Python, nous recommandons notre SDK pour une intégration fluide ; les autres langages peuvent appeler directement l\'API REST.',
        code: `<span class="kw">import</span> os
<span class="kw">import</span> svitlo_sdk

<span class="c1"># Lire la clé API en toute sécurité depuis une variable d'environnement</span>
API_KEY = os.environ.get(<span class="str">"SVIT_API_KEY"</span>)

<span class="kw">if not</span> API_KEY:
    <span class="kw">raise</span> ValueError(<span class="str">"SVIT_API_KEY n'est pas défini."</span>)

<span class="c1"># Initialiser le client SDK Svitlo Chain</span>
client = svitlo_sdk.SvitloClient(api_key=API_KEY)
print(<span class="str">"Client API initialisé avec succès."</span>)`,
      },
      {
        n: '2', title: 'Soumettez votre premier job GPU',
        body: 'Soumettre un job GPU est simple. Définissez quel modèle IA exécuter, quelles données d\'entrée utiliser, et quelles ressources GPU sont requises. Svitlo Chain associe automatiquement votre job aux fournisseurs disponibles sur le réseau.',
        code: `job_config = {
    <span class="str">"model_name"</span>: <span class="str">"stable_diffusion_v2"</span>,
    <span class="str">"input_data_url"</span>: <span class="str">"s3://my-bucket/input-image.jpg"</span>,
    <span class="str">"output_data_url"</span>: <span class="str">"s3://my-bucket/output-results/"</span>,
    <span class="str">"gpu_type"</span>: <span class="str">"RTX_3090"</span>,
    <span class="str">"gpu_count"</span>: 1,
    <span class="str">"duration_hours"</span>: 0.5,
}

<span class="kw">try</span>:
    job = client.submit_job(job_config)
    print(<span class="fn">f</span><span class="str">"Job soumis ! ID du job : {job.id}"</span>)
    print(<span class="fn">f</span><span class="str">"Statut : {job.status}"</span>)
<span class="kw">except</span> Exception <span class="kw">as</span> e:
    print(<span class="fn">f</span><span class="str">"Erreur lors de la soumission du job : {e}"</span>)`,
      },
      {
        n: '3', title: 'Surveillez le statut du job',
        body: 'Une fois soumis, suivez la progression de votre job en temps réel — voyez les erreurs et estimez quand les résultats seront prêts.',
        code: `job_id = job.id

current_job = client.get_job_status(job_id)
print(<span class="fn">f</span><span class="str">"Job {current_job.id}, statut : {current_job.status}"</span>)

<span class="kw">while</span> current_job.status <span class="kw">not in</span> [<span class="str">"COMPLETED"</span>, <span class="str">"FAILED"</span>]:
    time.sleep(30)
    current_job = client.get_job_status(job_id)
    print(<span class="fn">f</span><span class="str">"Statut mis à jour : {current_job.status}"</span>)

<span class="kw">if</span> current_job.status == <span class="str">"COMPLETED"</span>:
    print(<span class="str">"Job terminé !"</span>)
<span class="kw">else</span>:
    print(<span class="str">"Le job a échoué ou a été annulé."</span>)`,
      },
      {
        n: '4', title: 'Récupérez vos résultats',
        body: 'Une fois votre job GPU terminé, la sortie est disponible à l\'emplacement que vous avez spécifié (p. ex. un bucket S3). Svitlo Chain fournit les détails de connexion nécessaires pour récupérer les résultats en toute sécurité.',
        code: `<span class="kw">if</span> current_job.status == <span class="str">"COMPLETED"</span>:
    print(<span class="fn">f</span><span class="str">"Résultats disponibles à : {current_job.output_data_location}"</span>)
<span class="kw">else</span>:
    print(<span class="str">"Résultats indisponibles — job non terminé ou échoué."</span>)`,
      },
    ],
    billingTitle: '5. Paiement et facturation',
    billingBody: 'Svitlo Chain utilise le token SVIT pour toutes les transactions de la plateforme, garantissant transparence et efficacité. Vous êtes facturé pour l\'utilisation GPU réelle et la durée du job — souvent jusqu\'à 70 % moins cher que le cloud traditionnel. Suivez votre historique d\'utilisation et votre solde depuis votre tableau de bord Svitlo Chain.',
  },
  gpuOwners: {
    eyebrow: 'Comment ça marche',
    title: 'Pour les propriétaires de GPU',
    body: 'Les propriétaires de GPU — gamers, mineurs et data centers — peuvent connecter du matériel inactif à Svitlo Chain et gagner un revenu passif. Le client Svitlo Chain s\'exécute en arrière-plan, accepte les jobs de calcul, les exécute dans des conteneurs isolés, et retourne les résultats avec vérification cryptographique. Les fournisseurs définissent leurs propres fenêtres de disponibilité, prix et spécifications matérielles.',
    cards: [
      { title: 'Installez le client', body: 'Téléchargez le logiciel de nœud Svitlo Chain, connectez votre GPU, et soyez opérationnel en quelques minutes. Windows, Linux et Docker pris en charge.' },
      { title: 'Définissez vos conditions', body: 'Fixez des tarifs horaires, une VRAM minimale et un calendrier de disponibilité. Vous contrôlez quand votre matériel est sur le marché.' },
      { title: 'Gagnez automatiquement', body: 'Les jobs sont associés, exécutés et vérifiés automatiquement. Les paiements arrivent en SVIT ou USDC directement dans votre wallet.' },
    ],
    installTitle: 'Guide d\'installation pour les fournisseurs GPU',
    installLede: 'Devenir fournisseur GPU de Svitlo Chain est simple et vous permet de gagner grâce à votre calcul inactif. Suivez ces étapes pour installer le client de nœud Svitlo Chain et commencer à louer vos ressources GPU aux développeurs IA du monde entier.',
    installSteps: [
      {
        n: '1', title: 'Prérequis système',
        body: 'Avant l\'installation, assurez-vous que votre système répond à ces exigences : <b>OS :</b> Linux (Ubuntu 20.04+ recommandé), Windows 10/11, macOS 13 Ventura ou ultérieur, ou un environnement compatible Docker. <b>GPU :</b> NVIDIA GeForce série RTX 30 ou ultérieure, NVIDIA A100/H100, AMD Radeon RX série 6000 ou ultérieure, ou Apple Silicon avec Metal Performance Shaders (MPS). <b>RAM :</b> 16 Go minimum. <b>Réseau :</b> une connexion stable avec au moins 100 Mbps en montant/descendant.',
      },
      {
        n: '2', title: 'Téléchargez le client de nœud Svitlo Chain',
        body: 'Obtenez le dernier client de nœud depuis notre site officiel ou notre dépôt GitHub. Paquets disponibles pour chaque plateforme.',
        code: `<span class="c1"># Linux</span>
wget https://svitlochain.com/node-client/svitlo-node-linux-amd64.tar.gz
tar -xzf svitlo-node-linux-amd64.tar.gz
<span class="kw">cd</span> svitlo-node`,
      },
      {
        n: '3', title: 'Installez et configurez',
        body: 'Après le téléchargement, exécutez le script d\'installation et suivez les instructions à l\'écran. Sur Apple Silicon, activez le backend accéléré Metal pour de meilleures performances.',
        code: `arch
<span class="c1"># arm64 attendu sur Apple Silicon</span>
<span class="kw">export</span> SVITLO_GPU_BACKEND=mps
<span class="kw">export</span> SVITLO_OPTIMIZE_APPLE_SILICON=<span class="kw">true</span>
svitlo-node start`,
      },
      {
        n: '4', title: 'Connectez votre wallet',
        body: 'Pour recevoir des paiements, vous devez connecter un wallet compatible. Ce wallet contiendra vos gains en SVIT.',
        code: `./svitlo-node wallet connect &lt;adresse-de-votre-wallet&gt;`,
      },
      {
        n: '5', title: 'Définissez la tarification et la disponibilité',
        body: 'Vous avez un contrôle total sur la façon dont vos GPU sont loués.',
        code: `./svitlo-node config <span class="kw">set</span> backend mps
./svitlo-node config <span class="kw">set</span> optimize_apple_silicon
./svitlo-node config <span class="kw">set</span> availability 24/7`,
      },
      {
        n: '6', title: 'Commencez à gagner',
        body: 'Une fois votre nœud en cours d\'exécution, connecté et configuré, vos GPU commencent à être associés à des jobs de calcul IA. Surveillez vos revenus et l\'historique des jobs depuis le tableau de bord Svitlo Chain.',
      },
    ],
  },
  minerMode: {
    eyebrow: 'Miner Mode',
    title: 'Nous invitons les mineurs et les fermes GPU',
    body: [
      'Le minage crypto a changé. Avec la baisse des récompenses de preuve de travail et la hausse des coûts d\'électricité, les fermes GPU ont besoin de nouvelles sources de revenus. <b>Miner Mode</b> de Svitlo Chain permet aux opérateurs de minage de rediriger instantanément le matériel inactif vers le calcul IA — sans reconfigurer l\'infrastructure.',
      'Miner Mode est un commutateur léger qui fait passer votre rig du minage à la location de puissance de calcul. Les jobs passent par une pré-validation, s\'exécutent en sandbox, et les gains sont suivis en temps réel. Les fermes avec 10+ GPU bénéficient d\'un routage prioritaire des jobs et d\'un support dédié.',
    ],
    cards: [
      { title: 'Basculez sans interruption', body: 'Alternez entre minage et location de puissance de calcul en quelques secondes. Aucun changement de matériel nécessaire.' },
      { title: 'Potentiel de gain plus élevé', body: 'La demande de calcul IA dépasse souvent l\'offre — les fournisseurs gagnent fréquemment plus par GPU-heure que dans la plupart des opérations de minage.' },
      { title: 'Panneau de contrôle de ferme', body: 'Gérez toute votre ferme depuis une seule interface. Suivez les revenus, le statut des jobs et la disponibilité sur chaque nœud.' },
    ],
    detailTitle: 'Miner Mode : conçu pour évoluer',
    whyTitle: 'Pourquoi Miner Mode ?',
    whyBody: [
      'La rentabilité du minage est instable. La location de GPU sur Svitlo Chain offre une base de revenus stable et prévisible — particulièrement pendant les marchés baissiers ou lorsque la difficulté du réseau augmente.',
      'Miner Mode prend en charge une file d\'attente de jobs par lots, afin que votre ferme ne soit jamais inactive. Quand la demande IA baisse, revenez au minage avec une seule commande. C\'est précisément cette flexibilité face aux conditions du marché qui distingue Svitlo Chain.',
    ],
    cta: 'En savoir plus sur Miner Mode',
    howTitle: 'Comment ça marche',
    steps: [
      { n: '01', title: 'Connectez votre ferme', body: 'Installez le client de nœud Svitlo Chain sur votre rig de minage existant.' },
      { n: '02', title: 'Activez Miner Mode', body: 'Louez du calcul en plus du minage, ou à sa place.' },
      { n: '03', title: 'Gagnez et suivez', body: 'Suivez les revenus en temps réel, le débit des jobs et l\'utilisation des GPU.' },
      { n: '04', title: 'Basculez librement', body: 'Revenez au minage à tout moment lorsque les conditions du marché le favorisent.' },
    ],
  },
  pricing: {
    eyebrow: 'Services',
    title: 'Services et tarification',
    body: 'Svitlo Chain propose trois niveaux de service principaux, chacun adapté à différentes charges de travail IA — des tâches textuelles au traitement vocal en temps réel. Tous les services sont facturés par GPU-heure, avec des remises disponibles pour les réservations à long terme payées en SVIT.',
    cards: [
      { title: 'Inférence de texte / LLM', body: 'Exécutez de grands modèles de langage, des chatbots et des tâches de génération de texte. Optimisé pour du matériel allant de la RTX 4060 à la A100.', price: 'À partir de 0,12 $/h' },
      { title: 'Génération d\'images', body: 'Stable Diffusion, FLUX et modèles d\'image personnalisés à grande échelle. GPU à VRAM élevée recommandés pour la génération par lots.', price: 'À partir de 0,28 $/h' },
      { title: 'Reconnaissance vocale (STT)', body: 'Transcription en temps réel et pipelines de traitement vocal. Instances à faible latence disponibles dans le monde entier.', price: 'À partir de 0,18 $/h' },
    ],
    note: 'Tous les prix reflètent les mises à jour du calculateur v2. Les paiements en SVIT bénéficient d\'une remise supplémentaire de 10 %.',
    revenueTitle: 'Revenus des fournisseurs : chiffres réels',
    revenueLede: 'Vos gains sur Svitlo Chain dépendent directement de votre matériel. Voici une estimation réaliste des revenus horaires pour des configurations GPU courantes, basée sur la demande actuelle du marché et le calculateur de prix v2. Les revenus réels dépendent de la disponibilité, du type de job et de la région.',
    tableHeaders: ['GPU', 'Tarif horaire', 'Est. mensuelle (80 % d\'utilisation)'],
    rows: [
      ['RTX 4060', '0,12 $/h', '~70 $'],
      ['RTX 4070 Ti', '0,22 $/h', '~127 $'],
      ['RTX 4080', '0,35 $/h', '~202 $'],
      ['RTX 4090', '0,55 $/h', '~317 $'],
      ['A40 / L40', '0,80 $/h', '~461 $'],
      ['A100 (40 Go)', '1,40 $/h', '~806 $'],
      ['Flotte de 8× A100', '11,20 $/h', '~6 451 $'],
    ],
    stats: [
      { num: '6 451 $', label: 'Flotte de 8× A100', body: 'Revenu mensuel estimé à 80 % d\'utilisation — le gain de l\'échelle.' },
      { num: '80 %', label: 'Utilisation cible', body: 'Une estimation prudente. Les fournisseurs à forte demande dépassent souvent 90 %.' },
      { num: '10+', label: 'Niveaux de GPU', body: 'Des cartes RTX grand public aux A100 professionnelles — il y a un marché pour chaque GPU.' },
    ],
  },
  token: {
    eyebrow: 'Tokenomics',
    title: 'Le token SVIT : trois piliers d\'utilité',
    body: 'SVIT est la monnaie native de l\'écosystème Svitlo Chain et de la blockchain L1 propre à Svitlo Chain. SVIT anime tout l\'écosystème — de la sécurité et des transactions au staking, au burning et à la capitalisation. En tant que monnaie native, SVIT bénéficie de transactions rapides, de frais bas et d\'un débit élevé. La tokenomics est conçue pour la durabilité à long terme, avec un mécanisme de burning déflationniste, du staking et une offre plafonnée.',
    cards: [
      { icon: '💳', title: 'Paiements et remises', body: 'Les fournisseurs et développeurs qui transigent en SVIT obtiennent 10 % de remise sur tous les frais de la place de marché. SVIT est la monnaie privilégiée pour les paiements de jobs et le staking dans tout l\'écosystème L1 de Svitlo Chain, avec des transactions rapides et peu coûteuses.' },
      { icon: '🛡️', title: 'Staking et réputation', body: 'Les fournisseurs mettent du SVIT en staking pour rejoindre le réseau. Un comportement honnête augmente les scores de réputation et débloque l\'attribution prioritaire des jobs. Les mauvais acteurs sont sanctionnés (slashing), et la blockchain L1 de Svitlo Chain assure une coordination efficace même sous forte charge.' },
      { icon: '🔥', title: 'Burning et déflation', body: 'Une partie de chaque frais de transaction est brûlée définitivement, réduisant l\'offre totale au fil du temps. À mesure que l\'activité de l\'écosystème croît, le taux de burning s\'accélère — créant une pression déflationniste sur SVIT, tandis que les faibles frais de Svitlo Chain maintiennent le mécanisme efficace.' },
    ],
    callout: 'L\'offre totale de SVIT est plafonnée. Les événements de burning sont vérifiables publiquement on-chain. Les détenteurs de tokens votent également sur les mises à jour de la plateforme et les structures de frais.',
    infraTitle: 'Infrastructure blockchain pour SVIT',
    infraBody: 'Au-delà de l\'utilité directe, Svitlo Chain s\'appuie sur sa propre infrastructure qui renforce l\'écosystème et facilite l\'utilisation de SVIT.',
    infraCards: [
      { title: 'Blockchain L1 pour SVIT', body: 'SVIT est la monnaie native de la blockchain L1 propre à Svitlo Chain, avec une émission totale d\'1 milliard de pièces. Elle sert de colonne vertébrale à la sécurité de l\'écosystème, au flux des transactions, au staking, au burning et à la capitalisation à long terme. Toute l\'activité est directement liée à la valeur et à la durabilité de SVIT.' },
      { title: 'Svitlo Wallet', body: 'Svitlo Wallet est un wallet simple pour stocker, envoyer et utiliser SVIT dans tout l\'écosystème Svitlo Chain.', href: '/fr/wallet/', linkLabel: 'En savoir plus' },
    ],
  },
  enterprise: {
    eyebrow: 'Pour les entreprises',
    title: 'Business, confiance et démarrage',
    companyTitle: 'Niveaux entreprise',
    companyBody: 'Les organisations qui ont besoin de SLA, d\'un support dédié et d\'un accès à une flotte privée peuvent rejoindre le programme entreprise de Svitlo Chain. Chaque niveau inclut une vérification cryptographique des jobs de calcul, un suivi de réputation on-chain, et une documentation complète pour la conformité dans les achats d\'entreprise.',
    tableHeaders: ['Niveau', 'Fonctionnalités'],
    tiers: [
      ['Starter', 'Accès API, place de marché publique, paiements SVIT'],
      ['Growth', 'Routage prioritaire, support dédié, CLI de flotte'],
      ['Enterprise', 'SLA garanti, flotte privée, package de conformité, intégration white-glove'],
    ],
    trustTitle: 'Confiance et sécurité',
    trustItems: [
      { title: 'Vérification SHA-256', body: 'Chaque job de calcul est vérifié cryptographiquement — les fournisseurs ne peuvent pas falsifier les résultats.' },
      { title: 'Système de réputation', body: 'Le scoring on-chain récompense les fournisseurs constants et honnêtes et filtre les mauvais acteurs.' },
      { title: 'Prêt pour la conformité', body: 'Documentation entreprise, journaux d\'audit et options de résidence des données dans votre région préférée.' },
    ],
    joinTitle: 'Rejoignez Svitlo Chain dès aujourd\'hui',
    joinCards: [
      { icon: '🖥️', title: 'Fournisseurs', body: 'Monétisez vos GPU inactifs et gagnez un revenu passif.' },
      { icon: '⚡', title: 'Développeurs', body: 'Obtenez une puissance GPU abordable et évolutive pour vos projets IA.' },
      { icon: '⛏️', title: 'Opérateurs de minage', body: 'Transformez votre infrastructure de minage en calcul IA avec Miner Mode.' },
    ],
  },
  roadmap: {
    eyebrow: 'Feuille de route',
    title: 'Notre feuille de route : l\'avenir de Svitlo Chain',
    body: 'Svitlo Chain se développe en continu pour répondre à la demande croissante de calcul GPU décentralisé. Notre feuille de route se concentre sur la croissance stratégique et la création de valeur pour les fournisseurs comme pour les développeurs.',
    milestones: [
      { when: 'T3 2026', title: 'Lancement', body: 'Lancement officiel de la plateforme Svitlo Chain, avec les fonctionnalités principales pour la location de GPU et Miner Mode.' },
      { when: 'T4 2026', title: 'Fonctionnalités entreprise', body: 'Niveaux entreprise, support dédié, SLA et protocoles de sécurité avancés pour les grands clients.' },
      { when: 'T1 2027', title: 'Expansion mondiale', body: 'Couverture géographique élargie, nouveaux data centers régionaux et partenariats pour toucher un public plus large.' },
      { when: 'T2 2027', title: 'Analytique avancée', body: 'Outils analytiques sophistiqués pour optimiser l\'utilisation des GPU et le suivi des revenus.' },
    ],
    footer: 'Cette feuille de route reflète nos priorités stratégiques actuelles, mais l\'équipe Svitlo Chain reste agile et réactive aux conditions du marché et aux retours de la communauté.',
  },
  faq: {
    eyebrow: 'Questions',
    title: 'Questions fréquentes',
    body: 'Vous avez des questions sur Svitlo Chain ? Voici les réponses à certaines des plus courantes, tant côté fournisseurs que développeurs.',
    items: [
      { q: 'Comment démarrer en tant que fournisseur ?', a: 'Installez le client de nœud Svitlo Chain sur votre rig de minage existant. Activez ensuite « Miner Mode » pour commencer à louer votre puissance de calcul, en plus de votre minage existant ou à sa place. Le processus est conçu pour être fluide et simple.' },
      { q: 'Quels frais s\'appliquent sur Svitlo Chain ?', a: 'Svitlo Chain a une structure de frais transparente pour maintenir la plateforme. Les utilisateurs qui transigent dans notre token utilitaire natif, SVIT, obtiennent 10 % de remise sur tous les frais de la place de marché. Les frais spécifiques peuvent varier selon le type de job et les conditions du marché.' },
      { q: 'Mes données et calculs sont-ils sécurisés ?', a: 'Oui. La sécurité est au cœur de notre conception. Chaque job de calcul est vérifié cryptographiquement via SHA-256, garantissant que les fournisseurs ne peuvent pas falsifier les résultats. Nous suivons également la réputation des fournisseurs on-chain, et proposons un package de conformité entreprise pour les besoins de sécurité avancés.' },
      { q: 'Puis-je utiliser n\'importe quel GPU ?', a: 'Svitlo Chain est conçu pour être flexible et prend en charge un large éventail de GPU, des modèles grand public comme la RTX 4060 aux puissants GPU professionnels comme la A100. La plateforme dispose d\'un marché pour presque toute configuration GPU, vous permettant de monétiser le matériel que vous possédez.' },
      { q: 'Qu\'est-ce que le token SVIT ?', a: 'SVIT est le token utilitaire natif de Svitlo Chain, conçu pour permettre les paiements, encourager un comportement honnête via le staking, et gouverner le développement de la plateforme. Il dispose d\'un mécanisme de burning déflationniste et d\'une offre plafonnée pour la durabilité à long terme.' },
      { q: 'Comment retirer mes gains ?', a: 'Vos gains Svitlo Chain s\'accumulent dans votre wallet connecté. Vous pouvez retirer à tout moment, soit en SVIT, soit en convertissant vers d\'autres cryptomonnaies/monnaies fiduciaires via les options d\'échange intégrées de la plateforme. Les détails sont dans notre documentation.' },
    ],
  },
  stats: {
    eyebrow: 'En chiffres',
    title: 'Svitlo Chain en chiffres : la force de la plateforme',
    body: 'Svitlo Chain continue de croître de façon exponentielle, propulsant l\'avenir du calcul IA décentralisé. Voici un aperçu de la portée et de l\'efficacité impressionnantes de la plateforme — une solution rentable comparée aux fournisseurs cloud traditionnels.',
    items: [
      { num: '2,5 M+', label: 'Heures de GPU disponibles', body: 'Plus de 2,5 millions d\'heures de GPU ont été fournies par notre réseau pour des jobs IA, en augmentation constante chaque mois.' },
      { num: '8 500+', label: 'Fournisseurs actifs', body: 'Un réseau croissant de plus de 8 500 fournisseurs uniques contribue en puissance de calcul, garantissant robustesse et disponibilité.' },
      { num: '70 %', label: 'Économies moyennes', body: 'Réalisez jusqu\'à 70 % d\'économies sur le calcul GPU par rapport aux principales plateformes cloud, sans compromettre les performances.' },
      { num: '500+ PFLOPS', label: 'Puissance de calcul totale', body: 'Combiné, Svitlo Chain fournit plus de 500 PFLOPS de puissance de calcul IA — une ressource formidable à toute échelle.' },
    ],
  },
  architecture: {
    eyebrow: 'Sous le capot',
    title: 'Architecture technique de Svitlo Chain : comment fonctionne le système',
    body: 'Svitlo Chain fonctionne sur une architecture décentralisée robuste qui garantit efficacité, sécurité et transparence. Voici un aperçu des mécanismes techniques derrière la plateforme.',
    lanes: [
      { label: 'Développeur (Client)', cells: ['Soumettre un job IA'] },
      { label: 'Plateforme Svitlo Chain', cells: ['Association et planification', '→', 'Résultat et preuve', '→', 'Vérification et règlement'] },
      { label: 'Fournisseur GPU', cells: ['Récupérer et exécuter le job'] },
      { label: 'Blockchain', cells: ['Vérification SHA-256', '→', 'Paiement SVIT', '→', 'Système de réputation'] },
    ],
    body2: 'Svitlo Chain utilise la technologie blockchain pour créer un environnement sans confiance préalable, où chaque étape du processus de calcul est vérifiable et transparente, tout en offrant une sécurité robuste pour protéger les données et calculs des utilisateurs.',
    cards: [
      { title: 'Exécution décentralisée des jobs', body: 'Les jobs IA sont divisés et distribués à travers le réseau de fournisseurs GPU, optimisant l\'utilisation du calcul disponible et évitant les points de défaillance uniques.' },
      { title: 'Conteneurisation sécurisée', body: 'Chaque job de calcul s\'exécute dans un environnement conteneurisé isolé sur le matériel du fournisseur, empêchant les accès non autorisés et garantissant l\'intégrité des données.' },
      { title: 'Transparence blockchain', body: 'Chaque transaction, spécification de job et preuve de vérification est enregistrée on-chain pour une transparence totale et une non-répudiation.' },
    ],
  },
  glossary: {
    eyebrow: 'Référence',
    title: 'Glossaire',
    body: 'Pour faciliter la compréhension de Svitlo Chain et de l\'écosystème IA décentralisée plus large, nous avons compilé un glossaire des termes techniques courants — clair et concis, que vous soyez un utilisateur technique expérimenté ou nouveau dans le domaine.',
    terms: [
      { term: 'Blockchain', body: 'Un registre numérique distribué et immuable de « blocs » de transactions liés cryptographiquement. Chaque bloc contient un horodatage et une référence au bloc précédent, créant un historique sécurisé et transparent.' },
      { term: 'Conteneurisation', body: 'Une technique de virtualisation qui empaquette le code applicatif avec toutes ses dépendances (bibliothèques, outils, configuration) dans un « conteneur » isolé. Cela garantit que l\'application s\'exécute de manière cohérente, quel que soit l\'endroit où elle est déployée.' },
      { term: 'Preuve cryptographique', body: 'Méthodes mathématiques utilisées pour vérifier l\'authenticité et l\'intégrité des données ou des transactions. Elle permet une communication et une vérification sécurisées sans que les parties aient besoin de se faire confiance.' },
      { term: 'CUDA', body: 'Une plateforme de calcul parallèle et un modèle de programmation développés par NVIDIA. CUDA permet aux développeurs d\'utiliser les GPU NVIDIA pour du calcul généraliste, accélérant considérablement les tâches à forte intensité de calcul, notamment en IA.' },
      { term: 'Décentralisation', body: 'Le principe de répartir le contrôle et la prise de décision sur un réseau plutôt que de les concentrer entre les mains d\'une seule autorité. Dans Svitlo Chain, cela signifie que les ressources GPU sont réparties entre de nombreux nœuds à l\'échelle mondiale.' },
      { term: 'Docker', body: 'Une plateforme populaire pour développer, distribuer et exécuter des applications à l\'aide de la technologie de conteneurs. Les conteneurs Docker garantissent que le client Svitlo Chain et les jobs IA s\'exécutent de manière isolée et efficace.' },
      { term: 'Blockchain L1 de Svitlo Chain', body: 'La blockchain L1 propre à Svitlo Chain, écrite en Rust et conçue pour la sécurité, la haute vitesse et le traitement efficace des données. Elle constitue la base des transactions, de la logique des programmes et de l\'infrastructure réseau.' },
      { term: 'GPU (unité de traitement graphique)', body: 'Un circuit électronique spécialisé conçu pour manipuler et modifier rapidement la mémoire afin d\'accélérer la création d\'images dans un tampon d\'image. Les GPU sont également très efficaces pour le traitement parallèle de grands ensembles de données, ce qui les rend idéaux pour le calcul IA.' },
      { term: 'Inférence', body: 'Le processus consistant à utiliser un modèle IA entraîné pour faire des prédictions ou des décisions basées sur des données nouvelles et jamais vues. C\'est la phase où le modèle IA applique ce qu\'il a appris.' },
      { term: 'Minage', body: 'Le processus de vérification et d\'ajout de nouvelles transactions à une blockchain en résolvant des puzzles cryptographiques complexes. Dans le « Miner Mode » de Svitlo Chain, les nœuds peuvent gagner en validant des transactions ou en effectuant du calcul IA.' },
      { term: 'Nœud', body: 'Un ordinateur ou un serveur exécutant le logiciel client Svitlo Chain et connecté au réseau. Les nœuds fournissent des ressources de calcul (GPU) au réseau.' },
      { term: 'Pair-à-pair (P2P)', body: 'Un réseau où les nœuds communiquent directement entre eux sans avoir besoin d\'un serveur central. Svitlo Chain s\'appuie sur un réseau P2P pour distribuer les charges de travail IA.' },
      { term: 'Pièce SVIT', body: 'La cryptomonnaie native de la blockchain L1 de Svitlo Chain. SVIT est utilisée pour payer les ressources GPU, récompenser les fournisseurs et participer à la gouvernance du réseau.' },
      { term: 'Score de réputation', body: 'Un système qui évalue la fiabilité et la performance des fournisseurs GPU de Svitlo Chain. Des scores élevés conduisent à plus de jobs et à des gains plus élevés.' },
      { term: 'SHA-256', body: 'Une fonction de hachage cryptographique qui produit une valeur de hachage de 256 bits (32 octets). Elle est largement utilisée dans la technologie blockchain pour garantir l\'intégrité des données et créer des identifiants uniques pour les blocs.' },
      { term: 'Slashing', body: 'Un mécanisme de pénalité dans les réseaux décentralisés où une partie de la mise d\'un fournisseur GPU est retirée s\'il agit de manière malveillante ou ne respecte pas ses obligations.' },
      { term: 'Contrats intelligents', body: 'Des contrats auto-exécutables dont les termes de l\'accord sont écrits directement dans le code. Ils s\'exécutent automatiquement sur une blockchain lorsque des conditions prédéfinies sont remplies, éliminant le besoin d\'intermédiaires.' },
      { term: 'Staking', body: 'Le processus consistant à bloquer une certaine quantité de cryptomonnaie (SVIT sur Svitlo Chain) en garantie pour soutenir les opérations du réseau. Les fournisseurs GPU peuvent mettre du SVIT en staking pour augmenter leur score de réputation et obtenir plus de jobs.' },
      { term: 'VRAM (mémoire vive vidéo)', body: 'Un type de RAM spécifiquement conçu pour stocker les données d\'image affichées à l\'écran. Pour le calcul IA, en particulier avec de grands modèles, une VRAM suffisante est essentielle pour les performances.' },
    ],
    footer: 'Ce glossaire est mis à jour régulièrement. Si vous avez des questions sur des termes spécifiques ou souhaitez suggérer des ajouts, n\'hésitez pas à contacter la communauté Svitlo Chain.',
  },
  compare: {
    eyebrow: 'Comparaison',
    title: 'Svitlo Chain face aux fournisseurs cloud traditionnels',
    body: 'Svitlo Chain révolutionne l\'accès aux ressources GPU pour les projets d\'IA et de machine learning. Cette comparaison met en évidence en quoi Svitlo Chain diffère des services cloud traditionnels comme AWS, Google Cloud et Azure, et d\'autres fournisseurs de cloud GPU centralisés.',
    tableHeaders: ['Dimension', 'Svitlo Chain', 'Cloud traditionnel'],
    rows: [
      ['Tarification (par GPU-heure)', 'Jusqu\'à 70 % moins cher, dynamique', 'Souvent plus cher, à la demande par paliers'],
      ['Décentralisation', 'Entièrement décentralisé (pair-à-pair)', 'Centralisé'],
      ['Flexibilité', 'Pas de contrats longs, paiement à l\'usage, sans engagement', 'Nécessite souvent des contrats, périodes d\'engagement, accords complexes'],
      ['Vitesse (association et exécution des jobs)', 'Association rapide via réseau P2P', 'Variable, peut souffrir de goulots d\'étranglement en cas de forte demande'],
      ['Transparence', 'Transparence et vérifiabilité totales via blockchain', 'Limitée, contrôlée par l\'entreprise'],
      ['Communauté', 'Développement open-source et communautaire', 'Grand écosystème, mais non piloté par la communauté'],
      ['Incitations par token', 'Oui, tokens SVIT pour fournisseurs et utilisateurs', 'Non'],
    ],
    footer: 'Comme le montre le tableau, Svitlo Chain offre une solution rentable, flexible et transparente pour le calcul GPU, portée par un modèle décentralisé et l\'engagement de la communauté. Cela positionne Svitlo Chain comme l\'avenir du calcul IA distribué.',
  },
  cta: {
    title: 'Prêt à rejoindre la révolution GPU décentralisée ?',
    body: 'Que vous souhaitiez gagner grâce à votre calcul inactif ou ayez besoin d\'une puissance IA abordable et évolutive, Svitlo Chain a la bonne solution. Commencez à construire votre avenir ou monétisez votre matériel existant en quelques minutes.',
    ctaPrimary: 'Devenir fournisseur',
    ctaGlass: 'Commencer à développer',
  },
  contact: {
    eyebrow: 'Contactez-nous',
    title: 'Contact et support',
    body: 'Vous avez des questions, besoin d\'aide, ou souhaitez rejoindre la communauté Svitlo Chain ? Voici tous nos canaux de contact et ressources de support.',
    items: [
      { icon: '✉️', title: 'Support par email', body: 'svitlochain@gmail.com', href: 'mailto:svitlochain@gmail.com' },
      { icon: '✈️', title: 'Telegram', body: 'Rejoignez notre groupe Telegram pour des mises à jour rapides et discuter avec la communauté.', href: 'https://t.me/+8t6LS2j4CyJiOTU0' },
      { icon: '💬', title: 'Communauté Discord', body: 'Rejoignez notre Discord pour un support en temps réel et des discussions avec l\'équipe et d\'autres utilisateurs.', href: 'https://discord.gg/9wqA3fMfg' },
      { icon: '🐦', title: 'Suivez-nous sur X', body: 'Restez informé des dernières actualités et mises à jour produit.', href: 'https://x.com/Svitlochain' },
      { icon: '📘', title: 'Facebook', body: 'Suivez notre page Facebook pour les actualités et les mises à jour de la communauté.', href: 'https://www.facebook.com/share/1D53mnv4kk/' },
      { icon: '🐙', title: 'Dépôt GitHub', body: 'Explorez notre code open-source et contribuez au développement de la plateforme.' },
      { icon: '📄', title: 'Documentation', body: 'Lisez nos guides complets et spécifications techniques pour bien démarrer.' },
      { icon: '📰', title: 'Blog Svitlo Chain', body: 'Obtenez les dernières analyses, réflexions et actualités sur l\'IA décentralisée.' },
    ],
  },
  footer: {
    tagline: 'Une blockchain Layer-1 pour le calcul IA et le règlement de l\'inférence.',
    cols: [
      { title: 'Produit', links: [{ label: 'Plateforme', href: '/fr/platform/' }, { label: 'Documentation', href: '/fr/documentation/' }, { label: 'Pour les développeurs', href: '#developers' }, { label: 'Pour les propriétaires de GPU', href: '#gpu-owners' }, { label: 'Token SVIT', href: '#token' }] },
      { title: 'Entreprise', links: [{ label: 'Feuille de route', href: '#roadmap' }, { label: 'FAQ', href: '#faq' }, { label: 'Contact', href: '#contact' }] },
      { title: 'Wallet', links: [{ label: 'Ouvrir le Wallet', href: '/fr/wallet/' }, { label: 'Politique de confidentialité', href: '/privacy/' }, { label: 'Support', href: '/support/' }] },
    ],
    copyright: '© 2026 Svitlo Chain. Tous droits réservés.',
  },
};
