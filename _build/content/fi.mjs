export default {
  meta: {
    lang: 'fi',
    title: 'Svitlo Chain — Hajautettu GPU-pilvi',
    description: 'Hajautettu GPU-markkinapaikka tekoälylle — vuokraa vapaita GPU:ita tai tarjoa omaa laitteistoasi, lohkoketjun suojaamana.',
  },
  nav: {
    links: [
      { href: '/fi/wallet/', label: 'Lompakko' },
      { href: '/fi/platform/', label: 'Alusta' },
      { href: '/fi/documentation/', label: 'Dokumentaatio' },
    ],
  },
  hero: {
    eyebrow: 'Layer-1-lohkoketju',
    title: 'Svitlo Chain: hajautettu GPU-pilvi',
    lede: 'Vapaudu suurten pilvijättien GPU-hintamonopolista. Vuokraa vapaita GPU:ita, tai tarjoa omaa laitteistoasi ja ansaitse todellista tuloa — tekoälyn voimin, lohkoketjun suojaamana.',
    ctaPrimary: 'Ryhdy toimittajaksi',
    ctaGlass: 'Aloita kehittäminen',
  },
  idea: {
    eyebrow: 'Miksi Svitlo Chain',
    title: 'Svitlo Chainin taustalla oleva idea',
    body: [
      'GPU-pilvimarkkinoita hallitsee kourallinen jättiläisiä — AWS, Google, Azure — jotka asettavat premium-hintoja, kun miljoonat GPU:t seisovat käyttämättöminä pelitietokoneissa, louhintalaitteissa ja yritysten konesaleissa. Svitlo Chain on olemassa muuttaakseen tämän.',
      'Konsepti on yksinkertainen: hajautettu GPU-markkinapaikka, jossa laitteiston omistajat ansaitsevat käyttämättömästä laskentatehosta, ja tekoälykehittäjät saavat edullista, skaalautuvaa kapasiteettia sitoutumatta yhteen toimittajaan. Ei välikäsiä. Ei ylihintoja. Vain suora, luottamukseton yhteys kysynnän ja tarjonnan välillä — kryptografisen todistuksen ja läpinäkyvän maineenhallintajärjestelmän suojaamana.',
    ],
    cards: [
      { label: 'Ongelma', title: 'Keskitetyt pilvi-GPU:t', body: 'Keskitetyt pilvipalveluntarjoajat hallitsevat hintaa, saatavuutta ja pääsyä — luoden pullonkauloja tekoälyinnovaatiolle.' },
      { label: 'Ratkaisu', title: 'Vertaisverkkomarkkina', body: 'Vertaisverkon GPU-markkinapaikka, joka muuttaa käyttämättömän laitteiston tuottavaksi infrastruktuuriksi, joka maksaa omistajilleen.' },
      { label: 'Visio', title: 'Globaali laskentakerros', body: 'Globaali, sensuurinkestävä kerros laskentatehoa varten, joka vie eteenpäin seuraavan sukupolven tekoälysovelluksia.' },
    ],
  },
  developers: {
    eyebrow: 'Miten se toimii',
    title: 'Tekoälykehittäjille ja rakentajille',
    body: [
      'Svitlo Chain antaa tekoälykehittäjille välittömän pääsyn globaaliin GPU-poolin — kuluttajien RTX-korteista yritystason A100:iin — murto-osalla perinteisen pilven kustannuksista. Koulutatpa suurta kielimallia, ajatpa päättelyä laajassa mittakaavassa tai renderöitpä monimutkaisia simulaatioita, Svitlo Chain sovittaa työkuormasi oikeaan laitteistoon sekunneissa.',
      'Alusta hoitaa automaattisesti tehtävien ajoituksen, turvallisen konttiterisoinnin ja laskutuksen. Rakentajat ottavat käyttöön CLI:n tai API:n kautta, määrittävät GPU-vaatimuksensa ja maksavat vain todellisesta käytetystä laskentatehosta — ei pitkäaikaisia sopimuksia, ei vähimmäissitoumuksia.',
    ],
    steps: [
      { title: 'Määritä GPU-vaatimukset', body: 'Valitse VRAM, laskentateho ja alue.' },
      { title: 'Ota käyttöön CLI:n tai API:n kautta', body: 'Lähetä kontti ja aloita laskenta välittömästi.' },
      { title: 'Maksa käytön mukaan', body: 'Ei sopimuksia. Laskutus SVIT:issä tai vakaakolikossa.' },
    ],
    quickstartTitle: 'Kehittäjän opas: pikaopas Svitlo Chainin kanssa',
    quickstartLede: 'Tekoälykehittäjänä tarvitset nopean, kustannustehokkaan ja skaalautuvan pääsyn GPU-resursseihin. Tämä pikaopas vie sinut todennuksesta ensimmäiseen tehtävään ja tulokseen.',
    steps2: [
      {
        n: '1', title: 'API-todennus ja asennus',
        body: 'Vuorovaikuttaaksesi Svitlo Chain -API:n kanssa tarvitset API-avaimesi kehittäjäpaneelistasi rekisteröitymisen jälkeen. Python-kehittäjille suosittelemme SDK:tamme sujuvaa integraatiota varten; muut kielet voivat kutsua REST-API:a suoraan.',
        code: `<span class="kw">import</span> os
<span class="kw">import</span> svitlo_sdk

<span class="c1"># Lue API-avain turvallisesti ympäristömuuttujasta</span>
API_KEY = os.environ.get(<span class="str">"SVIT_API_KEY"</span>)

<span class="kw">if not</span> API_KEY:
    <span class="kw">raise</span> ValueError(<span class="str">"SVIT_API_KEY ei ole asetettu."</span>)

<span class="c1"># Alusta Svitlo Chain SDK -asiakas</span>
client = svitlo_sdk.SvitloClient(api_key=API_KEY)
print(<span class="str">"API-asiakas alustettu onnistuneesti."</span>)`,
      },
      {
        n: '2', title: 'Lähetä ensimmäinen GPU-tehtäväsi',
        body: 'GPU-tehtävän lähettäminen on yksinkertaista. Määritä, mitä tekoälymallia ajetaan, mitä syötedataa käytetään ja mitä GPU-resursseja tarvitaan. Svitlo Chain sovittaa tehtäväsi automaattisesti verkossa saatavilla oleviin toimittajiin.',
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
    print(<span class="fn">f</span><span class="str">"Tehtävä lähetetty! Tehtävän ID: {job.id}"</span>)
    print(<span class="fn">f</span><span class="str">"Tila: {job.status}"</span>)
<span class="kw">except</span> Exception <span class="kw">as</span> e:
    print(<span class="fn">f</span><span class="str">"Virhe tehtävän lähetyksessä: {e}"</span>)`,
      },
      {
        n: '3', title: 'Seuraa tehtävän tilaa',
        body: 'Lähettämisen jälkeen seuraa tehtäväsi edistymistä reaaliajassa — näe virheet ja arvioi, milloin tulokset ovat valmiita.',
        code: `job_id = job.id

current_job = client.get_job_status(job_id)
print(<span class="fn">f</span><span class="str">"Tehtävä {current_job.id}, tila: {current_job.status}"</span>)

<span class="kw">while</span> current_job.status <span class="kw">not in</span> [<span class="str">"COMPLETED"</span>, <span class="str">"FAILED"</span>]:
    time.sleep(30)
    current_job = client.get_job_status(job_id)
    print(<span class="fn">f</span><span class="str">"Päivitetty tila: {current_job.status}"</span>)

<span class="kw">if</span> current_job.status == <span class="str">"COMPLETED"</span>:
    print(<span class="str">"Tehtävä valmis!"</span>)
<span class="kw">else</span>:
    print(<span class="str">"Tehtävä epäonnistui tai peruutettiin."</span>)`,
      },
      {
        n: '4', title: 'Nouda tuloksesi',
        body: 'Kun GPU-tehtäväsi on valmis, tuloste on saatavilla määrittämässäsi sijainnissa (esim. S3-säilössä). Svitlo Chain tarjoaa tarvittavat yhteystiedot tulosten turvalliseen noutamiseen.',
        code: `<span class="kw">if</span> current_job.status == <span class="str">"COMPLETED"</span>:
    print(<span class="fn">f</span><span class="str">"Tulokset saatavilla osoitteessa: {current_job.output_data_location}"</span>)
<span class="kw">else</span>:
    print(<span class="str">"Tuloksia ei saatavilla — tehtävä ei valmis tai epäonnistui."</span>)`,
      },
    ],
    billingTitle: '5. Maksaminen ja laskutus',
    billingBody: 'Svitlo Chain käyttää SVIT-tokenia kaikissa alustan transaktioissa, varmistaen läpinäkyvyyden ja tehokkuuden. Sinua laskutetaan todellisesta GPU-käytöstä ja tehtävän kestosta — usein jopa 70 % halvemmalla kuin perinteinen pilvi. Seuraa käyttöhistoriaasi ja saldoasi Svitlo Chain -paneelistasi.',
  },
  gpuOwners: {
    eyebrow: 'Miten se toimii',
    title: 'GPU:iden omistajille',
    body: 'GPU:iden omistajat — pelaajat, louhijat ja konesalit — voivat yhdistää käyttämättömän laitteiston Svitlo Chainiin ja ansaita passiivista tuloa. Svitlo Chain -asiakas toimii taustalla, hyväksyy laskentatehtäviä, suorittaa ne eristetyissä konteissa ja palauttaa tulokset kryptografisella varmennuksella. Toimittajat asettavat itse saatavuusaikansa, hintansa ja laitteistospesifikaationsa.',
    cards: [
      { title: 'Asenna asiakas', body: 'Lataa Svitlo Chain -solmuohjelmisto, yhdistä GPU:si ja ole käynnissä minuuteissa. Windows, Linux ja Docker tuettuja.' },
      { title: 'Aseta ehtosi', body: 'Aseta tuntihinnat, minimi-VRAM ja saatavuusaikataulu. Sinä hallitset, milloin laitteistosi on markkinoilla.' },
      { title: 'Ansaitse automaattisesti', body: 'Tehtävät sovitetaan, ajetaan ja varmennetaan automaattisesti. Maksut saapuvat SVIT:issä tai USDC:ssä suoraan lompakkoosi.' },
    ],
    installTitle: 'Asennusopas GPU-toimittajille',
    installLede: 'Svitlo Chain -GPU-toimittajaksi ryhtyminen on yksinkertaista ja antaa sinun ansaita käyttämättömästä laskentatehostasi. Seuraa näitä vaiheita asentaaksesi Svitlo Chain -solmuasiakkaan ja aloittaaksesi GPU-resurssiesi vuokraamisen tekoälykehittäjille ympäri maailmaa.',
    installSteps: [
      {
        n: '1', title: 'Järjestelmävaatimukset',
        body: 'Varmista ennen asennusta, että järjestelmäsi täyttää nämä vaatimukset: <b>Käyttöjärjestelmä:</b> Linux (Ubuntu 20.04+ suositeltu), Windows 10/11, macOS 13 Ventura tai uudempi, tai Docker-yhteensopiva ympäristö. <b>GPU:</b> NVIDIA GeForce RTX 30 -sarja tai uudempi, NVIDIA A100/H100, AMD Radeon RX 6000 -sarja tai uudempi, tai Apple Silicon Metal Performance Shadersilla (MPS). <b>RAM:</b> vähintään 16 Gt. <b>Verkko:</b> vakaa yhteys, jossa vähintään 100 Mbps ylös/alas.',
      },
      {
        n: '2', title: 'Lataa Svitlo Chain -solmuasiakas',
        body: 'Hae uusin solmuasiakas viralliselta sivustoltamme tai GitHub-repositoriosta. Paketit saatavilla kaikille alustoille.',
        code: `<span class="c1"># Linux</span>
wget https://svitlochain.com/node-client/svitlo-node-linux-amd64.tar.gz
tar -xzf svitlo-node-linux-amd64.tar.gz
<span class="kw">cd</span> svitlo-node`,
      },
      {
        n: '3', title: 'Asenna ja määritä',
        body: 'Lataamisen jälkeen suorita asennusskripti ja seuraa näytön ohjeita. Ota Apple Siliconissa käyttöön Metal-kiihdytetty taustajärjestelmä parhaan suorituskyvyn saavuttamiseksi.',
        code: `arch
<span class="c1"># odotettu arm64 Apple Siliconilla</span>
<span class="kw">export</span> SVITLO_GPU_BACKEND=mps
<span class="kw">export</span> SVITLO_OPTIMIZE_APPLE_SILICON=<span class="kw">true</span>
svitlo-node start`,
      },
      {
        n: '4', title: 'Yhdistä lompakkosi',
        body: 'Vastaanottaaksesi maksuja sinun täytyy yhdistää yhteensopiva lompakko. Tämä lompakko pitää sisällään SVIT-ansiosi.',
        code: `./svitlo-node wallet connect &lt;lompakkosi-osoite&gt;`,
      },
      {
        n: '5', title: 'Aseta hinnoittelu ja saatavuus',
        body: 'Sinulla on täysi hallinta siitä, miten GPU:itasi vuokrataan.',
        code: `./svitlo-node config <span class="kw">set</span> backend mps
./svitlo-node config <span class="kw">set</span> optimize_apple_silicon
./svitlo-node config <span class="kw">set</span> availability 24/7`,
      },
      {
        n: '6', title: 'Aloita ansaitseminen',
        body: 'Kun solmusi on käynnissä, yhdistetty ja määritetty, GPU:si alkavat sovittua tekoälyn laskentatehtäviin. Seuraa tuloja ja tehtävähistoriaa Svitlo Chain -paneelista.',
      },
    ],
  },
  minerMode: {
    eyebrow: 'Miner Mode',
    title: 'Kutsumme louhijoita ja GPU-farmeja',
    body: [
      'Kryptolouhinta on muuttunut. Proof-of-work-palkkioiden laskiessa ja sähkökustannusten noustessa GPU-farmit tarvitsevat uusia tulonlähteitä. Svitlo Chainin <b>Miner Mode</b> antaa louhintaoperaattoreiden ohjata käyttämättömän laitteiston välittömästi tekoälylaskentaan — ilman infrastruktuurin uudelleenmäärittelyä.',
      'Miner Mode on kevyt kytkin, joka siirtää laitteesi louhinnasta laskentatehon vuokraukseen. Tehtävät käyvät läpi esivalidoinnin, ajetaan hiekkalaatikossa, ja ansiot seurataan reaaliajassa. Yli 10 GPU:n farmit saavat priorisoidun tehtävien reitityksen ja omistautuneen tuen.',
    ],
    cards: [
      { title: 'Vaihda ilman käyttökatkoa', body: 'Vaihtele louhinnan ja laskentatehon vuokrauksen välillä sekunneissa. Ei laitteistomuutoksia tarvita.' },
      { title: 'Korkeampi ansaintapotentiaali', body: 'Tekoälylaskennan kysyntä ylittää usein tarjonnan — toimittajat ansaitsevat usein enemmän per GPU-tunti kuin useimmissa louhintaoperaatioissa.' },
      { title: 'Farmin ohjauspaneeli', body: 'Hallitse koko farmiasi yhdestä käyttöliittymästä. Seuraa tuloja, tehtävien tilaa ja käyttöaikaa jokaisella solmulla.' },
    ],
    detailTitle: 'Miner Mode: rakennettu skaalautumaan',
    whyTitle: 'Miksi Miner Mode?',
    whyBody: [
      'Louhinnan kannattavuus on epävakaa. GPU-vuokraus Svitlo Chainissa tarjoaa vakaan, ennustettavan tulopohjan — erityisesti karhumarkkinoiden aikana tai verkon vaikeuden noustessa.',
      'Miner Mode tukee eräajotehtäväjonoa, joten farmisi ei ole koskaan käyttämättä. Kun tekoälykysyntä laskee, vaihda takaisin louhintaan yhdellä komennolla. Juuri tämä joustavuus markkinaolosuhteiden yli erottaa Svitlo Chainin.',
    ],
    cta: 'Lue lisää Miner Modesta',
    howTitle: 'Miten se toimii',
    steps: [
      { n: '01', title: 'Yhdistä farmisi', body: 'Asenna Svitlo Chain -solmuasiakas nykyiseen louhintalaitteistoosi.' },
      { n: '02', title: 'Ota käyttöön Miner Mode', body: 'Vuokraa laskentatehoa louhinnan ohella tai sen sijaan.' },
      { n: '03', title: 'Ansaitse ja seuraa', body: 'Seuraa tuloja reaaliajassa, tehtävien läpivientinopeutta ja GPU-käyttöastetta.' },
      { n: '04', title: 'Vaihda vapaasti', body: 'Palaa louhintaan milloin tahansa markkinaolosuhteet suosivat sitä.' },
    ],
  },
  pricing: {
    eyebrow: 'Palvelut',
    title: 'Palvelut ja hinnoittelu',
    body: 'Svitlo Chain tarjoaa kolme ydinpalvelutasoa, jotka kukin sopivat erilaisiin tekoälytyökuormiin — tekstipohjaisista tehtävistä reaaliaikaiseen puheenkäsittelyyn. Kaikki palvelut laskutetaan GPU-tunnin mukaan, ja SVIT:issä maksetuille pitkäaikaisille varauksille on saatavilla alennuksia.',
    cards: [
      { title: 'Tekstipäättely / LLM', body: 'Aja suuria kielimalleja, chatbotteja ja tekstingenerointitehtäviä. Optimoitu laitteistolle RTX 4060:sta A100:aan.', price: 'Alkaen $0,12/h' },
      { title: 'Kuvien generointi', body: 'Stable Diffusion, FLUX ja räätälöidyt kuvamallit laajassa mittakaavassa. Korkean VRAM:n GPU:t suositeltuja erägenerointiin.', price: 'Alkaen $0,28/h' },
      { title: 'Puheentunnistus (STT)', body: 'Reaaliaikainen litterointi ja puheenkäsittelyputket. Matalan viiveen instanssit saatavilla maailmanlaajuisesti.', price: 'Alkaen $0,18/h' },
    ],
    note: 'Kaikki hinnat heijastavat laskurin v2-päivityksiä. SVIT-maksuille myönnetään lisäksi 10 % alennus.',
    revenueTitle: 'Toimittajan tulot: todelliset luvut',
    revenueLede: 'Ansiosi Svitlo Chainissa riippuvat suoraan laitteistostasi. Alla on realistinen arvio tuntitulosta yleisille GPU-kokoonpanoille, perustuen nykyiseen markkinakysyntään ja hinnoittelulaskuriin v2. Todelliset tulot riippuvat saatavuudesta, tehtävätyypistä ja alueesta.',
    tableHeaders: ['GPU', 'Tuntihinta', 'Arvio kuukaudessa (80 % käyttöaste)'],
    rows: [
      ['RTX 4060', '$0,12/h', '~$70'],
      ['RTX 4070 Ti', '$0,22/h', '~$127'],
      ['RTX 4080', '$0,35/h', '~$202'],
      ['RTX 4090', '$0,55/h', '~$317'],
      ['A40 / L40', '$0,80/h', '~$461'],
      ['A100 (40GB)', '$1,40/h', '~$806'],
      ['8× A100-laivasto', '$11,20/h', '~$6 451'],
    ],
    stats: [
      { num: '$6 451', label: '8× A100-laivasto', body: 'Arvioitu kuukausitulo 80 % käyttöasteella — mittakaavan palkkio.' },
      { num: '80 %', label: 'Tavoitekäyttöaste', body: 'Varovainen arvio. Korkean kysynnän toimittajat ylittävät usein 90 %.' },
      { num: '10+', label: 'GPU-tasoa', body: 'Kuluttajien RTX-korteista yritystason A100:iin — markkina löytyy jokaiselle GPU:lle.' },
    ],
  },
  token: {
    eyebrow: 'Tokenomiikka',
    title: 'SVIT-token: kolme hyödyn pilaria',
    body: 'SVIT on Svitlo Chain -ekosysteemin ja Svitlo Chainin oman L1-lohkoketjun natiivi valuutta. SVIT ohjaa koko ekosysteemiä — turvallisuudesta ja transaktioista panostukseen, polttoon ja pääomitukseen. Natiivikolikkona SVIT hyötyy nopeista transaktioista, alhaisista maksuista ja korkeasta läpisyötöstä. Tokenomiikka on suunniteltu pitkän aikavälin kestävyyteen deflatorisella polttomekanismilla, panostuksella ja rajoitetulla tarjonnalla.',
    cards: [
      { icon: '💳', title: 'Maksut ja alennukset', body: 'Toimittajat ja kehittäjät, jotka tekevät transaktioita SVIT:issä, saavat 10 % alennuksen kaikista markkinapaikkamaksuista. SVIT on suosituin valuutta tehtävämaksuille ja panostukselle koko Svitlo Chain L1 -ekosysteemissä, nopeilla ja halvoilla transaktioilla.' },
      { icon: '🛡️', title: 'Panostus ja maine', body: 'Toimittajat panostavat SVIT:iä liittyäkseen verkkoon. Rehellinen käytös nostaa mainepisteitä ja avaa priorisoidun tehtävien jaon. Haitalliset toimijat rangaistaan (slashing), ja Svitlo Chainin L1-lohkoketju tarjoaa tehokkaan koordinaation myös korkealla kuormalla.' },
      { icon: '🔥', title: 'Poltto ja deflaatio', body: 'Osa jokaisesta transaktiomaksusta poltetaan pysyvästi, vähentäen kokonaistarjontaa ajan myötä. Ekosysteemin aktiviteetin kasvaessa polttonopeus kiihtyy — luoden deflatorista painetta SVIT:iin, kun taas Svitlo Chainin alhaiset maksut pitävät mekanismin tehokkaana.' },
    ],
    callout: 'SVIT:in kokonaistarjonta on rajoitettu. Polttotapahtumat ovat julkisesti todennettavissa ketjussa. Tokenien haltijat äänestävät myös alustapäivityksistä ja maksurakenteista.',
    infraTitle: 'Lohkoketjuinfrastruktuuri SVIT:ille',
    infraBody: 'Suoran hyödyn lisäksi Svitlo Chain rakentuu omalle infrastruktuurilleen, joka vahvistaa ekosysteemiä ja sujuvoittaa SVIT:in käyttöä.',
    infraCards: [
      { title: 'L1-lohkoketju SVIT:ille', body: 'SVIT on Svitlo Chainin oman L1-lohkoketjun natiivikolikko, jonka kokonaisemissio on 1 miljardi kolikkoa. Se toimii ekosysteemin turvallisuuden, transaktiovirran, panostuksen, polton ja pitkän aikavälin pääomituksen selkärankana. Kaikki aktiviteetti liittyy suoraan SVIT:in arvoon ja kestävyyteen.' },
      { title: 'Svitlo Wallet', body: 'Svitlo Wallet on yksinkertainen lompakko SVIT:in säilyttämiseen, lähettämiseen ja käyttämiseen koko Svitlo Chain -ekosysteemissä.', href: '/fi/wallet/', linkLabel: 'Lue lisää' },
    ],
  },
  enterprise: {
    eyebrow: 'Yrityksille',
    title: 'Liiketoiminta, luottamus ja aloittaminen',
    companyTitle: 'Yritystasot',
    companyBody: 'Organisaatiot, jotka tarvitsevat SLA-sopimuksia, omistautunutta tukea ja pääsyä yksityiseen laivastoon, voivat liittyä Svitlo Chainin yritysohjelman kautta. Jokainen taso sisältää laskentatehtävien kryptografisen varmennuksen, ketjussa tapahtuvan maineen seurannan, ja täydellisen dokumentaation yritysten hankintojen vaatimustenmukaisuutta varten.',
    tableHeaders: ['Taso', 'Ominaisuudet'],
    tiers: [
      ['Starter', 'API-pääsy, julkinen markkinapaikka, SVIT-maksut'],
      ['Growth', 'Priorisoitu reititys, omistautunut tuki, laivaston CLI'],
      ['Enterprise', 'SLA-takuu, yksityinen laivasto, vaatimustenmukaisuuspaketti, white-glove-käyttöönotto'],
    ],
    trustTitle: 'Luottamus ja turvallisuus',
    trustItems: [
      { title: 'SHA-256-varmennus', body: 'Jokainen laskentatehtävä varmennetaan kryptografisesti — toimittajat eivät voi väärentää tuloksia.' },
      { title: 'Mainejärjestelmä', body: 'Ketjussa tapahtuva pisteytys palkitsee johdonmukaiset, rehelliset toimittajat ja suodattaa haitalliset toimijat pois.' },
      { title: 'Valmis vaatimustenmukaisuuteen', body: 'Yritysdokumentaatio, auditointilokit ja datan sijaintivaihtoehdot haluamallasi alueella.' },
    ],
    joinTitle: 'Liity Svitlo Chainiin jo tänään',
    joinCards: [
      { icon: '🖥️', title: 'Toimittajat', body: 'Rahaksi käyttämättömät GPU:si ja ansaitse passiivista tuloa.' },
      { icon: '⚡', title: 'Kehittäjät', body: 'Hanki edullista, skaalautuvaa GPU-tehoa tekoälyprojekteihisi.' },
      { icon: '⛏️', title: 'Louhintaoperaattorit', body: 'Muuta louhintainfrastruktuurisi tekoälylaskennaksi Miner Modella.' },
    ],
  },
  roadmap: {
    eyebrow: 'Tiekartta',
    title: 'Tiekarttamme: Svitlo Chainin tulevaisuus',
    body: 'Svitlo Chain kehittyy jatkuvasti vastatakseen kasvavaan hajautetun GPU-laskennan kysyntään. Tiekarttamme keskittyy strategiseen kasvuun ja arvon tuottamiseen sekä toimittajille että kehittäjille.',
    milestones: [
      { when: 'Q3 2026', title: 'Julkaisu', body: 'Svitlo Chain -alustan virallinen julkaisu, sisältäen ydintoiminnallisuudet GPU-vuokraukseen ja Miner Modeen.' },
      { when: 'Q4 2026', title: 'Yritysominaisuudet', body: 'Yritystasot, omistautunut tuki, SLA-sopimukset ja edistyneet turvallisuusprotokollat suuremmille asiakkaille.' },
      { when: 'Q1 2027', title: 'Globaali laajentuminen', body: 'Laajennettu maantieteellinen kattavuus, uudet alueelliset konesalit ja kumppanuudet laajemman yleisön tavoittamiseksi.' },
      { when: 'Q2 2027', title: 'Edistynyt analytiikka', body: 'Kehittyneet analytiikkatyökalut GPU-käytön optimointiin ja tulojen seurantaan.' },
    ],
    footer: 'Tämä tiekartta heijastaa nykyisiä strategisia prioriteettejamme, mutta Svitlo Chain -tiimi pysyy ketteränä ja reagoivana markkinaolosuhteille ja yhteisön palautteelle.',
  },
  faq: {
    eyebrow: 'Kysymyksiä',
    title: 'Usein kysytyt kysymykset',
    body: 'Onko sinulla kysymyksiä Svitlo Chainista? Tässä vastauksia joihinkin yleisimpiin, sekä toimittajilta että kehittäjiltä.',
    items: [
      { q: 'Miten aloitan toimittajana?', a: 'Asenna Svitlo Chain -solmuasiakas nykyiseen louhintalaitteistoosi. Ota sitten käyttöön "Miner Mode" aloittaaksesi laskentatehosi vuokrauksen, joko nykyisen louhintasi ohella tai sen sijaan. Prosessi on suunniteltu sujuvaksi ja yksinkertaiseksi.' },
      { q: 'Mitä maksuja Svitlo Chainissa sovelletaan?', a: 'Svitlo Chainilla on läpinäkyvä maksurakenne alustan ylläpitämiseksi. Käyttäjät, jotka tekevät transaktioita natiivissa hyötytokenissamme SVIT:issä, saavat 10 % alennuksen kaikista markkinapaikkamaksuista. Tarkat maksut voivat vaihdella tehtävätyypin ja markkinaolosuhteiden mukaan.' },
      { q: 'Ovatko tietoni ja laskentani turvassa?', a: 'Kyllä. Turvallisuus on suunnittelumme ytimessä. Jokainen laskentatehtävä varmennetaan kryptografisesti SHA-256:lla, varmistaen ettei toimittajat voi väärentää tuloksia. Seuraamme myös toimittajien mainetta ketjussa, ja tarjoamme yritysten vaatimustenmukaisuuspaketin edistyneisiin turvallisuustarpeisiin.' },
      { q: 'Voinko käyttää mitä tahansa GPU:ta?', a: 'Svitlo Chain on rakennettu joustavaksi ja tukee laajaa valikoimaa GPU:ita, kuluttajamalleista kuten RTX 4060:sta tehokkaisiin yritys-GPU:ihin kuten A100:aan. Alustalla on markkina lähes jokaiselle GPU-kokoonpanolle, jolloin voit rahaksi tehdä minkä tahansa omistamasi laitteiston.' },
      { q: 'Mikä on SVIT-token?', a: 'SVIT on Svitlo Chainin natiivi hyötytoken, suunniteltu mahdollistamaan maksut, kannustamaan rehellistä käytöstä panostuksen kautta, ja ohjaamaan alustan kehitystä. Sillä on deflatorinen polttomekanismi ja rajoitettu tarjonta pitkän aikavälin kestävyyttä varten.' },
      { q: 'Miten nostan ansioni?', a: 'Svitlo Chain -ansiosi kertyvät yhdistettyyn lompakkoosi. Voit nostaa milloin tahansa, joko SVIT:issä tai muuntamalla muihin kryptovaluuttoihin/fiat-valuuttoihin alustan integroitujen vaihtovaihtoehtojen kautta. Yksityiskohdat löytyvät dokumentaatiostamme.' },
    ],
  },
  stats: {
    eyebrow: 'Lukuina',
    title: 'Svitlo Chain lukuina: alustan vahvuus',
    body: 'Svitlo Chain jatkaa eksponentiaalista kasvuaan, ohjaten hajautetun tekoälylaskennan tulevaisuutta. Tässä on silmäys alustan vaikuttavaan kattavuuteen ja tehokkuuteen — kustannustehokas ratkaisu verrattuna perinteisiin pilvipalveluntarjoajiin.',
    items: [
      { num: '2,5M+', label: 'Saatavilla olevat GPU-tunnit', body: 'Yli 2,5 miljoonaa GPU-tuntia on toimitettu verkostomme kautta tekoälytehtäville, ja määrä kasvaa tasaisesti joka kuukausi.' },
      { num: '8 500+', label: 'Aktiiviset toimittajat', body: 'Kasvava, yli 8 500 yksilöllisen toimittajan verkosto tuo laskentatehoa, varmistaen vakauden ja saatavuuden.' },
      { num: '70 %', label: 'Keskimääräinen kustannussäästö', body: 'Saavuta jopa 70 % säästöt GPU-laskennassa johtaviin pilvialustoihin verrattuna, tinkimättä suorituskyvystä.' },
      { num: '500+ PFLOPS', label: 'Kokonaislaskentateho', body: 'Yhteensä Svitlo Chain toimittaa yli 500 PFLOPS tekoälylaskentatehoa — valtava resurssi kaikissa mittakaavoissa.' },
    ],
  },
  architecture: {
    eyebrow: 'Konepellin alla',
    title: 'Svitlo Chainin tekninen arkkitehtuuri: miten järjestelmä toimii',
    body: 'Svitlo Chain toimii vankalla hajautetulla arkkitehtuurilla, joka takaa tehokkuuden, turvallisuuden ja läpinäkyvyyden. Tässä on erittely alustan taustalla olevista teknisistä mekanismeista.',
    lanes: [
      { label: 'Kehittäjä (asiakas)', cells: ['Lähetä tekoälytehtävä'] },
      { label: 'Svitlo Chain -alusta', cells: ['Sovitus ja ajoitus', '→', 'Tulos ja todiste', '→', 'Varmennus ja selvitys'] },
      { label: 'GPU-toimittaja', cells: ['Hae ja suorita tehtävä'] },
      { label: 'Lohkoketju', cells: ['SHA-256-varmennus', '→', 'SVIT-maksu', '→', 'Mainejärjestelmä'] },
    ],
    body2: 'Svitlo Chain käyttää lohkoketjuteknologiaa luodakseen luottamuksettoman ympäristön, jossa jokainen laskentaprosessin vaihe on todennettavissa ja läpinäkyvä, tarjoten samalla vankan turvallisuuden käyttäjätietojen ja laskentojen suojaamiseksi.',
    cards: [
      { title: 'Hajautettu tehtävien suoritus', body: 'Tekoälytehtävät jaetaan ja hajautetaan GPU-toimittajien verkkoon, optimoiden saatavilla olevan laskentatehon käytön ja välttäen yksittäisiä vikapisteitä.' },
      { title: 'Turvallinen konttiterisointi', body: 'Jokainen laskentatehtävä ajetaan eristetyssä konttiympäristössä toimittajan laitteistolla, estäen luvattoman pääsyn ja varmistaen tietojen eheyden.' },
      { title: 'Lohkoketjun läpinäkyvyys', body: 'Jokainen transaktio, tehtävän spesifikaatio ja varmennustodiste tallennetaan ketjuun täyden läpinäkyvyyden ja kiistämättömyyden takaamiseksi.' },
    ],
  },
  glossary: {
    eyebrow: 'Viitteet',
    title: 'Sanasto',
    body: 'Helpottaaksemme Svitlo Chainin ja laajemman hajautetun tekoälyekosysteemin ymmärtämistä, olemme koonneet sanaston yleisistä teknisistä termeistä — selkeästi ja tiiviisti, olitpa sitten kokenut tekninen käyttäjä tai alalla uusi.',
    terms: [
      { term: 'Lohkoketju', body: 'Hajautettu, muuttumaton digitaalinen tilikirja kryptografisesti linkitetyistä transaktioiden "lohkoista". Jokainen lohko sisältää aikaleiman ja viittauksen edelliseen lohkoon, luoden turvallisen ja läpinäkyvän historian.' },
      { term: 'Konttiterisointi', body: 'Virtualisointitekniikka, joka pakkaa sovelluskoodin kaikkien riippuvuuksiensa (kirjastot, työkalut, konfiguraatio) kanssa eristettyyn "konttiin". Tämä varmistaa, että sovellus toimii johdonmukaisesti riippumatta siitä, missä se otetaan käyttöön.' },
      { term: 'Kryptografinen todiste', body: 'Matemaattisia menetelmiä, joita käytetään datan tai transaktioiden aitouden ja eheyden varmentamiseen. Se mahdollistaa turvallisen viestinnän ja varmennuksen ilman, että osapuolten tarvitsee luottaa toisiinsa.' },
      { term: 'CUDA', body: 'NVIDIAn kehittämä rinnakkaislaskenta-alusta ja ohjelmointimalli. CUDA antaa kehittäjien käyttää NVIDIA-GPU:ita yleiskäyttöiseen laskentaan, nopeuttaen dramaattisesti laskentaintensiivisiä tehtäviä, erityisesti tekoälyssä.' },
      { term: 'Hajautus', body: 'Periaate, jonka mukaan hallinta ja päätöksenteko jaetaan verkon yli sen sijaan, että ne keskitettäisiin yhdelle taholle. Svitlo Chainissa tämä tarkoittaa, että GPU-resurssit on jaettu monelle solmulle maailmanlaajuisesti.' },
      { term: 'Docker', body: 'Suosittu alusta sovellusten kehittämiseen, toimittamiseen ja ajamiseen konttiteknologiaa käyttäen. Docker-kontit varmistavat, että Svitlo Chain -asiakas ja tekoälytehtävät toimivat eristetysti ja tehokkaasti.' },
      { term: 'Svitlo Chainin L1-lohkoketju', body: 'Svitlo Chainin oma L1-lohkoketju, kirjoitettu Rustilla ja suunniteltu turvallisuutta, suurta nopeutta ja tehokasta tiedonkäsittelyä varten. Se muodostaa perustan transaktioille, ohjelmalogiikalle ja verkkoinfrastruktuurille.' },
      { term: 'GPU (näytönohjainyksikkö)', body: 'Erikoistunut elektroninen piiri, joka on suunniteltu nopeasti käsittelemään ja muuttamaan muistia kuvan luonnin nopeuttamiseksi kehyspuskurissa. GPU:t ovat myös erittäin tehokkaita suurten data-aineistojen rinnakkaiskäsittelyyn, mikä tekee niistä ihanteellisia tekoälylaskentaan.' },
      { term: 'Päättely', body: 'Prosessi, jossa koulutettua tekoälymallia käytetään ennusteiden tai päätösten tekemiseen uuden, näkemättömän datan perusteella. Tämä on vaihe, jossa tekoälymalli soveltaa oppimaansa.' },
      { term: 'Louhinta', body: 'Prosessi, jossa uusia transaktioita varmennetaan ja lisätään lohkoketjuun ratkaisemalla monimutkaisia kryptografisia pulmia. Svitlo Chainin "Miner Modessa" solmut voivat ansaita varmentamalla transaktioita tai suorittamalla tekoälylaskentaa.' },
      { term: 'Solmu', body: 'Tietokone tai palvelin, joka ajaa Svitlo Chain -asiakasohjelmistoa ja on yhdistetty verkkoon. Solmut tarjoavat laskentaresursseja (GPU:ita) verkolle.' },
      { term: 'Vertaisverkko (P2P)', body: 'Verkko, jossa solmut kommunikoivat suoraan keskenään ilman keskuspalvelinta. Svitlo Chain rakentuu P2P-verkolle jakaakseen tekoälytyökuormia.' },
      { term: 'SVIT-kolikko', body: 'Svitlo Chainin L1-lohkoketjun natiivi kryptovaluutta. SVIT:iä käytetään GPU-resurssien maksamiseen, toimittajien palkitsemiseen ja verkon hallintoon osallistumiseen.' },
      { term: 'Mainepisteet', body: 'Järjestelmä, joka arvioi Svitlo Chainin GPU-toimittajien luotettavuutta ja suorituskykyä. Korkeat pisteet johtavat useampiin tehtäviin ja suurempiin ansioihin.' },
      { term: 'SHA-256', body: 'Kryptografinen tiivistefunktio, joka tuottaa 256-bittisen (32-tavuisen) tiivistearvon. Sitä käytetään laajalti lohkoketjuteknologiassa tietojen eheyden varmistamiseen ja lohkojen yksilöllisten tunnisteiden luomiseen.' },
      { term: 'Slashing', body: 'Rangaistusmekanismi hajautetuissa verkoissa, jossa osa GPU-toimittajan panoksesta poistetaan, jos hän toimii haitallisesti tai ei täytä velvoitteitaan.' },
      { term: 'Älysopimukset', body: 'Itse toteutuvat sopimukset, joiden ehdot on kirjoitettu suoraan koodiin. Ne ajetaan automaattisesti lohkoketjussa, kun ennalta määritetyt ehdot täyttyvät, poistaen tarpeen välikäsille.' },
      { term: 'Panostus', body: 'Prosessi, jossa tietty määrä kryptovaluuttaa (SVIT Svitlo Chainissa) lukitaan vakuudeksi verkon toiminnan tukemiseksi. GPU-toimittajat voivat panostaa SVIT:iä nostaakseen mainepisteitään ja saadakseen enemmän tehtäviä.' },
      { term: 'VRAM (näyttömuisti)', body: 'RAM-tyyppi, joka on suunniteltu erityisesti näytöllä näytettävän kuvadatan tallentamiseen. Tekoälylaskennassa, erityisesti suurten mallien kanssa, riittävä VRAM on kriittinen suorituskyvylle.' },
    ],
    footer: 'Tätä sanastoa päivitetään säännöllisesti. Jos sinulla on kysymyksiä tietyistä termeistä tai haluat ehdottaa lisäyksiä, älä epäröi ottaa yhteyttä Svitlo Chain -yhteisöön.',
  },
  compare: {
    eyebrow: 'Vertailu',
    title: 'Svitlo Chain vs. perinteiset pilvipalveluntarjoajat',
    body: 'Svitlo Chain mullistaa pääsyn GPU-resursseihin tekoäly- ja koneoppimisprojekteille. Tämä vertailu korostaa, miten Svitlo Chain eroaa perinteisistä pilvipalveluista kuten AWS, Google Cloud ja Azure, sekä muista keskitetyistä GPU-pilvipalveluntarjoajista.',
    tableHeaders: ['Ulottuvuus', 'Svitlo Chain', 'Perinteinen pilvi'],
    rows: [
      ['Hinnoittelu (per GPU-tunti)', 'Jopa 70 % halvempi, dynaaminen', 'Usein kalliimpi, porrastettu kysynnän mukaan'],
      ['Hajautus', 'Täysin hajautettu (vertaisverkko)', 'Keskitetty'],
      ['Joustavuus', 'Ei pitkiä sopimuksia, käytön mukaan maksu, ei sitoutumista', 'Vaatii usein sopimuksia, sitoutumisjaksoja, monimutkaisia sopimuksia'],
      ['Nopeus (tehtävien sovitus ja suoritus)', 'Nopea sovitus P2P-verkon kautta', 'Vaihteleva, voi kärsiä pullonkauloista korkealla kysynnällä'],
      ['Läpinäkyvyys', 'Täysi läpinäkyvyys ja todennettavuus lohkoketjun kautta', 'Rajoitettu, yrityksen hallinnoima'],
      ['Yhteisö', 'Avoimen lähdekoodin ja yhteisövetoinen kehitys', 'Suuri ekosysteemi, mutta ei yhteisövetoinen'],
      ['Token-kannustimet', 'Kyllä, SVIT-tokenit toimittajille ja käyttäjille', 'Ei'],
    ],
    footer: 'Kuten taulukko osoittaa, Svitlo Chain tarjoaa kustannustehokkaan, joustavan ja läpinäkyvän ratkaisun GPU-laskentaan, hajautetun mallin ja yhteisön osallistumisen ohjaamana. Tämä asemoi Svitlo Chainin hajautetun tekoälylaskennan tulevaisuudeksi.',
  },
  cta: {
    title: 'Valmiina liittymään hajautettuun GPU-vallankumoukseen?',
    body: 'Halusitpa ansaita käyttämättömästä laskentatehostasi tai tarvitsetpa edullista, skaalautuvaa tekoälytehoa, Svitlo Chainilla on oikea ratkaisu. Aloita tulevaisuutesi rakentaminen tai rahaksi nykyinen laitteistosi minuuteissa.',
    ctaPrimary: 'Ryhdy toimittajaksi',
    ctaGlass: 'Aloita kehittäminen',
  },
  contact: {
    eyebrow: 'Ota yhteyttä',
    title: 'Yhteystiedot ja tuki',
    body: 'Onko sinulla kysymyksiä, tarvitsetko apua, vai haluatko liittyä Svitlo Chain -yhteisöön? Tässä ovat kaikki yhteyskanavamme ja tukiresurssimme.',
    items: [
      { icon: '✉️', title: 'Sähköpostituki', body: 'svitlochain@gmail.com', href: 'mailto:svitlochain@gmail.com' },
      { icon: '✈️', title: 'Telegram', body: 'Liity Telegram-ryhmäämme nopeita päivityksiä ja yhteisökeskustelua varten.', href: 'https://t.me/+8t6LS2j4CyJiOTU0' },
      { icon: '💬', title: 'Discord-yhteisö', body: 'Liity Discordiimme reaaliaikaista tukea ja keskustelua varten tiimin ja muiden käyttäjien kanssa.', href: 'https://discord.gg/9wqA3fMfg' },
      { icon: '🐦', title: 'Seuraa meitä X:ssä', body: 'Pysy ajan tasalla viimeisimmistä uutisista ja tuotepäivityksistä.', href: 'https://x.com/Svitlochain' },
      { icon: '📘', title: 'Facebook', body: 'Seuraa Facebook-sivuamme uutisia ja yhteisöpäivityksiä varten.', href: 'https://www.facebook.com/share/1D53mnv4kk/' },
      { icon: '🐙', title: 'GitHub-repositorio', body: 'Tutustu avoimen lähdekoodin koodiimme ja osallistu alustan kehitykseen.' },
      { icon: '📄', title: 'Dokumentaatio', body: 'Lue kattavat oppaamme ja tekniset spesifikaatiomme aloittaaksesi.' },
      { icon: '📰', title: 'Svitlo Chain -blogi', body: 'Saa uusimmat oivallukset, analyysit ja uutiset hajautetusta tekoälystä.' },
    ],
  },
  footer: {
    tagline: 'Layer-1-lohkoketju tekoälylaskentaan ja päättelyn selvitykseen.',
    cols: [
      { title: 'Tuote', links: [{ label: 'Alusta', href: '/fi/platform/' }, { label: 'Dokumentaatio', href: '/fi/documentation/' }, { label: 'Kehittäjille', href: '#developers' }, { label: 'GPU:iden omistajille', href: '#gpu-owners' }, { label: 'SVIT-token', href: '#token' }] },
      { title: 'Yritys', links: [{ label: 'Tiekartta', href: '#roadmap' }, { label: 'UKK', href: '#faq' }, { label: 'Yhteystiedot', href: '#contact' }] },
      { title: 'Lompakko', links: [{ label: 'Avaa lompakko', href: '/fi/wallet/' }, { label: 'Tietosuojakäytäntö', href: '/privacy/' }, { label: 'Tuki', href: '/support/' }] },
    ],
    copyright: '© 2026 Svitlo Chain. Kaikki oikeudet pidätetään.',
  },
};
