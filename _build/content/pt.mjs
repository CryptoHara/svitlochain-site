export default {
  meta: {
    lang: 'pt',
    title: 'Svitlo Chain — Nuvem GPU descentralizada',
    description: 'Um marketplace de GPU descentralizado para IA — alugue GPUs ociosas ou disponibilize seu próprio hardware, protegido por blockchain.',
  },
  nav: {
    links: [
      { href: '/pt/wallet/', label: 'Carteira' },
      { href: '/pt/platform/', label: 'Plataforma' },
      { href: '/pt/documentation/', label: 'Documentação' },
    ],
  },
  hero: {
    eyebrow: 'Blockchain Layer-1',
    title: 'Svitlo Chain: nuvem GPU descentralizada',
    lede: 'Liberte-se do monopólio de preços de GPU das grandes nuvens. Alugue GPUs ociosas, ou disponibilize seu próprio hardware e ganhe renda real — impulsionado por IA, protegido por blockchain.',
    ctaPrimary: 'Torne-se fornecedor',
    ctaGlass: 'Comece a desenvolver',
  },
  idea: {
    eyebrow: 'Por que Svitlo Chain',
    title: 'A ideia por trás da Svitlo Chain',
    body: [
      'O mercado de GPU em nuvem é controlado por um punhado de gigantes — AWS, Google, Azure — que fixam preços premium, enquanto milhões de GPUs permanecem ociosas em PCs de jogos, fazendas de mineração e data centers corporativos. A Svitlo Chain existe para mudar isso.',
      'O conceito é simples: um marketplace de GPU descentralizado onde os proprietários de hardware ganham com o poder computacional não utilizado, e os desenvolvedores de IA obtêm capacidade acessível e escalável sem ficarem presos a um único fornecedor. Sem intermediários. Sem sobrepreços. Apenas uma conexão direta e sem confiança prévia entre oferta e demanda — protegida por provas criptográficas e um sistema de reputação transparente.',
    ],
    cards: [
      { label: 'Problema', title: 'GPUs em nuvem centralizadas', body: 'Provedores de nuvem centralizados controlam preço, disponibilidade e acesso — criando gargalos para a inovação em IA.' },
      { label: 'Solução', title: 'Um mercado peer-to-peer', body: 'Um marketplace de GPU peer-to-peer que transforma hardware ocioso em infraestrutura produtiva que remunera seus proprietários.' },
      { label: 'Visão', title: 'Uma camada de computação global', body: 'Uma camada global e resistente à censura para poder computacional, impulsionando a próxima geração de aplicações de IA.' },
    ],
  },
  developers: {
    eyebrow: 'Como funciona',
    title: 'Para desenvolvedores de IA e builders',
    body: [
      'A Svitlo Chain dá aos desenvolvedores de IA acesso instantâneo a um pool global de GPU — desde placas RTX de consumo até A100 empresariais — por uma fração do custo da nuvem tradicional. Seja treinando um grande modelo de linguagem, executando inferência em escala, ou renderizando simulações complexas, a Svitlo Chain combina sua carga de trabalho com o hardware certo em segundos.',
      'A plataforma gerencia automaticamente o agendamento de jobs, a conteinerização segura e a faturação. Os builders fazem deploy via CLI ou API, especificam seus requisitos de GPU, e pagam apenas pela computação realmente utilizada — sem contratos de longo prazo, sem compromissos mínimos.',
    ],
    steps: [
      { title: 'Especifique os requisitos de GPU', body: 'Escolha VRAM, poder computacional e região.' },
      { title: 'Faça deploy via CLI ou API', body: 'Envie seu contêiner e comece a computar imediatamente.' },
      { title: 'Pague pelo uso', body: 'Sem contratos. Faturado em SVIT ou stablecoin.' },
    ],
    quickstartTitle: 'Guia do desenvolvedor: início rápido com a Svitlo Chain',
    quickstartLede: 'Como desenvolvedor de IA, você precisa de acesso rápido, econômico e escalável a recursos de GPU. Este guia rápido leva você da autenticação ao seu primeiro job e resultado.',
    steps2: [
      {
        n: '1', title: 'Autenticação e configuração da API',
        body: 'Para interagir com a API da Svitlo Chain, você precisa da sua chave de API do seu painel de desenvolvedor após o registro. Para desenvolvedores Python, recomendamos nosso SDK para uma integração tranquila; outras linguagens podem chamar a API REST diretamente.',
        code: `<span class="kw">import</span> os
<span class="kw">import</span> svitlo_sdk

<span class="c1"># Leia a chave de API com segurança a partir de uma variável de ambiente</span>
API_KEY = os.environ.get(<span class="str">"SVIT_API_KEY"</span>)

<span class="kw">if not</span> API_KEY:
    <span class="kw">raise</span> ValueError(<span class="str">"SVIT_API_KEY não está definida."</span>)

<span class="c1"># Inicializar o cliente SDK da Svitlo Chain</span>
client = svitlo_sdk.SvitloClient(api_key=API_KEY)
print(<span class="str">"Cliente de API inicializado com sucesso."</span>)`,
      },
      {
        n: '2', title: 'Envie seu primeiro job de GPU',
        body: 'Enviar um job de GPU é simples. Defina qual modelo de IA executar, quais dados de entrada usar, e quais recursos de GPU são necessários. A Svitlo Chain combina automaticamente seu job com os fornecedores disponíveis na rede.',
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
    print(<span class="fn">f</span><span class="str">"Job enviado! ID do job: {job.id}"</span>)
    print(<span class="fn">f</span><span class="str">"Status: {job.status}"</span>)
<span class="kw">except</span> Exception <span class="kw">as</span> e:
    print(<span class="fn">f</span><span class="str">"Erro ao enviar o job: {e}"</span>)`,
      },
      {
        n: '3', title: 'Monitore o status do job',
        body: 'Uma vez enviado, acompanhe o progresso do seu job em tempo real — veja erros e estime quando os resultados estarão prontos.',
        code: `job_id = job.id

current_job = client.get_job_status(job_id)
print(<span class="fn">f</span><span class="str">"Job {current_job.id}, status: {current_job.status}"</span>)

<span class="kw">while</span> current_job.status <span class="kw">not in</span> [<span class="str">"COMPLETED"</span>, <span class="str">"FAILED"</span>]:
    time.sleep(30)
    current_job = client.get_job_status(job_id)
    print(<span class="fn">f</span><span class="str">"Status atualizado: {current_job.status}"</span>)

<span class="kw">if</span> current_job.status == <span class="str">"COMPLETED"</span>:
    print(<span class="str">"Job concluído!"</span>)
<span class="kw">else</span>:
    print(<span class="str">"O job falhou ou foi cancelado."</span>)`,
      },
      {
        n: '4', title: 'Recupere seus resultados',
        body: 'Assim que seu job de GPU for concluído, a saída fica disponível no local que você especificou (ex.: um bucket S3). A Svitlo Chain fornece os detalhes de conexão necessários para buscar os resultados com segurança.',
        code: `<span class="kw">if</span> current_job.status == <span class="str">"COMPLETED"</span>:
    print(<span class="fn">f</span><span class="str">"Resultados disponíveis em: {current_job.output_data_location}"</span>)
<span class="kw">else</span>:
    print(<span class="str">"Resultados indisponíveis — job não concluído ou com falha."</span>)`,
      },
    ],
    billingTitle: '5. Pagamento e faturação',
    billingBody: 'A Svitlo Chain usa o token SVIT para todas as transações da plataforma, garantindo transparência e eficiência. Você é cobrado pelo uso real de GPU e duração do job — muitas vezes até 70% mais barato que a nuvem tradicional. Acompanhe seu histórico de uso e saldo no seu painel Svitlo Chain.',
  },
  gpuOwners: {
    eyebrow: 'Como funciona',
    title: 'Para proprietários de GPU',
    body: 'Proprietários de GPU — gamers, mineradores e data centers — podem conectar hardware ocioso à Svitlo Chain e ganhar renda passiva. O cliente Svitlo Chain roda em segundo plano, aceita jobs de computação, os executa em contêineres isolados, e retorna resultados com verificação criptográfica. Os fornecedores definem suas próprias janelas de disponibilidade, preços e especificações de hardware.',
    cards: [
      { title: 'Instale o cliente', body: 'Baixe o software de nó da Svitlo Chain, conecte sua GPU, e esteja operando em minutos. Windows, Linux e Docker suportados.' },
      { title: 'Defina seus termos', body: 'Defina tarifas por hora, VRAM mínima e cronograma de disponibilidade. Você controla quando seu hardware está no mercado.' },
      { title: 'Ganhe automaticamente', body: 'Jobs são combinados, executados e verificados automaticamente. Pagamentos chegam em SVIT ou USDC diretamente na sua carteira.' },
    ],
    installTitle: 'Guia de instalação para fornecedores de GPU',
    installLede: 'Tornar-se um fornecedor de GPU da Svitlo Chain é simples e permite que você ganhe com sua computação ociosa. Siga estes passos para instalar o cliente de nó da Svitlo Chain e começar a alugar seus recursos de GPU para desenvolvedores de IA em todo o mundo.',
    installSteps: [
      {
        n: '1', title: 'Requisitos do sistema',
        body: 'Antes de instalar, certifique-se de que seu sistema atende a estes requisitos: <b>SO:</b> Linux (Ubuntu 20.04+ recomendado), Windows 10/11, macOS 13 Ventura ou posterior, ou um ambiente compatível com Docker. <b>GPU:</b> NVIDIA GeForce série RTX 30 ou posterior, NVIDIA A100/H100, AMD Radeon RX série 6000 ou posterior, ou Apple Silicon com Metal Performance Shaders (MPS). <b>RAM:</b> mínimo 16 GB. <b>Rede:</b> conexão estável com pelo menos 100 Mbps de upload/download.',
      },
      {
        n: '2', title: 'Baixe o cliente de nó da Svitlo Chain',
        body: 'Obtenha o cliente de nó mais recente em nosso site oficial ou repositório GitHub. Pacotes disponíveis para todas as plataformas.',
        code: `<span class="c1"># Linux</span>
wget https://svitlochain.com/node-client/svitlo-node-linux-amd64.tar.gz
tar -xzf svitlo-node-linux-amd64.tar.gz
<span class="kw">cd</span> svitlo-node`,
      },
      {
        n: '3', title: 'Instale e configure',
        body: 'Após o download, execute o script de configuração e siga as instruções na tela. No Apple Silicon, ative o backend acelerado por Metal para melhor desempenho.',
        code: `arch
<span class="c1"># espera-se arm64 em Apple Silicon</span>
<span class="kw">export</span> SVITLO_GPU_BACKEND=mps
<span class="kw">export</span> SVITLO_OPTIMIZE_APPLE_SILICON=<span class="kw">true</span>
svitlo-node start`,
      },
      {
        n: '4', title: 'Conecte sua carteira',
        body: 'Para receber pagamentos você precisa conectar uma carteira compatível. Esta carteira conterá seus ganhos em SVIT.',
        code: `./svitlo-node wallet connect &lt;endereco-da-sua-carteira&gt;`,
      },
      {
        n: '5', title: 'Defina preços e disponibilidade',
        body: 'Você tem controle total sobre como suas GPUs são alugadas.',
        code: `./svitlo-node config <span class="kw">set</span> backend mps
./svitlo-node config <span class="kw">set</span> optimize_apple_silicon
./svitlo-node config <span class="kw">set</span> availability 24/7`,
      },
      {
        n: '6', title: 'Comece a ganhar',
        body: 'Assim que seu nó estiver rodando, conectado e configurado, suas GPUs começam a ser combinadas com jobs de computação de IA. Monitore renda e histórico de jobs no painel Svitlo Chain.',
      },
    ],
  },
  minerMode: {
    eyebrow: 'Miner Mode',
    title: 'Convidamos mineradores e fazendas de GPU',
    body: [
      'A mineração cripto mudou. Com recompensas de proof-of-work em queda e custos de eletricidade em alta, as fazendas de GPU precisam de novas fontes de renda. O <b>Miner Mode</b> da Svitlo Chain permite que operadores de mineração redirecionem instantaneamente hardware ocioso para computação de IA — sem reconfigurar a infraestrutura.',
      'O Miner Mode é um interruptor leve que move seu rig da mineração para o aluguel de poder computacional. Os jobs passam por pré-validação, rodam em sandbox, e os ganhos são rastreados em tempo real. Fazendas com 10+ GPUs recebem roteamento prioritário de jobs e suporte dedicado.',
    ],
    cards: [
      { title: 'Alterne sem tempo de inatividade', body: 'Alterne entre mineração e aluguel de poder computacional em segundos. Nenhuma mudança de hardware necessária.' },
      { title: 'Maior potencial de ganho', body: 'A demanda por computação de IA frequentemente excede a oferta — fornecedores frequentemente ganham mais por GPU-hora do que na maioria das operações de mineração.' },
      { title: 'Painel de controle da fazenda', body: 'Gerencie toda a sua fazenda a partir de uma única interface. Acompanhe renda, status dos jobs e tempo de atividade em cada nó.' },
    ],
    detailTitle: 'Miner Mode: construído para escalar',
    whyTitle: 'Por que Miner Mode?',
    whyBody: [
      'A rentabilidade da mineração é instável. O aluguel de GPU na Svitlo Chain oferece uma base de renda estável e previsível — especialmente durante mercados em baixa ou quando a dificuldade da rede aumenta.',
      'O Miner Mode suporta uma fila de jobs em lote, para que sua fazenda nunca fique ociosa. Quando a demanda por IA cai, volte à mineração com um único comando. É exatamente essa flexibilidade diante das condições de mercado que distingue a Svitlo Chain.',
    ],
    cta: 'Saiba mais sobre o Miner Mode',
    howTitle: 'Como funciona',
    steps: [
      { n: '01', title: 'Conecte sua fazenda', body: 'Instale o cliente de nó da Svitlo Chain no seu rig de mineração existente.' },
      { n: '02', title: 'Ative o Miner Mode', body: 'Alugue computação junto com a mineração, ou em seu lugar.' },
      { n: '03', title: 'Ganhe e acompanhe', body: 'Acompanhe a renda em tempo real, a taxa de transferência de jobs e a utilização de GPU.' },
      { n: '04', title: 'Alterne livremente', body: 'Volte à mineração a qualquer momento em que as condições de mercado favoreçam.' },
    ],
  },
  pricing: {
    eyebrow: 'Serviços',
    title: 'Serviços e preços',
    body: 'A Svitlo Chain oferece três níveis principais de serviço, cada um adequado para diferentes cargas de trabalho de IA — de tarefas baseadas em texto ao processamento de voz em tempo real. Todos os serviços são cobrados por GPU-hora, com descontos disponíveis para reservas de longo prazo pagas em SVIT.',
    cards: [
      { title: 'Inferência de texto / LLM', body: 'Execute grandes modelos de linguagem, chatbots e tarefas de geração de texto. Otimizado para hardware de RTX 4060 a A100.', price: 'A partir de $0,12/h' },
      { title: 'Geração de imagens', body: 'Stable Diffusion, FLUX e modelos de imagem personalizados em escala. GPUs de alta VRAM recomendadas para geração em lote.', price: 'A partir de $0,28/h' },
      { title: 'Reconhecimento de voz (STT)', body: 'Transcrição em tempo real e pipelines de processamento de voz. Instâncias de baixa latência disponíveis em todo o mundo.', price: 'A partir de $0,18/h' },
    ],
    note: 'Todos os preços refletem as atualizações da calculadora v2. Pagamentos em SVIT recebem um desconto adicional de 10%.',
    revenueTitle: 'Receita do fornecedor: números reais',
    revenueLede: 'Seus ganhos na Svitlo Chain dependem diretamente do seu hardware. Abaixo está uma estimativa realista de receita horária para configurações comuns de GPU, baseada na demanda de mercado atual e na calculadora de preços v2. A receita real depende de disponibilidade, tipo de job e região.',
    tableHeaders: ['GPU', 'Taxa horária', 'Est. mensal (80% de utilização)'],
    rows: [
      ['RTX 4060', '$0,12/h', '~$70'],
      ['RTX 4070 Ti', '$0,22/h', '~$127'],
      ['RTX 4080', '$0,35/h', '~$202'],
      ['RTX 4090', '$0,55/h', '~$317'],
      ['A40 / L40', '$0,80/h', '~$461'],
      ['A100 (40GB)', '$1,40/h', '~$806'],
      ['Frota de 8× A100', '$11,20/h', '~$6.451'],
    ],
    stats: [
      { num: '$6.451', label: 'Frota de 8× A100', body: 'Receita mensal estimada a 80% de utilização — o retorno da escala.' },
      { num: '80%', label: 'Utilização alvo', body: 'Uma estimativa conservadora. Fornecedores de alta demanda frequentemente superam 90%.' },
      { num: '10+', label: 'Níveis de GPU', body: 'De placas RTX de consumo a A100 empresariais — há um mercado para cada GPU.' },
    ],
  },
  token: {
    eyebrow: 'Tokenomics',
    title: 'O token SVIT: três pilares de utilidade',
    body: 'SVIT é a moeda nativa do ecossistema Svitlo Chain e da blockchain L1 própria da Svitlo Chain. O SVIT impulsiona todo o ecossistema — de segurança e transações a staking, queima e capitalização. Como moeda nativa, o SVIT se beneficia de transações rápidas, taxas baixas e alto throughput. A tokenomics é projetada para sustentabilidade de longo prazo, com um mecanismo de queima deflacionário, staking e uma oferta limitada.',
    cards: [
      { icon: '💳', title: 'Pagamentos e descontos', body: 'Fornecedores e desenvolvedores que transacionam em SVIT recebem 10% de desconto em todas as taxas do marketplace. SVIT é a moeda preferida para pagamentos de jobs e staking em todo o ecossistema L1 da Svitlo Chain, com transações rápidas e baratas.' },
      { icon: '🛡️', title: 'Staking e reputação', body: 'Fornecedores fazem staking de SVIT para entrar na rede. Comportamento honesto eleva as pontuações de reputação e desbloqueia a atribuição prioritária de jobs. Maus atores são penalizados (slashing), e a blockchain L1 da Svitlo Chain fornece coordenação eficiente mesmo sob alta carga.' },
      { icon: '🔥', title: 'Queima e deflação', body: 'Uma parte de cada taxa de transação é queimada permanentemente, reduzindo a oferta total ao longo do tempo. À medida que a atividade do ecossistema cresce, a taxa de queima acelera — criando pressão deflacionária sobre o SVIT, enquanto as baixas taxas da Svitlo Chain mantêm o mecanismo eficiente.' },
    ],
    callout: 'A oferta total de SVIT é limitada. Eventos de queima são verificáveis publicamente on-chain. Detentores de tokens também votam em atualizações da plataforma e estruturas de taxas.',
    infraTitle: 'Infraestrutura blockchain para SVIT',
    infraBody: 'Além da utilidade direta, a Svitlo Chain se baseia em sua própria infraestrutura que fortalece o ecossistema e torna o uso do SVIT mais fluido.',
    infraCards: [
      { title: 'Blockchain L1 para SVIT', body: 'SVIT é a moeda nativa da blockchain L1 própria da Svitlo Chain, com uma emissão total de 1 bilhão de moedas. Serve como espinha dorsal da segurança do ecossistema, fluxo de transações, staking, queima e capitalização de longo prazo. Toda atividade se liga diretamente ao valor e sustentabilidade do SVIT.' },
      { title: 'Svitlo Wallet', body: 'A Svitlo Wallet é uma carteira simples para armazenar, enviar e usar SVIT em todo o ecossistema Svitlo Chain.', href: '/pt/wallet/', linkLabel: 'Saiba mais' },
    ],
  },
  enterprise: {
    eyebrow: 'Para empresas',
    title: 'Negócios, confiança e como começar',
    companyTitle: 'Níveis empresariais',
    companyBody: 'Organizações que precisam de SLAs, suporte dedicado e acesso a uma frota privada podem se integrar através do programa empresarial da Svitlo Chain. Cada nível inclui verificação criptográfica de jobs de computação, rastreamento de reputação on-chain, e documentação completa para conformidade em compras corporativas.',
    tableHeaders: ['Nível', 'Recursos'],
    tiers: [
      ['Starter', 'Acesso à API, marketplace público, pagamentos em SVIT'],
      ['Growth', 'Roteamento prioritário, suporte dedicado, CLI de frota'],
      ['Enterprise', 'Garantia de SLA, frota privada, pacote de conformidade, integração white-glove'],
    ],
    trustTitle: 'Confiança e segurança',
    trustItems: [
      { title: 'Verificação SHA-256', body: 'Cada job de computação é verificado criptograficamente — fornecedores não podem falsificar resultados.' },
      { title: 'Sistema de reputação', body: 'A pontuação on-chain recompensa fornecedores consistentes e honestos e filtra maus atores.' },
      { title: 'Pronto para conformidade', body: 'Documentação empresarial, logs de auditoria e opções de residência de dados na sua região preferida.' },
    ],
    joinTitle: 'Junte-se à Svitlo Chain hoje',
    joinCards: [
      { icon: '🖥️', title: 'Fornecedores', body: 'Monetize suas GPUs ociosas e ganhe renda passiva.' },
      { icon: '⚡', title: 'Desenvolvedores', body: 'Obtenha poder de GPU acessível e escalável para seus projetos de IA.' },
      { icon: '⛏️', title: 'Operadores de mineração', body: 'Transforme sua infraestrutura de mineração em computação de IA com o Miner Mode.' },
    ],
  },
  roadmap: {
    eyebrow: 'Roteiro',
    title: 'Nosso roteiro: o futuro da Svitlo Chain',
    body: 'A Svitlo Chain se desenvolve continuamente para atender à crescente demanda por computação GPU descentralizada. Nosso roteiro se concentra em crescimento estratégico e na entrega de valor tanto para fornecedores quanto para desenvolvedores.',
    milestones: [
      { when: 'T3 2026', title: 'Lançamento', body: 'Lançamento oficial da plataforma Svitlo Chain, com funcionalidade principal para aluguel de GPU e Miner Mode.' },
      { when: 'T4 2026', title: 'Recursos empresariais', body: 'Níveis empresariais, suporte dedicado, SLAs e protocolos de segurança avançados para clientes maiores.' },
      { when: 'T1 2027', title: 'Expansão global', body: 'Cobertura geográfica ampliada, novos data centers regionais e parcerias para alcançar um público mais amplo.' },
      { when: 'T2 2027', title: 'Análise avançada', body: 'Ferramentas analíticas sofisticadas para otimizar o uso de GPU e o rastreamento de receita.' },
    ],
    footer: 'Este roteiro reflete nossas prioridades estratégicas atuais, mas a equipe da Svitlo Chain permanece ágil e responsiva às condições de mercado e ao feedback da comunidade.',
  },
  faq: {
    eyebrow: 'Perguntas',
    title: 'Perguntas frequentes',
    body: 'Tem perguntas sobre a Svitlo Chain? Aqui estão respostas para algumas das mais comuns, tanto de fornecedores quanto de desenvolvedores.',
    items: [
      { q: 'Como começo como fornecedor?', a: 'Instale o cliente de nó da Svitlo Chain no seu rig de mineração existente. Depois ative o "Miner Mode" para começar a alugar seu poder computacional, junto com sua mineração existente ou em seu lugar. O processo é projetado para ser fluido e simples.' },
      { q: 'Quais taxas se aplicam na Svitlo Chain?', a: 'A Svitlo Chain tem uma estrutura de taxas transparente para manter a plataforma. Usuários que transacionam em nosso token de utilidade nativo, SVIT, recebem 10% de desconto em todas as taxas do marketplace. Taxas específicas podem variar por tipo de job e condições de mercado.' },
      { q: 'Meus dados e cálculos estão seguros?', a: 'Sim. A segurança é fundamental para o nosso design. Cada job de computação é verificado criptograficamente via SHA-256, garantindo que os fornecedores não possam falsificar resultados. Também rastreamos a reputação dos fornecedores on-chain, e oferecemos um pacote de conformidade empresarial para necessidades de segurança avançadas.' },
      { q: 'Posso usar qualquer GPU?', a: 'A Svitlo Chain foi projetada para ser flexível e suporta uma ampla gama de GPUs, desde modelos de consumo como a RTX 4060 até poderosas GPUs empresariais como a A100. A plataforma tem um mercado para quase toda configuração de GPU, permitindo que você monetize qualquer hardware que possua.' },
      { q: 'O que é o token SVIT?', a: 'SVIT é o token de utilidade nativo da Svitlo Chain, projetado para permitir pagamentos, incentivar comportamento honesto através de staking, e governar o desenvolvimento da plataforma. Ele tem um mecanismo de queima deflacionário e uma oferta limitada para sustentabilidade de longo prazo.' },
      { q: 'Como eu saco meus ganhos?', a: 'Seus ganhos na Svitlo Chain se acumulam na sua carteira conectada. Você pode sacar a qualquer momento, seja em SVIT ou convertendo para outras criptomoedas/moeda fiduciária através das opções de câmbio integradas da plataforma. Detalhes estão em nossa documentação.' },
    ],
  },
  stats: {
    eyebrow: 'Em números',
    title: 'Svitlo Chain em números: a força da plataforma',
    body: 'A Svitlo Chain continua crescendo exponencialmente, impulsionando o futuro da computação de IA descentralizada. Aqui está um vislumbre do impressionante alcance e eficiência da plataforma — uma solução econômica comparada aos provedores de nuvem tradicionais.',
    items: [
      { num: '2,5M+', label: 'Horas de GPU disponíveis', body: 'Mais de 2,5 milhões de horas de GPU foram entregues pela nossa rede para jobs de IA, aumentando constantemente a cada mês.' },
      { num: '8.500+', label: 'Fornecedores ativos', body: 'Uma rede crescente de mais de 8.500 fornecedores únicos contribui com poder computacional, garantindo robustez e disponibilidade.' },
      { num: '70%', label: 'Economia média de custos', body: 'Alcance até 70% de economia em computação de GPU em comparação com as principais plataformas de nuvem, sem comprometer o desempenho.' },
      { num: '500+ PFLOPS', label: 'Poder computacional total', body: 'Combinada, a Svitlo Chain entrega mais de 500 PFLOPS de poder computacional de IA — um recurso formidável em qualquer escala.' },
    ],
  },
  architecture: {
    eyebrow: 'Por baixo do capô',
    title: 'Arquitetura técnica da Svitlo Chain: como o sistema funciona',
    body: 'A Svitlo Chain roda em uma arquitetura descentralizada robusta que garante eficiência, segurança e transparência. Aqui está um detalhamento dos mecanismos técnicos por trás da plataforma.',
    lanes: [
      { label: 'Desenvolvedor (Cliente)', cells: ['Enviar job de IA'] },
      { label: 'Plataforma Svitlo Chain', cells: ['Combinação e agendamento', '→', 'Resultado e prova', '→', 'Verificação e liquidação'] },
      { label: 'Fornecedor de GPU', cells: ['Buscar e executar o job'] },
      { label: 'Blockchain', cells: ['Verificação SHA-256', '→', 'Pagamento em SVIT', '→', 'Sistema de reputação'] },
    ],
    body2: 'A Svitlo Chain usa tecnologia blockchain para criar um ambiente sem confiança prévia, onde cada etapa do processo de computação é verificável e transparente, ao mesmo tempo em que oferece segurança robusta para proteger dados e cálculos dos usuários.',
    cards: [
      { title: 'Execução descentralizada de jobs', body: 'Jobs de IA são divididos e distribuídos pela rede de fornecedores de GPU, otimizando o uso da computação disponível e evitando pontos únicos de falha.' },
      { title: 'Conteinerização segura', body: 'Cada job de computação roda em um ambiente de contêiner isolado no hardware do fornecedor, prevenindo acesso não autorizado e garantindo a integridade dos dados.' },
      { title: 'Transparência blockchain', body: 'Cada transação, especificação de job e prova de verificação é registrada on-chain para total transparência e não repúdio.' },
    ],
  },
  glossary: {
    eyebrow: 'Referência',
    title: 'Glossário',
    body: 'Para facilitar a compreensão da Svitlo Chain e do ecossistema mais amplo de IA descentralizada, compilamos um glossário de termos técnicos comuns — claro e conciso, seja você um usuário técnico experiente ou novo na área.',
    terms: [
      { term: 'Blockchain', body: 'Um livro-razão digital distribuído e imutável de "blocos" de transações ligados criptograficamente. Cada bloco contém um carimbo de data/hora e uma referência ao bloco anterior, criando um histórico seguro e transparente.' },
      { term: 'Conteinerização', body: 'Uma técnica de virtualização que empacota o código da aplicação junto com todas as suas dependências (bibliotecas, ferramentas, configuração) em um "contêiner" isolado. Isso garante que a aplicação seja executada de forma consistente, independentemente de onde seja implantada.' },
      { term: 'Prova criptográfica', body: 'Métodos matemáticos usados para verificar a autenticidade e integridade de dados ou transações. Permite comunicação e verificação seguras sem que as partes precisem confiar umas nas outras.' },
      { term: 'CUDA', body: 'Uma plataforma de computação paralela e modelo de programação desenvolvido pela NVIDIA. O CUDA permite que desenvolvedores usem GPUs NVIDIA para computação de propósito geral, acelerando drasticamente tarefas intensivas em computação, especialmente em IA.' },
      { term: 'Descentralização', body: 'O princípio de distribuir controle e tomada de decisão por uma rede em vez de concentrá-los em uma única autoridade. Na Svitlo Chain, isso significa que os recursos de GPU são distribuídos entre muitos nós globalmente.' },
      { term: 'Docker', body: 'Uma plataforma popular para desenvolver, distribuir e executar aplicações usando tecnologia de contêineres. Os contêineres Docker garantem que o cliente Svitlo Chain e os jobs de IA rodem de forma isolada e eficiente.' },
      { term: 'Blockchain L1 da Svitlo Chain', body: 'A blockchain L1 própria da Svitlo Chain, escrita em Rust e projetada para segurança, alta velocidade e processamento eficiente de dados. Forma a base para transações, lógica de programas e infraestrutura de rede.' },
      { term: 'GPU (Unidade de Processamento Gráfico)', body: 'Um circuito eletrônico especializado projetado para manipular e alterar rapidamente a memória para acelerar a criação de imagens em um buffer de quadro. As GPUs também são altamente eficazes para o processamento paralelo de grandes conjuntos de dados, tornando-as ideais para computação de IA.' },
      { term: 'Inferência', body: 'O processo de usar um modelo de IA treinado para fazer previsões ou decisões com base em dados novos e nunca vistos. Esta é a fase em que o modelo de IA aplica o que aprendeu.' },
      { term: 'Mineração', body: 'O processo de verificar e adicionar novas transações a uma blockchain resolvendo quebra-cabeças criptográficos complexos. No "Miner Mode" da Svitlo Chain, os nós podem ganhar validando transações ou realizando computação de IA.' },
      { term: 'Nó', body: 'Um computador ou servidor executando o software cliente da Svitlo Chain e conectado à rede. Os nós fornecem recursos de computação (GPUs) para a rede.' },
      { term: 'Peer-to-peer (P2P)', body: 'Uma rede onde os nós se comunicam diretamente entre si sem precisar de um servidor central. A Svitlo Chain se baseia em uma rede P2P para distribuir cargas de trabalho de IA.' },
      { term: 'Moeda SVIT', body: 'A criptomoeda nativa da blockchain L1 da Svitlo Chain. O SVIT é usado para pagar recursos de GPU, recompensar fornecedores e participar da governança da rede.' },
      { term: 'Pontuação de reputação', body: 'Um sistema que avalia a confiabilidade e o desempenho dos fornecedores de GPU da Svitlo Chain. Pontuações altas levam a mais jobs e maiores ganhos.' },
      { term: 'SHA-256', body: 'Uma função hash criptográfica que produz um valor hash de 256 bits (32 bytes). É amplamente usada em tecnologia blockchain para garantir a integridade dos dados e criar identificadores únicos para blocos.' },
      { term: 'Slashing', body: 'Um mecanismo de penalidade em redes descentralizadas onde parte da participação (stake) de um fornecedor de GPU é removida se ele agir de forma maliciosa ou não cumprir suas obrigações.' },
      { term: 'Contratos inteligentes', body: 'Contratos autoexecutáveis com os termos do acordo escritos diretamente em código. Eles são executados automaticamente em uma blockchain quando condições predefinidas são atendidas, eliminando a necessidade de intermediários.' },
      { term: 'Staking', body: 'O processo de bloquear uma certa quantidade de criptomoeda (SVIT na Svitlo Chain) como garantia para apoiar as operações da rede. Fornecedores de GPU podem fazer staking de SVIT para elevar sua pontuação de reputação e obter mais jobs.' },
      { term: 'VRAM (Memória de Acesso Aleatório de Vídeo)', body: 'Um tipo de RAM especificamente projetado para armazenar dados de imagem exibidos em uma tela. Para computação de IA, especialmente com grandes modelos, VRAM suficiente é crítica para o desempenho.' },
    ],
    footer: 'Este glossário é atualizado regularmente. Se você tiver dúvidas sobre termos específicos ou quiser sugerir adições, não hesite em contatar a comunidade Svitlo Chain.',
  },
  compare: {
    eyebrow: 'Comparação',
    title: 'Svitlo Chain vs. provedores de nuvem tradicionais',
    body: 'A Svitlo Chain está revolucionando o acesso a recursos de GPU para projetos de IA e machine learning. Esta comparação destaca como a Svitlo Chain difere de serviços de nuvem tradicionais como AWS, Google Cloud e Azure, e outros provedores de nuvem GPU centralizados.',
    tableHeaders: ['Dimensão', 'Svitlo Chain', 'Nuvem tradicional'],
    rows: [
      ['Preços (por GPU-hora)', 'Até 70% mais baixos, dinâmicos', 'Frequentemente mais caros, em camadas sob demanda'],
      ['Descentralização', 'Totalmente descentralizado (peer-to-peer)', 'Centralizado'],
      ['Flexibilidade', 'Sem contratos longos, pagamento por uso, sem fidelização', 'Frequentemente requer contratos, períodos de fidelização, acordos complexos'],
      ['Velocidade (combinação e execução de jobs)', 'Combinação rápida via rede P2P', 'Variável, pode sofrer gargalos sob alta demanda'],
      ['Transparência', 'Total transparência e verificabilidade via blockchain', 'Limitada, controlada corporativamente'],
      ['Comunidade', 'Desenvolvimento open-source e orientado pela comunidade', 'Grande ecossistema, mas não orientado pela comunidade'],
      ['Incentivos por token', 'Sim, tokens SVIT para fornecedores e usuários', 'Não'],
    ],
    footer: 'Como a tabela mostra, a Svitlo Chain oferece uma solução econômica, flexível e transparente para computação de GPU, impulsionada por um modelo descentralizado e engajamento da comunidade. Isso posiciona a Svitlo Chain como o futuro da computação de IA distribuída.',
  },
  cta: {
    title: 'Pronto para se juntar à revolução GPU descentralizada?',
    body: 'Seja para ganhar com sua computação ociosa ou precisar de poder de IA acessível e escalável, a Svitlo Chain tem a solução certa. Comece a construir seu futuro ou monetize seu hardware existente em minutos.',
    ctaPrimary: 'Torne-se fornecedor',
    ctaGlass: 'Comece a desenvolver',
  },
  contact: {
    eyebrow: 'Entre em contato',
    title: 'Contato e suporte',
    body: 'Tem perguntas, precisa de ajuda, ou quer se juntar à comunidade Svitlo Chain? Aqui estão todos os nossos canais de contato e recursos de suporte.',
    items: [
      { icon: '✉️', title: 'Suporte por email', body: 'svitlochain@gmail.com', href: 'mailto:svitlochain@gmail.com' },
      { icon: '✈️', title: 'Telegram', body: 'Junte-se ao nosso grupo do Telegram para atualizações rápidas e bate-papo com a comunidade.', href: 'https://t.me/+8t6LS2j4CyJiOTU0' },
      { icon: '💬', title: 'Comunidade no Discord', body: 'Junte-se ao nosso Discord para suporte em tempo real e discussões com a equipe e outros usuários.', href: 'https://discord.gg/9wqA3fMfg' },
      { icon: '🐦', title: 'Siga-nos no X', body: 'Fique atualizado com as últimas notícias e atualizações de produto.', href: 'https://x.com/Svitlochain' },
      { icon: '📘', title: 'Facebook', body: 'Siga nossa página no Facebook para notícias e atualizações da comunidade.', href: 'https://www.facebook.com/share/1D53mnv4kk/' },
      { icon: '🐙', title: 'Repositório GitHub', body: 'Explore nosso código open-source e contribua para o desenvolvimento da plataforma.' },
      { icon: '📄', title: 'Documentação', body: 'Leia nossos guias completos e especificações técnicas para começar.' },
      { icon: '📰', title: 'Blog da Svitlo Chain', body: 'Receba as últimas percepções, análises e notícias sobre IA descentralizada.' },
    ],
  },
  footer: {
    tagline: 'Uma blockchain Layer-1 para computação de IA e liquidação de inferência.',
    cols: [
      { title: 'Produto', links: [{ label: 'Plataforma', href: '/pt/platform/' }, { label: 'Documentação', href: '/pt/documentation/' }, { label: 'Para desenvolvedores', href: '#developers' }, { label: 'Para proprietários de GPU', href: '#gpu-owners' }, { label: 'Token SVIT', href: '#token' }] },
      { title: 'Empresa', links: [{ label: 'Roteiro', href: '#roadmap' }, { label: 'Perguntas frequentes', href: '#faq' }, { label: 'Contato', href: '#contact' }] },
      { title: 'Carteira', links: [{ label: 'Abrir carteira', href: '/pt/wallet/' }, { label: 'Política de privacidade', href: '/privacy/' }, { label: 'Suporte', href: '/support/' }] },
    ],
    copyright: '© 2026 Svitlo Chain. Todos os direitos reservados.',
  },
};
