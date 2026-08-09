export default {
  meta: {
    lang: 'de',
    title: 'Svitlo Chain — Dezentralisierte GPU-Cloud',
    description: 'Ein dezentraler GPU-Marktplatz für KI — vermiete ungenutzte GPUs oder stelle deine eigene Hardware bereit, gesichert durch Blockchain.',
  },
  nav: {
    links: [
      { href: '/de/wallet/', label: 'Wallet' },
      { href: '/de/platform/', label: 'Plattform' },
      { href: '/de/documentation/', label: 'Dokumentation' },
    ],
  },
  hero: {
    eyebrow: 'Layer-1-Blockchain',
    title: 'Svitlo Chain: dezentralisierte GPU-Cloud',
    lede: 'Befreie dich vom Preismonopol der großen Cloud-Anbieter für GPUs. Vermiete ungenutzte GPUs, oder stelle deine eigene Hardware bereit und verdiene echtes Einkommen — angetrieben von KI, gesichert durch Blockchain.',
    ctaPrimary: 'Anbieter werden',
    ctaGlass: 'Mit der Entwicklung beginnen',
  },
  idea: {
    eyebrow: 'Warum Svitlo Chain',
    title: 'Die Idee hinter Svitlo Chain',
    body: [
      'Der Markt für Cloud-GPUs wird von einer Handvoll Giganten kontrolliert — AWS, Google, Azure — die Premiumpreise verlangen, während Millionen von GPUs in Gaming-PCs, Mining-Rigs und Unternehmensrechenzentren ungenutzt bleiben. Svitlo Chain existiert, um das zu ändern.',
      'Das Konzept ist einfach: ein dezentraler GPU-Marktplatz, auf dem Hardware-Besitzer mit ungenutzter Rechenleistung verdienen und KI-Entwickler erschwingliche, skalierbare Kapazität erhalten, ohne an einen einzelnen Anbieter gebunden zu sein. Keine Zwischenhändler. Keine Aufschläge. Nur eine direkte, vertrauensfreie Verbindung zwischen Angebot und Nachfrage — gesichert durch kryptografische Beweise und ein transparentes Reputationssystem.',
    ],
    cards: [
      { label: 'Problem', title: 'Zentralisierte Cloud-GPUs', body: 'Zentralisierte Cloud-Anbieter kontrollieren Preis, Verfügbarkeit und Zugang — und schaffen so Engpässe für die KI-Innovation.' },
      { label: 'Lösung', title: 'Ein Peer-to-Peer-Markt', body: 'Ein Peer-to-Peer-GPU-Marktplatz, der ungenutzte Hardware in produktive Infrastruktur verwandelt, die ihre Besitzer bezahlt.' },
      { label: 'Vision', title: 'Eine globale Rechenschicht', body: 'Eine globale, zensurresistente Schicht für Rechenleistung, die die nächste Generation von KI-Anwendungen antreibt.' },
    ],
  },
  developers: {
    eyebrow: 'So funktioniert es',
    title: 'Für KI-Entwickler und Builder',
    body: [
      'Svitlo Chain gibt KI-Entwicklern sofortigen Zugang zu einem globalen GPU-Pool — von Consumer-RTX-Karten bis zu Enterprise-A100 — zu einem Bruchteil der traditionellen Cloud-Kosten. Ob du ein großes Sprachmodell trainierst, Inferenz im großen Maßstab ausführst oder komplexe Simulationen renderst, Svitlo Chain ordnet deine Arbeitslast in Sekunden der richtigen Hardware zu.',
      'Die Plattform übernimmt automatisch Job-Scheduling, sichere Containerisierung und Abrechnung. Builder deployen via CLI oder API, geben ihre GPU-Anforderungen an und zahlen nur für tatsächlich genutzte Rechenleistung — keine langfristigen Verträge, keine Mindestverpflichtungen.',
    ],
    steps: [
      { title: 'GPU-Anforderungen angeben', body: 'Wähle VRAM, Rechenleistung und Region.' },
      { title: 'Via CLI oder API deployen', body: 'Reiche deinen Container ein und starte sofort mit dem Rechnen.' },
      { title: 'Nach Nutzung bezahlen', body: 'Keine Verträge. Abrechnung in SVIT oder Stablecoin.' },
    ],
    quickstartTitle: 'Entwicklerhandbuch: Schnellstart mit Svitlo Chain',
    quickstartLede: 'Als KI-Entwickler brauchst du schnellen, kosteneffizienten und skalierbaren Zugang zu GPU-Ressourcen. Dieser Schnellstart bringt dich von der Authentifizierung bis zu deinem ersten Job und Ergebnis.',
    steps2: [
      {
        n: '1', title: 'API-Authentifizierung und Einrichtung',
        body: 'Um mit der Svitlo Chain API zu interagieren, benötigst du deinen API-Schlüssel aus deinem Entwickler-Dashboard nach der Registrierung. Für Python-Entwickler empfehlen wir unser SDK für eine reibungslose Integration; andere Sprachen können die REST-API direkt aufrufen.',
        code: `<span class="kw">import</span> os
<span class="kw">import</span> svitlo_sdk

<span class="c1"># API-Schlüssel sicher aus einer Umgebungsvariable lesen</span>
API_KEY = os.environ.get(<span class="str">"SVIT_API_KEY"</span>)

<span class="kw">if not</span> API_KEY:
    <span class="kw">raise</span> ValueError(<span class="str">"SVIT_API_KEY ist nicht gesetzt."</span>)

<span class="c1"># Svitlo Chain SDK-Client initialisieren</span>
client = svitlo_sdk.SvitloClient(api_key=API_KEY)
print(<span class="str">"API-Client erfolgreich initialisiert."</span>)`,
      },
      {
        n: '2', title: 'Deinen ersten GPU-Job einreichen',
        body: 'Einen GPU-Job einzureichen ist einfach. Definiere, welches KI-Modell ausgeführt werden soll, welche Eingabedaten verwendet werden und welche GPU-Ressourcen benötigt werden. Svitlo Chain ordnet deinen Job automatisch verfügbaren Anbietern im Netzwerk zu.',
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
    print(<span class="fn">f</span><span class="str">"Job eingereicht! Job-ID: {job.id}"</span>)
    print(<span class="fn">f</span><span class="str">"Status: {job.status}"</span>)
<span class="kw">except</span> Exception <span class="kw">as</span> e:
    print(<span class="fn">f</span><span class="str">"Fehler beim Einreichen des Jobs: {e}"</span>)`,
      },
      {
        n: '3', title: 'Job-Status überwachen',
        body: 'Nach dem Einreichen kannst du den Fortschritt deines Jobs in Echtzeit verfolgen — Fehler einsehen und abschätzen, wann Ergebnisse bereit sind.',
        code: `job_id = job.id

current_job = client.get_job_status(job_id)
print(<span class="fn">f</span><span class="str">"Job {current_job.id}, Status: {current_job.status}"</span>)

<span class="kw">while</span> current_job.status <span class="kw">not in</span> [<span class="str">"COMPLETED"</span>, <span class="str">"FAILED"</span>]:
    time.sleep(30)
    current_job = client.get_job_status(job_id)
    print(<span class="fn">f</span><span class="str">"Aktualisierter Status: {current_job.status}"</span>)

<span class="kw">if</span> current_job.status == <span class="str">"COMPLETED"</span>:
    print(<span class="str">"Job abgeschlossen!"</span>)
<span class="kw">else</span>:
    print(<span class="str">"Job fehlgeschlagen oder abgebrochen."</span>)`,
      },
      {
        n: '4', title: 'Ergebnisse abrufen',
        body: 'Sobald dein GPU-Job abgeschlossen ist, steht die Ausgabe am von dir angegebenen Ort zur Verfügung (z. B. ein S3-Bucket). Svitlo Chain stellt die Verbindungsdetails bereit, die du benötigst, um Ergebnisse sicher abzurufen.',
        code: `<span class="kw">if</span> current_job.status == <span class="str">"COMPLETED"</span>:
    print(<span class="fn">f</span><span class="str">"Ergebnisse verfügbar unter: {current_job.output_data_location}"</span>)
<span class="kw">else</span>:
    print(<span class="str">"Ergebnisse nicht verfügbar — Job nicht abgeschlossen oder fehlgeschlagen."</span>)`,
      },
    ],
    billingTitle: '5. Zahlung und Abrechnung',
    billingBody: 'Svitlo Chain verwendet den SVIT-Token für alle Plattformtransaktionen, um Transparenz und Effizienz zu gewährleisten. Du wirst für die tatsächliche GPU-Nutzung und Job-Dauer abgerechnet — oft bis zu 70 % günstiger als traditionelle Cloud-Angebote. Verfolge deinen Nutzungsverlauf und Kontostand über dein Svitlo-Chain-Dashboard.',
  },
  gpuOwners: {
    eyebrow: 'So funktioniert es',
    title: 'Für GPU-Besitzer',
    body: 'GPU-Besitzer — Gamer, Miner und Rechenzentren — können ungenutzte Hardware mit Svitlo Chain verbinden und passives Einkommen erzielen. Der Svitlo-Chain-Client läuft im Hintergrund, nimmt Rechenjobs an, führt sie in isolierten Containern aus und liefert Ergebnisse mit kryptografischer Verifizierung. Anbieter legen selbst Verfügbarkeitsfenster, Preise und Hardware-Spezifikationen fest.',
    cards: [
      { title: 'Client installieren', body: 'Lade die Svitlo-Chain-Node-Software herunter, verbinde deine GPU und sei in wenigen Minuten einsatzbereit. Windows, Linux und Docker werden unterstützt.' },
      { title: 'Deine Bedingungen festlegen', body: 'Lege Stundenpreise, minimale VRAM und Verfügbarkeitsplan fest. Du kontrollierst, wann deine Hardware auf dem Markt ist.' },
      { title: 'Automatisch verdienen', body: 'Jobs werden automatisch zugeordnet, ausgeführt und verifiziert. Auszahlungen erfolgen in SVIT oder USDC direkt in deine Wallet.' },
    ],
    installTitle: 'Installationsanleitung für GPU-Anbieter',
    installLede: 'Svitlo-Chain-GPU-Anbieter zu werden ist einfach und lässt dich mit deiner ungenutzten Rechenleistung verdienen. Folge diesen Schritten, um den Svitlo-Chain-Node-Client zu installieren und deine GPU-Ressourcen weltweit an KI-Entwickler zu vermieten.',
    installSteps: [
      {
        n: '1', title: 'Systemanforderungen',
        body: 'Stelle vor der Installation sicher, dass dein System diese Anforderungen erfüllt: <b>Betriebssystem:</b> Linux (Ubuntu 20.04+ empfohlen), Windows 10/11, macOS 13 Ventura oder neuer, oder eine Docker-kompatible Umgebung. <b>GPU:</b> NVIDIA GeForce RTX-30er-Serie oder neuer, NVIDIA A100/H100, AMD Radeon RX-6000er-Serie oder neuer, oder Apple Silicon mit Metal Performance Shaders (MPS). <b>RAM:</b> mindestens 16 GB. <b>Netzwerk:</b> eine stabile Verbindung mit mindestens 100 Mbit/s Up-/Download.',
      },
      {
        n: '2', title: 'Svitlo-Chain-Node-Client herunterladen',
        body: 'Hole dir den neuesten Node-Client von unserer offiziellen Website oder dem GitHub-Repository. Pakete für jede Plattform verfügbar.',
        code: `<span class="c1"># Linux</span>
wget https://svitlochain.com/node-client/svitlo-node-linux-amd64.tar.gz
tar -xzf svitlo-node-linux-amd64.tar.gz
<span class="kw">cd</span> svitlo-node`,
      },
      {
        n: '3', title: 'Installieren und konfigurieren',
        body: 'Führe nach dem Download das Setup-Skript aus und folge den Anweisungen auf dem Bildschirm. Aktiviere auf Apple Silicon das Metal-beschleunigte Backend für beste Leistung.',
        code: `arch
<span class="c1"># erwartet arm64 auf Apple Silicon</span>
<span class="kw">export</span> SVITLO_GPU_BACKEND=mps
<span class="kw">export</span> SVITLO_OPTIMIZE_APPLE_SILICON=<span class="kw">true</span>
svitlo-node start`,
      },
      {
        n: '4', title: 'Wallet verbinden',
        body: 'Um Zahlungen zu erhalten, musst du eine kompatible Wallet verbinden. Diese Wallet enthält deine SVIT-Einnahmen.',
        code: `./svitlo-node wallet connect &lt;deine-wallet-adresse&gt;`,
      },
      {
        n: '5', title: 'Preise und Verfügbarkeit festlegen',
        body: 'Du hast die volle Kontrolle darüber, wie deine GPUs vermietet werden.',
        code: `./svitlo-node config <span class="kw">set</span> backend mps
./svitlo-node config <span class="kw">set</span> optimize_apple_silicon
./svitlo-node config <span class="kw">set</span> availability 24/7`,
      },
      {
        n: '6', title: 'Verdienen beginnen',
        body: 'Sobald dein Node läuft, verbunden und konfiguriert ist, beginnen deine GPUs, mit KI-Rechenjobs zugeordnet zu werden. Verfolge Einnahmen und Job-Verlauf über das Svitlo-Chain-Dashboard.',
      },
    ],
  },
  minerMode: {
    eyebrow: 'Miner Mode',
    title: 'Wir laden Miner und GPU-Farmen ein',
    body: [
      'Krypto-Mining hat sich verändert. Mit sinkenden Proof-of-Work-Belohnungen und steigenden Stromkosten brauchen GPU-Farmen neue Einnahmequellen. <b>Miner Mode</b> von Svitlo Chain lässt Mining-Betreiber ungenutzte Hardware sofort auf KI-Rechenleistung umleiten — ohne die Infrastruktur neu konfigurieren zu müssen.',
      'Miner Mode ist ein leichtgewichtiger Schalter, der dein Rig vom Mining zur Vermietung von Rechenleistung verschiebt. Jobs durchlaufen eine Vorvalidierung, laufen isoliert (Sandbox) und Einnahmen werden in Echtzeit verfolgt. Farmen mit 10+ GPUs erhalten priorisiertes Job-Routing und dedizierten Support.',
    ],
    cards: [
      { title: 'Wechsel ohne Ausfallzeit', body: 'Wechsle in Sekunden zwischen Mining und Vermietung von Rechenleistung. Keine Hardware-Änderungen nötig.' },
      { title: 'Höheres Ertragspotenzial', body: 'Die Nachfrage nach KI-Rechenleistung übersteigt oft das Angebot — Anbieter verdienen häufig mehr pro GPU-Stunde als bei den meisten Mining-Operationen.' },
      { title: 'Farm-Kontrollpanel', body: 'Verwalte deine gesamte Farm von einer einzigen Oberfläche aus. Verfolge Einnahmen, Job-Status und Betriebszeit über jeden Node.' },
    ],
    detailTitle: 'Miner Mode: für Skalierung gebaut',
    whyTitle: 'Warum Miner Mode?',
    whyBody: [
      'Die Mining-Rentabilität ist instabil. Die GPU-Vermietung auf Svitlo Chain bietet eine stabile, vorhersehbare Einkommensbasis — besonders in Bärenmärkten oder wenn die Netzwerk-Difficulty steigt.',
      'Miner Mode unterstützt eine Batch-Job-Warteschlange, sodass deine Farm nie untätig bleibt. Wenn die KI-Nachfrage sinkt, wechsle mit einem einzigen Befehl zurück zum Mining. Genau diese Flexibilität über Marktbedingungen hinweg zeichnet Svitlo Chain aus.',
    ],
    cta: 'Mehr über Miner Mode erfahren',
    howTitle: 'So funktioniert es',
    steps: [
      { n: '01', title: 'Deine Farm verbinden', body: 'Installiere den Svitlo-Chain-Node-Client auf deinem bestehenden Mining-Rig.' },
      { n: '02', title: 'Miner Mode aktivieren', body: 'Vermiete Rechenleistung zusätzlich zum Mining oder anstelle davon.' },
      { n: '03', title: 'Verdienen und verfolgen', body: 'Verfolge Einnahmen in Echtzeit, Job-Durchsatz und GPU-Auslastung.' },
      { n: '04', title: 'Frei wechseln', body: 'Kehre jederzeit zum Mining zurück, wenn die Marktbedingungen dies begünstigen.' },
    ],
  },
  pricing: {
    eyebrow: 'Dienste',
    title: 'Dienste und Preise',
    body: 'Svitlo Chain bietet drei Kern-Servicestufen, jede geeignet für unterschiedliche KI-Workloads — von textbasierten Aufgaben bis zur Echtzeit-Sprachverarbeitung. Alle Dienste werden pro GPU-Stunde abgerechnet, mit Rabatten für langfristige Reservierungen, die in SVIT bezahlt werden.',
    cards: [
      { title: 'Text-Inferenz / LLM', body: 'Führe große Sprachmodelle, Chatbots und Textgenerierungsaufgaben aus. Optimiert für Hardware von RTX 4060 bis A100.', price: 'Ab $0,12/Std' },
      { title: 'Bildgenerierung', body: 'Stable Diffusion, FLUX und maßgeschneiderte Bildmodelle im großen Maßstab. GPUs mit hohem VRAM empfohlen für Batch-Generierung.', price: 'Ab $0,28/Std' },
      { title: 'Spracherkennung (STT)', body: 'Echtzeit-Transkription und Sprachverarbeitungs-Pipelines. Latenzarme Instanzen weltweit verfügbar.', price: 'Ab $0,18/Std' },
    ],
    note: 'Alle Preise spiegeln die Aktualisierungen des Rechners v2 wider. Zahlungen in SVIT erhalten zusätzlich 10 % Rabatt.',
    revenueTitle: 'Anbieter-Einnahmen: reale Zahlen',
    revenueLede: 'Deine Einnahmen auf Svitlo Chain hängen direkt von deiner Hardware ab. Unten findest du eine realistische Schätzung der Stundeneinnahmen für gängige GPU-Konfigurationen, basierend auf aktueller Marktnachfrage und Preisrechner v2. Die tatsächlichen Einnahmen hängen von Verfügbarkeit, Job-Typ und Region ab.',
    tableHeaders: ['GPU', 'Stundensatz', 'Gesch. pro Monat (80 % Auslastung)'],
    rows: [
      ['RTX 4060', '$0,12/Std', '~$70'],
      ['RTX 4070 Ti', '$0,22/Std', '~$127'],
      ['RTX 4080', '$0,35/Std', '~$202'],
      ['RTX 4090', '$0,55/Std', '~$317'],
      ['A40 / L40', '$0,80/Std', '~$461'],
      ['A100 (40GB)', '$1,40/Std', '~$806'],
      ['8× A100-Flotte', '$11,20/Std', '~$6.451'],
    ],
    stats: [
      { num: '$6.451', label: '8× A100-Flotte', body: 'Geschätzte monatliche Einnahmen bei 80 % Auslastung — die Auszahlung der Skalierung.' },
      { num: '80 %', label: 'Zielauslastung', body: 'Eine konservative Schätzung. Anbieter mit hoher Nachfrage übertreffen oft 90 %.' },
      { num: '10+', label: 'GPU-Stufen', body: 'Von Consumer-RTX-Karten bis zu Enterprise-A100 — es gibt einen Markt für jede GPU.' },
    ],
  },
  token: {
    eyebrow: 'Tokenomics',
    title: 'Der SVIT-Token: drei Säulen des Nutzens',
    body: 'SVIT ist die native Währung des Svitlo-Chain-Ökosystems und der eigenen L1-Blockchain von Svitlo Chain. SVIT treibt das gesamte Ökosystem an — von Sicherheit und Transaktionen bis zu Staking, Burning und Kapitalisierung. Als native Coin profitiert SVIT von schnellen Transaktionen, niedrigen Gebühren und hohem Durchsatz. Die Tokenomics ist auf langfristige Nachhaltigkeit ausgelegt, mit einem deflationären Burn-Mechanismus, Staking und einem gedeckelten Angebot.',
    cards: [
      { icon: '💳', title: 'Zahlungen und Rabatte', body: 'Anbieter und Entwickler, die in SVIT abrechnen, erhalten 10 % Rabatt auf alle Marktplatzgebühren. SVIT ist die bevorzugte Währung für Job-Zahlungen und Staking im gesamten Svitlo-Chain-L1-Ökosystem, mit schnellen, günstigen Transaktionen.' },
      { icon: '🛡️', title: 'Staking und Reputation', body: 'Anbieter staken SVIT, um dem Netzwerk beizutreten. Ehrliches Verhalten erhöht die Reputationswerte und schaltet priorisierte Job-Zuweisung frei. Böswillige Akteure werden bestraft (Slashing), und die L1-Blockchain von Svitlo Chain sorgt selbst bei hoher Last für effiziente Koordination.' },
      { icon: '🔥', title: 'Burning und Deflation', body: 'Ein Teil jeder Transaktionsgebühr wird dauerhaft verbrannt und reduziert so das Gesamtangebot im Laufe der Zeit. Mit wachsender Ökosystem-Aktivität beschleunigt sich die Burn-Rate — das erzeugt deflationären Druck auf SVIT, während die niedrigen Gebühren von Svitlo Chain den Mechanismus effizient halten.' },
    ],
    callout: 'Das Gesamtangebot von SVIT ist gedeckelt. Burn-Ereignisse sind öffentlich on-chain verifizierbar. Token-Inhaber stimmen auch über Plattform-Updates und Gebührenstrukturen ab.',
    infraTitle: 'Blockchain-Infrastruktur für SVIT',
    infraBody: 'Über den direkten Nutzen hinaus baut Svitlo Chain auf seiner eigenen Infrastruktur auf, die das Ökosystem stärkt und die Nutzung von SVIT reibungsloser macht.',
    infraCards: [
      { title: 'L1-Blockchain für SVIT', body: 'SVIT ist die native Coin der eigenen L1-Blockchain von Svitlo Chain, mit einer Gesamtemission von 1 Milliarde Coins. Sie bildet das Rückgrat für die Sicherheit des Ökosystems, den Transaktionsfluss, Staking, Burning und langfristige Kapitalisierung. Jede Aktivität ist direkt mit dem Wert und der Nachhaltigkeit von SVIT verknüpft.' },
      { title: 'Svitlo Wallet', body: 'Svitlo Wallet ist eine einfache Wallet zum Speichern, Senden und Verwenden von SVIT im gesamten Svitlo-Chain-Ökosystem.', href: '/de/wallet/', linkLabel: 'Mehr erfahren' },
    ],
  },
  enterprise: {
    eyebrow: 'Für Unternehmen',
    title: 'Business, Vertrauen und Einstieg',
    companyTitle: 'Unternehmensstufen',
    companyBody: 'Organisationen, die SLAs, dedizierten Support und Zugang zu einer privaten Flotte benötigen, können über das Enterprise-Programm von Svitlo Chain einsteigen. Jede Stufe umfasst kryptografische Verifizierung von Rechenjobs, On-Chain-Reputationstracking und vollständige Dokumentation für die Compliance bei Unternehmensbeschaffungen.',
    tableHeaders: ['Stufe', 'Funktionen'],
    tiers: [
      ['Starter', 'API-Zugang, öffentlicher Marktplatz, SVIT-Zahlungen'],
      ['Growth', 'Priorisiertes Routing, dedizierter Support, Flotten-CLI'],
      ['Enterprise', 'SLA-Garantie, private Flotte, Compliance-Paket, White-Glove-Onboarding'],
    ],
    trustTitle: 'Vertrauen und Sicherheit',
    trustItems: [
      { title: 'SHA-256-Verifizierung', body: 'Jeder Rechenjob wird kryptografisch verifiziert — Anbieter können Ergebnisse nicht fälschen.' },
      { title: 'Reputationssystem', body: 'On-Chain-Scoring belohnt zuverlässige, ehrliche Anbieter und filtert böswillige Akteure heraus.' },
      { title: 'Compliance-bereit', body: 'Unternehmensdokumentation, Audit-Logs und Datenresidenz-Optionen in deiner bevorzugten Region.' },
    ],
    joinTitle: 'Werde noch heute Teil von Svitlo Chain',
    joinCards: [
      { icon: '🖥️', title: 'Anbieter', body: 'Monetarisiere deine ungenutzten GPUs und erziele passives Einkommen.' },
      { icon: '⚡', title: 'Entwickler', body: 'Erhalte erschwingliche, skalierbare GPU-Leistung für deine KI-Projekte.' },
      { icon: '⛏️', title: 'Mining-Betreiber', body: 'Verwandle deine Mining-Infrastruktur mit Miner Mode in KI-Rechenleistung.' },
    ],
  },
  roadmap: {
    eyebrow: 'Roadmap',
    title: 'Unsere Roadmap: die Zukunft von Svitlo Chain',
    body: 'Svitlo Chain entwickelt sich kontinuierlich weiter, um der wachsenden Nachfrage nach dezentralem GPU-Computing gerecht zu werden. Unsere Roadmap konzentriert sich auf strategisches Wachstum und die Bereitstellung von Mehrwert für Anbieter und Entwickler gleichermaßen.',
    milestones: [
      { when: 'Q3 2026', title: 'Launch', body: 'Offizieller Launch der Svitlo-Chain-Plattform mit Kernfunktionen für GPU-Vermietung und Miner Mode.' },
      { when: 'Q4 2026', title: 'Enterprise-Funktionen', body: 'Enterprise-Stufen, dedizierter Support, SLAs und fortgeschrittene Sicherheitsprotokolle für größere Kunden.' },
      { when: 'Q1 2027', title: 'Globale Expansion', body: 'Erweiterte geografische Abdeckung, neue regionale Rechenzentren und Partnerschaften, um ein breiteres Publikum zu erreichen.' },
      { when: 'Q2 2027', title: 'Erweiterte Analytik', body: 'Ausgefeilte Analyse-Tools zur Optimierung der GPU-Nutzung und Einnahmenverfolgung.' },
    ],
    footer: 'Diese Roadmap spiegelt unsere aktuellen strategischen Prioritäten wider, aber das Svitlo-Chain-Team bleibt agil und reagiert auf Marktbedingungen und Community-Feedback.',
  },
  faq: {
    eyebrow: 'Fragen',
    title: 'Häufig gestellte Fragen',
    body: 'Hast du Fragen zu Svitlo Chain? Hier sind Antworten auf einige der häufigsten Fragen von Anbietern und Entwicklern.',
    items: [
      { q: 'Wie werde ich Anbieter?', a: 'Installiere den Svitlo-Chain-Node-Client auf deinem bestehenden Mining-Rig. Aktiviere dann "Miner Mode", um deine Rechenleistung zu vermieten — zusätzlich zu deinem bestehenden Mining oder anstelle davon. Der Prozess ist so gestaltet, dass er reibungslos und einfach ist.' },
      { q: 'Welche Gebühren fallen auf Svitlo Chain an?', a: 'Svitlo Chain hat eine transparente Gebührenstruktur zur Aufrechterhaltung der Plattform. Nutzer, die in unserem nativen Utility-Token SVIT abrechnen, erhalten 10 % Rabatt auf alle Marktplatzgebühren. Konkrete Gebühren können je nach Job-Typ und Marktbedingungen variieren.' },
      { q: 'Sind meine Daten und Berechnungen sicher?', a: 'Ja. Sicherheit ist zentral für unser Design. Jeder Rechenjob wird kryptografisch über SHA-256 verifiziert, sodass Anbieter Ergebnisse nicht fälschen können. Wir verfolgen auch die Anbieter-Reputation on-chain und bieten ein Enterprise-Compliance-Paket für erweiterte Sicherheitsanforderungen.' },
      { q: 'Kann ich jede GPU verwenden?', a: 'Svitlo Chain ist auf Flexibilität ausgelegt und unterstützt eine breite Palette von GPUs, von Consumer-Modellen wie der RTX 4060 bis zu leistungsstarken Enterprise-GPUs wie der A100. Die Plattform hat einen Markt für nahezu jede GPU-Konfiguration, sodass du beliebige Hardware monetarisieren kannst, die du besitzt.' },
      { q: 'Was ist der SVIT-Token?', a: 'SVIT ist der native Utility-Token von Svitlo Chain, der Zahlungen ermöglicht, ehrliches Verhalten durch Staking fördert und die Plattformentwicklung steuert. Er hat einen deflationären Burn-Mechanismus und ein gedeckeltes Angebot für langfristige Nachhaltigkeit.' },
      { q: 'Wie hebe ich meine Einnahmen ab?', a: 'Deine Svitlo-Chain-Einnahmen sammeln sich in deiner verbundenen Wallet. Du kannst jederzeit abheben, entweder in SVIT oder durch Umwandlung in andere Kryptowährungen/Fiat über die integrierten Tauschoptionen der Plattform. Details findest du in unserer Dokumentation.' },
    ],
  },
  stats: {
    eyebrow: 'In Zahlen',
    title: 'Svitlo Chain in Zahlen: die Stärke der Plattform',
    body: 'Svitlo Chain wächst weiterhin exponentiell und treibt die Zukunft des dezentralen KI-Computings voran. Hier ein Einblick in die beeindruckende Reichweite und Effizienz der Plattform — eine kosteneffiziente Lösung im Vergleich zu traditionellen Cloud-Anbietern.',
    items: [
      { num: '2,5 Mio.+', label: 'Verfügbare GPU-Stunden', body: 'Über 2,5 Millionen GPU-Stunden wurden von unserem Netzwerk für KI-Jobs geliefert, und die Zahl steigt jeden Monat stetig.' },
      { num: '8.500+', label: 'Aktive Anbieter', body: 'Ein wachsendes Netzwerk von über 8.500 einzigartigen Anbietern trägt Rechenleistung bei und sorgt für Robustheit und Verfügbarkeit.' },
      { num: '70 %', label: 'Durchschnittliche Kosteneinsparung', body: 'Erziele bis zu 70 % Einsparungen beim GPU-Computing im Vergleich zu führenden Cloud-Plattformen, ohne Kompromisse bei der Leistung.' },
      { num: '500+ PFLOPS', label: 'Gesamte Rechenleistung', body: 'Zusammen liefert Svitlo Chain mehr als 500 PFLOPS an KI-Rechenleistung — eine gewaltige Ressource in jedem Maßstab.' },
    ],
  },
  architecture: {
    eyebrow: 'Unter der Haube',
    title: 'Technische Architektur von Svitlo Chain: wie das System funktioniert',
    body: 'Svitlo Chain läuft auf einer robusten dezentralen Architektur, die Effizienz, Sicherheit und Transparenz gewährleistet. Hier eine Aufschlüsselung der technischen Mechanismen hinter der Plattform.',
    lanes: [
      { label: 'Entwickler (Client)', cells: ['KI-Job einreichen'] },
      { label: 'Svitlo-Chain-Plattform', cells: ['Zuordnung und Scheduling', '→', 'Ergebnis und Beweis', '→', 'Verifizierung und Abwicklung'] },
      { label: 'GPU-Anbieter', cells: ['Job abrufen und ausführen'] },
      { label: 'Blockchain', cells: ['SHA-256-Verifizierung', '→', 'SVIT-Zahlung', '→', 'Reputationssystem'] },
    ],
    body2: 'Svitlo Chain nutzt Blockchain-Technologie, um eine vertrauensfreie Umgebung zu schaffen, in der jeder Schritt des Rechenprozesses verifizierbar und transparent ist, während gleichzeitig robuste Sicherheit zum Schutz von Nutzerdaten und Berechnungen geboten wird.',
    cards: [
      { title: 'Dezentrale Job-Ausführung', body: 'KI-Jobs werden aufgeteilt und über das Netzwerk der GPU-Anbieter verteilt, wodurch die Nutzung verfügbarer Rechenleistung optimiert und einzelne Fehlerquellen vermieden werden.' },
      { title: 'Sichere Containerisierung', body: 'Jeder Rechenjob läuft in einer isolierten Container-Umgebung auf der Hardware des Anbieters, was unbefugten Zugriff verhindert und die Datenintegrität gewährleistet.' },
      { title: 'Blockchain-Transparenz', body: 'Jede Transaktion, Job-Spezifikation und Verifizierungsnachweis wird on-chain aufgezeichnet, für volle Transparenz und Unabstreitbarkeit.' },
    ],
  },
  glossary: {
    eyebrow: 'Referenz',
    title: 'Glossar',
    body: 'Um das Verständnis von Svitlo Chain und dem breiteren dezentralen KI-Ökosystem zu erleichtern, haben wir ein Glossar gängiger Fachbegriffe zusammengestellt — klar und prägnant, egal ob du ein erfahrener technischer Nutzer bist oder neu in diesem Bereich.',
    terms: [
      { term: 'Blockchain', body: 'Ein verteiltes, unveränderliches digitales Hauptbuch aus kryptografisch verknüpften "Blöcken" von Transaktionen. Jeder Block enthält einen Zeitstempel und einen Verweis auf den vorherigen Block, wodurch eine sichere und transparente Historie entsteht.' },
      { term: 'Containerisierung', body: 'Eine Virtualisierungstechnik, die Anwendungscode zusammen mit allen Abhängigkeiten (Bibliotheken, Tools, Konfiguration) in einen isolierten "Container" verpackt. Dies stellt sicher, dass die Anwendung konsistent läuft, unabhängig davon, wo sie bereitgestellt wird.' },
      { term: 'Kryptografischer Beweis', body: 'Mathematische Methoden zur Verifizierung der Authentizität und Integrität von Daten oder Transaktionen. Sie ermöglichen sichere Kommunikation und Verifizierung, ohne dass die Parteien einander vertrauen müssen.' },
      { term: 'CUDA', body: 'Eine von NVIDIA entwickelte Parallel-Computing-Plattform und Programmiermodell. CUDA ermöglicht es Entwicklern, NVIDIA-GPUs für Allzweck-Computing zu nutzen und beschleunigt rechenintensive Aufgaben drastisch, besonders in der KI.' },
      { term: 'Dezentralisierung', body: 'Das Prinzip, Kontrolle und Entscheidungsfindung über ein Netzwerk zu verteilen, anstatt sie bei einer einzigen Autorität zu konzentrieren. Bei Svitlo Chain bedeutet dies, dass GPU-Ressourcen global auf viele Nodes verteilt sind.' },
      { term: 'Docker', body: 'Eine beliebte Plattform zum Entwickeln, Ausliefern und Ausführen von Anwendungen mittels Container-Technologie. Docker-Container stellen sicher, dass der Svitlo-Chain-Client und KI-Jobs isoliert und effizient laufen.' },
      { term: 'Svitlo-Chain-L1-Blockchain', body: 'Die eigene L1-Blockchain von Svitlo Chain, geschrieben in Rust und ausgelegt auf Sicherheit, hohe Geschwindigkeit und effiziente Datenverarbeitung. Sie bildet die Grundlage für Transaktionen, Programmlogik und Netzwerkinfrastruktur.' },
      { term: 'GPU (Graphics Processing Unit)', body: 'Ein spezialisierter elektronischer Schaltkreis, der darauf ausgelegt ist, Speicher schnell zu manipulieren und zu verändern, um die Bilderzeugung in einem Framebuffer zu beschleunigen. GPUs sind auch hocheffektiv für die parallele Verarbeitung großer Datensätze, was sie ideal für KI-Berechnungen macht.' },
      { term: 'Inferenz', body: 'Der Prozess, ein trainiertes KI-Modell zu verwenden, um Vorhersagen oder Entscheidungen basierend auf neuen, ungesehenen Daten zu treffen. Dies ist die Phase, in der das KI-Modell anwendet, was es gelernt hat.' },
      { term: 'Mining', body: 'Der Prozess, neue Transaktionen zu verifizieren und einer Blockchain hinzuzufügen, indem komplexe kryptografische Rätsel gelöst werden. Im "Miner Mode" von Svitlo Chain können Nodes durch Validieren von Transaktionen oder Ausführen von KI-Berechnungen verdienen.' },
      { term: 'Node', body: 'Ein Computer oder Server, der die Svitlo-Chain-Client-Software ausführt und mit dem Netzwerk verbunden ist. Nodes stellen dem Netzwerk Rechenressourcen (GPUs) bereit.' },
      { term: 'Peer-to-Peer (P2P)', body: 'Ein Netzwerk, in dem Nodes direkt miteinander kommunizieren, ohne einen zentralen Server zu benötigen. Svitlo Chain baut auf einem P2P-Netzwerk auf, um KI-Arbeitslasten zu verteilen.' },
      { term: 'SVIT-Coin', body: 'Die native Kryptowährung der L1-Blockchain von Svitlo Chain. SVIT wird verwendet, um GPU-Ressourcen zu bezahlen, Anbieter zu belohnen und an der Netzwerk-Governance teilzunehmen.' },
      { term: 'Reputationswert', body: 'Ein System, das die Zuverlässigkeit und Leistung der GPU-Anbieter von Svitlo Chain bewertet. Hohe Werte führen zu mehr Jobs und höheren Einnahmen.' },
      { term: 'SHA-256', body: 'Eine kryptografische Hashfunktion, die einen 256-Bit-Hashwert (32 Byte) erzeugt. Sie wird in der Blockchain-Technologie umfassend eingesetzt, um Datenintegrität sicherzustellen und eindeutige Kennungen für Blöcke zu erstellen.' },
      { term: 'Slashing', body: 'Ein Bestrafungsmechanismus in dezentralen Netzwerken, bei dem ein Teil des Stakes eines GPU-Anbieters entfernt wird, wenn er böswillig handelt oder seinen Verpflichtungen nicht nachkommt.' },
      { term: 'Smart Contracts', body: 'Selbstausführende Verträge, deren Bedingungen direkt in Code geschrieben sind. Sie laufen automatisch auf einer Blockchain ab, wenn vordefinierte Bedingungen erfüllt sind, wodurch Vermittler überflüssig werden.' },
      { term: 'Staking', body: 'Der Prozess, eine bestimmte Menge Kryptowährung (SVIT bei Svitlo Chain) als Sicherheit zu hinterlegen, um den Netzwerkbetrieb zu unterstützen. GPU-Anbieter können SVIT staken, um ihren Reputationswert zu erhöhen und mehr Jobs zu erhalten.' },
      { term: 'VRAM (Video Random Access Memory)', body: 'Ein RAM-Typ, der speziell zum Speichern von auf einem Bildschirm angezeigten Bilddaten entwickelt wurde. Für KI-Berechnungen, besonders bei großen Modellen, ist ausreichend VRAM entscheidend für die Leistung.' },
    ],
    footer: 'Dieses Glossar wird regelmäßig aktualisiert. Wenn du Fragen zu bestimmten Begriffen hast oder Ergänzungen vorschlagen möchtest, zögere nicht, die Svitlo-Chain-Community zu kontaktieren.',
  },
  compare: {
    eyebrow: 'Vergleich',
    title: 'Svitlo Chain vs. traditionelle Cloud-Anbieter',
    body: 'Svitlo Chain revolutioniert den Zugang zu GPU-Ressourcen für KI- und Machine-Learning-Projekte. Dieser Vergleich zeigt, wie sich Svitlo Chain von traditionellen Cloud-Diensten wie AWS, Google Cloud und Azure sowie anderen zentralisierten GPU-Cloud-Anbietern unterscheidet.',
    tableHeaders: ['Dimension', 'Svitlo Chain', 'Traditionelle Cloud'],
    rows: [
      ['Preise (pro GPU-Stunde)', 'Bis zu 70 % günstiger, dynamisch', 'Oft teurer, gestaffelt on-demand'],
      ['Dezentralisierung', 'Vollständig dezentralisiert (Peer-to-Peer)', 'Zentralisiert'],
      ['Flexibilität', 'Keine langen Verträge, Pay-per-Use, keine Bindung', 'Erfordert oft Verträge, Bindungsfristen, komplexe Vereinbarungen'],
      ['Geschwindigkeit (Job-Zuordnung und -Ausführung)', 'Schnelle Zuordnung über P2P-Netzwerk', 'Variabel, kann bei hoher Nachfrage Engpässe erleiden'],
      ['Transparenz', 'Volle Transparenz und Verifizierbarkeit via Blockchain', 'Begrenzt, unternehmensgesteuert'],
      ['Community', 'Open-Source- und community-getriebene Entwicklung', 'Großes Ökosystem, aber nicht community-getrieben'],
      ['Token-Anreize', 'Ja, SVIT-Token für Anbieter und Nutzer', 'Nein'],
    ],
    footer: 'Wie die Tabelle zeigt, bietet Svitlo Chain eine kosteneffiziente, flexible und transparente Lösung für GPU-Computing, angetrieben von einem dezentralen Modell und Community-Engagement. Dies positioniert Svitlo Chain als die Zukunft des verteilten KI-Computings.',
  },
  cta: {
    title: 'Bereit, der dezentralen GPU-Revolution beizutreten?',
    body: 'Ob du mit deiner ungenutzten Rechenleistung verdienen möchtest oder erschwingliche, skalierbare KI-Leistung benötigst — Svitlo Chain hat die richtige Lösung. Beginne, deine Zukunft aufzubauen, oder monetarisiere deine bestehende Hardware in wenigen Minuten.',
    ctaPrimary: 'Anbieter werden',
    ctaGlass: 'Mit der Entwicklung beginnen',
  },
  contact: {
    eyebrow: 'Kontakt aufnehmen',
    title: 'Kontakt und Support',
    body: 'Hast du Fragen, brauchst du Hilfe, oder möchtest du der Svitlo-Chain-Community beitreten? Hier sind alle unsere Kontaktkanäle und Support-Ressourcen.',
    items: [
      { icon: '✉️', title: 'E-Mail-Support', body: 'svitlochain@gmail.com', href: 'mailto:svitlochain@gmail.com' },
      { icon: '✈️', title: 'Telegram', body: 'Tritt unserer Telegram-Gruppe bei für schnelle Updates und Community-Chat.', href: 'https://t.me/+8t6LS2j4CyJiOTU0' },
      { icon: '💬', title: 'Discord-Community', body: 'Tritt unserem Discord bei für Echtzeit-Support und Diskussionen mit dem Team und anderen Nutzern.', href: 'https://discord.gg/9wqA3fMfg' },
      { icon: '🐦', title: 'Folge uns auf X', body: 'Bleib auf dem Laufenden mit den neuesten Nachrichten und Produkt-Updates.', href: 'https://x.com/Svitlochain' },
      { icon: '📘', title: 'Facebook', body: 'Folge unserer Facebook-Seite für Neuigkeiten und Community-Updates.', href: 'https://www.facebook.com/share/1D53mnv4kk/' },
      { icon: '🐙', title: 'GitHub-Repository', body: 'Entdecke unseren Open-Source-Code und trage zur Plattformentwicklung bei.' },
      { icon: '📄', title: 'Dokumentation', body: 'Lies unsere umfassenden Anleitungen und technischen Spezifikationen für den Einstieg.' },
      { icon: '📰', title: 'Svitlo-Chain-Blog', body: 'Erhalte die neuesten Einblicke, Analysen und Nachrichten zu dezentraler KI.' },
    ],
  },
  footer: {
    tagline: 'Eine Layer-1-Blockchain für KI-Computing und Inferenz-Abrechnung.',
    cols: [
      { title: 'Produkt', links: [{ label: 'Plattform', href: '/de/platform/' }, { label: 'Dokumentation', href: '/de/documentation/' }, { label: 'Für Entwickler', href: '#developers' }, { label: 'Für GPU-Besitzer', href: '#gpu-owners' }, { label: 'SVIT-Token', href: '#token' }] },
      { title: 'Unternehmen', links: [{ label: 'Roadmap', href: '#roadmap' }, { label: 'FAQ', href: '#faq' }, { label: 'Kontakt', href: '#contact' }] },
      { title: 'Wallet', links: [{ label: 'Wallet öffnen', href: '/de/wallet/' }, { label: 'Datenschutzrichtlinie', href: '/privacy/' }, { label: 'Support', href: '/support/' }] },
    ],
    copyright: '© 2026 Svitlo Chain. Alle Rechte vorbehalten.',
  },
};
