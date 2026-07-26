export default {
  meta: {
    lang: 'no',
    title: 'Svitlo Chain — Desentralisert GPU-sky',
    description: 'Et desentralisert GPU-marked for AI — lei ut ledige GPU-er eller sett opp egen maskinvare, sikret av blokkjede.',
  },
  nav: {
    links: [
      { href: '#idea', label: 'Idéen' },
      { href: '#developers', label: 'Utviklere' },
      { href: '#gpu-owners', label: 'GPU-eiere' },
      { href: '#token', label: 'Token' },
      { href: '#roadmap', label: 'Veikart' },
      { href: '#faq', label: 'Spørsmål' },
    ],
  },
  hero: {
    eyebrow: 'Layer-1-blokkjede',
    title: 'Svitlo Chain: desentralisert GPU-sky',
    lede: 'Bryt deg fri fra skygigantenes monopol på GPU-priser. Lei ledige GPU-er, eller sett opp din egen maskinvare og tjen ekte inntekt — drevet av AI, sikret av blokkjede.',
    ctaPrimary: 'Bli leverandør',
    ctaGlass: 'Kom i gang med utvikling',
  },
  idea: {
    eyebrow: 'Hvorfor Svitlo Chain',
    title: 'Idéen bak Svitlo Chain',
    body: [
      'Markedet for sky-GPU-er kontrolleres av noen få giganter — AWS, Google, Azure — som setter premiumpriser, mens millioner av GPU-er står ubrukt i gaming-PC-er, mining-rigger og bedriftsdatasentre. Svitlo Chain ble skapt for å endre dette.',
      'Konseptet er enkelt: et desentralisert GPU-marked der eiere av maskinvare tjener på ubrukt datakraft, og AI-utviklere får rimelig, skalerbar kapasitet uten å være bundet til én enkelt leverandør. Ingen mellomledd. Ingen påslag. Bare en direkte, tillitsløs kobling mellom tilbud og etterspørsel — sikret av kryptografiske bevis og et transparent omdømmesystem.',
    ],
    cards: [
      { label: 'Problem', title: 'Sentraliserte sky-GPU-er', body: 'Sentraliserte skyleverandører kontrollerer pris, tilgjengelighet og tilgang — og skaper flaskehalser for AI-innovasjon.' },
      { label: 'Løsning', title: 'Et peer-to-peer-marked', body: 'Et peer-to-peer GPU-marked som gjør ubrukt maskinvare til produktiv infrastruktur som betaler eierne sine.' },
      { label: 'Visjon', title: 'Et globalt beregningslag', body: 'Et globalt, sensurresistent lag for datakraft som driver neste generasjon AI-applikasjoner.' },
    ],
  },
  developers: {
    eyebrow: 'Slik fungerer det',
    title: 'For AI-utviklere og byggere',
    body: [
      'Svitlo Chain gir AI-utviklere umiddelbar tilgang til en global GPU-pool — fra forbruker-RTX-kort til bedrifts-A100-er — til en brøkdel av kostnaden for tradisjonell skytjeneste. Enten du trener en stor språkmodell, kjører inferens i stor skala eller rendrer komplekse simuleringer, matcher Svitlo Chain arbeidsbelastningen din med riktig maskinvare på sekunder.',
      'Plattformen håndterer automatisk jobbplanlegging, sikker containerisering og fakturering. Utviklere distribuerer via CLI eller API, spesifiserer GPU-behovene sine og betaler kun for faktisk brukt datakraft — uten langsiktige kontrakter, uten minimumsforpliktelser.',
    ],
    steps: [
      { title: 'Angi GPU-krav', body: 'Velg VRAM, beregningskraft og region.' },
      { title: 'Distribuer via CLI eller API', body: 'Send inn containeren din og start beregningene med én gang.' },
      { title: 'Betal per bruk', body: 'Ingen kontrakter. Avregning i SVIT eller stablecoin.' },
    ],
    quickstartTitle: 'Utviklerguide: hurtigstart med Svitlo Chain',
    quickstartLede: 'Som AI-utvikler trenger du rask, kostnadseffektiv og skalerbar tilgang til GPU-ressurser. Denne hurtigstarten tar deg fra autentisering til å kjøre din første GPU-jobb og hente resultatet.',
    steps2: [
      {
        n: '1', title: 'API-autentisering og oppsett',
        body: 'For å bruke Svitlo Chain-API-et trenger du din API-nøkkel, som du finner i utviklerpanelet etter registrering. For Python-utviklere anbefaler vi vårt SDK for enkel integrasjon; andre språk kan kalle REST-API-et direkte.',
        code: `<span class="kw">import</span> os
<span class="kw">import</span> svitlo_sdk

<span class="c1"># Hent API-nøkkelen trygt fra miljøvariabler</span>
API_KEY = os.environ.get(<span class="str">"SVIT_API_KEY"</span>)

<span class="kw">if not</span> API_KEY:
    <span class="kw">raise</span> ValueError(<span class="str">"SVIT_API_KEY er ikke satt."</span>)

<span class="c1"># Initialiser Svitlo Chain SDK-klienten</span>
client = svitlo_sdk.SvitloClient(api_key=API_KEY)
print(<span class="str">"API-klient initialisert."</span>)`,
      },
      {
        n: '2', title: 'Send inn din første GPU-jobb',
        body: 'Å sende inn en GPU-jobb er enkelt. Du definerer hvilken AI-modell som skal kjøres, hvilke inndata som skal brukes, og hvilke GPU-ressurser som kreves. Svitlo Chain matcher automatisk jobben din med tilgjengelige leverandører i nettverket.',
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
    print(<span class="fn">f</span><span class="str">"Jobb sendt inn! Jobb-ID: {job.id}"</span>)
    print(<span class="fn">f</span><span class="str">"Status: {job.status}"</span>)
<span class="kw">except</span> Exception <span class="kw">as</span> e:
    print(<span class="fn">f</span><span class="str">"Feil ved innsending: {e}"</span>)`,
      },
      {
        n: '3', title: 'Overvåk jobbstatus',
        body: 'Etter innsending kan du følge jobbens fremdrift i sanntid — se eventuelle feil og anslå når resultatet er klart.',
        code: `job_id = job.id

current_job = client.get_job_status(job_id)
print(<span class="fn">f</span><span class="str">"Jobb {current_job.id}, status: {current_job.status}"</span>)

<span class="kw">while</span> current_job.status <span class="kw">not in</span> [<span class="str">"COMPLETED"</span>, <span class="str">"FAILED"</span>]:
    time.sleep(30)
    current_job = client.get_job_status(job_id)
    print(<span class="fn">f</span><span class="str">"Oppdatert status: {current_job.status}"</span>)

<span class="kw">if</span> current_job.status == <span class="str">"COMPLETED"</span>:
    print(<span class="str">"Jobben er ferdig!"</span>)
<span class="kw">else</span>:
    print(<span class="str">"Jobben mislyktes eller ble avbrutt."</span>)`,
      },
      {
        n: '4', title: 'Hent resultatene',
        body: 'Når GPU-jobben er ferdig, er utdata tilgjengelig på stedet du spesifiserte (f.eks. en S3-bøtte). Svitlo Chain gir deg tilkoblingsdetaljene du trenger for å hente resultatene trygt.',
        code: `<span class="kw">if</span> current_job.status == <span class="str">"COMPLETED"</span>:
    print(<span class="fn">f</span><span class="str">"Resultater tilgjengelig på: {current_job.output_data_location}"</span>)
<span class="kw">else</span>:
    print(<span class="str">"Kan ikke hente resultater — jobben er ikke ferdig eller mislyktes."</span>)`,
      },
    ],
    billingTitle: '5. Betaling og fakturering',
    billingBody: 'Svitlo Chain bruker SVIT-tokenet til alle transaksjoner på plattformen, noe som sikrer åpenhet og effektivitet. Du faktureres for faktisk GPU-bruk og jobbens varighet — ofte opptil 70% billigere enn tradisjonell sky. Følg bruks­historikk og saldo fra Svitlo Chain-panelet ditt.',
  },
  gpuOwners: {
    eyebrow: 'Slik fungerer det',
    title: 'For GPU-eiere',
    body: 'GPU-eiere — spillere, minere og datasentre — kan koble ledig maskinvare til Svitlo Chain og få passiv inntekt. Svitlo Chain-klienten kjører i bakgrunnen, mottar beregningsjobber, utfører dem i isolerte containere og returnerer resultater med kryptografisk verifisering. Leverandører setter selv tilgjengelighetsvinduer, priser og maskinvarespesifikasjoner.',
    cards: [
      { title: 'Installer klienten', body: 'Last ned Svitlo Chain-nodeklienten, koble til GPU-en din og kom i gang på få minutter. Windows, Linux og Docker støttes.' },
      { title: 'Angi dine vilkår', body: 'Bestem timepriser, minimum VRAM og tilgjengelighetsplan. Du bestemmer når utstyret ditt er tilgjengelig i markedet.' },
      { title: 'Tjen automatisk', body: 'Jobber matches, kjøres og verifiseres automatisk. Utbetalinger går i SVIT eller USDC rett til lommeboken din.' },
    ],
    installTitle: 'Installasjonsguide for GPU-leverandører',
    installLede: 'Å bli Svitlo Chain GPU-leverandør er enkelt og lar deg tjene på ledig datakraft. Følg disse trinnene for å installere Svitlo Chain-nodeklienten og begynne å leie ut GPU-ressursene dine til AI-utviklere over hele verden.',
    installSteps: [
      {
        n: '1', title: 'Systemkrav og forberedelser',
        body: 'Før du installerer, sørg for at systemet ditt oppfyller disse kravene: <b>OS:</b> Linux (Ubuntu 20.04+ anbefales), Windows 10/11, macOS 13 Ventura eller nyere, eller et Docker-kompatibelt miljø. <b>GPU:</b> NVIDIA GeForce RTX 30-serien eller nyere, NVIDIA A100/H100, AMD Radeon RX 6000-serien eller nyere, eller Apple Silicon med Metal Performance Shaders (MPS). <b>RAM:</b> Minimum 16 GB. <b>Nettverk:</b> stabil forbindelse med minst 100 Mbps opp/ned.',
      },
      {
        n: '2', title: 'Last ned Svitlo Chain-nodeklienten',
        body: 'Hent siste versjon av nodeklienten fra vår offisielle side eller GitHub-repo. Pakker tilgjengelig for alle plattformer.',
        code: `<span class="c1"># Linux</span>
wget https://svitlochain.com/node-client/svitlo-node-linux-amd64.tar.gz
tar -xzf svitlo-node-linux-amd64.tar.gz
<span class="kw">cd</span> svitlo-node`,
      },
      {
        n: '3', title: 'Installer og konfigurer',
        body: 'Etter nedlasting, kjør oppsettskriptet og følg instruksjonene på skjermen. På Apple Silicon bør du aktivere Metal-akselerert backend for best ytelse.',
        code: `arch
<span class="c1"># forventet arm64 på Apple Silicon</span>
<span class="kw">export</span> SVITLO_GPU_BACKEND=mps
<span class="kw">export</span> SVITLO_OPTIMIZE_APPLE_SILICON=<span class="kw">true</span>
svitlo-node start`,
      },
      {
        n: '4', title: 'Koble til lommeboken din',
        body: 'For å motta betaling må du koble til en kompatibel lommebok. Denne lommeboken vil holde SVIT-inntektene dine.',
        code: `./svitlo-node wallet connect &lt;din-lommebok-adresse&gt;`,
      },
      {
        n: '5', title: 'Sett pris og tilgjengelighet',
        body: 'Du har full kontroll over hvordan GPU-ene dine leies ut.',
        code: `./svitlo-node config <span class="kw">set</span> backend mps
./svitlo-node config <span class="kw">set</span> optimize_apple_silicon
./svitlo-node config <span class="kw">set</span> availability 24/7`,
      },
      {
        n: '6', title: 'Begynn å tjene',
        body: 'Når noden din kjører, er tilkoblet og konfigurert, begynner GPU-ene dine å bli matchet med AI-beregningsjobber. Følg inntekter og jobbhistorikk fra Svitlo Chain-panelet.',
      },
    ],
  },
  minerMode: {
    eyebrow: 'Miner Mode',
    title: 'Vi inviterer minere og GPU-farmer',
    body: [
      'Kryptomining har endret seg. Med fallende belønninger for proof-of-work og økende strømkostnader trenger GPU-farmer nye inntektskilder. <b>Miner Mode</b> fra Svitlo Chain lar mining-operatører umiddelbart omdirigere ledig maskinvare til AI-beregning — uten å konfigurere om infrastrukturen.',
      'Miner Mode er en enkel bryter som flytter riggen din fra mining til utleie av datakraft. Jobber går gjennom forhåndsvalidering, kjøres i sandkasse, og inntektene spores i sanntid. Farmer med 10+ GPU-er får prioritert jobbruting og dedikert support.',
    ],
    cards: [
      { title: 'Bytt uten driftsstans', body: 'Bytt mellom mining og utleie av datakraft på sekunder. Ingen maskinvareendringer nødvendig.' },
      { title: 'Høyere inntektspotensial', body: 'Etterspørselen etter AI-beregning overstiger ofte tilbudet — leverandører tjener ofte mer per GPU-time enn i de fleste mining-operasjoner.' },
      { title: 'Kontrollpanel for farmer', body: 'Administrer hele farmen din fra ett grensesnitt. Følg inntekter, jobbstatus og oppetid for alle noder.' },
    ],
    detailTitle: 'Miner Mode: bygget for skalering',
    whyTitle: 'Hvorfor Miner Mode?',
    whyBody: [
      'Lønnsomheten i mining er ustabil. GPU-utleie på Svitlo Chain gir en stabil, forutsigbar inntektsbase — spesielt i bjørnemarkeder eller når nettverkets vanskelighetsgrad øker.',
      'Miner Mode støtter en batch-kø for jobber, slik at farmen din aldri står stille. Når AI-etterspørselen synker, kan du bytte tilbake til mining med én kommando. Det er nettopp denne fleksibiliteten under alle markedsforhold som skiller Svitlo Chain fra andre.',
    ],
    cta: 'Les mer om Miner Mode',
    howTitle: 'Slik fungerer det',
    steps: [
      { n: '01', title: 'Koble til farmen din', body: 'Installer Svitlo Chain-nodeklienten på din eksisterende mining-rigg.' },
      { n: '02', title: 'Aktiver Miner Mode', body: 'Lei ut datakraft parallelt med mining, eller i stedet for det.' },
      { n: '03', title: 'Tjen og følg med', body: 'Følg inntekter i sanntid, jobbgjennomstrømning og GPU-bruk.' },
      { n: '04', title: 'Bytt fritt', body: 'Gå tilbake til mining når som helst når markedsforholdene tilsier det.' },
    ],
  },
  pricing: {
    eyebrow: 'Tjenester',
    title: 'Tjenester og priser',
    body: 'Svitlo Chain tilbyr tre hovednivåer av tjenester, hver tilpasset ulike AI-arbeidslaster — fra tekstbaserte oppgaver til sanntids taleprosessering. Alle tjenester faktureres per GPU-time, med rabatter tilgjengelig for langsiktige reservasjoner betalt i SVIT.',
    cards: [
      { title: 'Tekstinferens / LLM', body: 'Kjør store språkmodeller, chatboter og tekstgenereringsoppgaver. Optimalisert for maskinvare fra RTX 4060 til A100.', price: 'Fra $0.12/t' },
      { title: 'Bildegenerering', body: 'Stable Diffusion, FLUX og tilpassede bildemodeller i stor skala. GPU-er med mye VRAM anbefales for batch-generering.', price: 'Fra $0.28/t' },
      { title: 'Talegjenkjenning (STT)', body: 'Sanntidstranskripsjon og taleprosesserings-pipelines. Instanser med lav latens tilgjengelig verden over.', price: 'Fra $0.18/t' },
    ],
    note: 'Alle priser gjenspeiler oppdateringene i kalkulator v2. Betalinger i SVIT gir ytterligere 10% rabatt.',
    revenueTitle: 'Leverandørinntekt: reelle tall',
    revenueLede: 'Inntektene dine på Svitlo Chain avhenger direkte av maskinvaren din. Under finner du et realistisk anslag for timeinntekt for vanlige GPU-konfigurasjoner, basert på dagens markedsetterspørsel og priskalkulator v2. Faktisk inntekt avhenger av tilgjengelighet, jobbtype og region.',
    tableHeaders: ['GPU', 'Timepris', 'Estimat per måned (80% utnyttelse)'],
    rows: [
      ['RTX 4060', '$0.12/t', '~$70'],
      ['RTX 4070 Ti', '$0.22/t', '~$127'],
      ['RTX 4080', '$0.35/t', '~$202'],
      ['RTX 4090', '$0.55/t', '~$317'],
      ['A40 / L40', '$0.80/t', '~$461'],
      ['A100 (40GB)', '$1.40/t', '~$806'],
      ['8× A100-flåte', '$11.20/t', '~$6,451'],
    ],
    stats: [
      { num: '$6,451', label: '8× A100-flåte', body: 'Estimert månedlig inntekt ved 80% utnyttelse — styrken i skalering.' },
      { num: '80%', label: 'Mål-utnyttelse', body: 'Et konservativt anslag. Leverandører med høy etterspørsel overstiger ofte 90%.' },
      { num: '10+', label: 'GPU-nivåer', body: 'Fra forbruker-RTX til bedrifts-A100 — det finnes et marked for enhver GPU.' },
    ],
  },
  token: {
    eyebrow: 'Tokenomikk',
    title: 'SVIT-tokenet: tre søyler av nytteverdi',
    body: 'SVIT er den innebygde kryptovalutaen i Svitlo Chain-økosystemet og den naturlige valutaen på Svitlo Chains egen L1-blokkjede. SVIT driver hele økosystemet — fra sikkerhet og transaksjoner til staking, brenning og kapitalisering. Som den native mynten drar SVIT nytte av raske transaksjoner, lave avgifter og høy gjennomstrømning. Tokenomikken er utformet for langsiktig bærekraft, med en deflatorisk brennmekanisme, staking og et begrenset tilbud.',
    cards: [
      { icon: '💳', title: 'Betalinger og rabatter', body: 'Leverandører og utviklere som handler i SVIT får 10% rabatt på alle markedsplassavgifter. SVIT er den foretrukne valutaen for betaling av jobber og staking i Svitlo Chains L1-økosystem, med raske og billige transaksjoner.' },
      { icon: '🛡️', title: 'Staking og omdømme', body: 'Leverandører staker SVIT for å bli med i nettverket. Ærlig oppførsel øker omdømmescoren og åpner for prioritert tildeling av jobber. Ondsinnede aktører utsettes for slashing, og Svitlo Chains L1-blokkjede gir effektiv koordinering selv ved høy aktivitet.' },
      { icon: '🔥', title: 'Brenning og deflasjon', body: 'En del av hver transaksjonsavgift brennes for godt, noe som reduserer den totale tilgangen over tid. Når aktiviteten i økosystemet øker, akselererer brenningstakten og skaper deflasjonspress på SVIT — samtidig som Svitlo Chains lave avgifter gjør mekanismen effektiv.' },
    ],
    callout: 'Den totale tilgangen av SVIT er begrenset. Brenningshendelser kan verifiseres offentlig på blokkjeden. Tokenholdere stemmer også over plattformoppdateringer og avgiftsstruktur.',
    infraTitle: 'Blokkjede-infrastruktur for SVIT',
    infraBody: 'Utover den direkte nytteverdien bygger Svitlo Chain videre på egen infrastruktur som styrker økosystemet og gjør bruken av SVIT enklere.',
    infraCards: [
      { title: 'L1-blokkjede for SVIT', body: 'SVIT er den native mynten på Svitlo Chains egen L1-blokkjede, med en total emisjon på 1 milliard mynter. Den fungerer som ryggraden i økosystemets sikkerhet, transaksjonsflyt, staking, brenning og langsiktige kapitalisering. All aktivitet er direkte knyttet til SVITs verdi og bærekraft.' },
      { title: 'Svitlo Wallet', body: 'Svitlo Wallet er en enkel lommebok for å lagre, sende og bruke SVIT i hele Svitlo Chain-økosystemet.' },
    ],
  },
  enterprise: {
    eyebrow: 'For bedrifter',
    title: 'Bedrift, tillit og komme i gang',
    companyTitle: 'Bedriftsnivåer',
    companyBody: 'Organisasjoner som trenger SLA, dedikert support og tilgang til en privat flåte kan onboardes gjennom Svitlo Chains bedriftsprogram. Alle nivåer inkluderer kryptografisk verifisering av beregningsjobber, sporing av omdømme på kjeden og full dokumentasjon for etterlevelse i bedriftsinnkjøp.',
    tableHeaders: ['Nivå', 'Funksjoner'],
    tiers: [
      ['Starter', 'API-tilgang, offentlig markedsplass, SVIT-betalinger'],
      ['Growth', 'Prioritert ruting, dedikert support, flåte-CLI'],
      ['Enterprise', 'SLA-garanti, privat flåte, etterlevelsespakke, onboarding med personlig service'],
    ],
    trustTitle: 'Tillit og sikkerhet',
    trustItems: [
      { title: 'SHA-256-verifisering', body: 'Hver beregningsjobb verifiseres kryptografisk — leverandører kan ikke forfalske resultater.' },
      { title: 'Omdømmesystem', body: 'On-chain-poeng belønner konsekvente, ærlige leverandører og filtrerer ut useriøse aktører.' },
      { title: 'Klar for etterlevelse', body: 'Bedriftsdokumentasjon, revisjonslogger og alternativer for dataplassering i ønsket region.' },
    ],
    joinTitle: 'Bli med i Svitlo Chain i dag',
    joinCards: [
      { icon: '🖥️', title: 'Leverandører', body: 'Monetiser dine ledige GPU-er og få passiv inntekt.' },
      { icon: '⚡', title: 'Utviklere', body: 'Få rimelig, skalerbar GPU-kraft til AI-prosjektene dine.' },
      { icon: '⛏️', title: 'Mining-operatører', body: 'Gjør mining-infrastrukturen din om til AI-beregning med Miner Mode.' },
    ],
  },
  roadmap: {
    eyebrow: 'Veikart',
    title: 'Vårt veikart: fremtiden for Svitlo Chain',
    body: 'Svitlo Chain utvikles kontinuerlig for å møte den voksende etterspørselen etter desentralisert GPU-beregning. Veikartet vårt fokuserer på strategisk vekst og på å levere verdi til både leverandører og utviklere.',
    milestones: [
      { when: 'Q3 2026', title: 'Lansering', body: 'Offisiell lansering av Svitlo Chain-plattformen, med kjernefunksjonalitet for GPU-utleie og Miner Mode.' },
      { when: 'Q4 2026', title: 'Bedriftsfunksjoner', body: 'Implementering av Enterprise-nivåer, dedikert support, SLA-er og avanserte sikkerhetsprotokoller for større kunder.' },
      { when: 'Q1 2027', title: 'Global ekspansjon', body: 'Utvidet geografisk dekning, nye regionale datasentre og partnerskap for å nå et bredere publikum.' },
      { when: 'Q2 2027', title: 'Avansert analyse', body: 'Introduksjon av avanserte analyseverktøy for optimalisering av GPU-bruk og inntektssporing.' },
    ],
    footer: 'Dette veikartet gjenspeiler våre nåværende strategiske prioriteringer, men Svitlo Chain-teamet forblir smidig og lydhørt for markedsforhold og tilbakemeldinger fra fellesskapet.',
  },
  faq: {
    eyebrow: 'Spørsmål',
    title: 'Ofte stilte spørsmål',
    body: 'Har du spørsmål om Svitlo Chain? Her er svar på noen av de vanligste spørsmålene fra både leverandører og utviklere.',
    items: [
      { q: 'Hvordan kommer jeg i gang som leverandør?', a: 'For å komme i gang må du installere Svitlo Chain-nodeklienten på din eksisterende mining-rigg. Deretter kan du aktivere "Miner Mode" for å begynne å leie ut datakraften din, enten parallelt med eksisterende mining eller i stedet for den. Prosessen er designet for å være smidig og enkel.' },
      { q: 'Hvilke avgifter gjelder på Svitlo Chain?', a: 'Svitlo Chain har en transparent avgiftsstruktur for å vedlikeholde plattformen. Brukere som handler i vårt innebygde utility-token, SVIT, får 10% rabatt på alle markedsplassavgifter. Spesifikke avgifter kan variere avhengig av jobbtype og markedsforhold.' },
      { q: 'Er dataene og beregningene mine trygge?', a: 'Ja. Sikkerhet er avgjørende for oss. Hver beregningsjobb verifiseres kryptografisk med SHA-256, noe som sikrer at leverandører ikke kan forfalske resultater. Vi sporer også leverandørers omdømme on-chain, og tilbyr en bedriftsklasse etterlevelsespakke for avanserte sikkerhetsbehov.' },
      { q: 'Kan jeg bruke hvilken som helst GPU?', a: 'Svitlo Chain er designet for å være fleksibelt og støtter et bredt spekter av GPU-er, fra forbrukermodeller som RTX 4060 til kraftige bedrifts-GPU-er som A100. Plattformen har et marked for nesten enhver GPU-konfigurasjon, slik at du kan monetisere maskinvaren du allerede har.' },
      { q: 'Hva er SVIT-tokenet?', a: 'SVIT er Svitlo Chain-økosystemets innebygde utility-token, designet for å muliggjøre betalinger, oppmuntre til ærlig oppførsel gjennom staking, og styre plattformens utvikling. Det har en deflatorisk brennmekanisme og et begrenset tilbud for langsiktig bærekraft.' },
      { q: 'Hvordan tar jeg ut inntektene mine?', a: 'Inntektene dine på Svitlo Chain samles i den tilkoblede lommeboken din. Du kan ta dem ut når som helst, enten i SVIT eller ved å konvertere til andre kryptovalutaer/fiat via plattformens integrerte vekslingsalternativer. Detaljer finnes i vår dokumentasjon.' },
    ],
  },
  stats: {
    eyebrow: 'I tall',
    title: 'Svitlo Chain i tall: plattformens styrke',
    body: 'Svitlo Chain fortsetter å vokse eksponentielt og driver fremtiden for desentralisert AI-beregning. Her er et glimt av plattformens imponerende rekkevidde og effektivitet — en kostnadseffektiv løsning sammenlignet med tradisjonelle skyleverandører.',
    items: [
      { num: '2.5M+', label: 'Tilgjengelige GPU-timer', body: 'Over 2,5 millioner GPU-timer er nå levert av nettverket vårt til AI-jobber, og øker jevnt hver måned.' },
      { num: '8 500+', label: 'Aktive leverandører', body: 'Et voksende nettverk av 8 500+ unike leverandører bidrar med datakraft, noe som sikrer robusthet og tilgjengelighet.' },
      { num: '70%', label: 'Gjennomsnittlig kostnadsbesparelse', body: 'Oppnå opptil 70% besparelser på GPU-beregning sammenlignet med ledende skyplattformer, uten å gå på akkord med ytelsen.' },
      { num: '500+ PFLOPS', label: 'Total beregningskraft', body: 'Samlet leverer Svitlo Chain mer enn 500 PFLOPS AI-beregningskraft — en formidabel ressurs i enhver skala.' },
    ],
  },
  architecture: {
    eyebrow: 'Under panseret',
    title: 'Svitlo Chains tekniske arkitektur: slik fungerer systemet',
    body: 'Svitlo Chain kjører på en robust desentralisert arkitektur som sikrer effektivitet, sikkerhet og åpenhet. Her er en gjennomgang av de tekniske mekanismene bak plattformen.',
    lanes: [
      { label: 'Utvikler (klient)', cells: ['Sender inn AI-jobb'] },
      { label: 'Svitlo Chain-plattform', cells: ['Matching og planlegging', '→', 'Resultat og bevis', '→', 'Verifisering og oppgjør'] },
      { label: 'GPU-leverandør', cells: ['Henter og utfører jobb'] },
      { label: 'Blokkjede', cells: ['SHA-256-verifisering', '→', 'SVIT-betaling', '→', 'Omdømmesystem'] },
    ],
    body2: 'Svitlo Chain bruker blokkjedeteknologi for å skape et tillitsløst miljø, der hvert steg i beregningsprosessen er verifiserbart og transparent, samtidig som det gir robuste sikkerhetstiltak for å beskytte brukernes data og beregninger.',
    cards: [
      { title: 'Desentralisert jobbutførelse', body: 'AI-jobber deles opp og distribueres over nettverket av GPU-leverandører, noe som optimaliserer bruken av tilgjengelig datakraft og unngår enkeltpunkts feil.' },
      { title: 'Sikker containerisering', body: 'Hver beregningsjobb kjører i et isolert containermiljø hos leverandøren, noe som hindrer uautorisert tilgang og sikrer dataintegritet.' },
      { title: 'Blokkjede-åpenhet', body: 'Alle transaksjoner, jobbspesifikasjoner og verifiseringsbevis registreres on-chain for full åpenhet og ugjendrivelighet.' },
    ],
  },
  glossary: {
    eyebrow: 'Referanse',
    title: 'Ordliste',
    body: 'For å gjøre det enklere å forstå Svitlo Chain-plattformen og det bredere økosystemet for desentralisert AI, har vi satt sammen en ordliste over vanlige tekniske begreper — klar og konsis, enten du er en erfaren teknisk bruker eller ny i feltet.',
    terms: [
      { term: 'Blokkjede', body: 'En distribuert, uforanderlig digital hovedbok bestående av kryptografisk lenkede "blokker" av transaksjoner. Hver blokk inneholder et tidsstempel og referanse til forrige blokk, som skaper en sikker og transparent historikk.' },
      { term: 'Containerisering', body: 'En virtualiseringsteknikk som pakker applikasjonskode sammen med alle avhengigheter (biblioteker, verktøy, konfigurasjon) i en isolert "container". Dette sikrer at applikasjonen kjører konsistent, uansett hvor den distribueres.' },
      { term: 'Kryptografisk bevis', body: 'Matematiske metoder brukt for å verifisere ektheten og integriteten til data eller transaksjoner. Det muliggjør sikker kommunikasjon og verifisering uten at partene trenger å stole på hverandre.' },
      { term: 'CUDA', body: 'En plattform for parallell databehandling og programmeringsmodell utviklet av NVIDIA. CUDA lar utviklere bruke NVIDIA-GPU-er til generell databehandling, noe som drastisk akselererer beregningsintensive oppgaver, spesielt innen AI.' },
      { term: 'Desentralisering', body: 'Prinsippet om å fordele kontroll og beslutningstaking over et nettverk fremfor å konsentrere det i én sentral myndighet. I Svitlo Chain betyr dette at GPU-ressurser distribueres blant mange noder globalt.' },
      { term: 'Docker', body: 'En populær plattform for å utvikle, distribuere og kjøre applikasjoner ved hjelp av containerteknologi. Docker-containere sikrer at Svitlo Chain-klienten og AI-jobber kjører isolert og effektivt.' },
      { term: 'Svitlo Chain L1-blokkjede', body: 'Svitlo Chains egen L1-blokkjede, skrevet i Rust og designet for sikkerhet, høy hastighet og effektiv databehandling. Den danner grunnlaget for transaksjoner, programlogikk og nettverksinfrastruktur.' },
      { term: 'GPU (Graphics Processing Unit)', body: 'En spesialisert elektronisk krets designet for raskt å manipulere og endre minne for å akselerere bildeskaping i en bildebuffer. GPU-er er også svært effektive for parallell prosessering av store datamengder, noe som gjør dem ideelle for AI-beregning.' },
      { term: 'Inferens', body: 'Prosessen med å bruke en trent AI-modell for å gjøre prediksjoner eller ta beslutninger basert på nye, usette data. Dette er fasen der AI-modellen anvender det den har lært.' },
      { term: 'Mining', body: 'Prosessen med å verifisere og legge til nye transaksjoner i blokkjeden ved å løse komplekse kryptografiske gåter. I Svitlo Chains "Miner Mode" kan noder tjene penger på å validere transaksjoner eller utføre AI-beregning.' },
      { term: 'Node', body: 'En datamaskin eller server som kjører Svitlo Chain-klientprogramvaren og er koblet til nettverket. Noder tilbyr beregningsressurser (GPU-er) til nettverket.' },
      { term: 'Peer-to-peer (P2P)', body: 'Et nettverk der noder kommuniserer direkte med hverandre uten behov for en sentral server. Svitlo Chain bygger på et P2P-nettverk for å distribuere AI-arbeidslaster.' },
      { term: 'SVIT-mynt', body: 'Den native kryptovalutaen på Svitlo Chains L1-blokkjede. SVIT brukes til å betale for GPU-ressurser, belønne leverandører og delta i nettverkets styring.' },
      { term: 'Omdømmescore', body: 'Et system som vurderer påliteligheten og ytelsen til Svitlo Chain GPU-leverandører. Høye score fører til flere jobber og høyere inntekter.' },
      { term: 'SHA-256', body: 'En kryptografisk hash-funksjon som produserer en 256-bits (32-byte) hash-verdi. Den brukes mye i blokkjedeteknologi for å sikre dataintegritet og skape unike identifikatorer for blokker.' },
      { term: 'Slashing', body: 'En straffemekanisme i desentraliserte nettverk der en del av en GPU-leverandørs innsats fjernes hvis de opptrer ondsinnet eller ikke oppfyller sine forpliktelser.' },
      { term: 'Smartkontrakter', body: 'Selvutførende kontrakter med vilkårene for avtalen skrevet direkte inn i kode. De kjører automatisk på en blokkjede når forhåndsdefinerte vilkår er oppfylt, noe som eliminerer behovet for mellomledd.' },
      { term: 'Staking', body: 'Prosessen med å låse en viss mengde kryptovaluta (SVIT på Svitlo Chain) som sikkerhet for å støtte nettverksdriften. GPU-leverandører kan stake SVIT for å øke omdømmescoren sin og få flere jobber.' },
      { term: 'VRAM (Video Random Access Memory)', body: 'En type RAM spesielt utformet for å lagre bildedata som vises på en dataskjerm. For AI-beregning, spesielt med store modeller, er tilstrekkelig VRAM avgjørende for ytelsen.' },
    ],
    footer: 'Denne ordlisten oppdateres jevnlig. Har du spørsmål om spesifikke begreper eller vil foreslå tillegg, ikke nøl med å kontakte Svitlo Chain-fellesskapet.',
  },
  compare: {
    eyebrow: 'Sammenligning',
    title: 'Svitlo Chain versus tradisjonelle skyleverandører',
    body: 'Svitlo Chain revolusjonerer tilgangen til GPU-ressurser for AI- og maskinlæringsprosjekter. Denne sammenligningen viser hvordan Svitlo Chain skiller seg fra tradisjonelle skytjenester som AWS, Google Cloud og Azure, og andre sentraliserte GPU-skyleverandører.',
    tableHeaders: ['Dimensjon', 'Svitlo Chain', 'Tradisjonell sky'],
    rows: [
      ['Prising (per GPU-time)', 'Opptil 70% lavere, dynamisk', 'Ofte dyrere, nivåbasert on-demand'],
      ['Desentralisering', 'Fullt desentralisert (peer-to-peer)', 'Sentralisert'],
      ['Fleksibilitet', 'Ingen lange kontrakter, betal per bruk, ingen binding', 'Krever ofte kontrakter, bindingstid, kompliserte avtaler'],
      ['Hastighet (jobbmatching og kjøring)', 'Rask matching via P2P-nettverk', 'Varierende, kan oppleve flaskehalser ved høy etterspørsel'],
      ['Åpenhet', 'Full åpenhet og verifiserbarhet via blokkjede', 'Begrenset, selskapsstyrt'],
      ['Fellesskap', 'Åpen kildekode og fellesskapsdrevet utvikling', 'Stort økosystem, men ikke fellesskapsdrevet'],
      ['Token-insentiver', 'Ja, SVIT-tokens for leverandører og brukere', 'Nei'],
    ],
    footer: 'Som tabellen viser, tilbyr Svitlo Chain en kostnadseffektiv, fleksibel og transparent løsning for GPU-beregning, drevet av en desentralisert modell og fellesskapsengasjement. Dette posisjonerer Svitlo Chain som fremtiden for distribuert AI-beregning.',
  },
  cta: {
    title: 'Klar til å bli med i den desentraliserte GPU-revolusjonen?',
    body: 'Enten du vil tjene på ledig datakraft eller trenger rimelig, skalerbar AI-kraft, har Svitlo Chain den riktige løsningen. Begynn å bygge fremtiden din eller monetiser eksisterende maskinvare på få minutter.',
    ctaPrimary: 'Bli leverandør',
    ctaGlass: 'Kom i gang',
  },
  contact: {
    eyebrow: 'Ta kontakt',
    title: 'Kontakt og support',
    body: 'Har du spørsmål, trenger hjelp, eller vil bli med i Svitlo Chain-fellesskapet? Her er alle våre kontaktkanaler og supportressurser.',
    items: [
      { icon: '✉️', title: 'E-post support', body: 'svitlochain@gmail.com', href: 'mailto:svitlochain@gmail.com' },
      { icon: '✈️', title: 'Telegram', body: 'Bli med i vår Telegram-gruppe for raske oppdateringer og fellesskapschat.', href: 'https://t.me/+8t6LS2j4CyJiOTU0' },
      { icon: '💬', title: 'Discord-fellesskap', body: 'Bli med i vår Discord for sanntidsstøtte og diskusjoner med teamet og andre brukere.', href: 'https://discord.gg/9wqA3fMfg' },
      { icon: '🐦', title: 'Følg oss på X', body: 'Hold deg oppdatert med de siste nyhetene og produktoppdateringene.', href: 'https://x.com/Svitlochain' },
      { icon: '📘', title: 'Facebook', body: 'Følg vår Facebook-side for nyheter og fellesskapsoppdateringer.', href: 'https://www.facebook.com/share/1D53mnv4kk/' },
      { icon: '🐙', title: 'GitHub-repo', body: 'Utforsk vår åpen kildekode og bidra til plattformens utvikling.' },
      { icon: '📄', title: 'Dokumentasjon', body: 'Les våre omfattende guider og tekniske spesifikasjoner for å komme i gang.' },
      { icon: '📰', title: 'Svitlo Chain-blogg', body: 'Få de siste innsiktene, analysene og nyhetene om desentralisert AI.' },
    ],
  },
  footer: {
    tagline: 'En Layer-1-blokkjede for AI-beregning og oppgjør av inferens.',
    cols: [
      { title: 'Produkt', links: [{ label: 'For utviklere', href: '#developers' }, { label: 'For GPU-eiere', href: '#gpu-owners' }, { label: 'SVIT-token', href: '#token' }] },
      { title: 'Selskap', links: [{ label: 'Veikart', href: '#roadmap' }, { label: 'Spørsmål', href: '#faq' }, { label: 'Kontakt', href: '#contact' }] },
      { title: 'Lommebok', links: [{ label: 'Personvernerklæring', href: '/privacy/' }, { label: 'Support', href: '/support/' }] },
    ],
    copyright: '© 2026 Svitlo Chain. Alle rettigheter forbeholdt.',
  },
};
