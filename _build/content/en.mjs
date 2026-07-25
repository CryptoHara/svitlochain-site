export default {
  meta: {
    lang: 'en',
    title: 'Svitlo Chain — Decentralized GPU Cloud',
    description: 'A decentralized GPU marketplace for AI — rent idle GPUs or list your own hardware, secured by blockchain.',
  },
  nav: {
    links: [
      { href: '#idea', label: 'Idea' },
      { href: '#developers', label: 'Developers' },
      { href: '#gpu-owners', label: 'GPU owners' },
      { href: '#token', label: 'Token' },
      { href: '#roadmap', label: 'Roadmap' },
      { href: '#faq', label: 'FAQ' },
    ],
  },
  hero: {
    eyebrow: 'Layer-1 blockchain',
    title: 'Svitlo Chain: decentralized GPU cloud',
    lede: 'Break free from Big Cloud’s monopoly on GPU pricing. Rent idle GPUs, or list your own hardware and earn real income — powered by AI, secured by blockchain.',
    ctaPrimary: 'Become a supplier',
    ctaGlass: 'Start building',
  },
  idea: {
    eyebrow: 'Why Svitlo Chain',
    title: 'The idea behind Svitlo Chain',
    body: [
      'The cloud GPU market is controlled by a handful of giants — AWS, Google, Azure — who set premium prices, while millions of GPUs sit idle in gaming PCs, mining rigs, and corporate data centers. Svitlo Chain exists to change that.',
      'The concept is simple: a decentralized GPU marketplace where hardware owners earn from unused compute, and AI developers get affordable, scalable capacity without being locked into a single vendor. No middlemen. No markups. Just a direct, trustless connection between supply and demand — secured by cryptographic proof and a transparent reputation system.',
    ],
    cards: [
      { label: 'Problem', title: 'Centralized cloud GPUs', body: 'Centralized cloud providers control price, availability, and access — creating bottlenecks for AI innovation.' },
      { label: 'Solution', title: 'A peer-to-peer market', body: 'A peer-to-peer GPU marketplace that turns idle hardware into productive infrastructure that pays its owners.' },
      { label: 'Vision', title: 'A global compute layer', body: 'A global, censorship-resistant layer for compute power, driving the next generation of AI applications.' },
    ],
  },
  developers: {
    eyebrow: 'How it works',
    title: 'For AI developers and builders',
    body: [
      'Svitlo Chain gives AI developers instant access to a global GPU pool — from consumer RTX cards to enterprise A100s — at a fraction of traditional cloud cost. Whether you’re training a large language model, running inference at scale, or rendering complex simulations, Svitlo Chain matches your workload to the right hardware in seconds.',
      'The platform handles job scheduling, secure containerization, and billing automatically. Builders deploy via CLI or API, specify their GPU requirements, and pay only for compute actually used — no long-term contracts, no minimum commitments.',
    ],
    steps: [
      { title: 'Specify GPU requirements', body: 'Choose VRAM, compute power, and region.' },
      { title: 'Deploy via CLI or API', body: 'Submit your container and start computing immediately.' },
      { title: 'Pay per use', body: 'No contracts. Billed in SVIT or stablecoin.' },
    ],
    quickstartTitle: 'Developer guide: quickstart with Svitlo Chain',
    quickstartLede: 'As an AI developer you need fast, cost-effective, scalable access to GPU resources. This quickstart gets you from authentication to your first job and result.',
    steps2: [
      {
        n: '1', title: 'API authentication and setup',
        body: 'To interact with the Svitlo Chain API, you need your API key from your developer dashboard after registering. For Python developers we recommend our SDK for a smooth integration; other languages can call the REST API directly.',
        code: `<span class="kw">import</span> os
<span class="kw">import</span> svitlo_sdk

<span class="c1"># Read the API key safely from an environment variable</span>
API_KEY = os.environ.get(<span class="str">"SVIT_API_KEY"</span>)

<span class="kw">if not</span> API_KEY:
    <span class="kw">raise</span> ValueError(<span class="str">"SVIT_API_KEY is not set."</span>)

<span class="c1"># Initialize the Svitlo Chain SDK client</span>
client = svitlo_sdk.SvitloClient(api_key=API_KEY)
print(<span class="str">"API client initialized successfully."</span>)`,
      },
      {
        n: '2', title: 'Submit your first GPU job',
        body: 'Submitting a GPU job is simple. Define which AI model to run, what input data to use, and which GPU resources are required. Svitlo Chain automatically matches your job to available providers on the network.',
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
    print(<span class="fn">f</span><span class="str">"Job submitted! Job ID: {job.id}"</span>)
    print(<span class="fn">f</span><span class="str">"Status: {job.status}"</span>)
<span class="kw">except</span> Exception <span class="kw">as</span> e:
    print(<span class="fn">f</span><span class="str">"Error submitting job: {e}"</span>)`,
      },
      {
        n: '3', title: 'Monitor job status',
        body: 'Once submitted, track your job’s progress in real time — see errors and estimate when results will be ready.',
        code: `job_id = job.id

current_job = client.get_job_status(job_id)
print(<span class="fn">f</span><span class="str">"Job {current_job.id}, status: {current_job.status}"</span>)

<span class="kw">while</span> current_job.status <span class="kw">not in</span> [<span class="str">"COMPLETED"</span>, <span class="str">"FAILED"</span>]:
    time.sleep(30)
    current_job = client.get_job_status(job_id)
    print(<span class="fn">f</span><span class="str">"Updated status: {current_job.status}"</span>)

<span class="kw">if</span> current_job.status == <span class="str">"COMPLETED"</span>:
    print(<span class="str">"Job complete!"</span>)
<span class="kw">else</span>:
    print(<span class="str">"Job failed or was cancelled."</span>)`,
      },
      {
        n: '4', title: 'Retrieve your results',
        body: 'Once your GPU job completes, output is available at the location you specified (e.g. an S3 bucket). Svitlo Chain provides the connection details you need to fetch results securely.',
        code: `<span class="kw">if</span> current_job.status == <span class="str">"COMPLETED"</span>:
    print(<span class="fn">f</span><span class="str">"Results available at: {current_job.output_data_location}"</span>)
<span class="kw">else</span>:
    print(<span class="str">"Results unavailable — job not complete or failed."</span>)`,
      },
    ],
    billingTitle: '5. Payment and billing',
    billingBody: 'Svitlo Chain uses the SVIT token for all platform transactions, ensuring transparency and efficiency. You’re billed for actual GPU usage and job duration — often up to 70% cheaper than traditional cloud. Track your usage history and balance from your Svitlo Chain dashboard.',
  },
  gpuOwners: {
    eyebrow: 'How it works',
    title: 'For GPU owners',
    body: 'GPU owners — gamers, miners, and data centers — can connect idle hardware to Svitlo Chain and earn passive income. The Svitlo Chain client runs in the background, accepts compute jobs, executes them in isolated containers, and returns results with cryptographic verification. Suppliers set their own availability windows, prices, and hardware specs.',
    cards: [
      { title: 'Install the client', body: 'Download the Svitlo Chain node software, connect your GPU, and get running in minutes. Windows, Linux, and Docker supported.' },
      { title: 'Set your terms', body: 'Set hourly prices, minimum VRAM, and availability schedule. You control when your hardware is on the market.' },
      { title: 'Earn automatically', body: 'Jobs are matched, run, and verified automatically. Payouts arrive in SVIT or USDC directly to your wallet.' },
    ],
    installTitle: 'Installation guide for GPU suppliers',
    installLede: 'Becoming a Svitlo Chain GPU supplier is simple and lets you earn from your idle compute. Follow these steps to install the Svitlo Chain node client and start renting your GPU resources to AI developers worldwide.',
    installSteps: [
      {
        n: '1', title: 'System requirements',
        body: 'Before installing, make sure your system meets these requirements: <b>OS:</b> Linux (Ubuntu 20.04+ recommended), Windows 10/11, macOS 13 Ventura or later, or a Docker-compatible environment. <b>GPU:</b> NVIDIA GeForce RTX 30-series or newer, NVIDIA A100/H100, AMD Radeon RX 6000-series or newer, or Apple Silicon with Metal Performance Shaders (MPS). <b>RAM:</b> 16 GB minimum. <b>Network:</b> a stable connection with at least 100 Mbps up/down.',
      },
      {
        n: '2', title: 'Download the Svitlo Chain node client',
        body: 'Get the latest node client from our official site or GitHub repo. Packages available for every platform.',
        code: `<span class="c1"># Linux</span>
wget https://svitlochain.com/node-client/svitlo-node-linux-amd64.tar.gz
tar -xzf svitlo-node-linux-amd64.tar.gz
<span class="kw">cd</span> svitlo-node`,
      },
      {
        n: '3', title: 'Install and configure',
        body: 'After downloading, run the setup script and follow on-screen instructions. On Apple Silicon, enable the Metal-accelerated backend for best performance.',
        code: `arch
<span class="c1"># expect arm64 on Apple Silicon</span>
<span class="kw">export</span> SVITLO_GPU_BACKEND=mps
<span class="kw">export</span> SVITLO_OPTIMIZE_APPLE_SILICON=<span class="kw">true</span>
svitlo-node start`,
      },
      {
        n: '4', title: 'Connect your wallet',
        body: 'To receive payment you need to connect a compatible wallet. This wallet will hold your SVIT earnings.',
        code: `./svitlo-node wallet connect &lt;your-wallet-address&gt;`,
      },
      {
        n: '5', title: 'Set pricing and availability',
        body: 'You have full control over how your GPUs are rented out.',
        code: `./svitlo-node config <span class="kw">set</span> backend mps
./svitlo-node config <span class="kw">set</span> optimize_apple_silicon
./svitlo-node config <span class="kw">set</span> availability 24/7`,
      },
      {
        n: '6', title: 'Start earning',
        body: 'Once your node is running, connected, and configured, your GPUs start matching with AI compute jobs. Monitor income and job history from the Svitlo Chain dashboard.',
      },
    ],
  },
  minerMode: {
    eyebrow: 'Miner Mode',
    title: 'We invite miners and GPU farms',
    body: [
      'Crypto mining has changed. With falling proof-of-work rewards and rising electricity costs, GPU farms need new income streams. <b>Miner Mode</b> from Svitlo Chain lets mining operators instantly redirect idle hardware to AI compute — without reconfiguring infrastructure.',
      'Miner Mode is a lightweight switch that moves your rig from mining to renting out compute power. Jobs go through pre-validation, run sandboxed, and earnings are tracked in real time. Farms with 10+ GPUs get priority job routing and dedicated support.',
    ],
    cards: [
      { title: 'Switch without downtime', body: 'Toggle between mining and renting compute power in seconds. No hardware changes needed.' },
      { title: 'Higher earning potential', body: 'Demand for AI compute often exceeds supply — suppliers frequently earn more per GPU-hour than in most mining operations.' },
      { title: 'Farm control panel', body: 'Manage your entire farm from one interface. Track income, job status, and uptime across every node.' },
    ],
    detailTitle: 'Miner Mode: built to scale',
    whyTitle: 'Why Miner Mode?',
    whyBody: [
      'Mining profitability is unstable. GPU rental on Svitlo Chain gives a stable, predictable income base — especially during bear markets or as network difficulty rises.',
      'Miner Mode supports a batch job queue, so your farm never sits idle. When AI demand drops, switch back to mining with a single command. It’s exactly this flexibility across market conditions that sets Svitlo Chain apart.',
    ],
    cta: 'Learn more about Miner Mode',
    howTitle: 'How it works',
    steps: [
      { n: '01', title: 'Connect your farm', body: 'Install the Svitlo Chain node client on your existing mining rig.' },
      { n: '02', title: 'Enable Miner Mode', body: 'Rent out compute alongside mining, or instead of it.' },
      { n: '03', title: 'Earn and track', body: 'Follow income in real time, job throughput, and GPU utilization.' },
      { n: '04', title: 'Switch freely', body: 'Go back to mining any time market conditions favor it.' },
    ],
  },
  pricing: {
    eyebrow: 'Services',
    title: 'Services and pricing',
    body: 'Svitlo Chain offers three core service tiers, each suited to different AI workloads — from text-based tasks to real-time voice processing. All services bill per GPU-hour, with discounts available for long-term reservations paid in SVIT.',
    cards: [
      { title: 'Text inference / LLM', body: 'Run large language models, chatbots, and text-generation tasks. Optimized for hardware from RTX 4060 to A100.', price: 'From $0.12/h' },
      { title: 'Image generation', body: 'Stable Diffusion, FLUX, and custom image models at scale. High-VRAM GPUs recommended for batch generation.', price: 'From $0.28/h' },
      { title: 'Speech recognition (STT)', body: 'Real-time transcription and voice-processing pipelines. Low-latency instances available worldwide.', price: 'From $0.18/h' },
    ],
    note: 'All prices reflect calculator v2 updates. Payments in SVIT receive an additional 10% discount.',
    revenueTitle: 'Supplier revenue: real numbers',
    revenueLede: 'Your earnings on Svitlo Chain depend directly on your hardware. Below is a realistic hourly-revenue estimate for common GPU configurations, based on current market demand and pricing calculator v2. Actual revenue depends on availability, job type, and region.',
    tableHeaders: ['GPU', 'Hourly rate', 'Est. per month (80% utilization)'],
    rows: [
      ['RTX 4060', '$0.12/h', '~$70'],
      ['RTX 4070 Ti', '$0.22/h', '~$127'],
      ['RTX 4080', '$0.35/h', '~$202'],
      ['RTX 4090', '$0.55/h', '~$317'],
      ['A40 / L40', '$0.80/h', '~$461'],
      ['A100 (40GB)', '$1.40/h', '~$806'],
      ['8× A100 fleet', '$11.20/h', '~$6,451'],
    ],
    stats: [
      { num: '$6,451', label: '8× A100 fleet', body: 'Estimated monthly revenue at 80% utilization — the payoff of scale.' },
      { num: '80%', label: 'Target utilization', body: 'A conservative estimate. High-demand suppliers often exceed 90%.' },
      { num: '10+', label: 'GPU tiers', body: 'From consumer RTX cards to enterprise A100s — there’s a market for every GPU.' },
    ],
  },
  token: {
    eyebrow: 'Tokenomics',
    title: 'The SVIT token: three pillars of utility',
    body: 'SVIT is the native currency of the Svitlo Chain ecosystem and of Svitlo Chain’s own L1 blockchain. SVIT drives the entire ecosystem — from security and transactions to staking, burning, and capitalization. As the native coin, SVIT benefits from fast transactions, low fees, and high throughput. Tokenomics is designed for long-term sustainability, with a deflationary burn mechanism, staking, and a capped supply.',
    cards: [
      { icon: '💳', title: 'Payments and discounts', body: 'Suppliers and developers who transact in SVIT get a 10% discount on all marketplace fees. SVIT is the preferred currency for job payments and staking across the Svitlo Chain L1 ecosystem, with fast, cheap transactions.' },
      { icon: '🛡️', title: 'Staking and reputation', body: 'Suppliers stake SVIT to join the network. Honest behavior raises reputation scores and unlocks priority job assignment. Bad actors are slashed, and Svitlo Chain’s L1 blockchain provides efficient coordination even under high load.' },
      { icon: '🔥', title: 'Burning and deflation', body: 'A portion of every transaction fee is burned permanently, reducing total supply over time. As ecosystem activity grows, the burn rate accelerates — creating deflationary pressure on SVIT, while Svitlo Chain’s low fees keep the mechanism efficient.' },
    ],
    callout: 'The total supply of SVIT is capped. Burn events are publicly verifiable on-chain. Token holders also vote on platform updates and fee structures.',
    infraTitle: 'Blockchain infrastructure for SVIT',
    infraBody: 'Beyond direct utility, Svitlo Chain builds on its own infrastructure that strengthens the ecosystem and makes using SVIT smoother.',
    infraCards: [
      { title: 'L1 blockchain for SVIT', body: 'SVIT is the native coin of Svitlo Chain’s own L1 blockchain, with a total emission of 1 billion coins. It serves as the backbone of the ecosystem’s security, transaction flow, staking, burning, and long-term capitalization. All activity links directly to SVIT’s value and sustainability.' },
      { title: 'Svitlo Wallet', body: 'Svitlo Wallet is a simple wallet for storing, sending, and using SVIT across the entire Svitlo Chain ecosystem.' },
    ],
  },
  enterprise: {
    eyebrow: 'For business',
    title: 'Business, trust, and getting started',
    companyTitle: 'Company tiers',
    companyBody: 'Organizations that need SLAs, dedicated support, and access to a private fleet can onboard through Svitlo Chain’s enterprise program. Every tier includes cryptographic verification of compute jobs, on-chain reputation tracking, and full documentation for compliance in corporate procurement.',
    tableHeaders: ['Tier', 'Features'],
    tiers: [
      ['Starter', 'API access, public marketplace, SVIT payments'],
      ['Growth', 'Priority routing, dedicated support, fleet CLI'],
      ['Enterprise', 'SLA guarantee, private fleet, compliance package, white-glove onboarding'],
    ],
    trustTitle: 'Trust and security',
    trustItems: [
      { title: 'SHA-256 verification', body: 'Every compute job is cryptographically verified — suppliers cannot falsify results.' },
      { title: 'Reputation system', body: 'On-chain scoring rewards consistent, honest suppliers and filters out bad actors.' },
      { title: 'Compliance ready', body: 'Enterprise documentation, audit logs, and data-residency options in your preferred region.' },
    ],
    joinTitle: 'Join Svitlo Chain today',
    joinCards: [
      { icon: '🖥️', title: 'Suppliers', body: 'Monetize your idle GPUs and earn passive income.' },
      { icon: '⚡', title: 'Developers', body: 'Get affordable, scalable GPU power for your AI projects.' },
      { icon: '⛏️', title: 'Mining operators', body: 'Turn your mining infrastructure into AI compute with Miner Mode.' },
    ],
  },
  roadmap: {
    eyebrow: 'Roadmap',
    title: 'Our roadmap: the future of Svitlo Chain',
    body: 'Svitlo Chain develops continuously to meet growing demand for decentralized GPU compute. Our roadmap focuses on strategic growth and delivering value to both suppliers and developers.',
    milestones: [
      { when: 'Q3 2026', title: 'Launch', body: 'Official launch of the Svitlo Chain platform, with core functionality for GPU rental and Miner Mode.' },
      { when: 'Q4 2026', title: 'Enterprise features', body: 'Enterprise tiers, dedicated support, SLAs, and advanced security protocols for larger customers.' },
      { when: 'Q1 2027', title: 'Global expansion', body: 'Expanded geographic coverage, new regional data centers, and partnerships to reach a broader audience.' },
      { when: 'Q2 2027', title: 'Advanced analytics', body: 'Sophisticated analytics tools for optimizing GPU usage and revenue tracking.' },
    ],
    footer: 'This roadmap reflects our current strategic priorities, but the Svitlo Chain team stays agile and responsive to market conditions and community feedback.',
  },
  faq: {
    eyebrow: 'Questions',
    title: 'Frequently asked questions',
    body: 'Have questions about Svitlo Chain? Here are answers to some of the most common ones from both suppliers and developers.',
    items: [
      { q: 'How do I get started as a supplier?', a: 'Install the Svitlo Chain node client on your existing mining rig. Then enable "Miner Mode" to start renting out your compute power, either alongside your existing mining or instead of it. The process is designed to be smooth and simple.' },
      { q: 'What fees apply on Svitlo Chain?', a: 'Svitlo Chain has a transparent fee structure to maintain the platform. Users who transact in our native utility token, SVIT, get a 10% discount on all marketplace fees. Specific fees can vary by job type and market conditions.' },
      { q: 'Are my data and computations secure?', a: 'Yes. Security is core to our design. Every compute job is verified cryptographically via SHA-256, ensuring suppliers cannot falsify results. We also track supplier reputation on-chain, and offer an enterprise compliance package for advanced security needs.' },
      { q: 'Can I use any GPU?', a: 'Svitlo Chain is built to be flexible and supports a wide range of GPUs, from consumer models like the RTX 4060 to powerful enterprise GPUs like the A100. The platform has a market for nearly every GPU configuration, letting you monetize whatever hardware you have.' },
      { q: 'What is the SVIT token?', a: 'SVIT is Svitlo Chain’s native utility token, designed to enable payments, encourage honest behavior through staking, and govern platform development. It has a deflationary burn mechanism and a capped supply for long-term sustainability.' },
      { q: 'How do I withdraw my earnings?', a: 'Your Svitlo Chain earnings accumulate in your connected wallet. You can withdraw at any time, either in SVIT or by converting to other cryptocurrencies/fiat via the platform’s integrated exchange options. Details are in our documentation.' },
    ],
  },
  stats: {
    eyebrow: 'By the numbers',
    title: 'Svitlo Chain by the numbers: platform strength',
    body: 'Svitlo Chain keeps growing exponentially, driving the future of decentralized AI compute. Here’s a glimpse of the platform’s impressive reach and efficiency — a cost-effective solution compared to traditional cloud providers.',
    items: [
      { num: '2.5M+', label: 'Available GPU-hours', body: 'Over 2.5 million GPU-hours have been delivered by our network for AI jobs, and steadily increasing every month.' },
      { num: '8,500+', label: 'Active suppliers', body: 'A growing network of 8,500+ unique suppliers contributes compute power, ensuring robustness and availability.' },
      { num: '70%', label: 'Average cost savings', body: 'Achieve up to 70% savings on GPU compute compared to leading cloud platforms, without compromising performance.' },
      { num: '500+ PFLOPS', label: 'Total compute power', body: 'Combined, Svitlo Chain delivers more than 500 PFLOPS of AI compute power — a formidable resource at every scale.' },
    ],
  },
  architecture: {
    eyebrow: 'Under the hood',
    title: 'Svitlo Chain technical architecture: how the system works',
    body: 'Svitlo Chain runs on a robust decentralized architecture that ensures efficiency, security, and transparency. Here’s a breakdown of the technical mechanisms behind the platform.',
    lanes: [
      { label: 'Developer (Client)', cells: ['Submit AI job'] },
      { label: 'Svitlo Chain platform', cells: ['Matching & scheduling', '→', 'Result & proof', '→', 'Verification & settlement'] },
      { label: 'GPU supplier', cells: ['Fetch & execute job'] },
      { label: 'Blockchain', cells: ['SHA-256 verification', '→', 'SVIT payment', '→', 'Reputation system'] },
    ],
    body2: 'Svitlo Chain uses blockchain technology to create a trustless environment, where every step of the compute process is verifiable and transparent, while offering robust security to protect user data and computations.',
    cards: [
      { title: 'Decentralized job execution', body: 'AI jobs are split up and distributed across the network of GPU suppliers, optimizing use of available compute and avoiding single points of failure.' },
      { title: 'Secure containerization', body: 'Every compute job runs in an isolated container environment on the supplier’s hardware, preventing unauthorized access and ensuring data integrity.' },
      { title: 'Blockchain transparency', body: 'Every transaction, job specification, and verification proof is recorded on-chain for full transparency and non-repudiation.' },
    ],
  },
  glossary: {
    eyebrow: 'Reference',
    title: 'Glossary',
    body: 'To make it easier to understand Svitlo Chain and the wider decentralized-AI ecosystem, we’ve compiled a glossary of common technical terms — clear and concise, whether you’re an experienced technical user or new to the space.',
    terms: [
      { term: 'Blockchain', body: 'A distributed, immutable digital ledger of cryptographically linked "blocks" of transactions. Each block contains a timestamp and reference to the previous block, creating a secure and transparent history.' },
      { term: 'Containerization', body: 'A virtualization technique that packages application code together with all its dependencies (libraries, tools, configuration) into an isolated "container." This ensures the application runs consistently, regardless of where it’s deployed.' },
      { term: 'Cryptographic proof', body: 'Mathematical methods used to verify the authenticity and integrity of data or transactions. It enables secure communication and verification without parties needing to trust one another.' },
      { term: 'CUDA', body: 'A parallel computing platform and programming model developed by NVIDIA. CUDA lets developers use NVIDIA GPUs for general-purpose computing, dramatically accelerating compute-intensive tasks, especially in AI.' },
      { term: 'Decentralization', body: 'The principle of distributing control and decision-making across a network rather than concentrating it in a single authority. In Svitlo Chain this means GPU resources are distributed among many nodes globally.' },
      { term: 'Docker', body: 'A popular platform for developing, shipping, and running applications using container technology. Docker containers ensure the Svitlo Chain client and AI jobs run isolated and efficiently.' },
      { term: 'Svitlo Chain L1 blockchain', body: 'Svitlo Chain’s own L1 blockchain, written in Rust and designed for security, high speed, and efficient data processing. It forms the foundation for transactions, program logic, and network infrastructure.' },
      { term: 'GPU (Graphics Processing Unit)', body: 'A specialized electronic circuit designed to rapidly manipulate and alter memory to accelerate image creation in a frame buffer. GPUs are also highly effective for parallel processing of large datasets, making them ideal for AI computation.' },
      { term: 'Inference', body: 'The process of using a trained AI model to make predictions or decisions based on new, unseen data. This is the phase where the AI model applies what it has learned.' },
      { term: 'Mining', body: 'The process of verifying and adding new transactions to a blockchain by solving complex cryptographic puzzles. In Svitlo Chain’s "Miner Mode," nodes can earn by validating transactions or performing AI compute.' },
      { term: 'Node', body: 'A computer or server running the Svitlo Chain client software and connected to the network. Nodes provide compute resources (GPUs) to the network.' },
      { term: 'Peer-to-peer (P2P)', body: 'A network where nodes communicate directly with one another without needing a central server. Svitlo Chain builds on a P2P network to distribute AI workloads.' },
      { term: 'SVIT coin', body: 'The native cryptocurrency of Svitlo Chain’s L1 blockchain. SVIT is used to pay for GPU resources, reward suppliers, and participate in network governance.' },
      { term: 'Reputation score', body: 'A system that assesses the reliability and performance of Svitlo Chain GPU suppliers. High scores lead to more jobs and higher earnings.' },
      { term: 'SHA-256', body: 'A cryptographic hash function that produces a 256-bit (32-byte) hash value. It is used extensively in blockchain technology to ensure data integrity and create unique identifiers for blocks.' },
      { term: 'Slashing', body: 'A penalty mechanism in decentralized networks where a portion of a GPU supplier’s stake is removed if they act maliciously or fail to meet their obligations.' },
      { term: 'Smart contracts', body: 'Self-executing contracts with the terms of the agreement written directly into code. They run automatically on a blockchain when predefined conditions are met, eliminating the need for intermediaries.' },
      { term: 'Staking', body: 'The process of locking up a certain amount of cryptocurrency (SVIT on Svitlo Chain) as security to support network operations. GPU suppliers can stake SVIT to raise their reputation score and get more jobs.' },
      { term: 'VRAM (Video Random Access Memory)', body: 'A type of RAM specifically designed to store image data displayed on a screen. For AI computation, especially with large models, sufficient VRAM is critical for performance.' },
    ],
    footer: 'This glossary is updated regularly. If you have questions about specific terms or want to suggest additions, don’t hesitate to contact the Svitlo Chain community.',
  },
  compare: {
    eyebrow: 'Comparison',
    title: 'Svitlo Chain vs. traditional cloud providers',
    body: 'Svitlo Chain is revolutionizing access to GPU resources for AI and machine learning projects. This comparison highlights how Svitlo Chain differs from traditional cloud services like AWS, Google Cloud, and Azure, and other centralized GPU cloud providers.',
    tableHeaders: ['Dimension', 'Svitlo Chain', 'Traditional cloud'],
    rows: [
      ['Pricing (per GPU-hour)', 'Up to 70% lower, dynamic', 'Often more expensive, tiered on-demand'],
      ['Decentralization', 'Fully decentralized (peer-to-peer)', 'Centralized'],
      ['Flexibility', 'No long contracts, pay-per-use, no lock-in', 'Often requires contracts, lock-in periods, complex agreements'],
      ['Speed (job matching & execution)', 'Fast matching via P2P network', 'Variable, can suffer bottlenecks under high demand'],
      ['Transparency', 'Full transparency and verifiability via blockchain', 'Limited, corporate-controlled'],
      ['Community', 'Open-source and community-driven development', 'Large ecosystem, but not community-driven'],
      ['Token incentives', 'Yes, SVIT tokens for suppliers and users', 'No'],
    ],
    footer: 'As the table shows, Svitlo Chain offers a cost-effective, flexible, and transparent solution for GPU compute, driven by a decentralized model and community engagement. This positions Svitlo Chain as the future of distributed AI compute.',
  },
  cta: {
    title: 'Ready to join the decentralized GPU revolution?',
    body: 'Whether you want to earn from your idle compute or need affordable, scalable AI power, Svitlo Chain has the right solution. Start building your future or monetize your existing hardware in minutes.',
    ctaPrimary: 'Become a supplier',
    ctaGlass: 'Start building',
  },
  contact: {
    eyebrow: 'Get in touch',
    title: 'Contact and support',
    body: 'Have questions, need help, or want to join the Svitlo Chain community? Here are all our contact channels and support resources.',
    items: [
      { icon: '✉️', title: 'Email support', body: 'svitlochain@gmail.com', href: 'mailto:svitlochain@gmail.com' },
      { icon: '💬', title: 'Discord community', body: 'Join our Discord for real-time support and discussion with the team and other users.' },
      { icon: '🐦', title: 'Follow us on X', body: 'Stay updated with the latest news and product updates.' },
      { icon: '🐙', title: 'GitHub repository', body: 'Explore our open-source code and contribute to the platform’s development.' },
      { icon: '📄', title: 'Documentation', body: 'Read our comprehensive guides and technical specifications to get started.' },
      { icon: '📰', title: 'Svitlo Chain blog', body: 'Get the latest insights, analysis, and news on decentralized AI.' },
    ],
  },
  footer: {
    tagline: 'A Layer-1 blockchain for AI compute and inference settlement.',
    cols: [
      { title: 'Product', links: [{ label: 'For developers', href: '#developers' }, { label: 'For GPU owners', href: '#gpu-owners' }, { label: 'SVIT token', href: '#token' }] },
      { title: 'Company', links: [{ label: 'Roadmap', href: '#roadmap' }, { label: 'FAQ', href: '#faq' }, { label: 'Contact', href: '#contact' }] },
      { title: 'Wallet', links: [{ label: 'Privacy policy', href: '/privacy/' }, { label: 'Support', href: '/support/' }] },
    ],
    copyright: '© 2026 Svitlo Chain. All rights reserved.',
  },
};
