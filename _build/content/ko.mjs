export default {
  meta: {
    lang: 'ko',
    title: 'Svitlo Chain — 탈중앙화 GPU 클라우드',
    description: 'AI를 위한 탈중앙화 GPU 마켓플레이스 — 유휴 GPU를 대여하거나 자신의 하드웨어를 제공하세요, 블록체인으로 보호됩니다.',
  },
  nav: {
    links: [
      { href: '/ko/wallet/', label: '지갑' },
      { href: '/ko/platform/', label: '플랫폼' },
      { href: '/ko/documentation/', label: '문서' },
    ],
  },
  hero: {
    eyebrow: '레이어 1 블록체인',
    title: 'Svitlo Chain: 탈중앙화 GPU 클라우드',
    lede: '대형 클라우드의 GPU 가격 독점에서 벗어나세요. 유휴 GPU를 대여하거나, 자신의 하드웨어를 제공하고 실질적인 수입을 얻으세요 — AI가 구동하고 블록체인이 보호합니다.',
    ctaPrimary: '공급자 되기',
    ctaGlass: '개발 시작하기',
  },
  idea: {
    eyebrow: 'Svitlo Chain을 선택하는 이유',
    title: 'Svitlo Chain의 아이디어',
    body: [
      '클라우드 GPU 시장은 AWS, Google, Azure와 같은 소수의 거대 기업이 장악하고 있으며, 이들은 프리미엄 가격을 책정하는 반면 수백만 개의 GPU가 게이밍 PC, 마이닝 리그, 기업 데이터센터에서 유휴 상태로 방치되어 있습니다. Svitlo Chain은 이를 바꾸기 위해 존재합니다.',
      '개념은 간단합니다: 하드웨어 소유자는 미사용 컴퓨팅 파워로 수익을 얻고, AI 개발자는 단일 공급업체에 얽매이지 않고 저렴하고 확장 가능한 용량을 얻을 수 있는 탈중앙화 GPU 마켓플레이스입니다. 중개자 없음. 추가 요금 없음. 암호학적 증명과 투명한 평판 시스템으로 보호되는, 공급과 수요 사이의 직접적이고 신뢰가 필요 없는 연결만 있을 뿐입니다.',
    ],
    cards: [
      { label: '문제', title: '중앙화된 클라우드 GPU', body: '중앙화된 클라우드 제공업체는 가격, 가용성, 접근을 통제하여 AI 혁신에 병목 현상을 만듭니다.' },
      { label: '해결책', title: 'P2P 마켓', body: '유휴 하드웨어를 소유자에게 수익을 지급하는 생산적인 인프라로 전환하는 P2P GPU 마켓플레이스입니다.' },
      { label: '비전', title: '글로벌 컴퓨팅 레이어', body: '차세대 AI 애플리케이션을 이끄는, 글로벌하고 검열 저항적인 컴퓨팅 파워 레이어입니다.' },
    ],
  },
  developers: {
    eyebrow: '작동 방식',
    title: 'AI 개발자와 빌더를 위해',
    body: [
      'Svitlo Chain은 AI 개발자에게 소비자용 RTX 카드부터 엔터프라이즈용 A100까지 아우르는 글로벌 GPU 풀에 대한 즉각적인 접근을 기존 클라우드 비용의 일부로 제공합니다. 대규모 언어 모델을 훈련하든, 대규모로 추론을 실행하든, 복잡한 시뮬레이션을 렌더링하든, Svitlo Chain은 몇 초 만에 작업 부하를 적합한 하드웨어에 매칭합니다.',
      '플랫폼은 작업 스케줄링, 안전한 컨테이너화, 청구를 자동으로 처리합니다. 빌더는 CLI 또는 API를 통해 배포하고, GPU 요구사항을 지정하며, 실제로 사용한 컴퓨팅에 대해서만 비용을 지불합니다 — 장기 계약도, 최소 약정도 없습니다.',
    ],
    steps: [
      { title: 'GPU 요구사항 지정', body: 'VRAM, 컴퓨팅 파워, 지역을 선택하세요.' },
      { title: 'CLI 또는 API로 배포', body: '컨테이너를 제출하고 즉시 컴퓨팅을 시작하세요.' },
      { title: '사용한 만큼 지불', body: '계약 없음. SVIT 또는 스테이블코인으로 청구됩니다.' },
    ],
    quickstartTitle: '개발자 가이드: Svitlo Chain 빠른 시작',
    quickstartLede: 'AI 개발자로서 여러분은 GPU 리소스에 대한 빠르고 비용 효율적이며 확장 가능한 접근이 필요합니다. 이 빠른 시작 가이드는 인증부터 첫 번째 작업 및 결과까지 안내합니다.',
    steps2: [
      {
        n: '1', title: 'API 인증 및 설정',
        body: 'Svitlo Chain API와 상호작용하려면 등록 후 개발자 대시보드에서 API 키가 필요합니다. Python 개발자에게는 원활한 통합을 위해 저희 SDK를 권장합니다. 다른 언어는 REST API를 직접 호출할 수 있습니다.',
        code: `<span class="kw">import</span> os
<span class="kw">import</span> svitlo_sdk

<span class="c1"># 환경 변수에서 안전하게 API 키를 읽기</span>
API_KEY = os.environ.get(<span class="str">"SVIT_API_KEY"</span>)

<span class="kw">if not</span> API_KEY:
    <span class="kw">raise</span> ValueError(<span class="str">"SVIT_API_KEY가 설정되지 않았습니다."</span>)

<span class="c1"># Svitlo Chain SDK 클라이언트 초기화</span>
client = svitlo_sdk.SvitloClient(api_key=API_KEY)
print(<span class="str">"API 클라이언트가 성공적으로 초기화되었습니다."</span>)`,
      },
      {
        n: '2', title: '첫 번째 GPU 작업 제출',
        body: 'GPU 작업 제출은 간단합니다. 실행할 AI 모델, 사용할 입력 데이터, 필요한 GPU 리소스를 정의하세요. Svitlo Chain은 네트워크에서 사용 가능한 공급자와 작업을 자동으로 매칭합니다.',
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
    print(<span class="fn">f</span><span class="str">"작업이 제출되었습니다! 작업 ID: {job.id}"</span>)
    print(<span class="fn">f</span><span class="str">"상태: {job.status}"</span>)
<span class="kw">except</span> Exception <span class="kw">as</span> e:
    print(<span class="fn">f</span><span class="str">"작업 제출 오류: {e}"</span>)`,
      },
      {
        n: '3', title: '작업 상태 모니터링',
        body: '제출 후 실시간으로 작업 진행 상황을 추적하세요 — 오류를 확인하고 결과가 준비될 시점을 예측할 수 있습니다.',
        code: `job_id = job.id

current_job = client.get_job_status(job_id)
print(<span class="fn">f</span><span class="str">"작업 {current_job.id}, 상태: {current_job.status}"</span>)

<span class="kw">while</span> current_job.status <span class="kw">not in</span> [<span class="str">"COMPLETED"</span>, <span class="str">"FAILED"</span>]:
    time.sleep(30)
    current_job = client.get_job_status(job_id)
    print(<span class="fn">f</span><span class="str">"업데이트된 상태: {current_job.status}"</span>)

<span class="kw">if</span> current_job.status == <span class="str">"COMPLETED"</span>:
    print(<span class="str">"작업 완료!"</span>)
<span class="kw">else</span>:
    print(<span class="str">"작업이 실패했거나 취소되었습니다."</span>)`,
      },
      {
        n: '4', title: '결과 가져오기',
        body: 'GPU 작업이 완료되면, 지정한 위치(예: S3 버킷)에서 출력을 사용할 수 있습니다. Svitlo Chain은 결과를 안전하게 가져오는 데 필요한 연결 세부 정보를 제공합니다.',
        code: `<span class="kw">if</span> current_job.status == <span class="str">"COMPLETED"</span>:
    print(<span class="fn">f</span><span class="str">"결과를 다음에서 사용할 수 있습니다: {current_job.output_data_location}"</span>)
<span class="kw">else</span>:
    print(<span class="str">"결과를 사용할 수 없습니다 — 작업이 완료되지 않았거나 실패했습니다."</span>)`,
      },
    ],
    billingTitle: '5. 결제 및 청구',
    billingBody: 'Svitlo Chain은 투명성과 효율성을 보장하기 위해 모든 플랫폼 거래에 SVIT 토큰을 사용합니다. 실제 GPU 사용량과 작업 시간에 따라 청구되며, 기존 클라우드보다 최대 70% 저렴한 경우가 많습니다. Svitlo Chain 대시보드에서 사용 내역과 잔액을 추적하세요.',
  },
  gpuOwners: {
    eyebrow: '작동 방식',
    title: 'GPU 소유자를 위해',
    body: 'GPU 소유자 — 게이머, 채굴자, 데이터센터 — 는 유휴 하드웨어를 Svitlo Chain에 연결하여 수동적인 수입을 얻을 수 있습니다. Svitlo Chain 클라이언트는 백그라운드에서 실행되며, 컴퓨팅 작업을 수락하고, 격리된 컨테이너에서 실행하며, 암호학적 검증과 함께 결과를 반환합니다. 공급자는 자신의 가용 시간, 가격, 하드웨어 사양을 스스로 설정합니다.',
    cards: [
      { title: '클라이언트 설치', body: 'Svitlo Chain 노드 소프트웨어를 다운로드하고, GPU를 연결한 후, 몇 분 만에 실행할 수 있습니다. Windows, Linux, Docker를 지원합니다.' },
      { title: '조건 설정', body: '시간당 요금, 최소 VRAM, 가용 일정을 설정하세요. 하드웨어가 언제 시장에 나올지는 당신이 관리합니다.' },
      { title: '자동으로 수익 창출', body: '작업이 자동으로 매칭, 실행, 검증됩니다. 지급은 SVIT 또는 USDC로 지갑에 직접 도착합니다.' },
    ],
    installTitle: 'GPU 공급자를 위한 설치 가이드',
    installLede: 'Svitlo Chain GPU 공급자가 되는 것은 간단하며, 유휴 컴퓨팅으로 수익을 얻을 수 있게 해줍니다. 다음 단계를 따라 Svitlo Chain 노드 클라이언트를 설치하고 전 세계 AI 개발자에게 GPU 리소스를 대여하기 시작하세요.',
    installSteps: [
      {
        n: '1', title: '시스템 요구사항',
        body: '설치하기 전에 시스템이 다음 요구사항을 충족하는지 확인하세요: <b>OS:</b> Linux(Ubuntu 20.04+ 권장), Windows 10/11, macOS 13 Ventura 이상, 또는 Docker 호환 환경. <b>GPU:</b> NVIDIA GeForce RTX 30 시리즈 이상, NVIDIA A100/H100, AMD Radeon RX 6000 시리즈 이상, 또는 Metal Performance Shaders(MPS)를 지원하는 Apple Silicon. <b>RAM:</b> 최소 16GB. <b>네트워크:</b> 업로드/다운로드 최소 100Mbps의 안정적인 연결.',
      },
      {
        n: '2', title: 'Svitlo Chain 노드 클라이언트 다운로드',
        body: '공식 사이트 또는 GitHub 저장소에서 최신 노드 클라이언트를 받으세요. 모든 플랫폼용 패키지를 제공합니다.',
        code: `<span class="c1"># Linux</span>
wget https://svitlochain.com/node-client/svitlo-node-linux-amd64.tar.gz
tar -xzf svitlo-node-linux-amd64.tar.gz
<span class="kw">cd</span> svitlo-node`,
      },
      {
        n: '3', title: '설치 및 구성',
        body: '다운로드 후 설정 스크립트를 실행하고 화면 안내를 따르세요. Apple Silicon에서는 최상의 성능을 위해 Metal 가속 백엔드를 활성화하세요.',
        code: `arch
<span class="c1"># Apple Silicon에서는 arm64가 예상됩니다</span>
<span class="kw">export</span> SVITLO_GPU_BACKEND=mps
<span class="kw">export</span> SVITLO_OPTIMIZE_APPLE_SILICON=<span class="kw">true</span>
svitlo-node start`,
      },
      {
        n: '4', title: '지갑 연결',
        body: '결제를 받으려면 호환되는 지갑을 연결해야 합니다. 이 지갑에는 SVIT 수익이 보관됩니다.',
        code: `./svitlo-node wallet connect &lt;내-지갑-주소&gt;`,
      },
      {
        n: '5', title: '가격 및 가용성 설정',
        body: 'GPU 대여 방식을 완전히 제어할 수 있습니다.',
        code: `./svitlo-node config <span class="kw">set</span> backend mps
./svitlo-node config <span class="kw">set</span> optimize_apple_silicon
./svitlo-node config <span class="kw">set</span> availability 24/7`,
      },
      {
        n: '6', title: '수익 창출 시작',
        body: '노드가 실행되고, 연결되고, 구성되면 GPU가 AI 컴퓨팅 작업과 매칭되기 시작합니다. Svitlo Chain 대시보드에서 수입과 작업 내역을 모니터링하세요.',
      },
    ],
  },
  minerMode: {
    eyebrow: '마이너 모드',
    title: '채굴자와 GPU 팜을 초대합니다',
    body: [
      '암호화폐 채굴이 변화했습니다. 작업 증명 보상이 감소하고 전기 비용이 상승함에 따라 GPU 팜에는 새로운 수입원이 필요합니다. Svitlo Chain의 <b>마이너 모드</b>는 채굴 운영자가 인프라를 재구성할 필요 없이 유휴 하드웨어를 즉시 AI 컴퓨팅으로 전환할 수 있게 해줍니다.',
      '마이너 모드는 리그를 채굴에서 컴퓨팅 파워 대여로 전환하는 경량 스위치입니다. 작업은 사전 검증을 거쳐 샌드박스에서 실행되며, 수익은 실시간으로 추적됩니다. 10개 이상의 GPU를 보유한 팜은 우선 작업 라우팅과 전담 지원을 받습니다.',
    ],
    cards: [
      { title: '다운타임 없이 전환', body: '채굴과 컴퓨팅 파워 대여 사이를 몇 초 만에 전환할 수 있습니다. 하드웨어 변경이 필요 없습니다.' },
      { title: '더 높은 수익 잠재력', body: 'AI 컴퓨팅에 대한 수요는 종종 공급을 초과합니다 — 공급자는 대부분의 채굴 작업보다 GPU 시간당 더 많이 버는 경우가 많습니다.' },
      { title: '팜 제어판', body: '하나의 인터페이스에서 전체 팜을 관리하세요. 모든 노드에서 수입, 작업 상태, 가동 시간을 추적합니다.' },
    ],
    detailTitle: '마이너 모드: 확장을 위해 구축됨',
    whyTitle: '왜 마이너 모드인가?',
    whyBody: [
      '채굴 수익성은 불안정합니다. Svitlo Chain의 GPU 대여는 특히 약세장이나 네트워크 난이도가 상승할 때 안정적이고 예측 가능한 수입 기반을 제공합니다.',
      '마이너 모드는 배치 작업 큐를 지원하므로 팜이 유휴 상태로 남는 일이 없습니다. AI 수요가 감소하면 단일 명령으로 다시 채굴로 전환하세요. 바로 이러한 시장 상황 전반에 걸친 유연성이 Svitlo Chain을 차별화합니다.',
    ],
    cta: '마이너 모드에 대해 더 알아보기',
    howTitle: '작동 방식',
    steps: [
      { n: '01', title: '팜 연결', body: '기존 채굴 리그에 Svitlo Chain 노드 클라이언트를 설치하세요.' },
      { n: '02', title: '마이너 모드 활성화', body: '채굴과 함께, 또는 채굴 대신 컴퓨팅을 대여하세요.' },
      { n: '03', title: '수익 창출 및 추적', body: '실시간으로 수입, 작업 처리량, GPU 사용률을 추적하세요.' },
      { n: '04', title: '자유롭게 전환', body: '시장 상황이 유리할 때 언제든지 채굴로 돌아가세요.' },
    ],
  },
  pricing: {
    eyebrow: '서비스',
    title: '서비스 및 가격',
    body: 'Svitlo Chain은 텍스트 기반 작업부터 실시간 음성 처리까지, 다양한 AI 워크로드에 적합한 세 가지 핵심 서비스 계층을 제공합니다. 모든 서비스는 GPU 시간당 청구되며, SVIT로 결제하는 장기 예약에는 할인이 제공됩니다.',
    cards: [
      { title: '텍스트 추론 / LLM', body: '대규모 언어 모델, 챗봇, 텍스트 생성 작업을 실행하세요. RTX 4060부터 A100까지의 하드웨어에 최적화되어 있습니다.', price: '시간당 $0.12부터' },
      { title: '이미지 생성', body: 'Stable Diffusion, FLUX, 맞춤형 이미지 모델을 대규모로 처리합니다. 배치 생성에는 고VRAM GPU를 권장합니다.', price: '시간당 $0.28부터' },
      { title: '음성 인식 (STT)', body: '실시간 전사 및 음성 처리 파이프라인. 전 세계적으로 저지연 인스턴스를 사용할 수 있습니다.', price: '시간당 $0.18부터' },
    ],
    note: '모든 가격은 계산기 v2 업데이트를 반영합니다. SVIT로 결제 시 추가 10% 할인을 받습니다.',
    revenueTitle: '공급자 수익: 실제 수치',
    revenueLede: 'Svitlo Chain에서의 수익은 하드웨어에 직접적으로 달려 있습니다. 아래는 현재 시장 수요와 가격 계산기 v2를 기반으로 한 일반적인 GPU 구성의 현실적인 시간당 수익 추정치입니다. 실제 수익은 가용성, 작업 유형, 지역에 따라 달라집니다.',
    tableHeaders: ['GPU', '시간당 요금', '월 예상 수익(80% 가동률)'],
    rows: [
      ['RTX 4060', '$0.12/시간', '~$70'],
      ['RTX 4070 Ti', '$0.22/시간', '~$127'],
      ['RTX 4080', '$0.35/시간', '~$202'],
      ['RTX 4090', '$0.55/시간', '~$317'],
      ['A40 / L40', '$0.80/시간', '~$461'],
      ['A100 (40GB)', '$1.40/시간', '~$806'],
      ['8× A100 플릿', '$11.20/시간', '~$6,451'],
    ],
    stats: [
      { num: '$6,451', label: '8× A100 플릿', body: '80% 가동률에서의 예상 월 수익 — 규모의 보상입니다.' },
      { num: '80%', label: '목표 가동률', body: '보수적인 추정치입니다. 수요가 높은 공급자는 종종 90%를 초과합니다.' },
      { num: '10+', label: 'GPU 등급', body: '소비자용 RTX 카드부터 엔터프라이즈용 A100까지 — 모든 GPU에 시장이 있습니다.' },
    ],
  },
  token: {
    eyebrow: '토크노믹스',
    title: 'SVIT 토큰: 세 가지 유용성의 기둥',
    body: 'SVIT는 Svitlo Chain 생태계와 Svitlo Chain 자체 L1 블록체인의 네이티브 통화입니다. SVIT는 보안 및 거래에서 스테이킹, 소각, 자본화에 이르기까지 전체 생태계를 구동합니다. 네이티브 코인으로서 SVIT는 빠른 거래, 낮은 수수료, 높은 처리량의 혜택을 받습니다. 토크노믹스는 디플레이션 소각 메커니즘, 스테이킹, 상한 공급량과 함께 장기적인 지속 가능성을 위해 설계되었습니다.',
    cards: [
      { icon: '💳', title: '결제 및 할인', body: 'SVIT로 거래하는 공급자와 개발자는 모든 마켓플레이스 수수료에서 10% 할인을 받습니다. SVIT는 Svitlo Chain L1 생태계 전반에서 작업 결제 및 스테이킹을 위한 선호 통화이며, 빠르고 저렴한 거래를 제공합니다.' },
      { icon: '🛡️', title: '스테이킹 및 평판', body: '공급자는 네트워크에 참여하기 위해 SVIT를 스테이킹합니다. 정직한 행동은 평판 점수를 높이고 우선 작업 배정을 잠금 해제합니다. 악의적인 행위자는 슬래싱(제재)을 받으며, Svitlo Chain의 L1 블록체인은 높은 부하 상황에서도 효율적인 조정을 제공합니다.' },
      { icon: '🔥', title: '소각 및 디플레이션', body: '모든 거래 수수료의 일부가 영구적으로 소각되어 시간이 지남에 따라 전체 공급량을 줄입니다. 생태계 활동이 증가함에 따라 소각률이 가속화되어 SVIT에 디플레이션 압력을 가하는 반면, Svitlo Chain의 낮은 수수료는 메커니즘의 효율성을 유지합니다.' },
    ],
    callout: 'SVIT의 총 공급량은 상한이 있습니다. 소각 이벤트는 온체인에서 공개적으로 검증할 수 있습니다. 토큰 보유자는 플랫폼 업데이트와 수수료 구조에 대해서도 투표합니다.',
    infraTitle: 'SVIT를 위한 블록체인 인프라',
    infraBody: '직접적인 유용성을 넘어, Svitlo Chain은 생태계를 강화하고 SVIT 사용을 더 원활하게 만드는 자체 인프라를 구축하고 있습니다.',
    infraCards: [
      { title: 'SVIT를 위한 L1 블록체인', body: 'SVIT는 총 발행량 10억 코인의 Svitlo Chain 자체 L1 블록체인의 네이티브 코인입니다. 생태계 보안, 거래 흐름, 스테이킹, 소각, 장기 자본화의 근간 역할을 합니다. 모든 활동은 SVIT의 가치와 지속 가능성에 직접 연결됩니다.' },
      { title: 'Svitlo Wallet', body: 'Svitlo Wallet은 Svitlo Chain 생태계 전체에서 SVIT를 저장, 전송, 사용하기 위한 간단한 지갑입니다.', href: '/ko/wallet/', linkLabel: '더 알아보기' },
    ],
  },
  enterprise: {
    eyebrow: '비즈니스용',
    title: '비즈니스, 신뢰, 그리고 시작하기',
    companyTitle: '기업 등급',
    companyBody: 'SLA, 전담 지원, 전용 플릿에 대한 액세스가 필요한 조직은 Svitlo Chain의 엔터프라이즈 프로그램을 통해 온보딩할 수 있습니다. 모든 등급에는 컴퓨팅 작업의 암호학적 검증, 온체인 평판 추적, 기업 조달 시 규정 준수를 위한 완전한 문서가 포함됩니다.',
    tableHeaders: ['등급', '기능'],
    tiers: [
      ['Starter', 'API 액세스, 공개 마켓플레이스, SVIT 결제'],
      ['Growth', '우선 라우팅, 전담 지원, 플릿 CLI'],
      ['Enterprise', 'SLA 보장, 전용 플릿, 규정 준수 패키지, 화이트글러브 온보딩'],
    ],
    trustTitle: '신뢰와 보안',
    trustItems: [
      { title: 'SHA-256 검증', body: '모든 컴퓨팅 작업은 암호학적으로 검증됩니다 — 공급자는 결과를 조작할 수 없습니다.' },
      { title: '평판 시스템', body: '온체인 점수는 일관되고 정직한 공급자에게 보상하고 악의적인 행위자를 걸러냅니다.' },
      { title: '규정 준수 준비 완료', body: '원하는 지역에서 기업 문서, 감사 로그, 데이터 상주 옵션을 제공합니다.' },
    ],
    joinTitle: '오늘 Svitlo Chain에 참여하세요',
    joinCards: [
      { icon: '🖥️', title: '공급자', body: '유휴 GPU를 수익화하고 수동적인 수입을 얻으세요.' },
      { icon: '⚡', title: '개발자', body: 'AI 프로젝트를 위해 저렴하고 확장 가능한 GPU 파워를 확보하세요.' },
      { icon: '⛏️', title: '채굴 운영자', body: '마이너 모드로 채굴 인프라를 AI 컴퓨팅으로 전환하세요.' },
    ],
  },
  roadmap: {
    eyebrow: '로드맵',
    title: '우리의 로드맵: Svitlo Chain의 미래',
    body: 'Svitlo Chain은 탈중앙화 GPU 컴퓨팅에 대한 증가하는 수요를 충족하기 위해 지속적으로 개발합니다. 저희 로드맵은 전략적 성장과 공급자 및 개발자 모두에게 가치를 제공하는 데 중점을 둡니다.',
    milestones: [
      { when: '2026년 3분기', title: '출시', body: 'GPU 대여 및 마이너 모드를 위한 핵심 기능을 갖춘 Svitlo Chain 플랫폼의 공식 출시.' },
      { when: '2026년 4분기', title: '엔터프라이즈 기능', body: '대규모 고객을 위한 엔터프라이즈 등급, 전담 지원, SLA, 고급 보안 프로토콜.' },
      { when: '2027년 1분기', title: '글로벌 확장', body: '지리적 범위 확대, 새로운 지역 데이터센터, 더 넓은 청중에게 다가가기 위한 파트너십.' },
      { when: '2027년 2분기', title: '고급 분석', body: 'GPU 사용 최적화 및 수익 추적을 위한 정교한 분석 도구.' },
    ],
    footer: '이 로드맵은 현재 저희의 전략적 우선순위를 반영하지만, Svitlo Chain 팀은 시장 상황과 커뮤니티 피드백에 민첩하고 신속하게 대응합니다.',
  },
  faq: {
    eyebrow: '질문',
    title: '자주 묻는 질문',
    body: 'Svitlo Chain에 대해 궁금한 점이 있으신가요? 공급자와 개발자 모두에게서 자주 나오는 몇 가지 질문에 대한 답변입니다.',
    items: [
      { q: '공급자로 어떻게 시작하나요?', a: '기존 채굴 리그에 Svitlo Chain 노드 클라이언트를 설치하세요. 그런 다음 "마이너 모드"를 활성화하여 기존 채굴과 함께 또는 그 대신 컴퓨팅 파워 대여를 시작하세요. 이 과정은 원활하고 간단하게 설계되었습니다.' },
      { q: 'Svitlo Chain에는 어떤 수수료가 적용되나요?', a: 'Svitlo Chain은 플랫폼 유지를 위한 투명한 수수료 구조를 가지고 있습니다. 저희의 네이티브 유틸리티 토큰인 SVIT로 거래하는 사용자는 모든 마켓플레이스 수수료에서 10% 할인을 받습니다. 구체적인 수수료는 작업 유형과 시장 상황에 따라 다를 수 있습니다.' },
      { q: '제 데이터와 계산은 안전한가요?', a: '네. 보안은 저희 설계의 핵심입니다. 모든 컴퓨팅 작업은 SHA-256을 통해 암호학적으로 검증되어 공급자가 결과를 조작할 수 없도록 보장합니다. 또한 온체인에서 공급자 평판을 추적하며, 고급 보안 요구사항을 위한 엔터프라이즈 규정 준수 패키지를 제공합니다.' },
      { q: '아무 GPU나 사용할 수 있나요?', a: 'Svitlo Chain은 유연하게 설계되어 RTX 4060과 같은 소비자 모델부터 A100과 같은 강력한 엔터프라이즈 GPU까지 광범위한 GPU를 지원합니다. 플랫폼에는 거의 모든 GPU 구성에 대한 시장이 있어 보유한 모든 하드웨어를 수익화할 수 있습니다.' },
      { q: 'SVIT 토큰이란 무엇인가요?', a: 'SVIT는 결제를 가능하게 하고, 스테이킹을 통해 정직한 행동을 장려하며, 플랫폼 개발을 관리하도록 설계된 Svitlo Chain의 네이티브 유틸리티 토큰입니다. 장기적인 지속 가능성을 위한 디플레이션 소각 메커니즘과 상한 공급량을 가지고 있습니다.' },
      { q: '수익은 어떻게 인출하나요?', a: 'Svitlo Chain 수익은 연결된 지갑에 누적됩니다. SVIT로 또는 플랫폼의 통합 교환 옵션을 통해 다른 암호화폐/법정화폐로 전환하여 언제든지 인출할 수 있습니다. 자세한 내용은 저희 문서를 참조하세요.' },
    ],
  },
  stats: {
    eyebrow: '숫자로 보기',
    title: '숫자로 보는 Svitlo Chain: 플랫폼의 강점',
    body: 'Svitlo Chain은 계속해서 기하급수적으로 성장하며 탈중앙화 AI 컴퓨팅의 미래를 이끌고 있습니다. 다음은 기존 클라우드 제공업체와 비교했을 때 비용 효율적인 솔루션인 플랫폼의 인상적인 범위와 효율성을 엿볼 수 있는 내용입니다.',
    items: [
      { num: '250만+', label: '사용 가능한 GPU 시간', body: '저희 네트워크를 통해 AI 작업을 위해 250만 GPU 시간 이상이 제공되었으며, 매달 꾸준히 증가하고 있습니다.' },
      { num: '8,500+', label: '활성 공급자', body: '8,500개 이상의 고유 공급자로 구성된 성장하는 네트워크가 컴퓨팅 파워를 제공하여 견고함과 가용성을 보장합니다.' },
      { num: '70%', label: '평균 비용 절감', body: '성능 저하 없이 주요 클라우드 플랫폼 대비 최대 70%의 GPU 컴퓨팅 비용을 절감하세요.' },
      { num: '500+ PFLOPS', label: '총 컴퓨팅 파워', body: '종합적으로 Svitlo Chain은 500 PFLOPS 이상의 AI 컴퓨팅 파워를 제공합니다 — 모든 규모에서 강력한 리소스입니다.' },
    ],
  },
  architecture: {
    eyebrow: '내부 구조',
    title: 'Svitlo Chain 기술 아키텍처: 시스템 작동 방식',
    body: 'Svitlo Chain은 효율성, 보안, 투명성을 보장하는 견고한 탈중앙화 아키텍처에서 운영됩니다. 다음은 플랫폼 이면의 기술적 메커니즘에 대한 분석입니다.',
    lanes: [
      { label: '개발자 (클라이언트)', cells: ['AI 작업 제출'] },
      { label: 'Svitlo Chain 플랫폼', cells: ['매칭 및 스케줄링', '→', '결과 및 증명', '→', '검증 및 정산'] },
      { label: 'GPU 공급자', cells: ['작업 가져오기 및 실행'] },
      { label: '블록체인', cells: ['SHA-256 검증', '→', 'SVIT 결제', '→', '평판 시스템'] },
    ],
    body2: 'Svitlo Chain은 블록체인 기술을 사용하여 신뢰가 필요 없는 환경을 조성하며, 컴퓨팅 프로세스의 모든 단계가 검증 가능하고 투명하며, 사용자 데이터와 계산을 보호하기 위한 견고한 보안을 제공합니다.',
    cards: [
      { title: '탈중앙화된 작업 실행', body: 'AI 작업은 GPU 공급자 네트워크 전체에 분할되고 분산되어 사용 가능한 컴퓨팅의 사용을 최적화하고 단일 장애 지점을 방지합니다.' },
      { title: '안전한 컨테이너화', body: '모든 컴퓨팅 작업은 공급자의 하드웨어에서 격리된 컨테이너 환경에서 실행되어 무단 접근을 방지하고 데이터 무결성을 보장합니다.' },
      { title: '블록체인 투명성', body: '모든 거래, 작업 사양, 검증 증명은 완전한 투명성과 부인 방지를 위해 온체인에 기록됩니다.' },
    ],
  },
  glossary: {
    eyebrow: '참조',
    title: '용어집',
    body: 'Svitlo Chain과 더 넓은 탈중앙화 AI 생태계를 더 쉽게 이해할 수 있도록, 숙련된 기술 사용자든 이 분야에 처음이든 명확하고 간결하게 일반적인 기술 용어집을 정리했습니다.',
    terms: [
      { term: '블록체인', body: '암호학적으로 연결된 거래 "블록"으로 구성된 분산되고 불변인 디지털 원장입니다. 각 블록에는 타임스탬프와 이전 블록에 대한 참조가 포함되어 안전하고 투명한 이력을 만듭니다.' },
      { term: '컨테이너화', body: '애플리케이션 코드를 모든 종속성(라이브러리, 도구, 구성)과 함께 격리된 "컨테이너"로 패키징하는 가상화 기술입니다. 이는 애플리케이션이 배포되는 위치와 관계없이 일관되게 실행되도록 보장합니다.' },
      { term: '암호학적 증명', body: '데이터나 거래의 진위성과 무결성을 검증하는 데 사용되는 수학적 방법입니다. 당사자가 서로 신뢰할 필요 없이 안전한 통신과 검증을 가능하게 합니다.' },
      { term: 'CUDA', body: 'NVIDIA가 개발한 병렬 컴퓨팅 플랫폼 및 프로그래밍 모델입니다. CUDA는 개발자가 범용 컴퓨팅에 NVIDIA GPU를 사용할 수 있게 하여, 특히 AI 분야에서 컴퓨팅 집약적인 작업을 크게 가속화합니다.' },
      { term: '탈중앙화', body: '통제와 의사결정을 단일 권한에 집중시키는 대신 네트워크 전체에 분산시키는 원칙입니다. Svitlo Chain에서는 이는 GPU 리소스가 전 세계 여러 노드에 분산되어 있음을 의미합니다.' },
      { term: 'Docker', body: '컨테이너 기술을 사용하여 애플리케이션을 개발, 배포, 실행하는 인기 있는 플랫폼입니다. Docker 컨테이너는 Svitlo Chain 클라이언트와 AI 작업이 격리되고 효율적으로 실행되도록 보장합니다.' },
      { term: 'Svitlo Chain L1 블록체인', body: 'Rust로 작성되고 보안, 고속, 효율적인 데이터 처리를 위해 설계된 Svitlo Chain 자체의 L1 블록체인입니다. 거래, 프로그램 로직, 네트워크 인프라의 기반을 형성합니다.' },
      { term: 'GPU (그래픽 처리 장치)', body: '프레임 버퍼에서 이미지 생성을 가속화하기 위해 메모리를 빠르게 조작하고 변경하도록 설계된 특수 전자 회로입니다. GPU는 대규모 데이터 세트의 병렬 처리에도 매우 효과적이어서 AI 컴퓨팅에 이상적입니다.' },
      { term: '추론', body: '훈련된 AI 모델을 사용하여 새로운, 본 적 없는 데이터를 기반으로 예측이나 결정을 내리는 과정입니다. 이는 AI 모델이 학습한 것을 적용하는 단계입니다.' },
      { term: '채굴', body: '복잡한 암호 퍼즐을 풀어 새로운 거래를 검증하고 블록체인에 추가하는 과정입니다. Svitlo Chain의 "마이너 모드"에서 노드는 거래를 검증하거나 AI 컴퓨팅을 수행하여 수익을 얻을 수 있습니다.' },
      { term: '노드', body: 'Svitlo Chain 클라이언트 소프트웨어를 실행하고 네트워크에 연결된 컴퓨터 또는 서버입니다. 노드는 네트워크에 컴퓨팅 리소스(GPU)를 제공합니다.' },
      { term: 'P2P(피어투피어)', body: '중앙 서버가 필요 없이 노드가 서로 직접 통신하는 네트워크입니다. Svitlo Chain은 AI 워크로드를 분산시키기 위해 P2P 네트워크를 기반으로 구축되었습니다.' },
      { term: 'SVIT 코인', body: 'Svitlo Chain의 L1 블록체인의 네이티브 암호화폐입니다. SVIT는 GPU 리소스 결제, 공급자 보상, 네트워크 거버넌스 참여에 사용됩니다.' },
      { term: '평판 점수', body: 'Svitlo Chain GPU 공급자의 신뢰성과 성능을 평가하는 시스템입니다. 높은 점수는 더 많은 작업과 더 높은 수익으로 이어집니다.' },
      { term: 'SHA-256', body: '256비트(32바이트) 해시 값을 생성하는 암호학적 해시 함수입니다. 데이터 무결성을 보장하고 블록에 대한 고유 식별자를 만들기 위해 블록체인 기술에서 광범위하게 사용됩니다.' },
      { term: '슬래싱', body: 'GPU 공급자가 악의적으로 행동하거나 의무를 이행하지 못할 경우 스테이크의 일부가 제거되는, 탈중앙화 네트워크의 처벌 메커니즘입니다.' },
      { term: '스마트 컨트랙트', body: '계약 조건이 코드에 직접 작성된 자체 실행 계약입니다. 사전 정의된 조건이 충족되면 블록체인에서 자동으로 실행되어 중개자의 필요성을 제거합니다.' },
      { term: '스테이킹', body: '네트워크 운영을 지원하기 위해 일정량의 암호화폐(Svitlo Chain에서는 SVIT)를 담보로 잠그는 과정입니다. GPU 공급자는 SVIT를 스테이킹하여 평판 점수를 높이고 더 많은 작업을 받을 수 있습니다.' },
      { term: 'VRAM(비디오 랜덤 액세스 메모리)', body: '화면에 표시되는 이미지 데이터를 저장하도록 특별히 설계된 RAM의 한 유형입니다. 특히 대규모 모델을 사용하는 AI 컴퓨팅에서는 충분한 VRAM이 성능에 중요합니다.' },
    ],
    footer: '이 용어집은 정기적으로 업데이트됩니다. 특정 용어에 대한 질문이 있거나 추가를 제안하고 싶다면, 주저하지 말고 Svitlo Chain 커뮤니티에 문의하세요.',
  },
  compare: {
    eyebrow: '비교',
    title: 'Svitlo Chain 대 기존 클라우드 제공업체',
    body: 'Svitlo Chain은 AI 및 머신러닝 프로젝트를 위한 GPU 리소스 접근에 혁신을 일으키고 있습니다. 이 비교는 Svitlo Chain이 AWS, Google Cloud, Azure와 같은 기존 클라우드 서비스 및 기타 중앙화된 GPU 클라우드 제공업체와 어떻게 다른지를 강조합니다.',
    tableHeaders: ['항목', 'Svitlo Chain', '기존 클라우드'],
    rows: [
      ['가격(GPU 시간당)', '최대 70% 저렴, 동적', '종종 더 비싸고, 온디맨드 단계별 요금'],
      ['탈중앙화', '완전히 탈중앙화(P2P)', '중앙화'],
      ['유연성', '장기 계약 없음, 사용한 만큼 결제, 잠금 없음', '종종 계약, 잠금 기간, 복잡한 계약이 필요함'],
      ['속도(작업 매칭 및 실행)', 'P2P 네트워크를 통한 빠른 매칭', '가변적, 높은 수요 시 병목 현상이 발생할 수 있음'],
      ['투명성', '블록체인을 통한 완전한 투명성과 검증 가능성', '제한적, 기업이 통제'],
      ['커뮤니티', '오픈소스이며 커뮤니티 주도 개발', '큰 생태계이지만 커뮤니티 주도가 아님'],
      ['토큰 인센티브', '있음, 공급자와 사용자를 위한 SVIT 토큰', '없음'],
    ],
    footer: '표에서 보듯이, Svitlo Chain은 탈중앙화 모델과 커뮤니티 참여로 구동되는, 비용 효율적이고 유연하며 투명한 GPU 컴퓨팅 솔루션을 제공합니다. 이는 Svitlo Chain을 분산 AI 컴퓨팅의 미래로 자리매김합니다.',
  },
  cta: {
    title: '탈중앙화 GPU 혁명에 참여할 준비가 되셨나요?',
    body: '유휴 컴퓨팅으로 수익을 얻고 싶든, 저렴하고 확장 가능한 AI 파워가 필요하든, Svitlo Chain에는 적합한 솔루션이 있습니다. 몇 분 만에 미래를 구축하거나 기존 하드웨어를 수익화하세요.',
    ctaPrimary: '공급자 되기',
    ctaGlass: '개발 시작하기',
  },
  contact: {
    eyebrow: '문의하기',
    title: '연락처 및 지원',
    body: '질문이 있거나 도움이 필요하거나 Svitlo Chain 커뮤니티에 참여하고 싶으신가요? 다음은 저희의 모든 연락 채널과 지원 리소스입니다.',
    items: [
      { icon: '✉️', title: '이메일 지원', body: 'svitlochain@gmail.com', href: 'mailto:svitlochain@gmail.com' },
      { icon: '✈️', title: 'Telegram', body: '빠른 업데이트와 커뮤니티 채팅을 위해 저희 Telegram 그룹에 참여하세요.', href: 'https://t.me/+8t6LS2j4CyJiOTU0' },
      { icon: '💬', title: 'Discord 커뮤니티', body: '팀 및 다른 사용자와 실시간 지원 및 토론을 위해 저희 Discord에 참여하세요.', href: 'https://discord.gg/9wqA3fMfg' },
      { icon: '🐦', title: 'X에서 팔로우하기', body: '최신 뉴스와 제품 업데이트를 놓치지 마세요.', href: 'https://x.com/Svitlochain' },
      { icon: '📘', title: 'Facebook', body: '뉴스와 커뮤니티 업데이트를 위해 저희 Facebook 페이지를 팔로우하세요.', href: 'https://www.facebook.com/share/1D53mnv4kk/' },
      { icon: '🐙', title: 'GitHub 저장소', body: '저희 오픈소스 코드를 살펴보고 플랫폼 개발에 기여하세요.' },
      { icon: '📄', title: '문서', body: '시작하기 위한 포괄적인 가이드와 기술 사양을 읽어보세요.' },
      { icon: '📰', title: 'Svitlo Chain 블로그', body: '탈중앙화 AI에 대한 최신 인사이트, 분석, 뉴스를 받아보세요.' },
    ],
  },
  footer: {
    tagline: 'AI 컴퓨팅 및 추론 정산을 위한 레이어 1 블록체인.',
    cols: [
      { title: '제품', links: [{ label: '플랫폼', href: '/ko/platform/' }, { label: '문서', href: '/ko/documentation/' }, { label: '개발자용', href: '#developers' }, { label: 'GPU 소유자용', href: '#gpu-owners' }, { label: 'SVIT 토큰', href: '#token' }] },
      { title: '회사', links: [{ label: '로드맵', href: '#roadmap' }, { label: 'FAQ', href: '#faq' }, { label: '연락처', href: '#contact' }] },
      { title: '지갑', links: [{ label: '지갑 열기', href: '/ko/wallet/' }, { label: '개인정보처리방침', href: '/privacy/' }, { label: '지원', href: '/support/' }] },
    ],
    copyright: '© 2026 Svitlo Chain. 모든 권리 보유.',
  },
};
