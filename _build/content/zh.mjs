export default {
  meta: {
    lang: 'zh',
    title: 'Svitlo Chain — 去中心化GPU云',
    description: '面向AI的去中心化GPU市场 — 出租闲置GPU或提供您自己的硬件，由区块链保护。',
  },
  nav: {
    links: [
      { href: '/zh/wallet/', label: '钱包' },
      { href: '/zh/platform/', label: '平台' },
      { href: '/zh/documentation/', label: '文档' },
    ],
  },
  hero: {
    eyebrow: 'Layer-1 区块链',
    title: 'Svitlo Chain：去中心化GPU云',
    lede: '摆脱大型云厂商对GPU价格的垄断。出租闲置的GPU，或提供您自己的硬件并赚取真实收入 — 由AI驱动，由区块链保护。',
    ctaPrimary: '成为供应商',
    ctaGlass: '开始开发',
  },
  idea: {
    eyebrow: '为什么选择 Svitlo Chain',
    title: 'Svitlo Chain 背后的理念',
    body: [
      '云GPU市场被少数几家巨头 — AWS、Google、Azure — 所控制，它们设定高昂的价格，而数百万个GPU却在游戏PC、矿机和企业数据中心中闲置。Svitlo Chain的存在就是要改变这一切。',
      '这个概念很简单：一个去中心化的GPU市场，硬件所有者可以从未使用的算力中获利，AI开发者可以获得实惠、可扩展的算力，而无需被锁定在单一供应商上。没有中间商。没有加价。只有供需之间直接、无需信任的连接 — 由加密证明和透明的信誉系统保护。',
    ],
    cards: [
      { label: '问题', title: '中心化的云GPU', body: '中心化的云服务提供商控制着价格、可用性和访问权限 — 为AI创新制造瓶颈。' },
      { label: '解决方案', title: '点对点市场', body: '一个点对点GPU市场，将闲置硬件转变为能为所有者带来收益的生产性基础设施。' },
      { label: '愿景', title: '全球算力层', body: '一个全球性、抗审查的算力层，推动下一代AI应用的发展。' },
    ],
  },
  developers: {
    eyebrow: '工作原理',
    title: '面向AI开发者和构建者',
    body: [
      'Svitlo Chain让AI开发者能够以传统云成本的一小部分，即时访问全球GPU资源池 — 从消费级RTX显卡到企业级A100。无论您是在训练大型语言模型、进行大规模推理，还是渲染复杂的模拟，Svitlo Chain都能在几秒钟内将您的工作负载与合适的硬件匹配。',
      '该平台自动处理任务调度、安全容器化和计费。构建者通过CLI或API进行部署，指定其GPU需求，并且仅需为实际使用的算力付费 — 没有长期合约，没有最低消费。',
    ],
    steps: [
      { title: '指定GPU需求', body: '选择显存、算力和地区。' },
      { title: '通过CLI或API部署', body: '提交您的容器并立即开始计算。' },
      { title: '按使用量付费', body: '无需合约。以SVIT或稳定币计费。' },
    ],
    quickstartTitle: '开发者指南：Svitlo Chain快速入门',
    quickstartLede: '作为AI开发者，您需要快速、经济、可扩展地访问GPU资源。本快速入门指南将带您从身份验证到完成第一个任务并获得结果。',
    steps2: [
      {
        n: '1', title: 'API身份验证与设置',
        body: '要与Svitlo Chain API进行交互，您需要在注册后从开发者仪表板获取API密钥。对于Python开发者，我们建议使用我们的SDK以实现顺畅集成；其他语言可以直接调用REST API。',
        code: `<span class="kw">import</span> os
<span class="kw">import</span> svitlo_sdk

<span class="c1"># 从环境变量安全地读取API密钥</span>
API_KEY = os.environ.get(<span class="str">"SVIT_API_KEY"</span>)

<span class="kw">if not</span> API_KEY:
    <span class="kw">raise</span> ValueError(<span class="str">"未设置 SVIT_API_KEY。"</span>)

<span class="c1"># 初始化 Svitlo Chain SDK 客户端</span>
client = svitlo_sdk.SvitloClient(api_key=API_KEY)
print(<span class="str">"API客户端初始化成功。"</span>)`,
      },
      {
        n: '2', title: '提交您的第一个GPU任务',
        body: '提交GPU任务很简单。定义要运行的AI模型、要使用的输入数据以及所需的GPU资源。Svitlo Chain会自动将您的任务与网络上可用的供应商匹配。',
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
    print(<span class="fn">f</span><span class="str">"任务已提交！任务ID：{job.id}"</span>)
    print(<span class="fn">f</span><span class="str">"状态：{job.status}"</span>)
<span class="kw">except</span> Exception <span class="kw">as</span> e:
    print(<span class="fn">f</span><span class="str">"提交任务时出错：{e}"</span>)`,
      },
      {
        n: '3', title: '监控任务状态',
        body: '提交后，实时跟踪任务进度 — 查看错误并预估结果何时准备好。',
        code: `job_id = job.id

current_job = client.get_job_status(job_id)
print(<span class="fn">f</span><span class="str">"任务 {current_job.id}，状态：{current_job.status}"</span>)

<span class="kw">while</span> current_job.status <span class="kw">not in</span> [<span class="str">"COMPLETED"</span>, <span class="str">"FAILED"</span>]:
    time.sleep(30)
    current_job = client.get_job_status(job_id)
    print(<span class="fn">f</span><span class="str">"更新状态：{current_job.status}"</span>)

<span class="kw">if</span> current_job.status == <span class="str">"COMPLETED"</span>:
    print(<span class="str">"任务完成！"</span>)
<span class="kw">else</span>:
    print(<span class="str">"任务失败或已取消。"</span>)`,
      },
      {
        n: '4', title: '获取您的结果',
        body: '一旦您的GPU任务完成，输出将在您指定的位置（例如S3存储桶）可用。Svitlo Chain提供安全获取结果所需的连接详情。',
        code: `<span class="kw">if</span> current_job.status == <span class="str">"COMPLETED"</span>:
    print(<span class="fn">f</span><span class="str">"结果可在此获取：{current_job.output_data_location}"</span>)
<span class="kw">else</span>:
    print(<span class="str">"结果不可用 — 任务未完成或失败。"</span>)`,
      },
    ],
    billingTitle: '5. 支付与计费',
    billingBody: 'Svitlo Chain使用SVIT代币进行所有平台交易，确保透明度和效率。您将根据实际GPU使用量和任务时长计费 — 通常比传统云便宜高达70%。您可以在Svitlo Chain仪表板中跟踪使用历史和余额。',
  },
  gpuOwners: {
    eyebrow: '工作原理',
    title: '面向GPU所有者',
    body: 'GPU所有者 — 游戏玩家、矿工和数据中心 — 可以将闲置硬件连接到Svitlo Chain并赚取被动收入。Svitlo Chain客户端在后台运行，接受计算任务，在隔离的容器中执行它们，并返回经过加密验证的结果。供应商自行设置可用时段、价格和硬件规格。',
    cards: [
      { title: '安装客户端', body: '下载Svitlo Chain节点软件，连接您的GPU，几分钟内即可运行。支持Windows、Linux和Docker。' },
      { title: '设置您的条件', body: '设置每小时价格、最低显存和可用时间表。您可以控制硬件何时上市。' },
      { title: '自动赚取收益', body: '任务自动匹配、运行和验证。收益以SVIT或USDC直接支付到您的钱包。' },
    ],
    installTitle: 'GPU供应商安装指南',
    installLede: '成为Svitlo Chain GPU供应商很简单，可以让您从闲置算力中获利。按照以下步骤安装Svitlo Chain节点客户端，开始向全球AI开发者出租您的GPU资源。',
    installSteps: [
      {
        n: '1', title: '系统要求',
        body: '安装前，请确保您的系统满足以下要求：<b>操作系统：</b>Linux（推荐Ubuntu 20.04+）、Windows 10/11、macOS 13 Ventura或更高版本，或兼容Docker的环境。<b>GPU：</b>NVIDIA GeForce RTX 30系列或更新、NVIDIA A100/H100、AMD Radeon RX 6000系列或更新，或配备Metal Performance Shaders（MPS）的Apple Silicon。<b>内存：</b>最低16GB。<b>网络：</b>上传/下载至少100Mbps的稳定连接。',
      },
      {
        n: '2', title: '下载Svitlo Chain节点客户端',
        body: '从我们的官方网站或GitHub仓库获取最新的节点客户端。提供适用于所有平台的软件包。',
        code: `<span class="c1"># Linux</span>
wget https://svitlochain.com/node-client/svitlo-node-linux-amd64.tar.gz
tar -xzf svitlo-node-linux-amd64.tar.gz
<span class="kw">cd</span> svitlo-node`,
      },
      {
        n: '3', title: '安装和配置',
        body: '下载后，运行设置脚本并按照屏幕上的说明操作。在Apple Silicon上，启用Metal加速后端以获得最佳性能。',
        code: `arch
<span class="c1"># 在 Apple Silicon 上应显示 arm64</span>
<span class="kw">export</span> SVITLO_GPU_BACKEND=mps
<span class="kw">export</span> SVITLO_OPTIMIZE_APPLE_SILICON=<span class="kw">true</span>
svitlo-node start`,
      },
      {
        n: '4', title: '连接您的钱包',
        body: '要接收付款，您需要连接一个兼容的钱包。此钱包将存放您的SVIT收益。',
        code: `./svitlo-node wallet connect &lt;您的钱包地址&gt;`,
      },
      {
        n: '5', title: '设置定价和可用性',
        body: '您可以完全控制GPU的出租方式。',
        code: `./svitlo-node config <span class="kw">set</span> backend mps
./svitlo-node config <span class="kw">set</span> optimize_apple_silicon
./svitlo-node config <span class="kw">set</span> availability 24/7`,
      },
      {
        n: '6', title: '开始赚取收益',
        body: '一旦您的节点运行、连接并配置完成，您的GPU就会开始与AI计算任务匹配。在Svitlo Chain仪表板中监控收入和任务历史。',
      },
    ],
  },
  minerMode: {
    eyebrow: '矿工模式',
    title: '我们邀请矿工和GPU矿场加入',
    body: [
      '加密货币挖矿已经发生了变化。随着工作量证明奖励下降和电力成本上升，GPU矿场需要新的收入来源。Svitlo Chain的<b>矿工模式</b>让挖矿运营商能够立即将闲置硬件重新导向AI算力 — 无需重新配置基础设施。',
      '矿工模式是一个轻量级开关，可将您的矿机从挖矿转为出租算力。任务经过预验证，在沙盒中运行，收益实时跟踪。拥有10个以上GPU的矿场可获得优先任务路由和专属支持。',
    ],
    cards: [
      { title: '无停机切换', body: '在几秒钟内在挖矿和出租算力之间切换。无需更改硬件。' },
      { title: '更高的盈利潜力', body: 'AI算力需求经常超过供给 — 供应商每GPU小时的收益往往高于大多数挖矿业务。' },
      { title: '矿场控制面板', body: '从一个界面管理整个矿场。跟踪每个节点的收入、任务状态和正常运行时间。' },
    ],
    detailTitle: '矿工模式：专为规模化而构建',
    whyTitle: '为什么选择矿工模式？',
    whyBody: [
      '挖矿盈利能力并不稳定。Svitlo Chain上的GPU出租提供了稳定、可预测的收入基础 — 尤其是在熊市或网络难度上升时。',
      '矿工模式支持批量任务队列，因此您的矿场永远不会闲置。当AI需求下降时，只需一个命令即可切回挖矿。正是这种跨市场条件的灵活性，使Svitlo Chain与众不同。',
    ],
    cta: '了解更多关于矿工模式的信息',
    howTitle: '工作原理',
    steps: [
      { n: '01', title: '连接您的矿场', body: '在您现有的矿机上安装Svitlo Chain节点客户端。' },
      { n: '02', title: '启用矿工模式', body: '在挖矿的同时或替代挖矿出租算力。' },
      { n: '03', title: '赚取并跟踪', body: '实时跟踪收入、任务吞吐量和GPU利用率。' },
      { n: '04', title: '自由切换', body: '在市场条件有利时随时切回挖矿。' },
    ],
  },
  pricing: {
    eyebrow: '服务',
    title: '服务与定价',
    body: 'Svitlo Chain提供三个核心服务层级，每个层级都适合不同的AI工作负载 — 从基于文本的任务到实时语音处理。所有服务均按GPU小时计费，以SVIT支付的长期预订可享受折扣。',
    cards: [
      { title: '文本推理 / LLM', body: '运行大型语言模型、聊天机器人和文本生成任务。针对从RTX 4060到A100的硬件进行了优化。', price: '每小时起价$0.12' },
      { title: '图像生成', body: '大规模运行Stable Diffusion、FLUX和自定义图像模型。建议使用高显存GPU进行批量生成。', price: '每小时起价$0.28' },
      { title: '语音识别（STT）', body: '实时转录和语音处理管道。全球提供低延迟实例。', price: '每小时起价$0.18' },
    ],
    note: '所有价格均反映计算器v2的更新。以SVIT支付可额外获得10%的折扣。',
    revenueTitle: '供应商收入：真实数字',
    revenueLede: '您在Svitlo Chain上的收益直接取决于您的硬件。以下是基于当前市场需求和价格计算器v2的常见GPU配置的现实每小时收入估算。实际收入取决于可用性、任务类型和地区。',
    tableHeaders: ['GPU', '每小时费率', '月度预估（80%利用率）'],
    rows: [
      ['RTX 4060', '$0.12/时', '~$70'],
      ['RTX 4070 Ti', '$0.22/时', '~$127'],
      ['RTX 4080', '$0.35/时', '~$202'],
      ['RTX 4090', '$0.55/时', '~$317'],
      ['A40 / L40', '$0.80/时', '~$461'],
      ['A100 (40GB)', '$1.40/时', '~$806'],
      ['8× A100 集群', '$11.20/时', '~$6,451'],
    ],
    stats: [
      { num: '$6,451', label: '8× A100 集群', body: '80%利用率下的预估月收入 — 规模化的回报。' },
      { num: '80%', label: '目标利用率', body: '这是一个保守估计。高需求供应商通常超过90%。' },
      { num: '10+', label: 'GPU等级', body: '从消费级RTX显卡到企业级A100 — 每种GPU都有市场。' },
    ],
  },
  token: {
    eyebrow: '代币经济学',
    title: 'SVIT代币：三大实用支柱',
    body: 'SVIT是Svitlo Chain生态系统以及Svitlo Chain自有L1区块链的原生货币。SVIT驱动整个生态系统 — 从安全性和交易到质押、销毁和资本化。作为原生币，SVIT受益于快速交易、低手续费和高吞吐量。代币经济学的设计旨在通过通缩销毁机制、质押和上限供应量实现长期可持续性。',
    cards: [
      { icon: '💳', title: '支付与折扣', body: '以SVIT进行交易的供应商和开发者可在所有市场手续费上获得10%的折扣。SVIT是整个Svitlo Chain L1生态系统中任务支付和质押的首选货币，交易快速且便宜。' },
      { icon: '🛡️', title: '质押与信誉', body: '供应商质押SVIT以加入网络。诚信行为会提高信誉分数并解锁优先任务分配。恶意行为者将受到惩罚（削减），而Svitlo Chain的L1区块链即使在高负载下也能提供高效的协调。' },
      { icon: '🔥', title: '销毁与通缩', body: '每笔交易手续费的一部分将被永久销毁，随着时间的推移减少总供应量。随着生态系统活动的增长，销毁速度会加快 — 对SVIT产生通缩压力，而Svitlo Chain的低手续费使该机制保持高效。' },
    ],
    callout: 'SVIT的总供应量是有上限的。销毁事件可在链上公开验证。代币持有者还可以对平台更新和手续费结构进行投票。',
    infraTitle: 'SVIT的区块链基础设施',
    infraBody: '除了直接的实用性之外，Svitlo Chain还建立在自己的基础设施之上，以加强生态系统并使SVIT的使用更加顺畅。',
    infraCards: [
      { title: 'SVIT的L1区块链', body: 'SVIT是Svitlo Chain自有L1区块链的原生币，总发行量为10亿枚。它是生态系统安全、交易流、质押、销毁和长期资本化的支柱。所有活动都直接与SVIT的价值和可持续性挂钩。' },
      { title: 'Svitlo Wallet', body: 'Svitlo Wallet是一个简单的钱包，用于在整个Svitlo Chain生态系统中存储、发送和使用SVIT。', href: '/zh/wallet/', linkLabel: '了解更多' },
    ],
  },
  enterprise: {
    eyebrow: '企业服务',
    title: '商业、信任与入门',
    companyTitle: '企业层级',
    companyBody: '需要SLA、专属支持和访问私有集群的组织可以通过Svitlo Chain的企业计划加入。每个层级都包括计算任务的加密验证、链上信誉跟踪，以及用于企业采购合规的完整文档。',
    tableHeaders: ['层级', '功能'],
    tiers: [
      ['Starter', 'API访问、公开市场、SVIT支付'],
      ['Growth', '优先路由、专属支持、集群CLI'],
      ['Enterprise', 'SLA保证、私有集群、合规套件、白手套式入门服务'],
    ],
    trustTitle: '信任与安全',
    trustItems: [
      { title: 'SHA-256验证', body: '每个计算任务都经过加密验证 — 供应商无法伪造结果。' },
      { title: '信誉系统', body: '链上评分奖励持续、诚信的供应商，并过滤掉恶意行为者。' },
      { title: '合规就绪', body: '在您首选的地区提供企业文档、审计日志和数据驻留选项。' },
    ],
    joinTitle: '立即加入Svitlo Chain',
    joinCards: [
      { icon: '🖥️', title: '供应商', body: '将您闲置的GPU变现，赚取被动收入。' },
      { icon: '⚡', title: '开发者', body: '为您的AI项目获取实惠、可扩展的GPU算力。' },
      { icon: '⛏️', title: '挖矿运营商', body: '使用矿工模式将您的挖矿基础设施转变为AI算力。' },
    ],
  },
  roadmap: {
    eyebrow: '路线图',
    title: '我们的路线图：Svitlo Chain的未来',
    body: 'Svitlo Chain持续发展，以满足对去中心化GPU算力日益增长的需求。我们的路线图专注于战略增长，并为供应商和开发者提供价值。',
    milestones: [
      { when: '2026年第三季度', title: '发布', body: 'Svitlo Chain平台正式发布，具备GPU出租和矿工模式的核心功能。' },
      { when: '2026年第四季度', title: '企业功能', body: '为大型客户提供企业层级、专属支持、SLA和高级安全协议。' },
      { when: '2027年第一季度', title: '全球扩张', body: '扩大地理覆盖范围、建立新的区域数据中心，并建立合作伙伴关系以触及更广泛的受众。' },
      { when: '2027年第二季度', title: '高级分析', body: '用于优化GPU使用和收入跟踪的复杂分析工具。' },
    ],
    footer: '本路线图反映了我们当前的战略重点，但Svitlo Chain团队将保持敏捷，对市场状况和社区反馈做出响应。',
  },
  faq: {
    eyebrow: '常见问题',
    title: '常见问题解答',
    body: '对Svitlo Chain有疑问吗？以下是供应商和开发者最常见问题的一些解答。',
    items: [
      { q: '我如何作为供应商开始？', a: '在您现有的矿机上安装Svitlo Chain节点客户端。然后启用"矿工模式"，开始出租您的算力，可以与现有挖矿并行，也可以替代挖矿。此过程设计得流畅而简单。' },
      { q: 'Svitlo Chain适用哪些费用？', a: 'Svitlo Chain拥有透明的费用结构以维持平台运营。使用我们的原生实用代币SVIT进行交易的用户可在所有市场手续费上获得10%的折扣。具体费用可能因任务类型和市场状况而异。' },
      { q: '我的数据和计算安全吗？', a: '是的。安全性是我们设计的核心。每个计算任务都通过SHA-256进行加密验证，确保供应商无法伪造结果。我们还在链上跟踪供应商信誉，并为高级安全需求提供企业合规套件。' },
      { q: '我可以使用任何GPU吗？', a: 'Svitlo Chain的设计具有灵活性，支持广泛的GPU，从RTX 4060等消费级型号到A100等强大的企业级GPU。该平台几乎为每种GPU配置提供市场，让您可以将拥有的任何硬件变现。' },
      { q: 'SVIT代币是什么？', a: 'SVIT是Svitlo Chain的原生实用代币，旨在实现支付、通过质押鼓励诚信行为，并管理平台的发展。它具有通缩销毁机制和上限供应量，以实现长期可持续性。' },
      { q: '我如何提取我的收益？', a: '您的Svitlo Chain收益会累积在您连接的钱包中。您可以随时提取，可以是SVIT，也可以通过平台集成的兑换选项转换为其他加密货币/法定货币。详情请参阅我们的文档。' },
    ],
  },
  stats: {
    eyebrow: '数据一览',
    title: 'Svitlo Chain数据一览：平台实力',
    body: 'Svitlo Chain持续呈指数级增长，推动着去中心化AI算力的未来。以下是该平台令人印象深刻的覆盖范围和效率的一瞥 — 与传统云服务提供商相比，这是一个经济高效的解决方案。',
    items: [
      { num: '250万+', label: '可用GPU小时数', body: '我们的网络已为AI任务提供了超过250万GPU小时，并且每月都在稳步增长。' },
      { num: '8,500+', label: '活跃供应商', body: '由超过8,500个独立供应商组成的不断增长的网络贡献了算力，确保了稳健性和可用性。' },
      { num: '70%', label: '平均成本节省', body: '与领先的云平台相比，在不影响性能的情况下，GPU算力最高可节省70%的成本。' },
      { num: '500+ PFLOPS', label: '总算力', body: '综合来看，Svitlo Chain提供超过500 PFLOPS的AI算力 — 在任何规模下都是强大的资源。' },
    ],
  },
  architecture: {
    eyebrow: '幕后原理',
    title: 'Svitlo Chain技术架构：系统如何运作',
    body: 'Svitlo Chain运行在一个强大的去中心化架构上，确保效率、安全性和透明度。以下是该平台背后技术机制的分解。',
    lanes: [
      { label: '开发者（客户端）', cells: ['提交AI任务'] },
      { label: 'Svitlo Chain平台', cells: ['匹配与调度', '→', '结果与证明', '→', '验证与结算'] },
      { label: 'GPU供应商', cells: ['获取并执行任务'] },
      { label: '区块链', cells: ['SHA-256验证', '→', 'SVIT支付', '→', '信誉系统'] },
    ],
    body2: 'Svitlo Chain使用区块链技术创造一个无需信任的环境，计算过程的每一步都是可验证和透明的，同时提供强大的安全性以保护用户数据和计算。',
    cards: [
      { title: '去中心化任务执行', body: 'AI任务被拆分并分布在GPU供应商网络中，优化可用算力的使用，并避免单点故障。' },
      { title: '安全容器化', body: '每个计算任务都在供应商硬件上的隔离容器环境中运行，防止未经授权的访问并确保数据完整性。' },
      { title: '区块链透明度', body: '每笔交易、任务规范和验证证明都记录在链上，以实现完全透明和不可抵赖性。' },
    ],
  },
  glossary: {
    eyebrow: '参考资料',
    title: '词汇表',
    body: '为了更容易理解Svitlo Chain和更广泛的去中心化AI生态系统，我们汇编了一份常见技术术语词汇表 — 无论您是经验丰富的技术用户还是该领域的新手，都能清晰简明地理解。',
    terms: [
      { term: '区块链', body: '一种分布式、不可篡改的数字账本，由加密链接的交易"区块"组成。每个区块都包含时间戳和对前一个区块的引用，从而创建安全透明的历史记录。' },
      { term: '容器化', body: '一种虚拟化技术，将应用程序代码与其所有依赖项（库、工具、配置）一起打包到一个隔离的"容器"中。这确保了应用程序无论部署在何处都能一致地运行。' },
      { term: '加密证明', body: '用于验证数据或交易的真实性和完整性的数学方法。它无需各方相互信任即可实现安全通信和验证。' },
      { term: 'CUDA', body: 'NVIDIA开发的并行计算平台和编程模型。CUDA让开发者能够使用NVIDIA GPU进行通用计算，极大地加速了计算密集型任务，尤其是在AI领域。' },
      { term: '去中心化', body: '将控制权和决策权分布在整个网络上，而不是集中在单一权威机构的原则。在Svitlo Chain中，这意味着GPU资源分布在全球众多节点上。' },
      { term: 'Docker', body: '一种使用容器技术开发、发布和运行应用程序的流行平台。Docker容器确保Svitlo Chain客户端和AI任务能够隔离、高效地运行。' },
      { term: 'Svitlo Chain L1区块链', body: 'Svitlo Chain自有的L1区块链，用Rust编写，专为安全性、高速度和高效数据处理而设计。它构成了交易、程序逻辑和网络基础设施的基础。' },
      { term: 'GPU（图形处理单元）', body: '一种专用电子电路，旨在快速操作和更改内存，以加速帧缓冲区中的图像创建。GPU对大型数据集的并行处理也非常有效，使其非常适合AI计算。' },
      { term: '推理', body: '使用训练好的AI模型根据新的、未见过的数据进行预测或决策的过程。这是AI模型应用其所学知识的阶段。' },
      { term: '挖矿', body: '通过解决复杂的加密难题来验证并向区块链添加新交易的过程。在Svitlo Chain的"矿工模式"中，节点可以通过验证交易或执行AI计算来赚取收益。' },
      { term: '节点', body: '运行Svitlo Chain客户端软件并连接到网络的计算机或服务器。节点为网络提供计算资源（GPU）。' },
      { term: '点对点（P2P）', body: '一种节点之间无需中央服务器即可直接通信的网络。Svitlo Chain建立在P2P网络之上，以分发AI工作负载。' },
      { term: 'SVIT币', body: 'Svitlo Chain L1区块链的原生加密货币。SVIT用于支付GPU资源、奖励供应商以及参与网络治理。' },
      { term: '信誉分数', body: '一种评估Svitlo Chain GPU供应商可靠性和性能的系统。高分意味着更多的任务和更高的收益。' },
      { term: 'SHA-256', body: '一种产生256位（32字节）哈希值的加密哈希函数。它广泛应用于区块链技术，以确保数据完整性并为区块创建唯一标识符。' },
      { term: '削减（Slashing）', body: '去中心化网络中的一种惩罚机制，如果GPU供应商行为恶意或未能履行其义务，其部分质押将被没收。' },
      { term: '智能合约', body: '自动执行的合约，其协议条款直接写入代码中。当预定条件满足时，它们会在区块链上自动运行，从而消除对中间人的需求。' },
      { term: '质押', body: '锁定一定数量的加密货币（在Svitlo Chain上为SVIT）作为担保以支持网络运营的过程。GPU供应商可以质押SVIT来提高其信誉分数并获得更多任务。' },
      { term: '显存（VRAM）', body: '一种专门设计用于存储屏幕上显示的图像数据的RAM类型。对于AI计算，尤其是使用大型模型时，足够的显存对性能至关重要。' },
    ],
    footer: '本词汇表会定期更新。如果您对特定术语有疑问或想建议添加内容，请随时联系Svitlo Chain社区。',
  },
  compare: {
    eyebrow: '对比',
    title: 'Svitlo Chain 与传统云服务提供商对比',
    body: 'Svitlo Chain正在彻底改变AI和机器学习项目获取GPU资源的方式。本对比重点介绍了Svitlo Chain与AWS、Google Cloud和Azure等传统云服务以及其他中心化GPU云服务提供商的不同之处。',
    tableHeaders: ['维度', 'Svitlo Chain', '传统云服务'],
    rows: [
      ['价格（每GPU小时）', '低至70%的折扣，动态定价', '通常更贵，按需分级'],
      ['去中心化', '完全去中心化（点对点）', '中心化'],
      ['灵活性', '无长期合约，按需付费，无锁定期', '通常需要合约、锁定期、复杂协议'],
      ['速度（任务匹配与执行）', '通过P2P网络快速匹配', '不稳定，高需求下可能出现瓶颈'],
      ['透明度', '通过区块链实现完全透明和可验证性', '有限，由企业控制'],
      ['社区', '开源且由社区驱动的开发', '生态系统庞大，但非社区驱动'],
      ['代币激励', '有，为供应商和用户提供SVIT代币', '无'],
    ],
    footer: '如表所示，Svitlo Chain凭借去中心化模式和社区参与，为GPU算力提供了经济高效、灵活且透明的解决方案。这使Svitlo Chain成为分布式AI算力的未来。',
  },
  cta: {
    title: '准备好加入去中心化GPU革命了吗？',
    body: '无论您是想通过闲置算力赚取收益，还是需要实惠、可扩展的AI算力，Svitlo Chain都能提供合适的解决方案。几分钟内即可开始构建您的未来，或将您现有的硬件变现。',
    ctaPrimary: '成为供应商',
    ctaGlass: '开始开发',
  },
  contact: {
    eyebrow: '联系我们',
    title: '联系与支持',
    body: '有疑问、需要帮助，或想加入Svitlo Chain社区吗？以下是我们所有的联系渠道和支持资源。',
    items: [
      { icon: '✉️', title: '邮件支持', body: 'svitlochain@gmail.com', href: 'mailto:svitlochain@gmail.com' },
      { icon: '✈️', title: 'Telegram', body: '加入我们的Telegram群组，获取快速更新并与社区聊天。', href: 'https://t.me/+8t6LS2j4CyJiOTU0' },
      { icon: '💬', title: 'Discord社区', body: '加入我们的Discord，获得实时支持并与团队及其他用户讨论。', href: 'https://discord.gg/9wqA3fMfg' },
      { icon: '🐦', title: '在X上关注我们', body: '及时了解最新消息和产品更新。', href: 'https://x.com/Svitlochain' },
      { icon: '📘', title: 'Facebook', body: '关注我们的Facebook页面，获取新闻和社区更新。', href: 'https://www.facebook.com/share/1D53mnv4kk/' },
      { icon: '🐙', title: 'GitHub仓库', body: '探索我们的开源代码，为平台开发做出贡献。' },
      { icon: '📄', title: '文档', body: '阅读我们全面的指南和技术规范以开始使用。' },
      { icon: '📰', title: 'Svitlo Chain博客', body: '获取关于去中心化AI的最新见解、分析和新闻。' },
    ],
  },
  footer: {
    tagline: '面向AI算力和推理结算的Layer-1区块链。',
    cols: [
      { title: '产品', links: [{ label: '平台', href: '/zh/platform/' }, { label: '文档', href: '/zh/documentation/' }, { label: '面向开发者', href: '#developers' }, { label: '面向GPU所有者', href: '#gpu-owners' }, { label: 'SVIT代币', href: '#token' }] },
      { title: '公司', links: [{ label: '路线图', href: '#roadmap' }, { label: '常见问题', href: '#faq' }, { label: '联系方式', href: '#contact' }] },
      { title: '钱包', links: [{ label: '打开钱包', href: '/zh/wallet/' }, { label: '隐私政策', href: '/privacy/' }, { label: '支持', href: '/support/' }] },
    ],
    copyright: '© 2026 Svitlo Chain. 保留所有权利。',
  },
};
