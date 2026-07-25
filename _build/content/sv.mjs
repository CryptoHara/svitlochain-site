export default {
  meta: {
    lang: 'sv',
    title: 'Svitlo Chain — Decentraliserad GPU-cloud',
    description: 'En decentraliserad GPU-marknadsplats för AI — hyr ut lediga GPU:er eller sätt upp din egen hårdvara, säkrad av blockchain.',
  },
  nav: {
    links: [
      { href: '#idea', label: 'Idén' },
      { href: '#developers', label: 'Utvecklare' },
      { href: '#gpu-owners', label: 'GPU-ägare' },
      { href: '#token', label: 'Token' },
      { href: '#roadmap', label: 'Färdplan' },
      { href: '#faq', label: 'FAQ' },
    ],
  },
  hero: {
    eyebrow: 'Layer-1-blockchain',
    title: 'Svitlo Chain: decentraliserad GPU-cloud',
    lede: 'Bryt dig fri från molnjättarnas monopolmakt. Hyr lediga GPU:er eller sätt upp din egen hårdvara och tjäna äkta inkomst — driven av AI, säkrad av blockchain.',
    ctaPrimary: 'Bli leverantör',
    ctaGlass: 'Kom igång med utveckling',
  },
  idea: {
    eyebrow: 'Varför Svitlo Chain',
    title: 'Idén bakom Svitlo Chain',
    body: [
      'Marknaden för molnbaserade GPU:er kontrolleras av några få giganter — AWS, Google, Azure — som sätter premiumpriser, medan miljontals GPU:er står oanvända i gaming-PC:er, mining-riggar och företagsdatacenter. Svitlo Chain skapades för att ändra detta.',
      'Konceptet är enkelt: att skapa en decentraliserad GPU-marknadsplats där ägare av GPU:er kan tjäna pengar på oanvänd datorkraft, och AI-utvecklare får tillgång till billig, skalbar kapacitet utan att vara bundna till en enda leverantör. Inga mellanhänder. Inga överpriser. Bara en direkt, tillitslös koppling mellan utbud och efterfrågan — säkrad av kryptografiska bevis och ett transparent ryktessystem.',
    ],
    cards: [
      { label: 'Problem', title: 'Centraliserade moln-GPU:er', body: 'Centraliserade molnleverantörer kontrollerar pris, tillgänglighet och åtkomst — och skapar flaskhalsar för innovation inom AI.' },
      { label: 'Lösning', title: 'En peer-to-peer-marknad', body: 'En peer-to-peer GPU-marknad där oanvänd maskinvara blir produktiv infrastruktur som ger inkomst till ägarna.' },
      { label: 'Vision', title: 'Ett globalt beräkningslager', body: 'Ett globalt, censurresistent lager för datorkraft som driver nästa generation av AI-applikationer.' },
    ],
  },
  developers: {
    eyebrow: 'Så här fungerar det',
    title: 'För AI-utvecklare och byggare',
    body: [
      'Svitlo Chain ger AI-utvecklare omedelbar tillgång till en global GPU-pool — från konsument-RTX-kort till företags-A100:or — till en bråkdel av kostnaden för traditionell molntjänst. Oavsett om du tränar en stor språkmodell, kör inferens i stor skala eller renderar komplexa simuleringar, matchar Svitlo Chain din arbetsbelastning med rätt hårdvara på sekunder.',
      'Plattformen hanterar automatiskt jobbschemaläggning, säker containerisering och betalningsavräkning. Byggare distribuerar via CLI eller API, specificerar sina GPU-krav och betalar bara för använd datorkraft — utan långsiktiga kontrakt, utan minimiåtaganden.',
    ],
    steps: [
      { title: 'Ange GPU-krav', body: 'Välj VRAM, beräkningskraft och region.' },
      { title: 'Distribuera via CLI eller API', body: 'Skicka in din container och starta beräkningarna direkt.' },
      { title: 'Betala per användning', body: 'Inga kontrakt. Avräkning i SVIT eller stablecoin.' },
    ],
    quickstartTitle: 'Utvecklarguide: snabbstart med Svitlo Chain',
    quickstartLede: 'Som AI-utvecklare behöver du snabb, kostnadseffektiv och skalbar tillgång till GPU-resurser. Denna snabbstartsguide hjälper dig komma igång med Svitlo Chain-API:et, från autentisering till att köra ditt första GPU-jobb och hämta resultat.',
    steps2: [
      {
        n: '1', title: 'API-autentisering och installation',
        body: 'För att interagera med Svitlo Chain-API:et behöver du din API-nyckel. Denna hittar du i din Svitlo Chain-utvecklarpanel efter registrering. För Python-utvecklare rekommenderar vi vårt SDK för en smidig integration; om du använder ett annat språk kan du göra direkta REST-anrop.',
        code: `<span class="kw">import</span> os
<span class="kw">import</span> svitlo_sdk

<span class="c1"># Hämta API-nyckeln säkert från miljövariabler</span>
API_KEY = os.environ.get(<span class="str">"SVIT_API_KEY"</span>)

<span class="kw">if not</span> API_KEY:
    <span class="kw">raise</span> ValueError(<span class="str">"SVIT_API_KEY miljövariabel är inte inställd."</span>)

<span class="c1"># Initiera Svitlo Chain SDK-klienten</span>
client = svitlo_sdk.SvitloClient(api_key=API_KEY)
print(<span class="str">"API-klient initierad framgångsrikt."</span>)`,
      },
      {
        n: '2', title: 'Skicka in ditt första GPU-jobb',
        body: 'Att skicka in ett GPU-jobb är enkelt. Du definierar vilken AI-modell du vill köra, vilka indata den ska använda och vilka GPU-resurser som krävs. Svitlo Chain matchar automatiskt ditt jobb med tillgängliga leverantörer i nätverket.',
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
    print(<span class="fn">f</span><span class="str">"Jobb inskickat! Jobb-ID: {job.id}"</span>)
    print(<span class="fn">f</span><span class="str">"Status: {job.status}"</span>)
<span class="kw">except</span> Exception <span class="kw">as</span> e:
    print(<span class="fn">f</span><span class="str">"Fel vid inskickning av jobb: {e}"</span>)`,
      },
      {
        n: '3', title: 'Övervaka jobbstatus',
        body: 'Efter att du har skickat in ett jobb kan du enkelt övervaka dess status i realtid. Detta låter dig spåra framsteg, se eventuella fel och beräkna när resultaten kommer att vara klara.',
        code: `job_id = job.id

current_job = client.get_job_status(job_id)
print(<span class="fn">f</span><span class="str">"Jobb-ID: {current_job.id}, Nuvarande status: {current_job.status}"</span>)

<span class="kw">while</span> current_job.status <span class="kw">not in</span> [<span class="str">"COMPLETED"</span>, <span class="str">"FAILED"</span>]:
    time.sleep(30)
    current_job = client.get_job_status(job_id)
    print(<span class="fn">f</span><span class="str">"Uppdaterad status: {current_job.status}"</span>)

<span class="kw">if</span> current_job.status == <span class="str">"COMPLETED"</span>:
    print(<span class="str">"Jobbet är klart!"</span>)
<span class="kw">else</span>:
    print(<span class="str">"Jobbet misslyckades eller avbröts."</span>)`,
      },
      {
        n: '4', title: 'Hämta resultat',
        body: 'När ditt GPU-jobb är klart kommer utdata att finnas tillgängliga på den plats du specificerade (t.ex. en S3-hink). Svitlo Chain tillhandahåller de nödvändiga anslutningsdetaljerna för att säkert hämta dina resultat.',
        code: `<span class="kw">if</span> current_job.status == <span class="str">"COMPLETED"</span>:
    print(<span class="fn">f</span><span class="str">"Resultat tillgängliga på: {current_job.output_data_location}"</span>)
<span class="kw">else</span>:
    print(<span class="str">"Kan inte hämta resultat, jobbet är inte klart eller har misslyckats."</span>)`,
      },
    ],
    billingTitle: '5. Betalning och fakturering',
    billingBody: 'Svitlo Chain använder SVIT-tokenet för alla transaktioner på plattformen, vilket säkerställer transparens och effektivitet. Du debiteras baserat på den faktiska GPU-användningen och varaktigheten för ditt jobb, vilket ger dig tillgång till kostnadseffektiva beräkningar som ofta är upp till 70% billigare än traditionella molnlösningar. Du kan se din användningshistorik och balans i din Svitlo Chain-panel.',
  },
  gpuOwners: {
    eyebrow: 'Så fungerar det',
    title: 'För GPU-ägare',
    body: 'GPU-ägare — spelare, gruvarbetare och datacenter — kan koppla oanvänd hårdvara till Svitlo Chain och få passiv inkomst. Svitlo Chain-klientprogramvaran körs i bakgrunden, tar emot beräkningsuppgifter, utför dem i isolerade containrar och returnerar resultat med kryptografisk verifiering. Leverantörer sätter själva tillgänglighetsfönster, priser och hårdvaruspecifikationer.',
    cards: [
      { title: 'Installera klienten', body: 'Ladda ner Svitlo Chain-nodprogramvaran, anslut din GPU och kom igång på bara några minuter. Windows, Linux och Docker stöds.' },
      { title: 'Ange dina villkor', body: 'Bestäm timpriser, minsta VRAM och tillgänglighetsschema. Du kontrollerar när din utrustning är tillgänglig på marknaden.' },
      { title: 'Tjäna automatiskt', body: 'Uppgifter matchas, körs och verifieras automatiskt. Utbetalningar går i SVIT- eller USDC-token direkt till din plånbok.' },
    ],
    installTitle: 'Installations- och installationsguide för GPU-leverantörer',
    installLede: 'Att bli en Svitlo Chain GPU-leverantör är enkelt och ger dig möjlighet att tjäna pengar på din lediga datorkraft. Följ dessa steg för att installera Svitlo Chain-nodklienten och börja hyra ut dina GPU-resurser till AI-utvecklare över hela världen.',
    installSteps: [
      {
        n: '1', title: 'Systemkrav och förberedelser',
        body: 'Innan du påbörjar installationen, se till att ditt system uppfyller följande krav: <b>Operativsystem:</b> Linux (Ubuntu 20.04+ rekommenderas), Windows 10/11, macOS 13 Ventura eller senare, eller Docker-kompatibel miljö. <b>GPU:</b> NVIDIA GeForce RTX 30-serien (eller nyare), NVIDIA A100/H100, AMD Radeon RX 6000-serien (eller nyare), eller Apple Silicon med Metal Performance Shaders (MPS). <b>RAM:</b> Minst 16 GB systemminne. <b>Nätverk:</b> Stabil internetanslutning med minst 100 Mbps uppladdnings- och nedladdningshastighet.',
      },
      {
        n: '2', title: 'Ladda ner Svitlo Chain-nodklienten',
        body: 'Hämta den senaste versionen av Svitlo Chain-nodklienten från vår officiella webbplats eller GitHub-arkiv. Vi erbjuder paket för olika plattformar.',
        code: `<span class="c1"># Linux</span>
wget https://svitlochain.com/node-client/svitlo-node-linux-amd64.tar.gz
tar -xzf svitlo-node-linux-amd64.tar.gz
<span class="kw">cd</span> svitlo-node`,
      },
      {
        n: '3', title: 'Installera och konfigurera programvaran',
        body: 'Efter nedladdning, installera och utför grundläggande konfiguration. På Apple Silicon rekommenderas att du aktiverar Apple Silicon-optimering och använder MPS som standardberäkningsbackend.',
        code: `arch
<span class="c1"># Förväntat: arm64 på Apple Silicon</span>
<span class="kw">export</span> SVITLO_GPU_BACKEND=mps
<span class="kw">export</span> SVITLO_OPTIMIZE_APPLE_SILICON=<span class="kw">true</span>
svitlo-node start`,
      },
      {
        n: '4', title: 'Anslut din plånbok',
        body: 'För att kunna ta emot betalningar för dina tjänster måste du ansluta en kompatibel kryptoplånbok. Denna plånbok kommer att användas för att hantera dina SVIT-intäkter.',
        code: `./svitlo-node wallet connect &lt;din_plånboksadress&gt;`,
      },
      {
        n: '5', title: 'Ställ in prissättning och tillgänglighet',
        body: 'Du har full kontroll över hur dina GPU:er hyrs ut.',
        code: `./svitlo-node config <span class="kw">set</span> backend mps
./svitlo-node config <span class="kw">set</span> optimize_apple_silicon
./svitlo-node config <span class="kw">set</span> availability 24/7`,
      },
      {
        n: '6', title: 'Börja tjäna pengar!',
        body: 'När din nod är igång, ansluten till plånboken och konfigurerad, börjar dina GPU:er att matchas med AI-beräkningsuppgifter. Du kan övervaka dina intäkter och uppgiftshistorik via Svitlo Chain-instrumentpanelen.',
      },
    ],
  },
  minerMode: {
    eyebrow: 'Miner Mode',
    title: 'Vi bjuder in gruvarbetare och GPU-farmer',
    body: [
      'Kryptomining har förändrats. Med fallande belöningar för proof-of-work och ökande elkostnader behöver GPU-farmer nya inkomstkällor. <b>Miner Mode</b> från Svitlo Chain låter mining-operatörer omedelbart omdirigera inaktiv hårdvara till AI-beräkningar — utan att konfigurera om infrastrukturen.',
      'Miner Mode är en lätt växling som flyttar din rigg från mining till uthyrning av beräkningskraft. Uppgifter går genom förhandsvalidering, körs i sandlåda och intäkterna spåras i realtid. Farmer med 10+ GPU:er får prioriterad routing av uppgifter och dedikerad support.',
    ],
    cards: [
      { title: 'Byt utan driftstopp', body: 'Byt mellan mining och uthyrning av beräkningskraft på sekunder. Inga ändringar i hårdvaran behövs.' },
      { title: 'Högre inkomstpotential', body: 'Efterfrågan på AI-beräkningar överstiger ofta utbudet — leverantörer tjänar mer per GPU-timme än i de flesta mining-operationer.' },
      { title: 'Kontrollpanel för farmer', body: 'Hantera hela din farm från ett gränssnitt. Följ intäkter, jobbstatus och upptid över alla noder.' },
    ],
    detailTitle: 'Miner Mode: Byggt för skalning',
    whyTitle: 'Varför Miner Mode?',
    whyBody: [
      'Lönsamheten inom mining är instabil. GPU-uthyrning på Svitlo Chain ger en stabil och förutsägbar inkomstbas — särskilt under björnmarknader eller när nätverkets svårighetsgrad ökar.',
      'Miner Mode stöder en batchkö för uppgifter, så att din gård aldrig står still. När efterfrågan på AI sjunker kan du växla tillbaka till mining med ett enda kommando. Det är just flexibiliteten att tjäna pengar under alla marknadsförhållanden som skiljer Svitlo Chain åt.',
    ],
    cta: 'Läs mer om Miner Mode',
    howTitle: 'Hur det fungerar',
    steps: [
      { n: '01', title: 'Anslut din gård', body: 'Installera Svitlo Chain node-klienten på din befintliga mining-rigg.' },
      { n: '02', title: 'Aktivera Miner Mode', body: 'Aktivera uthyrning av datorkraft parallellt med mining eller istället för det.' },
      { n: '03', title: 'Tjäna och spåra', body: 'Följ inkomster i realtid, genomströmning av uppgifter och GPU-användning.' },
      { n: '04', title: 'Växla fritt', body: 'Gå tillbaka till mining när som helst när marknadsförhållandena tillåter det.' },
    ],
  },
  pricing: {
    eyebrow: 'Tjänster',
    title: 'Tjänster och priser',
    body: 'Svitlo Chain erbjuder tre huvudnivåer av tjänster, var och en utformad för olika användningsområden — från textbaserade AI-arbetslaster till talbearbetning i realtid. Alla tjänster faktureras per timme GPU-användning, och för långsiktiga reservationer och betalningar med SVIT-tokens finns rabatter tillgängliga.',
    cards: [
      { title: 'Textinferens / LLM', body: 'Kör stora språkmodeller, chatbotar och textgenereringsuppgifter. Optimerad för hårdvara från RTX 4060 till A100.', price: 'Från $0.12/t' },
      { title: 'Bildgenerering', body: 'Stable Diffusion, FLUX och anpassade bildmodeller i stor skala. Rekommenderas för GPU:er med mycket VRAM för batchgenerering.', price: 'Från $0.28/t' },
      { title: 'Taligenkänning (STT)', body: 'Transkribering i realtid och voice processing-pipelines. Instanser med låg latens finns tillgängliga över hela världen.', price: 'Från $0.18/t' },
    ],
    note: 'Alla priser återspeglar uppdateringarna i kalkylator v2. Betalningar med SVIT-tokens får en extra rabatt på 10%.',
    revenueTitle: 'Intäkter för leverantörer: verkliga siffror',
    revenueLede: 'Intäkterna på Svitlo Chain beror direkt på din hårdvara. Nedan hittar du en realistisk uppskattning av timintäkt för vanliga GPU-konfigurationer baserat på dagens marknadsefterfrågan och priskalkylator v2. Faktisk intäkt beror på tillgänglighet, uppgiftstyp och region.',
    tableHeaders: ['GPU', 'Timpris', 'Uppskattning per månad (80% utnyttjande)'],
    rows: [
      ['RTX 4060', '$0.12/timme', '~$70'],
      ['RTX 4070 Ti', '$0.22/timme', '~$127'],
      ['RTX 4080', '$0.35/timme', '~$202'],
      ['RTX 4090', '$0.55/timme', '~$317'],
      ['A40 / L40', '$0.80/timme', '~$461'],
      ['A100 (40GB)', '$1.40/timme', '~$806'],
      ['8× A100-flotta', '$11.20/timme', '~$6,451'],
    ],
    stats: [
      { num: '$6,451', label: 'Flotta med 8× A100', body: 'Uppskattad månadsintäkt vid 80% utnyttjande — styrkan i skalning.' },
      { num: '80%', label: 'Målinriktad utnyttjandegrad', body: 'En konservativ uppskattning. Leverantörer med hög efterfrågan överstiger ofta 90%.' },
      { num: '10+', label: 'GPU-nivåer', body: 'Från konsument-RTX till företags-A100 — det finns en marknad för varje GPU.' },
    ],
  },
  token: {
    eyebrow: 'Tokenomics',
    title: 'SVIT-koinen: Tre pelare för nytta',
    body: 'SVIT är den inbyggda kryptovalutan i Svitlo Chain-ekosystemet och den naturliga valutan i Svitlo Chains egen L1-blockkedja. SVIT driver hela ekosystemet — från säkerhet och transaktioner till staking, bränning och kapitalisering. Som den native koinen drar SVIT nytta av snabba transaktioner, låga avgifter och hög genomströmning. Tokenomics är utformad för långsiktig hållbarhet, med en deflatorisk brännmekanism, staking och ett begränsat utbud.',
    cards: [
      { icon: '💳', title: 'Betalningar och rabatter', body: 'Leverantörer och utvecklare som genomför transaktioner i SVIT får 10% rabatt på alla marknadsplatsavgifter. SVIT är den föredragna valutan för betalning av uppgifter och staking i Svitlo Chains L1-ekosystem, med snabba och billiga transaktioner.' },
      { icon: '🛡️', title: 'Staking och rykte', body: 'Leverantörer stakar SVIT för att gå med i nätverket. Ärligt beteende ökar ryktespoängen och öppnar för prioriterad tilldelning av uppgifter. Ondsinta aktörer utsätts för slashing, och Svitlo Chains L1-blockkedja ger effektiv koordinering även vid hög aktivitet.' },
      { icon: '🔥', title: 'Bränning och deflation', body: 'En del av varje transaktionsavgift bränns för gott, vilket minskar den totala tillgången över tid. När aktiviteten i ekosystemet ökar, accelererar bränningstakten och skapar deflationstryck på SVIT — samtidigt som Svitlo Chains låga avgifter gör mekanismen mer effektiv.' },
    ],
    callout: 'Den totala tillgången av SVIT är begränsad. Bränningshändelser kan verifieras offentligt på blockkedjan. Tokeninnehavare deltar också i omröstningar om plattformsuppdateringar och avgiftsstruktur.',
    infraTitle: 'Blockchain-infrastruktur för SVIT',
    infraBody: 'Utöver den direkta nyttan bygger Svitlo Chain vidare på en egen infrastruktur som stärker ekosystemet och gör användningen av SVIT smidigare.',
    infraCards: [
      { title: 'L1-blockkedja för SVIT', body: 'SVIT är den native coinen i Svitlo Chains egen L1-blockkedja, med en total emission på 1 miljard coins. Den fungerar som ryggraden i ekosystemets säkerhet, transaktionsflöde, staking, bränning och långsiktiga kapitalisering. All aktivitet kopplas direkt till SVIT:s värde och hållbarhet.' },
      { title: 'Svitlo Wallet', body: 'Svitlo Wallet är en enkel plånbok för att lagra, skicka och använda SVIT i hela Svitlo Chain-ekosystemet.' },
    ],
  },
  enterprise: {
    eyebrow: 'För företag',
    title: 'Företag, förtroende och startup',
    companyTitle: 'Företagsnivåer',
    companyBody: 'Organisationer som behöver SLA, dedikerad support och tillgång till en privat flotta kan onboardas genom Svitlo Chains företagsprogram. Alla nivåer inkluderar kryptografisk verifiering av beräkningsuppgifter, spårning av rykte på kedjan och full dokumentation för efterlevnad i företagsupphandling.',
    tableHeaders: ['Nivå', 'Funktioner'],
    tiers: [
      ['Starter', 'API-tillgång, offentlig marknadsplats, SVIT-betalningar'],
      ['Growth', 'Prioriterad routing, dedikerad support, flotta-CLI'],
      ['Enterprise', 'SLA-garanti, privat flotta, efterlevnadspaket, onboarding med personlig service'],
    ],
    trustTitle: 'Förtroende och säkerhet',
    trustItems: [
      { title: 'SHA-256-verifiering', body: 'Varje beräkningsuppgift verifieras kryptografiskt — leverantörer kan inte förfalska resultat.' },
      { title: 'Ryktessystem', body: 'Onchain-poäng belönar konsekventa, ärliga leverantörer och filtrerar bort aktörer som inte följer reglerna.' },
      { title: 'Redo för efterlevnad', body: 'Företagsdokumentation, revisionsloggar och alternativ för dataplacering i önskad region finns tillgängliga.' },
    ],
    joinTitle: 'Bli med i Svitlo Chain idag',
    joinCards: [
      { icon: '🖥️', title: 'Leverantörer', body: 'Monetisera dina lediga GPU:er och få passiv inkomst.' },
      { icon: '⚡', title: 'Utvecklare', body: 'Få tillgång till billig, skalbar GPU-kraft för dina AI-projekt.' },
      { icon: '⛏️', title: 'Gruvdriftsägare', body: 'Omvandla din gruvinfrastruktur till AI-beräkningar med Miner Mode.' },
    ],
  },
  roadmap: {
    eyebrow: 'Färdplan',
    title: 'Vår färdplan: Framtiden för Svitlo Chain',
    body: 'Svitlo Chain utvecklas kontinuerligt för att möta den växande efterfrågan på decentraliserad GPU-beräkningskraft. Vår färdplan fokuserar på strategisk tillväxt och att leverera värde till både leverantörer och utvecklare.',
    milestones: [
      { when: 'Q3 2026', title: 'Lansering', body: 'Officiell lansering av Svitlo Chain-plattformen, med kärnfunktionalitet för GPU-uthyrning och Miner Mode.' },
      { when: 'Q4 2026', title: 'Företagsfunktioner', body: 'Implementering av Enterprise-nivåer, dedikerad support, SLA:er och avancerade säkerhetsprotokoll för större kunder.' },
      { when: 'Q1 2027', title: 'Global expansion', body: 'Utökad geografisk täckning, nya regionala datacenter och partnerskap för att nå en bredare publik.' },
      { when: 'Q2 2027', title: 'Avancerad analys', body: 'Introduktion av sofistikerade analysverktyg för optimering av GPU-användning och intäktsspårning.' },
    ],
    footer: 'Denna färdplan representerar våra närmaste strategiska prioriteringar, men Svitlo Chain-teamet är agilt och lyhört för marknadsförhållanden och communityns feedback.',
  },
  faq: {
    eyebrow: 'Frågor',
    title: 'Vanliga frågor (FAQ)',
    body: 'Har du frågor om Svitlo Chain? Här är svar på några av de vanligaste funderingarna från både leverantörer och utvecklare.',
    items: [
      { q: 'Hur kommer jag igång som leverantör?', a: 'För att komma igång behöver du installera Svitlo Chain node-klienten på din befintliga mining-rigg. Sedan kan du aktivera "Miner Mode" för att börja hyra ut din datorkraft, antingen parallellt med befintlig mining eller istället för den. Processen är utformad för att vara smidig och enkel.' },
      { q: 'Vilka avgifter gäller på Svitlo Chain?', a: 'Svitlo Chain har en transparent avgiftsstruktur för att underhålla plattformen. Användare som genomför transaktioner i vår inbyggda utility-token, SVIT, får 10% rabatt på alla marknadsplatsavgifter. Specifika avgifter kan variera beroende på uppgiftstyp och marknadsförhållanden.' },
      { q: 'Är min data och mina beräkningar säkra?', a: 'Ja, säkerheten är avgörande för oss. Varje beräkningsuppgift verifieras med kryptografisk SHA-256, vilket säkerställer att leverantörer inte kan förfalska resultat. Dessutom spårar vårt ryktessystem ärligt beteende, och vi erbjuder företagsklassade efterlevnadspaket för avancerade säkerhetsbehov.' },
      { q: 'Kan jag använda vilken GPU som helst?', a: 'Svitlo Chain är utformat för att vara flexibelt och stöder ett brett utbud av GPU:er, från konsumentmodeller som RTX 4060 till kraftfulla företags-GPU:er som A100. Plattformen har en marknad för nästan varje GPU-konfiguration, vilket gör att du kan monetisera din befintliga hårdvara.' },
      { q: 'Vad är SVIT-tokenet?', a: 'SVIT är Svitlo Chain-ekosystemets inbyggda utility-token, designad för att möjliggöra betalningar, uppmuntra ärligt beteende genom staking och styra plattformens utveckling. Det har en deflatorisk brännmekanism och ett begränsat utbud för långsiktig hållbarhet.' },
      { q: 'Hur tar jag ut mina intäkter?', a: 'Dina intäkter på Svitlo Chain samlas i din anslutna plånbok. Du kan ta ut dem när som helst, antingen i SVIT-token eller genom att konvertera dem till andra kryptovalutor/fiat via plattformens integrerade växlingsalternativ. Detaljerad information finns i vår dokumentation.' },
    ],
  },
  stats: {
    eyebrow: 'I siffror',
    title: 'Svitlo Chain i siffror: Plattformens styrka',
    body: 'Svitlo Chain fortsätter att växa exponentiellt och driver framtiden för decentraliserad AI-beräkning. Här är en glimt av plattformens imponerande räckvidd och effektivitet, som erbjuder en kostnadseffektiv lösning jämfört med traditionella molnleverantörer.',
    items: [
      { num: '2.5M+', label: 'Tillgängliga GPU-timmar', body: 'Över 2,5 miljoner GPU-timmar har nu levererats av vårt nätverk för AI-uppgifter, och ökar stadigt varje månad.' },
      { num: '8,500+', label: 'Aktiva leverantörer', body: 'Ett växande nätverk av 8 500+ unika leverantörer bidrar med sin datorkraft, vilket garanterar robusthet och tillgänglighet.' },
      { num: '70%', label: 'Genomsnittlig kostnadsbesparing', body: 'Uppnå upp till 70% besparingar på GPU-beräkningar jämfört med ledande molnplattformar, utan att kompromissa med prestanda.' },
      { num: '500+ PFLOPS', label: 'Total beräkningskraft', body: 'Kollektivt ger Svitlo Chain mer än 500 PFLOPS AI-beräkningskraft, vilket gör det till en kraftfull resurs för alla skalor.' },
    ],
  },
  architecture: {
    eyebrow: 'Under huven',
    title: 'Svitlo Chain tekniska arkitektur: Så fungerar systemet',
    body: 'Svitlo Chain drivs av en robust decentraliserad arkitektur som säkerställer effektivitet, säkerhet och transparens. Här bryter vi ner de tekniska mekanismerna bakom plattformen.',
    lanes: [
      { label: 'Utvecklare (Client)', cells: ['Skickar in AI-jobb'] },
      { label: 'Svitlo Chain-plattform', cells: ['Matchning och schemaläggning', '→', 'Resultat och bevis', '→', 'Verifikation och avveckling'] },
      { label: 'GPU-leverantör', cells: ['Hämtar och exekverar uppgift'] },
      { label: 'Blockchain', cells: ['SHA-256-verifiering', '→', 'SVIT-betalningar', '→', 'Ryktessystem'] },
    ],
    body2: 'Svitlo Chain utnyttjar blockchain-teknik för att skapa en förtroendelös miljö, där varje steg i beräkningsprocessen är verifierbart och transparent, samtidigt som den erbjuder robusta säkerhetsåtgärder för att skydda användarnas data och beräkningar.',
    cards: [
      { title: 'Decentraliserad jobbutförande', body: 'AI-jobb delas upp och distribueras över nätverket av GPU-leverantörer, vilket optimerar utnyttjandet av tillgänglig datorkraft och motverkar enskilda felpunkter.' },
      { title: 'Säker containerisering', body: 'Varje beräkningsuppgift körs i isolerade containermiljöer hos GPU-leverantörerna, vilket förhindrar obehörig åtkomst och säkerställer dataintegritet.' },
      { title: 'Blockchain-transparens', body: 'Alla transaktioner, jobbspecifikationer och verifikationsbevis registreras på blockkedjan för fullständig transparens och oemotsäglighet.' },
    ],
  },
  glossary: {
    eyebrow: 'Referens',
    title: 'Ordlista',
    body: 'För att underlätta din förståelse av Svitlo Chain-plattformen och det bredare ekosystemet för decentraliserad AI, har vi sammanställt en ordlista över vanliga tekniska termer. Denna guide är utformad för att ge tydliga och koncisa förklaringar, oavsett om du är en erfaren teknisk användare eller ny inom området.',
    terms: [
      { term: 'Blockchain (Blockkedja)', body: 'En distribuerad, oföränderlig digital liggare som består av kryptografiskt länkade "block" av transaktioner. Varje block innehåller en tidsstämpel och information om det tidigare blocket, vilket skapar en säker och transparent historik.' },
      { term: 'Containerization (Containerisering)', body: 'En virtualiseringsteknik som paketerar applikationskod tillsammans med alla dess beroenden (bibliotek, systemverktyg, konfigurationer) i en isolerad "container". Detta säkerställer att applikationen körs konsekvent, oavsett var den distribueras.' },
      { term: 'Cryptographic Proof (Kryptografiskt bevis)', body: 'Matematiska metoder som används för att verifiera äktheten och integriteten av data eller transaktioner. Det möjliggör säker kommunikation och verifiering utan att parter behöver lita på varandra.' },
      { term: 'CUDA', body: 'En plattform för parallell databehandling och programmeringsmodell utvecklad av NVIDIA. CUDA möjliggör för programutvecklare att använda NVIDIAs grafikkort (GPU:er) för allmänna beräkningsändamål, vilket dramatiskt kan accelerera beräkningsintensiva uppgifter, särskilt inom AI.' },
      { term: 'Decentralization (Decentralisering)', body: 'Principen om att fördela kontroll och beslutsfattande över ett nätverk snarare än att koncentrera det till en central auktoritet. I Svitlo Chain innebär detta att GPU-resurser distribueras bland många noder globalt.' },
      { term: 'Docker', body: 'En populär plattform för att utveckla, distribuera och köra applikationer med hjälp av containeriseringsteknik. Docker-containrar säkerställer att Svitlo Chain-klienten och AI-uppgifter körs isolerat och effektivt.' },
      { term: 'Svitlo Chain L1 Blockchain', body: 'Svitlo Chains egen L1-blockkedja, skriven i Rust och utformad för säkerhet, hög hastighet och effektiv databehandling. Den utgör grunden för transaktioner, programlogik och nätverkets infrastruktur.' },
      { term: 'GPU (Graphics Processing Unit)', body: 'En specialiserad elektronisk krets utformad för att snabbt manipulera och ändra minne för att accelerera bildskapande i en bildram. GPU:er är också mycket effektiva för parallell behandling av stora datamängder, vilket gör dem idealiska för AI-beräkningar.' },
      { term: 'Inference (Inferens)', body: 'Processen att använda en tränad AI-modell för att göra förutsägelser eller fatta beslut baserat på nya, osedda data. Detta är den fas där AI-modellen tillämpar det den har lärt sig.' },
      { term: 'Mining (Mining)', body: 'Processen att verifiera och lägga till nya transaktioner i blockkedjan genom att lösa komplexa kryptografiska pussel. I Svitlo Chains "Miner Mode" kan noder tjäna pengar på att validera transaktioner eller utföra AI-beräkningar.' },
      { term: 'Node (Nod)', body: 'En dator eller server som kör Svitlo Chain-klientprogramvaran och är ansluten till nätverket. Noder tillhandahåller beräkningsresurser (GPU:er) till nätverket.' },
      { term: 'Peer-to-Peer (P2P)', body: 'Ett datanätverk där noder kommunicerar direkt med varandra utan att behöva en central server. Svitlo Chain bygger på ett P2P-nätverk för att distribuera AI-arbetslaster.' },
      { term: 'SVIT Coin', body: 'Den inhemska kryptovalutan för Svitlo Chains L1-blockkedja. SVIT Coin används för att betala för GPU-resurser, belöna leverantörer och delta i nätverkets styrning.' },
      { term: 'Reputation Score (Ryktespoäng)', body: 'Ett system som bedömer pålitligheten och prestandan hos Svitlo Chain GPU-leverantörer. Höga poäng leder till fler uppdrag och högre intäkter.' },
      { term: 'SHA-256', body: 'En kryptografisk hashfunktion som producerar ett 256-bitars (32-byte) hashvärde. Den används flitigt i blockkedjeteknik för att säkerställa dataintegritet och för att skapa unika identifierare för block.' },
      { term: 'Slashing', body: 'En straffmekanism i decentraliserade nätverk där en del av en GPU-leverantörs insats tas bort om de agerar illvilligt eller inte uppfyller sina skyldigheter.' },
      { term: 'Smart Contracts (Smarta kontrakt)', body: 'Självexekverande kontrakt med villkoren för avtalet direkt skrivna i kod. De körs automatiskt på en blockkedja när fördefinierade villkor uppfylls, vilket eliminerar behovet av mellanhänder.' },
      { term: 'Staking (Insats)', body: 'Processen att låsa upp en viss mängd kryptovaluta (SVIT Coin i Svitlo Chain) som en säkerhet för att stödja nätverkets operationer. GPU-leverantörer kan staka SVIT för att öka sin ryktespoäng och få fler uppdrag.' },
      { term: 'VRAM (Video Random Access Memory)', body: 'En typ av RAM som är speciellt utformad för att lagra bilddata som visas på en datorskärm. För AI-beräkningar, särskilt med stora modeller, är tillräckligt med VRAM avgörande för prestanda.' },
    ],
    footer: 'Denna ordlista kommer att uppdateras regelbundet. Om du har frågor om specifika termer eller vill föreslå tillägg, tveka inte att kontakta Svitlo Chain-communityn.',
  },
  compare: {
    eyebrow: 'Jämförelse',
    title: 'Svitlo Chain kontra traditionella molnleverantörer',
    body: 'Svitlo Chain revolutionerar tillgången till GPU-resurser för AI- och maskininlärningsprojekt. Denna jämförelse belyser hur Svitlo Chain skiljer sig från traditionella molntjänster som AWS, Google Cloud och Azure, samt andra centraliserade GPU-molnleverantörer.',
    tableHeaders: ['Dimension', 'Svitlo Chain', 'Traditionellt moln'],
    rows: [
      ['Prissättning (per GPU-timme)', 'Upp till 70% lägre, dynamisk prissättning', 'Ofta dyrare, nivåbaserad on-demand'],
      ['Decentralisering', 'Helt decentraliserat (peer-to-peer-nätverk)', 'Centraliserat'],
      ['Flexibilitet', 'Inga långa kontrakt, betalning per användning, ingen bindningstid', 'Kräver ofta kontrakt, bindningstider, komplexa avtal'],
      ['Snabbhet (jobbmatchning och körning)', 'Snabb matchning via P2P-nätverk', 'Varierande, kan drabbas av flaskhalsar vid hög efterfrågan'],
      ['Transparens', 'Fullständig transparens och verifierbarhet via blockkedja', 'Begränsad, företagsstyrd'],
      ['Community', 'Öppen källkod och community-driven utveckling', 'Stora ekosystem, men inte community-driven'],
      ['Tokenincitament', 'Ja, SVIT-tokens för leverantörer och användare', 'Nej'],
    ],
    footer: 'Som tabellen visar erbjuder Svitlo Chain en kostnadseffektiv, flexibel och transparent lösning för GPU-beräkningar, driven av en decentraliserad modell och community-engagemang. Detta positionerar Svitlo Chain som framtiden för distribuerad AI-beräkning.',
  },
  cta: {
    title: 'Redo att ansluta dig till den decentraliserade GPU-revolutionen?',
    body: 'Oavsett om du vill tjäna pengar på din lediga datorkraft eller söker billig, skalbar AI-beräkning, erbjuder Svitlo Chain den perfekta lösningen. Börja bygga din framtid eller monetisera din befintliga maskinvara på några minuter.',
    ctaPrimary: 'Bli Leverantör',
    ctaGlass: 'Börja Bygga',
  },
  contact: {
    eyebrow: 'Kontakta oss',
    title: 'Kontakt och support',
    body: 'Har du frågor, behöver hjälp eller vill ansluta dig till Svitlo Chain-communityn? Här hittar du alla våra kontaktvägar och supportresurser.',
    items: [
      { icon: '✉️', title: 'Email Support', body: 'svitlochain@gmail.com', href: 'mailto:svitlochain@gmail.com' },
      { icon: '💬', title: 'Discord-community', body: 'Gå med i vår Discord för realtidsstöd och diskussioner med teamet och andra användare.' },
      { icon: '🐦', title: 'Följ oss på X', body: 'Håll dig uppdaterad med de senaste nyheterna och produktuppdateringarna.' },
      { icon: '🐙', title: 'GitHub-förråd', body: 'Utforska vår öppna källkod och bidra till plattformens utveckling.' },
      { icon: '📄', title: 'Dokumentation', body: 'Läs våra omfattande guider och tekniska specifikationer för att komma igång.' },
      { icon: '📰', title: 'Svitlo Chain-blogg', body: 'Få de senaste insikterna, analyserna och nyheterna om decentraliserad AI.' },
    ],
  },
  footer: {
    tagline: 'En Layer-1-blockchain för AI-beräkning och avveckling av inferens.',
    cols: [
      { title: 'Produkt', links: [{ label: 'För utvecklare', href: '#developers' }, { label: 'För GPU-ägare', href: '#gpu-owners' }, { label: 'SVIT-token', href: '#token' }] },
      { title: 'Företag', links: [{ label: 'Färdplan', href: '#roadmap' }, { label: 'FAQ', href: '#faq' }, { label: 'Kontakt', href: '#contact' }] },
      { title: 'Plånbok', links: [{ label: 'Integritetspolicy', href: '/privacy/' }, { label: 'Support', href: '/support/' }] },
    ],
    copyright: '© 2026 Svitlo Chain. Alla rättigheter förbehållna.',
  },
};
