export default {
  meta: {
    lang: 'it',
    title: 'Svitlo Chain — Cloud GPU decentralizzato',
    description: 'Un marketplace GPU decentralizzato per l\'IA — noleggia GPU inattive o metti a disposizione il tuo hardware, protetto dalla blockchain.',
  },
  nav: {
    links: [
      { href: '/it/wallet/', label: 'Wallet' },
      { href: '/it/platform/', label: 'Piattaforma' },
      { href: '/it/documentation/', label: 'Documentazione' },
    ],
  },
  hero: {
    eyebrow: 'Blockchain Layer-1',
    title: 'Svitlo Chain: cloud GPU decentralizzato',
    lede: 'Liberati dal monopolio dei prezzi GPU del Big Cloud. Noleggia GPU inattive, oppure metti a disposizione il tuo hardware e guadagna un reddito reale — alimentato dall\'IA, protetto dalla blockchain.',
    ctaPrimary: 'Diventa fornitore',
    ctaGlass: 'Inizia a sviluppare',
  },
  idea: {
    eyebrow: 'Perché Svitlo Chain',
    title: 'L\'idea dietro Svitlo Chain',
    body: [
      'Il mercato delle GPU cloud è controllato da una manciata di giganti — AWS, Google, Azure — che impongono prezzi premium, mentre milioni di GPU restano inattive in PC da gaming, mining rig e data center aziendali. Svitlo Chain esiste per cambiare questo.',
      'Il concetto è semplice: un marketplace GPU decentralizzato dove i proprietari di hardware guadagnano dalla potenza di calcolo inutilizzata, e gli sviluppatori IA ottengono capacità scalabile e conveniente senza vincolarsi a un unico fornitore. Nessun intermediario. Nessun sovrapprezzo. Solo una connessione diretta e trustless tra domanda e offerta — protetta da prove crittografiche e da un sistema di reputazione trasparente.',
    ],
    cards: [
      { label: 'Problema', title: 'GPU cloud centralizzate', body: 'I provider cloud centralizzati controllano prezzo, disponibilità e accesso — creando colli di bottiglia per l\'innovazione nell\'IA.' },
      { label: 'Soluzione', title: 'Un mercato peer-to-peer', body: 'Un marketplace GPU peer-to-peer che trasforma l\'hardware inattivo in infrastruttura produttiva che paga i suoi proprietari.' },
      { label: 'Visione', title: 'Un layer di calcolo globale', body: 'Un layer globale e resistente alla censura per la potenza di calcolo, che guida la prossima generazione di applicazioni IA.' },
    ],
  },
  developers: {
    eyebrow: 'Come funziona',
    title: 'Per sviluppatori IA e builder',
    body: [
      'Svitlo Chain offre agli sviluppatori IA accesso istantaneo a un pool GPU globale — dalle schede RTX consumer alle A100 enterprise — a una frazione del costo cloud tradizionale. Che tu stia addestrando un grande modello linguistico, eseguendo inferenza su larga scala o renderizzando simulazioni complesse, Svitlo Chain abbina il tuo carico di lavoro all\'hardware giusto in pochi secondi.',
      'La piattaforma gestisce automaticamente lo scheduling dei job, la containerizzazione sicura e la fatturazione. I builder eseguono il deploy via CLI o API, specificano i requisiti GPU e pagano solo per il calcolo effettivamente usato — nessun contratto a lungo termine, nessun impegno minimo.',
    ],
    steps: [
      { title: 'Specifica i requisiti GPU', body: 'Scegli VRAM, potenza di calcolo e regione.' },
      { title: 'Deploy via CLI o API', body: 'Invia il tuo container e inizia a calcolare immediatamente.' },
      { title: 'Paga per l\'uso', body: 'Nessun contratto. Fatturato in SVIT o stablecoin.' },
    ],
    quickstartTitle: 'Guida sviluppatori: avvio rapido con Svitlo Chain',
    quickstartLede: 'Come sviluppatore IA hai bisogno di accesso rapido, economico e scalabile alle risorse GPU. Questa guida rapida ti porta dall\'autenticazione al tuo primo job e risultato.',
    steps2: [
      {
        n: '1', title: 'Autenticazione e setup API',
        body: 'Per interagire con l\'API di Svitlo Chain, ti serve la tua chiave API dalla dashboard sviluppatore dopo la registrazione. Per sviluppatori Python consigliamo il nostro SDK per un\'integrazione fluida; altri linguaggi possono chiamare l\'API REST direttamente.',
        code: `<span class="kw">import</span> os
<span class="kw">import</span> svitlo_sdk

<span class="c1"># Leggi la chiave API in modo sicuro da una variabile d'ambiente</span>
API_KEY = os.environ.get(<span class="str">"SVIT_API_KEY"</span>)

<span class="kw">if not</span> API_KEY:
    <span class="kw">raise</span> ValueError(<span class="str">"SVIT_API_KEY non impostata."</span>)

<span class="c1"># Inizializza il client SDK di Svitlo Chain</span>
client = svitlo_sdk.SvitloClient(api_key=API_KEY)
print(<span class="str">"Client API inizializzato con successo."</span>)`,
      },
      {
        n: '2', title: 'Invia il tuo primo job GPU',
        body: 'Inviare un job GPU è semplice. Definisci quale modello IA eseguire, quali dati di input usare e quali risorse GPU sono richieste. Svitlo Chain abbina automaticamente il tuo job ai fornitori disponibili sulla rete.',
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
    print(<span class="fn">f</span><span class="str">"Job inviato! ID job: {job.id}"</span>)
    print(<span class="fn">f</span><span class="str">"Stato: {job.status}"</span>)
<span class="kw">except</span> Exception <span class="kw">as</span> e:
    print(<span class="fn">f</span><span class="str">"Errore nell'invio del job: {e}"</span>)`,
      },
      {
        n: '3', title: 'Monitora lo stato del job',
        body: 'Una volta inviato, traccia il progresso del tuo job in tempo reale — vedi errori e stima quando i risultati saranno pronti.',
        code: `job_id = job.id

current_job = client.get_job_status(job_id)
print(<span class="fn">f</span><span class="str">"Job {current_job.id}, stato: {current_job.status}"</span>)

<span class="kw">while</span> current_job.status <span class="kw">not in</span> [<span class="str">"COMPLETED"</span>, <span class="str">"FAILED"</span>]:
    time.sleep(30)
    current_job = client.get_job_status(job_id)
    print(<span class="fn">f</span><span class="str">"Stato aggiornato: {current_job.status}"</span>)

<span class="kw">if</span> current_job.status == <span class="str">"COMPLETED"</span>:
    print(<span class="str">"Job completato!"</span>)
<span class="kw">else</span>:
    print(<span class="str">"Job fallito o annullato."</span>)`,
      },
      {
        n: '4', title: 'Recupera i tuoi risultati',
        body: 'Una volta completato il tuo job GPU, l\'output è disponibile nella posizione specificata (es. un bucket S3). Svitlo Chain fornisce i dettagli di connessione necessari per recuperare i risultati in sicurezza.',
        code: `<span class="kw">if</span> current_job.status == <span class="str">"COMPLETED"</span>:
    print(<span class="fn">f</span><span class="str">"Risultati disponibili su: {current_job.output_data_location}"</span>)
<span class="kw">else</span>:
    print(<span class="str">"Risultati non disponibili — job non completato o fallito."</span>)`,
      },
    ],
    billingTitle: '5. Pagamento e fatturazione',
    billingBody: 'Svitlo Chain usa il token SVIT per tutte le transazioni della piattaforma, garantendo trasparenza ed efficienza. Sei addebitato per l\'utilizzo GPU effettivo e la durata del job — spesso fino al 70% più economico del cloud tradizionale. Traccia la cronologia di utilizzo e il saldo dalla tua dashboard Svitlo Chain.',
  },
  gpuOwners: {
    eyebrow: 'Come funziona',
    title: 'Per proprietari di GPU',
    body: 'I proprietari di GPU — gamer, miner e data center — possono connettere hardware inattivo a Svitlo Chain e guadagnare un reddito passivo. Il client Svitlo Chain gira in background, accetta job di calcolo, li esegue in container isolati e restituisce i risultati con verifica crittografica. I fornitori impostano da soli finestre di disponibilità, prezzi e specifiche hardware.',
    cards: [
      { title: 'Installa il client', body: 'Scarica il software del nodo Svitlo Chain, connetti la tua GPU e sii operativo in pochi minuti. Supportati Windows, Linux e Docker.' },
      { title: 'Imposta le tue condizioni', body: 'Imposta tariffe orarie, VRAM minima e programma di disponibilità. Controlli tu quando il tuo hardware è sul mercato.' },
      { title: 'Guadagna automaticamente', body: 'I job vengono abbinati, eseguiti e verificati automaticamente. I pagamenti arrivano in SVIT o USDC direttamente nel tuo wallet.' },
    ],
    installTitle: 'Guida all\'installazione per fornitori GPU',
    installLede: 'Diventare un fornitore GPU di Svitlo Chain è semplice e ti permette di guadagnare dal tuo calcolo inattivo. Segui questi passaggi per installare il client nodo Svitlo Chain e iniziare a noleggiare le tue risorse GPU a sviluppatori IA in tutto il mondo.',
    installSteps: [
      {
        n: '1', title: 'Requisiti di sistema',
        body: 'Prima di installare, assicurati che il tuo sistema soddisfi questi requisiti: <b>OS:</b> Linux (consigliato Ubuntu 20.04+), Windows 10/11, macOS 13 Ventura o successivo, o un ambiente compatibile con Docker. <b>GPU:</b> NVIDIA GeForce RTX serie 30 o successiva, NVIDIA A100/H100, AMD Radeon RX serie 6000 o successiva, o Apple Silicon con Metal Performance Shaders (MPS). <b>RAM:</b> minimo 16 GB. <b>Rete:</b> connessione stabile con almeno 100 Mbps in upload/download.',
      },
      {
        n: '2', title: 'Scarica il client nodo Svitlo Chain',
        body: 'Ottieni l\'ultimo client nodo dal nostro sito ufficiale o dal repository GitHub. Pacchetti disponibili per ogni piattaforma.',
        code: `<span class="c1"># Linux</span>
wget https://svitlochain.com/node-client/svitlo-node-linux-amd64.tar.gz
tar -xzf svitlo-node-linux-amd64.tar.gz
<span class="kw">cd</span> svitlo-node`,
      },
      {
        n: '3', title: 'Installa e configura',
        body: 'Dopo il download, esegui lo script di setup e segui le istruzioni a schermo. Su Apple Silicon, abilita il backend accelerato Metal per le migliori prestazioni.',
        code: `arch
<span class="c1"># atteso arm64 su Apple Silicon</span>
<span class="kw">export</span> SVITLO_GPU_BACKEND=mps
<span class="kw">export</span> SVITLO_OPTIMIZE_APPLE_SILICON=<span class="kw">true</span>
svitlo-node start`,
      },
      {
        n: '4', title: 'Connetti il tuo wallet',
        body: 'Per ricevere i pagamenti devi connettere un wallet compatibile. Questo wallet conterrà i tuoi guadagni in SVIT.',
        code: `./svitlo-node wallet connect &lt;indirizzo-tuo-wallet&gt;`,
      },
      {
        n: '5', title: 'Imposta prezzi e disponibilità',
        body: 'Hai pieno controllo su come vengono noleggiate le tue GPU.',
        code: `./svitlo-node config <span class="kw">set</span> backend mps
./svitlo-node config <span class="kw">set</span> optimize_apple_silicon
./svitlo-node config <span class="kw">set</span> availability 24/7`,
      },
      {
        n: '6', title: 'Inizia a guadagnare',
        body: 'Una volta che il tuo nodo è in esecuzione, connesso e configurato, le tue GPU iniziano ad abbinarsi ai job di calcolo IA. Monitora reddito e cronologia job dalla dashboard Svitlo Chain.',
      },
    ],
  },
  minerMode: {
    eyebrow: 'Miner Mode',
    title: 'Invitiamo miner e GPU farm',
    body: [
      'Il crypto mining è cambiato. Con ricompense proof-of-work in calo e costi elettrici in aumento, le GPU farm hanno bisogno di nuove fonti di reddito. <b>Miner Mode</b> di Svitlo Chain permette agli operatori di mining di reindirizzare istantaneamente l\'hardware inattivo verso il calcolo IA — senza riconfigurare l\'infrastruttura.',
      'Miner Mode è un interruttore leggero che sposta il tuo rig dal mining al noleggio di potenza di calcolo. I job passano attraverso pre-validazione, girano in sandbox, e i guadagni sono tracciati in tempo reale. Le farm con 10+ GPU ottengono instradamento prioritario dei job e supporto dedicato.',
    ],
    cards: [
      { title: 'Cambia senza downtime', body: 'Passa tra mining e noleggio di potenza di calcolo in pochi secondi. Nessuna modifica hardware necessaria.' },
      { title: 'Maggiore potenziale di guadagno', body: 'La domanda di calcolo IA spesso supera l\'offerta — i fornitori guadagnano frequentemente di più per GPU-ora rispetto alla maggior parte delle operazioni di mining.' },
      { title: 'Pannello di controllo farm', body: 'Gestisci l\'intera farm da un\'unica interfaccia. Traccia reddito, stato dei job e uptime su ogni nodo.' },
    ],
    detailTitle: 'Miner Mode: progettato per scalare',
    whyTitle: 'Perché Miner Mode?',
    whyBody: [
      'La redditività del mining è instabile. Il noleggio GPU su Svitlo Chain offre una base di reddito stabile e prevedibile — specialmente durante i bear market o quando la difficoltà di rete aumenta.',
      'Miner Mode supporta una coda di job batch, così la tua farm non resta mai inattiva. Quando la domanda IA cala, torna al mining con un singolo comando. È proprio questa flessibilità attraverso le condizioni di mercato che distingue Svitlo Chain.',
    ],
    cta: 'Scopri di più su Miner Mode',
    howTitle: 'Come funziona',
    steps: [
      { n: '01', title: 'Connetti la tua farm', body: 'Installa il client nodo Svitlo Chain sul tuo rig di mining esistente.' },
      { n: '02', title: 'Abilita Miner Mode', body: 'Noleggia potenza di calcolo insieme al mining, o al suo posto.' },
      { n: '03', title: 'Guadagna e traccia', body: 'Segui il reddito in tempo reale, il throughput dei job e l\'utilizzo GPU.' },
      { n: '04', title: 'Cambia liberamente', body: 'Torna al mining in qualsiasi momento le condizioni di mercato lo favoriscano.' },
    ],
  },
  pricing: {
    eyebrow: 'Servizi',
    title: 'Servizi e prezzi',
    body: 'Svitlo Chain offre tre livelli di servizio principali, ognuno adatto a diversi carichi di lavoro IA — dalle attività testuali all\'elaborazione vocale in tempo reale. Tutti i servizi fatturano per GPU-ora, con sconti disponibili per prenotazioni a lungo termine pagate in SVIT.',
    cards: [
      { title: 'Inferenza testuale / LLM', body: 'Esegui grandi modelli linguistici, chatbot e attività di generazione testo. Ottimizzato per hardware da RTX 4060 ad A100.', price: 'Da $0,12/h' },
      { title: 'Generazione immagini', body: 'Stable Diffusion, FLUX e modelli immagine personalizzati su larga scala. GPU ad alta VRAM consigliate per la generazione batch.', price: 'Da $0,28/h' },
      { title: 'Riconoscimento vocale (STT)', body: 'Trascrizione in tempo reale e pipeline di elaborazione vocale. Istanze a bassa latenza disponibili in tutto il mondo.', price: 'Da $0,18/h' },
    ],
    note: 'Tutti i prezzi riflettono gli aggiornamenti del calcolatore v2. I pagamenti in SVIT ricevono uno sconto aggiuntivo del 10%.',
    revenueTitle: 'Reddito fornitori: numeri reali',
    revenueLede: 'I tuoi guadagni su Svitlo Chain dipendono direttamente dal tuo hardware. Di seguito una stima realistica del reddito orario per configurazioni GPU comuni, basata sulla domanda di mercato attuale e sul calcolatore prezzi v2. Il reddito effettivo dipende da disponibilità, tipo di job e regione.',
    tableHeaders: ['GPU', 'Tariffa oraria', 'Stima mensile (80% utilizzo)'],
    rows: [
      ['RTX 4060', '$0,12/h', '~$70'],
      ['RTX 4070 Ti', '$0,22/h', '~$127'],
      ['RTX 4080', '$0,35/h', '~$202'],
      ['RTX 4090', '$0,55/h', '~$317'],
      ['A40 / L40', '$0,80/h', '~$461'],
      ['A100 (40GB)', '$1,40/h', '~$806'],
      ['Flotta 8× A100', '$11,20/h', '~$6.451'],
    ],
    stats: [
      { num: '$6.451', label: 'Flotta 8× A100', body: 'Reddito mensile stimato all\'80% di utilizzo — il ritorno della scala.' },
      { num: '80%', label: 'Utilizzo target', body: 'Una stima conservativa. I fornitori con alta domanda spesso superano il 90%.' },
      { num: '10+', label: 'Livelli GPU', body: 'Dalle schede RTX consumer alle A100 enterprise — c\'è un mercato per ogni GPU.' },
    ],
  },
  token: {
    eyebrow: 'Tokenomics',
    title: 'Il token SVIT: tre pilastri di utilità',
    body: 'SVIT è la valuta nativa dell\'ecosistema Svitlo Chain e della blockchain L1 propria di Svitlo Chain. SVIT guida l\'intero ecosistema — dalla sicurezza e transazioni allo staking, burning e capitalizzazione. Come coin nativo, SVIT beneficia di transazioni veloci, commissioni basse ed elevato throughput. La tokenomics è progettata per la sostenibilità a lungo termine, con un meccanismo deflazionistico di burning, staking e un\'offerta limitata.',
    cards: [
      { icon: '💳', title: 'Pagamenti e sconti', body: 'Fornitori e sviluppatori che transano in SVIT ottengono uno sconto del 10% su tutte le commissioni del marketplace. SVIT è la valuta preferita per i pagamenti dei job e lo staking nell\'ecosistema L1 di Svitlo Chain, con transazioni veloci ed economiche.' },
      { icon: '🛡️', title: 'Staking e reputazione', body: 'I fornitori mettono in staking SVIT per unirsi alla rete. Il comportamento onesto aumenta il punteggio di reputazione e sblocca l\'assegnazione prioritaria dei job. Gli attori malevoli vengono penalizzati (slashing), e la blockchain L1 di Svitlo Chain fornisce un coordinamento efficiente anche sotto carico elevato.' },
      { icon: '🔥', title: 'Burning e deflazione', body: 'Una parte di ogni commissione di transazione viene bruciata permanentemente, riducendo l\'offerta totale nel tempo. Man mano che l\'attività dell\'ecosistema cresce, il tasso di burning accelera — creando pressione deflazionistica su SVIT, mentre le basse commissioni di Svitlo Chain mantengono il meccanismo efficiente.' },
    ],
    callout: 'L\'offerta totale di SVIT è limitata. Gli eventi di burning sono verificabili pubblicamente on-chain. I detentori di token votano anche sugli aggiornamenti della piattaforma e sulle strutture delle commissioni.',
    infraTitle: 'Infrastruttura blockchain per SVIT',
    infraBody: 'Oltre all\'utilità diretta, Svitlo Chain si basa su un\'infrastruttura propria che rafforza l\'ecosistema e rende l\'uso di SVIT più fluido.',
    infraCards: [
      { title: 'Blockchain L1 per SVIT', body: 'SVIT è il coin nativo della blockchain L1 propria di Svitlo Chain, con un\'emissione totale di 1 miliardo di coin. Funge da spina dorsale per la sicurezza dell\'ecosistema, il flusso delle transazioni, lo staking, il burning e la capitalizzazione a lungo termine. Ogni attività è collegata direttamente al valore e alla sostenibilità di SVIT.' },
      { title: 'Svitlo Wallet', body: 'Svitlo Wallet è un wallet semplice per conservare, inviare e usare SVIT in tutto l\'ecosistema Svitlo Chain.', href: '/it/wallet/', linkLabel: 'Scopri di più' },
    ],
  },
  enterprise: {
    eyebrow: 'Per le aziende',
    title: 'Business, fiducia e come iniziare',
    companyTitle: 'Livelli aziendali',
    companyBody: 'Le organizzazioni che necessitano di SLA, supporto dedicato e accesso a una flotta privata possono aderire tramite il programma enterprise di Svitlo Chain. Ogni livello include verifica crittografica dei job di calcolo, tracciamento della reputazione on-chain e documentazione completa per la conformità negli acquisti aziendali.',
    tableHeaders: ['Livello', 'Funzionalità'],
    tiers: [
      ['Starter', 'Accesso API, marketplace pubblico, pagamenti SVIT'],
      ['Growth', 'Instradamento prioritario, supporto dedicato, CLI flotta'],
      ['Enterprise', 'SLA garantito, flotta privata, pacchetto conformità, onboarding white-glove'],
    ],
    trustTitle: 'Fiducia e sicurezza',
    trustItems: [
      { title: 'Verifica SHA-256', body: 'Ogni job di calcolo è verificato crittograficamente — i fornitori non possono falsificare i risultati.' },
      { title: 'Sistema di reputazione', body: 'Il punteggio on-chain premia i fornitori onesti e coerenti e filtra gli attori malevoli.' },
      { title: 'Pronto per la conformità', body: 'Documentazione enterprise, log di audit e opzioni di residenza dati nella regione preferita.' },
    ],
    joinTitle: 'Unisciti a Svitlo Chain oggi',
    joinCards: [
      { icon: '🖥️', title: 'Fornitori', body: 'Monetizza le tue GPU inattive e guadagna un reddito passivo.' },
      { icon: '⚡', title: 'Sviluppatori', body: 'Ottieni potenza GPU economica e scalabile per i tuoi progetti IA.' },
      { icon: '⛏️', title: 'Operatori di mining', body: 'Trasforma la tua infrastruttura di mining in calcolo IA con Miner Mode.' },
    ],
  },
  roadmap: {
    eyebrow: 'Roadmap',
    title: 'La nostra roadmap: il futuro di Svitlo Chain',
    body: 'Svitlo Chain si sviluppa continuamente per soddisfare la crescente domanda di calcolo GPU decentralizzato. La nostra roadmap si concentra sulla crescita strategica e sulla creazione di valore sia per i fornitori che per gli sviluppatori.',
    milestones: [
      { when: 'T3 2026', title: 'Lancio', body: 'Lancio ufficiale della piattaforma Svitlo Chain, con funzionalità core per il noleggio GPU e Miner Mode.' },
      { when: 'T4 2026', title: 'Funzionalità enterprise', body: 'Livelli enterprise, supporto dedicato, SLA e protocolli di sicurezza avanzati per clienti più grandi.' },
      { when: 'T1 2027', title: 'Espansione globale', body: 'Copertura geografica ampliata, nuovi data center regionali e partnership per raggiungere un pubblico più ampio.' },
      { when: 'T2 2027', title: 'Analisi avanzata', body: 'Strumenti di analisi sofisticati per ottimizzare l\'uso delle GPU e il tracciamento del reddito.' },
    ],
    footer: 'Questa roadmap riflette le nostre attuali priorità strategiche, ma il team di Svitlo Chain resta agile e reattivo alle condizioni di mercato e ai feedback della community.',
  },
  faq: {
    eyebrow: 'Domande',
    title: 'Domande frequenti',
    body: 'Hai domande su Svitlo Chain? Ecco le risposte ad alcune delle più comuni, sia da fornitori che sviluppatori.',
    items: [
      { q: 'Come inizio come fornitore?', a: 'Installa il client nodo Svitlo Chain sul tuo rig di mining esistente. Poi abilita "Miner Mode" per iniziare a noleggiare la tua potenza di calcolo, insieme al mining esistente o al suo posto. Il processo è progettato per essere fluido e semplice.' },
      { q: 'Quali commissioni si applicano su Svitlo Chain?', a: 'Svitlo Chain ha una struttura di commissioni trasparente per mantenere la piattaforma. Gli utenti che transano nel nostro token di utilità nativo, SVIT, ottengono uno sconto del 10% su tutte le commissioni del marketplace. Le commissioni specifiche possono variare in base al tipo di job e alle condizioni di mercato.' },
      { q: 'I miei dati e calcoli sono sicuri?', a: 'Sì. La sicurezza è centrale nel nostro design. Ogni job di calcolo è verificato crittograficamente via SHA-256, garantendo che i fornitori non possano falsificare i risultati. Tracciamo anche la reputazione dei fornitori on-chain, e offriamo un pacchetto di conformità enterprise per esigenze di sicurezza avanzate.' },
      { q: 'Posso usare qualsiasi GPU?', a: 'Svitlo Chain è progettato per essere flessibile e supporta un\'ampia gamma di GPU, dai modelli consumer come la RTX 4060 alle potenti GPU enterprise come la A100. La piattaforma ha un mercato per quasi ogni configurazione GPU, permettendoti di monetizzare qualsiasi hardware tu possieda.' },
      { q: 'Cos\'è il token SVIT?', a: 'SVIT è il token di utilità nativo di Svitlo Chain, progettato per abilitare pagamenti, incoraggiare comportamenti onesti tramite lo staking e governare lo sviluppo della piattaforma. Ha un meccanismo deflazionistico di burning e un\'offerta limitata per la sostenibilità a lungo termine.' },
      { q: 'Come prelevo i miei guadagni?', a: 'I tuoi guadagni Svitlo Chain si accumulano nel tuo wallet connesso. Puoi prelevare in qualsiasi momento, sia in SVIT che convertendo in altre criptovalute/fiat tramite le opzioni di scambio integrate della piattaforma. I dettagli sono nella nostra documentazione.' },
    ],
  },
  stats: {
    eyebrow: 'In numeri',
    title: 'Svitlo Chain in numeri: la forza della piattaforma',
    body: 'Svitlo Chain continua a crescere esponenzialmente, guidando il futuro del calcolo IA decentralizzato. Ecco uno sguardo all\'impressionante portata ed efficienza della piattaforma — una soluzione conveniente rispetto ai provider cloud tradizionali.',
    items: [
      { num: '2,5M+', label: 'Ore GPU disponibili', body: 'Oltre 2,5 milioni di ore GPU sono state erogate dalla nostra rete per job IA, in costante aumento ogni mese.' },
      { num: '8.500+', label: 'Fornitori attivi', body: 'Una rete crescente di oltre 8.500 fornitori unici contribuisce con potenza di calcolo, garantendo robustezza e disponibilità.' },
      { num: '70%', label: 'Risparmio medio sui costi', body: 'Ottieni fino al 70% di risparmio sul calcolo GPU rispetto ai principali provider cloud, senza compromettere le prestazioni.' },
      { num: '500+ PFLOPS', label: 'Potenza di calcolo totale', body: 'Nel complesso, Svitlo Chain eroga oltre 500 PFLOPS di potenza di calcolo IA — una risorsa formidabile a ogni scala.' },
    ],
  },
  architecture: {
    eyebrow: 'Sotto il cofano',
    title: 'Architettura tecnica di Svitlo Chain: come funziona il sistema',
    body: 'Svitlo Chain gira su una robusta architettura decentralizzata che garantisce efficienza, sicurezza e trasparenza. Ecco una panoramica dei meccanismi tecnici dietro la piattaforma.',
    lanes: [
      { label: 'Sviluppatore (Client)', cells: ['Invia job IA'] },
      { label: 'Piattaforma Svitlo Chain', cells: ['Abbinamento e scheduling', '→', 'Risultato e prova', '→', 'Verifica e liquidazione'] },
      { label: 'Fornitore GPU', cells: ['Recupera ed esegue il job'] },
      { label: 'Blockchain', cells: ['Verifica SHA-256', '→', 'Pagamento SVIT', '→', 'Sistema di reputazione'] },
    ],
    body2: 'Svitlo Chain usa la tecnologia blockchain per creare un ambiente trustless, dove ogni fase del processo di calcolo è verificabile e trasparente, offrendo al contempo una sicurezza robusta per proteggere dati e calcoli degli utenti.',
    cards: [
      { title: 'Esecuzione decentralizzata dei job', body: 'I job IA vengono suddivisi e distribuiti sulla rete di fornitori GPU, ottimizzando l\'uso del calcolo disponibile ed evitando singoli punti di fallimento.' },
      { title: 'Containerizzazione sicura', body: 'Ogni job di calcolo gira in un ambiente container isolato sull\'hardware del fornitore, prevenendo accessi non autorizzati e garantendo l\'integrità dei dati.' },
      { title: 'Trasparenza blockchain', body: 'Ogni transazione, specifica del job e prova di verifica è registrata on-chain per piena trasparenza e non ripudio.' },
    ],
  },
  glossary: {
    eyebrow: 'Riferimento',
    title: 'Glossario',
    body: 'Per rendere più facile comprendere Svitlo Chain e il più ampio ecosistema IA decentralizzato, abbiamo compilato un glossario di termini tecnici comuni — chiaro e conciso, che tu sia un utente tecnico esperto o nuovo nel settore.',
    terms: [
      { term: 'Blockchain', body: 'Un registro digitale distribuito e immutabile di "blocchi" di transazioni collegati crittograficamente. Ogni blocco contiene un timestamp e un riferimento al blocco precedente, creando una cronologia sicura e trasparente.' },
      { term: 'Containerizzazione', body: 'Una tecnica di virtualizzazione che pacchettizza il codice dell\'applicazione insieme a tutte le sue dipendenze (librerie, strumenti, configurazione) in un "container" isolato. Questo garantisce che l\'applicazione funzioni in modo coerente, indipendentemente da dove viene distribuita.' },
      { term: 'Prova crittografica', body: 'Metodi matematici usati per verificare l\'autenticità e l\'integrità di dati o transazioni. Permette comunicazione e verifica sicure senza che le parti debbano fidarsi l\'una dell\'altra.' },
      { term: 'CUDA', body: 'Una piattaforma di calcolo parallelo e modello di programmazione sviluppato da NVIDIA. CUDA permette agli sviluppatori di usare le GPU NVIDIA per calcolo general-purpose, accelerando drasticamente le attività ad alta intensità di calcolo, specialmente nell\'IA.' },
      { term: 'Decentralizzazione', body: 'Il principio di distribuire controllo e processo decisionale su una rete invece di concentrarli in un\'unica autorità. In Svitlo Chain questo significa che le risorse GPU sono distribuite tra molti nodi a livello globale.' },
      { term: 'Docker', body: 'Una piattaforma popolare per sviluppare, distribuire ed eseguire applicazioni usando la tecnologia container. I container Docker garantiscono che il client Svitlo Chain e i job IA girino in modo isolato ed efficiente.' },
      { term: 'Blockchain L1 di Svitlo Chain', body: 'La blockchain L1 propria di Svitlo Chain, scritta in Rust e progettata per sicurezza, alta velocità ed elaborazione dati efficiente. Costituisce la base per transazioni, logica dei programmi e infrastruttura di rete.' },
      { term: 'GPU (Graphics Processing Unit)', body: 'Un circuito elettronico specializzato progettato per manipolare rapidamente la memoria per accelerare la creazione di immagini in un frame buffer. Le GPU sono anche altamente efficaci per l\'elaborazione parallela di grandi dataset, rendendole ideali per il calcolo IA.' },
      { term: 'Inferenza', body: 'Il processo di utilizzo di un modello IA addestrato per fare previsioni o decisioni basate su dati nuovi e mai visti. Questa è la fase in cui il modello IA applica ciò che ha appreso.' },
      { term: 'Mining', body: 'Il processo di verifica e aggiunta di nuove transazioni a una blockchain risolvendo puzzle crittografici complessi. Nel "Miner Mode" di Svitlo Chain, i nodi possono guadagnare validando transazioni o eseguendo calcolo IA.' },
      { term: 'Nodo', body: 'Un computer o server che esegue il software client Svitlo Chain ed è connesso alla rete. I nodi forniscono risorse di calcolo (GPU) alla rete.' },
      { term: 'Peer-to-peer (P2P)', body: 'Una rete dove i nodi comunicano direttamente tra loro senza bisogno di un server centrale. Svitlo Chain si basa su una rete P2P per distribuire i carichi di lavoro IA.' },
      { term: 'Coin SVIT', body: 'La criptovaluta nativa della blockchain L1 di Svitlo Chain. SVIT viene usato per pagare risorse GPU, premiare i fornitori e partecipare alla governance della rete.' },
      { term: 'Punteggio di reputazione', body: 'Un sistema che valuta l\'affidabilità e le prestazioni dei fornitori GPU di Svitlo Chain. Punteggi alti portano a più job e guadagni maggiori.' },
      { term: 'SHA-256', body: 'Una funzione hash crittografica che produce un valore hash a 256 bit (32 byte). È ampiamente usata nella tecnologia blockchain per garantire l\'integrità dei dati e creare identificatori unici per i blocchi.' },
      { term: 'Slashing', body: 'Un meccanismo di penalità nelle reti decentralizzate dove una parte dello stake di un fornitore GPU viene rimossa se agisce in modo malevolo o non soddisfa i propri obblighi.' },
      { term: 'Smart contract', body: 'Contratti auto-esecutivi con i termini dell\'accordo scritti direttamente nel codice. Vengono eseguiti automaticamente su una blockchain quando le condizioni predefinite sono soddisfatte, eliminando la necessità di intermediari.' },
      { term: 'Staking', body: 'Il processo di bloccare una certa quantità di criptovaluta (SVIT su Svitlo Chain) come garanzia per supportare le operazioni di rete. I fornitori GPU possono mettere in staking SVIT per aumentare il loro punteggio di reputazione e ottenere più job.' },
      { term: 'VRAM (Video Random Access Memory)', body: 'Un tipo di RAM progettato specificamente per memorizzare i dati immagine visualizzati su uno schermo. Per il calcolo IA, specialmente con grandi modelli, una VRAM sufficiente è fondamentale per le prestazioni.' },
    ],
    footer: 'Questo glossario viene aggiornato regolarmente. Se hai domande su termini specifici o vuoi suggerire aggiunte, non esitare a contattare la community di Svitlo Chain.',
  },
  compare: {
    eyebrow: 'Confronto',
    title: 'Svitlo Chain vs. provider cloud tradizionali',
    body: 'Svitlo Chain sta rivoluzionando l\'accesso alle risorse GPU per progetti di IA e machine learning. Questo confronto evidenzia in cosa Svitlo Chain differisce dai servizi cloud tradizionali come AWS, Google Cloud e Azure, e da altri provider cloud GPU centralizzati.',
    tableHeaders: ['Dimensione', 'Svitlo Chain', 'Cloud tradizionale'],
    rows: [
      ['Prezzi (per GPU-ora)', 'Fino al 70% più bassi, dinamici', 'Spesso più costosi, a livelli on-demand'],
      ['Decentralizzazione', 'Completamente decentralizzato (peer-to-peer)', 'Centralizzato'],
      ['Flessibilità', 'Nessun contratto lungo, pay-per-use, nessun lock-in', 'Spesso richiede contratti, periodi di lock-in, accordi complessi'],
      ['Velocità (abbinamento ed esecuzione job)', 'Abbinamento rapido via rete P2P', 'Variabile, può soffrire colli di bottiglia con alta domanda'],
      ['Trasparenza', 'Piena trasparenza e verificabilità via blockchain', 'Limitata, controllata dall\'azienda'],
      ['Community', 'Sviluppo open-source e guidato dalla community', 'Grande ecosistema, ma non guidato dalla community'],
      ['Incentivi token', 'Sì, token SVIT per fornitori e utenti', 'No'],
    ],
    footer: 'Come mostra la tabella, Svitlo Chain offre una soluzione economica, flessibile e trasparente per il calcolo GPU, guidata da un modello decentralizzato e dal coinvolgimento della community. Questo posiziona Svitlo Chain come il futuro del calcolo IA distribuito.',
  },
  cta: {
    title: 'Pronto a unirti alla rivoluzione GPU decentralizzata?',
    body: 'Che tu voglia guadagnare dal tuo calcolo inattivo o abbia bisogno di potenza IA economica e scalabile, Svitlo Chain ha la soluzione giusta. Inizia a costruire il tuo futuro o monetizza il tuo hardware esistente in pochi minuti.',
    ctaPrimary: 'Diventa fornitore',
    ctaGlass: 'Inizia a sviluppare',
  },
  contact: {
    eyebrow: 'Mettiti in contatto',
    title: 'Contatti e supporto',
    body: 'Hai domande, hai bisogno di aiuto, o vuoi unirti alla community di Svitlo Chain? Ecco tutti i nostri canali di contatto e risorse di supporto.',
    items: [
      { icon: '✉️', title: 'Supporto email', body: 'svitlochain@gmail.com', href: 'mailto:svitlochain@gmail.com' },
      { icon: '✈️', title: 'Telegram', body: 'Unisciti al nostro gruppo Telegram per aggiornamenti rapidi e chat con la community.', href: 'https://t.me/+8t6LS2j4CyJiOTU0' },
      { icon: '💬', title: 'Community Discord', body: 'Unisciti al nostro Discord per supporto in tempo reale e discussioni con il team e altri utenti.', href: 'https://discord.gg/9wqA3fMfg' },
      { icon: '🐦', title: 'Seguici su X', body: 'Resta aggiornato con le ultime notizie e aggiornamenti sul prodotto.', href: 'https://x.com/Svitlochain' },
      { icon: '📘', title: 'Facebook', body: 'Segui la nostra pagina Facebook per notizie e aggiornamenti della community.', href: 'https://www.facebook.com/share/1D53mnv4kk/' },
      { icon: '🐙', title: 'Repository GitHub', body: 'Esplora il nostro codice open-source e contribuisci allo sviluppo della piattaforma.' },
      { icon: '📄', title: 'Documentazione', body: 'Leggi le nostre guide complete e specifiche tecniche per iniziare.' },
      { icon: '📰', title: 'Blog di Svitlo Chain', body: 'Ricevi gli ultimi approfondimenti, analisi e notizie sull\'IA decentralizzata.' },
    ],
  },
  footer: {
    tagline: 'Una blockchain Layer-1 per il calcolo IA e la liquidazione dell\'inferenza.',
    cols: [
      { title: 'Prodotto', links: [{ label: 'Piattaforma', href: '/it/platform/' }, { label: 'Documentazione', href: '/it/documentation/' }, { label: 'Per sviluppatori', href: '#developers' }, { label: 'Per proprietari GPU', href: '#gpu-owners' }, { label: 'Token SVIT', href: '#token' }] },
      { title: 'Azienda', links: [{ label: 'Roadmap', href: '#roadmap' }, { label: 'FAQ', href: '#faq' }, { label: 'Contatti', href: '#contact' }] },
      { title: 'Wallet', links: [{ label: 'Apri Wallet', href: '/it/wallet/' }, { label: 'Informativa privacy', href: '/privacy/' }, { label: 'Supporto', href: '/support/' }] },
    ],
    copyright: '© 2026 Svitlo Chain. Tutti i diritti riservati.',
  },
};
