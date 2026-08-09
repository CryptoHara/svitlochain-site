export default {
  meta: {
    lang: 'es',
    title: 'Svitlo Chain — Nube GPU descentralizada',
    description: 'Un mercado de GPU descentralizado para IA — alquila GPUs inactivas o pon tu propio hardware a disposición, protegido por blockchain.',
  },
  nav: {
    links: [
      { href: '/es/wallet/', label: 'Wallet' },
      { href: '/es/platform/', label: 'Plataforma' },
      { href: '/es/documentation/', label: 'Documentación' },
    ],
  },
  hero: {
    eyebrow: 'Blockchain Layer-1',
    title: 'Svitlo Chain: nube GPU descentralizada',
    lede: 'Libérate del monopolio de precios de GPU de las grandes nubes. Alquila GPUs inactivas, o pon tu propio hardware a disposición y gana ingresos reales — impulsado por IA, protegido por blockchain.',
    ctaPrimary: 'Conviértete en proveedor',
    ctaGlass: 'Empieza a desarrollar',
  },
  idea: {
    eyebrow: 'Por qué Svitlo Chain',
    title: 'La idea detrás de Svitlo Chain',
    body: [
      'El mercado de GPU en la nube está controlado por un puñado de gigantes — AWS, Google, Azure — que fijan precios premium, mientras millones de GPUs permanecen inactivas en PCs de gaming, granjas de minería y centros de datos corporativos. Svitlo Chain existe para cambiar eso.',
      'El concepto es simple: un mercado de GPU descentralizado donde los propietarios de hardware ganan con la computación no utilizada, y los desarrolladores de IA obtienen capacidad asequible y escalable sin quedar atados a un único proveedor. Sin intermediarios. Sin sobreprecios. Solo una conexión directa y sin confianza previa entre oferta y demanda — protegida por pruebas criptográficas y un sistema de reputación transparente.',
    ],
    cards: [
      { label: 'Problema', title: 'GPUs en la nube centralizadas', body: 'Los proveedores de nube centralizados controlan el precio, la disponibilidad y el acceso — creando cuellos de botella para la innovación en IA.' },
      { label: 'Solución', title: 'Un mercado peer-to-peer', body: 'Un mercado de GPU peer-to-peer que convierte el hardware inactivo en infraestructura productiva que paga a sus propietarios.' },
      { label: 'Visión', title: 'Una capa de cómputo global', body: 'Una capa global y resistente a la censura para el poder de cómputo, impulsando la próxima generación de aplicaciones de IA.' },
    ],
  },
  developers: {
    eyebrow: 'Cómo funciona',
    title: 'Para desarrolladores de IA y builders',
    body: [
      'Svitlo Chain da a los desarrolladores de IA acceso instantáneo a un pool global de GPU — desde tarjetas RTX de consumo hasta A100 empresariales — a una fracción del costo de la nube tradicional. Ya sea que entrenes un gran modelo de lenguaje, ejecutes inferencia a escala, o renderices simulaciones complejas, Svitlo Chain empareja tu carga de trabajo con el hardware adecuado en segundos.',
      'La plataforma gestiona automáticamente la programación de trabajos, la contenerización segura y la facturación. Los builders despliegan vía CLI o API, especifican sus requisitos de GPU, y pagan solo por el cómputo realmente utilizado — sin contratos a largo plazo, sin compromisos mínimos.',
    ],
    steps: [
      { title: 'Especifica los requisitos de GPU', body: 'Elige VRAM, poder de cómputo y región.' },
      { title: 'Despliega vía CLI o API', body: 'Envía tu contenedor y empieza a computar de inmediato.' },
      { title: 'Paga por uso', body: 'Sin contratos. Facturado en SVIT o stablecoin.' },
    ],
    quickstartTitle: 'Guía para desarrolladores: inicio rápido con Svitlo Chain',
    quickstartLede: 'Como desarrollador de IA necesitas acceso rápido, rentable y escalable a recursos de GPU. Esta guía rápida te lleva desde la autenticación hasta tu primer trabajo y resultado.',
    steps2: [
      {
        n: '1', title: 'Autenticación y configuración de la API',
        body: 'Para interactuar con la API de Svitlo Chain, necesitas tu clave API desde tu panel de desarrollador tras registrarte. Para desarrolladores de Python recomendamos nuestro SDK para una integración fluida; otros lenguajes pueden llamar a la API REST directamente.',
        code: `<span class="kw">import</span> os
<span class="kw">import</span> svitlo_sdk

<span class="c1"># Lee la clave API de forma segura desde una variable de entorno</span>
API_KEY = os.environ.get(<span class="str">"SVIT_API_KEY"</span>)

<span class="kw">if not</span> API_KEY:
    <span class="kw">raise</span> ValueError(<span class="str">"SVIT_API_KEY no está configurada."</span>)

<span class="c1"># Inicializa el cliente SDK de Svitlo Chain</span>
client = svitlo_sdk.SvitloClient(api_key=API_KEY)
print(<span class="str">"Cliente API inicializado correctamente."</span>)`,
      },
      {
        n: '2', title: 'Envía tu primer trabajo de GPU',
        body: 'Enviar un trabajo de GPU es simple. Define qué modelo de IA ejecutar, qué datos de entrada usar, y qué recursos de GPU se requieren. Svitlo Chain empareja automáticamente tu trabajo con los proveedores disponibles en la red.',
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
    print(<span class="fn">f</span><span class="str">"¡Trabajo enviado! ID del trabajo: {job.id}"</span>)
    print(<span class="fn">f</span><span class="str">"Estado: {job.status}"</span>)
<span class="kw">except</span> Exception <span class="kw">as</span> e:
    print(<span class="fn">f</span><span class="str">"Error al enviar el trabajo: {e}"</span>)`,
      },
      {
        n: '3', title: 'Monitorea el estado del trabajo',
        body: 'Una vez enviado, sigue el progreso de tu trabajo en tiempo real — mira errores y estima cuándo estarán listos los resultados.',
        code: `job_id = job.id

current_job = client.get_job_status(job_id)
print(<span class="fn">f</span><span class="str">"Trabajo {current_job.id}, estado: {current_job.status}"</span>)

<span class="kw">while</span> current_job.status <span class="kw">not in</span> [<span class="str">"COMPLETED"</span>, <span class="str">"FAILED"</span>]:
    time.sleep(30)
    current_job = client.get_job_status(job_id)
    print(<span class="fn">f</span><span class="str">"Estado actualizado: {current_job.status}"</span>)

<span class="kw">if</span> current_job.status == <span class="str">"COMPLETED"</span>:
    print(<span class="str">"¡Trabajo completado!"</span>)
<span class="kw">else</span>:
    print(<span class="str">"El trabajo falló o fue cancelado."</span>)`,
      },
      {
        n: '4', title: 'Recupera tus resultados',
        body: 'Una vez que tu trabajo de GPU se completa, la salida está disponible en la ubicación que especificaste (p. ej. un bucket de S3). Svitlo Chain proporciona los detalles de conexión que necesitas para obtener los resultados de forma segura.',
        code: `<span class="kw">if</span> current_job.status == <span class="str">"COMPLETED"</span>:
    print(<span class="fn">f</span><span class="str">"Resultados disponibles en: {current_job.output_data_location}"</span>)
<span class="kw">else</span>:
    print(<span class="str">"Resultados no disponibles — trabajo no completado o fallido."</span>)`,
      },
    ],
    billingTitle: '5. Pago y facturación',
    billingBody: 'Svitlo Chain usa el token SVIT para todas las transacciones de la plataforma, garantizando transparencia y eficiencia. Se te factura por el uso real de GPU y la duración del trabajo — a menudo hasta un 70% más barato que la nube tradicional. Sigue tu historial de uso y saldo desde tu panel de Svitlo Chain.',
  },
  gpuOwners: {
    eyebrow: 'Cómo funciona',
    title: 'Para propietarios de GPU',
    body: 'Los propietarios de GPU — gamers, mineros y centros de datos — pueden conectar hardware inactivo a Svitlo Chain y ganar ingresos pasivos. El cliente de Svitlo Chain se ejecuta en segundo plano, acepta trabajos de cómputo, los ejecuta en contenedores aislados y devuelve resultados con verificación criptográfica. Los proveedores establecen sus propias ventanas de disponibilidad, precios y especificaciones de hardware.',
    cards: [
      { title: 'Instala el cliente', body: 'Descarga el software del nodo Svitlo Chain, conecta tu GPU, y empieza a funcionar en minutos. Compatible con Windows, Linux y Docker.' },
      { title: 'Define tus condiciones', body: 'Establece tarifas por hora, VRAM mínima y horario de disponibilidad. Tú controlas cuándo tu hardware está en el mercado.' },
      { title: 'Gana automáticamente', body: 'Los trabajos se emparejan, ejecutan y verifican automáticamente. Los pagos llegan en SVIT o USDC directamente a tu wallet.' },
    ],
    installTitle: 'Guía de instalación para proveedores de GPU',
    installLede: 'Convertirse en proveedor de GPU de Svitlo Chain es simple y te permite ganar con tu cómputo inactivo. Sigue estos pasos para instalar el cliente de nodo de Svitlo Chain y empezar a alquilar tus recursos de GPU a desarrolladores de IA en todo el mundo.',
    installSteps: [
      {
        n: '1', title: 'Requisitos del sistema',
        body: 'Antes de instalar, asegúrate de que tu sistema cumple estos requisitos: <b>SO:</b> Linux (se recomienda Ubuntu 20.04+), Windows 10/11, macOS 13 Ventura o posterior, o un entorno compatible con Docker. <b>GPU:</b> NVIDIA GeForce serie RTX 30 o posterior, NVIDIA A100/H100, AMD Radeon RX serie 6000 o posterior, o Apple Silicon con Metal Performance Shaders (MPS). <b>RAM:</b> mínimo 16 GB. <b>Red:</b> conexión estable con al menos 100 Mbps de subida/bajada.',
      },
      {
        n: '2', title: 'Descarga el cliente de nodo de Svitlo Chain',
        body: 'Obtén el cliente de nodo más reciente desde nuestro sitio oficial o repositorio de GitHub. Paquetes disponibles para cada plataforma.',
        code: `<span class="c1"># Linux</span>
wget https://svitlochain.com/node-client/svitlo-node-linux-amd64.tar.gz
tar -xzf svitlo-node-linux-amd64.tar.gz
<span class="kw">cd</span> svitlo-node`,
      },
      {
        n: '3', title: 'Instala y configura',
        body: 'Después de descargar, ejecuta el script de configuración y sigue las instrucciones en pantalla. En Apple Silicon, activa el backend acelerado por Metal para un mejor rendimiento.',
        code: `arch
<span class="c1"># se espera arm64 en Apple Silicon</span>
<span class="kw">export</span> SVITLO_GPU_BACKEND=mps
<span class="kw">export</span> SVITLO_OPTIMIZE_APPLE_SILICON=<span class="kw">true</span>
svitlo-node start`,
      },
      {
        n: '4', title: 'Conecta tu wallet',
        body: 'Para recibir pagos necesitas conectar un wallet compatible. Este wallet contendrá tus ganancias en SVIT.',
        code: `./svitlo-node wallet connect &lt;tu-direccion-de-wallet&gt;`,
      },
      {
        n: '5', title: 'Configura precios y disponibilidad',
        body: 'Tienes control total sobre cómo se alquilan tus GPUs.',
        code: `./svitlo-node config <span class="kw">set</span> backend mps
./svitlo-node config <span class="kw">set</span> optimize_apple_silicon
./svitlo-node config <span class="kw">set</span> availability 24/7`,
      },
      {
        n: '6', title: 'Empieza a ganar',
        body: 'Una vez que tu nodo está en ejecución, conectado y configurado, tus GPUs empiezan a emparejarse con trabajos de cómputo de IA. Monitorea ingresos e historial de trabajos desde el panel de Svitlo Chain.',
      },
    ],
  },
  minerMode: {
    eyebrow: 'Miner Mode',
    title: 'Invitamos a mineros y granjas de GPU',
    body: [
      'La minería cripto ha cambiado. Con recompensas de proof-of-work en caída y costos eléctricos en aumento, las granjas de GPU necesitan nuevas fuentes de ingresos. <b>Miner Mode</b> de Svitlo Chain permite a los operadores de minería redirigir instantáneamente el hardware inactivo hacia el cómputo de IA — sin reconfigurar la infraestructura.',
      'Miner Mode es un interruptor ligero que mueve tu rig de la minería al alquiler de poder de cómputo. Los trabajos pasan por prevalidación, se ejecutan en sandbox, y las ganancias se rastrean en tiempo real. Las granjas con 10+ GPUs obtienen enrutamiento prioritario de trabajos y soporte dedicado.',
    ],
    cards: [
      { title: 'Cambia sin tiempo de inactividad', body: 'Alterna entre minería y alquiler de poder de cómputo en segundos. No se necesitan cambios de hardware.' },
      { title: 'Mayor potencial de ganancia', body: 'La demanda de cómputo de IA a menudo supera la oferta — los proveedores frecuentemente ganan más por GPU-hora que en la mayoría de las operaciones de minería.' },
      { title: 'Panel de control de granja', body: 'Gestiona toda tu granja desde una sola interfaz. Rastrea ingresos, estado de trabajos y tiempo de actividad en cada nodo.' },
    ],
    detailTitle: 'Miner Mode: construido para escalar',
    whyTitle: '¿Por qué Miner Mode?',
    whyBody: [
      'La rentabilidad de la minería es inestable. El alquiler de GPU en Svitlo Chain ofrece una base de ingresos estable y predecible — especialmente durante mercados bajistas o cuando aumenta la dificultad de la red.',
      'Miner Mode admite una cola de trabajos por lotes, así que tu granja nunca está inactiva. Cuando la demanda de IA baja, vuelve a la minería con un solo comando. Es exactamente esta flexibilidad ante las condiciones del mercado lo que distingue a Svitlo Chain.',
    ],
    cta: 'Más información sobre Miner Mode',
    howTitle: 'Cómo funciona',
    steps: [
      { n: '01', title: 'Conecta tu granja', body: 'Instala el cliente de nodo de Svitlo Chain en tu rig de minería existente.' },
      { n: '02', title: 'Activa Miner Mode', body: 'Alquila cómputo junto con la minería, o en su lugar.' },
      { n: '03', title: 'Gana y rastrea', body: 'Sigue los ingresos en tiempo real, el throughput de trabajos y la utilización de GPU.' },
      { n: '04', title: 'Cambia libremente', body: 'Vuelve a la minería en cualquier momento que las condiciones del mercado lo favorezcan.' },
    ],
  },
  pricing: {
    eyebrow: 'Servicios',
    title: 'Servicios y precios',
    body: 'Svitlo Chain ofrece tres niveles de servicio principales, cada uno adaptado a diferentes cargas de trabajo de IA — desde tareas de texto hasta procesamiento de voz en tiempo real. Todos los servicios facturan por GPU-hora, con descuentos disponibles para reservas a largo plazo pagadas en SVIT.',
    cards: [
      { title: 'Inferencia de texto / LLM', body: 'Ejecuta grandes modelos de lenguaje, chatbots y tareas de generación de texto. Optimizado para hardware desde RTX 4060 hasta A100.', price: 'Desde $0.12/h' },
      { title: 'Generación de imágenes', body: 'Stable Diffusion, FLUX y modelos de imagen personalizados a escala. Se recomiendan GPUs de alta VRAM para generación por lotes.', price: 'Desde $0.28/h' },
      { title: 'Reconocimiento de voz (STT)', body: 'Transcripción en tiempo real y pipelines de procesamiento de voz. Instancias de baja latencia disponibles en todo el mundo.', price: 'Desde $0.18/h' },
    ],
    note: 'Todos los precios reflejan las actualizaciones de la calculadora v2. Los pagos en SVIT reciben un 10% de descuento adicional.',
    revenueTitle: 'Ingresos de proveedores: números reales',
    revenueLede: 'Tus ganancias en Svitlo Chain dependen directamente de tu hardware. A continuación una estimación realista de ingresos por hora para configuraciones de GPU comunes, basada en la demanda de mercado actual y la calculadora de precios v2. Los ingresos reales dependen de disponibilidad, tipo de trabajo y región.',
    tableHeaders: ['GPU', 'Tarifa por hora', 'Est. mensual (80% de utilización)'],
    rows: [
      ['RTX 4060', '$0.12/h', '~$70'],
      ['RTX 4070 Ti', '$0.22/h', '~$127'],
      ['RTX 4080', '$0.35/h', '~$202'],
      ['RTX 4090', '$0.55/h', '~$317'],
      ['A40 / L40', '$0.80/h', '~$461'],
      ['A100 (40GB)', '$1.40/h', '~$806'],
      ['Flota de 8× A100', '$11.20/h', '~$6,451'],
    ],
    stats: [
      { num: '$6,451', label: 'Flota de 8× A100', body: 'Ingreso mensual estimado al 80% de utilización — la recompensa de la escala.' },
      { num: '80%', label: 'Utilización objetivo', body: 'Una estimación conservadora. Los proveedores de alta demanda a menudo superan el 90%.' },
      { num: '10+', label: 'Niveles de GPU', body: 'Desde tarjetas RTX de consumo hasta A100 empresariales — hay un mercado para cada GPU.' },
    ],
  },
  token: {
    eyebrow: 'Tokenomics',
    title: 'El token SVIT: tres pilares de utilidad',
    body: 'SVIT es la moneda nativa del ecosistema de Svitlo Chain y de la blockchain L1 propia de Svitlo Chain. SVIT impulsa todo el ecosistema — desde la seguridad y las transacciones hasta el staking, la quema y la capitalización. Como moneda nativa, SVIT se beneficia de transacciones rápidas, comisiones bajas y alto rendimiento. La tokenomics está diseñada para la sostenibilidad a largo plazo, con un mecanismo de quema deflacionario, staking y una oferta limitada.',
    cards: [
      { icon: '💳', title: 'Pagos y descuentos', body: 'Los proveedores y desarrolladores que transaccionan en SVIT obtienen un 10% de descuento en todas las comisiones del mercado. SVIT es la moneda preferida para pagos de trabajos y staking en todo el ecosistema L1 de Svitlo Chain, con transacciones rápidas y económicas.' },
      { icon: '🛡️', title: 'Staking y reputación', body: 'Los proveedores hacen staking de SVIT para unirse a la red. El comportamiento honesto eleva las puntuaciones de reputación y desbloquea la asignación prioritaria de trabajos. Los actores maliciosos son penalizados (slashing), y la blockchain L1 de Svitlo Chain proporciona una coordinación eficiente incluso bajo alta carga.' },
      { icon: '🔥', title: 'Quema y deflación', body: 'Una parte de cada comisión de transacción se quema permanentemente, reduciendo la oferta total con el tiempo. A medida que la actividad del ecosistema crece, la tasa de quema se acelera — creando presión deflacionaria sobre SVIT, mientras las bajas comisiones de Svitlo Chain mantienen el mecanismo eficiente.' },
    ],
    callout: 'La oferta total de SVIT está limitada. Los eventos de quema son verificables públicamente on-chain. Los poseedores de tokens también votan sobre actualizaciones de la plataforma y estructuras de comisiones.',
    infraTitle: 'Infraestructura blockchain para SVIT',
    infraBody: 'Más allá de la utilidad directa, Svitlo Chain se construye sobre su propia infraestructura que fortalece el ecosistema y hace más fluido el uso de SVIT.',
    infraCards: [
      { title: 'Blockchain L1 para SVIT', body: 'SVIT es la moneda nativa de la blockchain L1 propia de Svitlo Chain, con una emisión total de 1.000 millones de monedas. Sirve como columna vertebral de la seguridad del ecosistema, el flujo de transacciones, el staking, la quema y la capitalización a largo plazo. Toda la actividad se vincula directamente al valor y la sostenibilidad de SVIT.' },
      { title: 'Svitlo Wallet', body: 'Svitlo Wallet es un wallet simple para almacenar, enviar y usar SVIT en todo el ecosistema de Svitlo Chain.', href: '/es/wallet/', linkLabel: 'Más información' },
    ],
  },
  enterprise: {
    eyebrow: 'Para empresas',
    title: 'Negocios, confianza y cómo empezar',
    companyTitle: 'Niveles empresariales',
    companyBody: 'Las organizaciones que necesitan SLAs, soporte dedicado y acceso a una flota privada pueden incorporarse a través del programa empresarial de Svitlo Chain. Cada nivel incluye verificación criptográfica de trabajos de cómputo, seguimiento de reputación on-chain, y documentación completa para el cumplimiento en compras corporativas.',
    tableHeaders: ['Nivel', 'Características'],
    tiers: [
      ['Starter', 'Acceso a API, mercado público, pagos en SVIT'],
      ['Growth', 'Enrutamiento prioritario, soporte dedicado, CLI de flota'],
      ['Enterprise', 'SLA garantizado, flota privada, paquete de cumplimiento, incorporación white-glove'],
    ],
    trustTitle: 'Confianza y seguridad',
    trustItems: [
      { title: 'Verificación SHA-256', body: 'Cada trabajo de cómputo se verifica criptográficamente — los proveedores no pueden falsificar resultados.' },
      { title: 'Sistema de reputación', body: 'La puntuación on-chain premia a los proveedores consistentes y honestos, y filtra a los actores maliciosos.' },
      { title: 'Listo para cumplimiento', body: 'Documentación empresarial, registros de auditoría y opciones de residencia de datos en tu región preferida.' },
    ],
    joinTitle: 'Únete a Svitlo Chain hoy',
    joinCards: [
      { icon: '🖥️', title: 'Proveedores', body: 'Monetiza tus GPUs inactivas y gana ingresos pasivos.' },
      { icon: '⚡', title: 'Desarrolladores', body: 'Obtén poder de GPU asequible y escalable para tus proyectos de IA.' },
      { icon: '⛏️', title: 'Operadores de minería', body: 'Convierte tu infraestructura de minería en cómputo de IA con Miner Mode.' },
    ],
  },
  roadmap: {
    eyebrow: 'Hoja de ruta',
    title: 'Nuestra hoja de ruta: el futuro de Svitlo Chain',
    body: 'Svitlo Chain se desarrolla continuamente para satisfacer la creciente demanda de cómputo GPU descentralizado. Nuestra hoja de ruta se centra en el crecimiento estratégico y en entregar valor tanto a proveedores como a desarrolladores.',
    milestones: [
      { when: 'T3 2026', title: 'Lanzamiento', body: 'Lanzamiento oficial de la plataforma Svitlo Chain, con funcionalidad principal para el alquiler de GPU y Miner Mode.' },
      { when: 'T4 2026', title: 'Funciones empresariales', body: 'Niveles empresariales, soporte dedicado, SLAs y protocolos de seguridad avanzados para clientes más grandes.' },
      { when: 'T1 2027', title: 'Expansión global', body: 'Cobertura geográfica ampliada, nuevos centros de datos regionales y alianzas para llegar a una audiencia más amplia.' },
      { when: 'T2 2027', title: 'Analítica avanzada', body: 'Herramientas analíticas sofisticadas para optimizar el uso de GPU y el seguimiento de ingresos.' },
    ],
    footer: 'Esta hoja de ruta refleja nuestras prioridades estratégicas actuales, pero el equipo de Svitlo Chain se mantiene ágil y receptivo a las condiciones del mercado y los comentarios de la comunidad.',
  },
  faq: {
    eyebrow: 'Preguntas',
    title: 'Preguntas frecuentes',
    body: '¿Tienes preguntas sobre Svitlo Chain? Aquí tienes respuestas a algunas de las más comunes, tanto de proveedores como de desarrolladores.',
    items: [
      { q: '¿Cómo empiezo como proveedor?', a: 'Instala el cliente de nodo de Svitlo Chain en tu rig de minería existente. Luego activa "Miner Mode" para empezar a alquilar tu poder de cómputo, junto con tu minería existente o en su lugar. El proceso está diseñado para ser fluido y simple.' },
      { q: '¿Qué comisiones aplican en Svitlo Chain?', a: 'Svitlo Chain tiene una estructura de comisiones transparente para mantener la plataforma. Los usuarios que transaccionan en nuestro token de utilidad nativo, SVIT, obtienen un 10% de descuento en todas las comisiones del mercado. Las comisiones específicas pueden variar según el tipo de trabajo y las condiciones del mercado.' },
      { q: '¿Están seguros mis datos y cálculos?', a: 'Sí. La seguridad es fundamental en nuestro diseño. Cada trabajo de cómputo se verifica criptográficamente vía SHA-256, garantizando que los proveedores no puedan falsificar resultados. También rastreamos la reputación de los proveedores on-chain, y ofrecemos un paquete de cumplimiento empresarial para necesidades de seguridad avanzadas.' },
      { q: '¿Puedo usar cualquier GPU?', a: 'Svitlo Chain está diseñado para ser flexible y admite una amplia gama de GPUs, desde modelos de consumo como la RTX 4060 hasta potentes GPUs empresariales como la A100. La plataforma tiene un mercado para casi cualquier configuración de GPU, permitiéndote monetizar cualquier hardware que tengas.' },
      { q: '¿Qué es el token SVIT?', a: 'SVIT es el token de utilidad nativo de Svitlo Chain, diseñado para habilitar pagos, fomentar el comportamiento honesto mediante staking, y gobernar el desarrollo de la plataforma. Tiene un mecanismo de quema deflacionario y una oferta limitada para la sostenibilidad a largo plazo.' },
      { q: '¿Cómo retiro mis ganancias?', a: 'Tus ganancias de Svitlo Chain se acumulan en tu wallet conectado. Puedes retirar en cualquier momento, ya sea en SVIT o convirtiendo a otras criptomonedas/moneda fiduciaria a través de las opciones de intercambio integradas de la plataforma. Los detalles están en nuestra documentación.' },
    ],
  },
  stats: {
    eyebrow: 'En números',
    title: 'Svitlo Chain en números: la fuerza de la plataforma',
    body: 'Svitlo Chain sigue creciendo exponencialmente, impulsando el futuro del cómputo de IA descentralizado. Aquí tienes un vistazo al impresionante alcance y eficiencia de la plataforma — una solución rentable en comparación con los proveedores de nube tradicionales.',
    items: [
      { num: '2.5M+', label: 'Horas de GPU disponibles', body: 'Más de 2.5 millones de horas de GPU han sido entregadas por nuestra red para trabajos de IA, y aumentan constantemente cada mes.' },
      { num: '8,500+', label: 'Proveedores activos', body: 'Una red creciente de más de 8,500 proveedores únicos contribuye con poder de cómputo, garantizando robustez y disponibilidad.' },
      { num: '70%', label: 'Ahorro promedio de costos', body: 'Logra hasta un 70% de ahorro en cómputo de GPU en comparación con las principales plataformas cloud, sin comprometer el rendimiento.' },
      { num: '500+ PFLOPS', label: 'Poder de cómputo total', body: 'En conjunto, Svitlo Chain entrega más de 500 PFLOPS de poder de cómputo de IA — un recurso formidable a cualquier escala.' },
    ],
  },
  architecture: {
    eyebrow: 'Bajo el capó',
    title: 'Arquitectura técnica de Svitlo Chain: cómo funciona el sistema',
    body: 'Svitlo Chain funciona sobre una robusta arquitectura descentralizada que garantiza eficiencia, seguridad y transparencia. Aquí tienes un desglose de los mecanismos técnicos detrás de la plataforma.',
    lanes: [
      { label: 'Desarrollador (Cliente)', cells: ['Enviar trabajo de IA'] },
      { label: 'Plataforma Svitlo Chain', cells: ['Emparejamiento y programación', '→', 'Resultado y prueba', '→', 'Verificación y liquidación'] },
      { label: 'Proveedor de GPU', cells: ['Obtener y ejecutar el trabajo'] },
      { label: 'Blockchain', cells: ['Verificación SHA-256', '→', 'Pago en SVIT', '→', 'Sistema de reputación'] },
    ],
    body2: 'Svitlo Chain usa tecnología blockchain para crear un entorno sin confianza previa, donde cada paso del proceso de cómputo es verificable y transparente, a la vez que ofrece una seguridad robusta para proteger los datos y cálculos de los usuarios.',
    cards: [
      { title: 'Ejecución de trabajos descentralizada', body: 'Los trabajos de IA se dividen y distribuyen a través de la red de proveedores de GPU, optimizando el uso del cómputo disponible y evitando puntos únicos de fallo.' },
      { title: 'Contenerización segura', body: 'Cada trabajo de cómputo se ejecuta en un entorno de contenedor aislado en el hardware del proveedor, previniendo accesos no autorizados y garantizando la integridad de los datos.' },
      { title: 'Transparencia blockchain', body: 'Cada transacción, especificación de trabajo y prueba de verificación se registra on-chain para plena transparencia y no repudio.' },
    ],
  },
  glossary: {
    eyebrow: 'Referencia',
    title: 'Glosario',
    body: 'Para facilitar la comprensión de Svitlo Chain y el ecosistema más amplio de IA descentralizada, hemos compilado un glosario de términos técnicos comunes — claro y conciso, tanto si eres un usuario técnico experimentado como si eres nuevo en el espacio.',
    terms: [
      { term: 'Blockchain', body: 'Un libro mayor digital distribuido e inmutable de "bloques" de transacciones enlazados criptográficamente. Cada bloque contiene una marca de tiempo y una referencia al bloque anterior, creando un historial seguro y transparente.' },
      { term: 'Contenerización', body: 'Una técnica de virtualización que empaqueta el código de la aplicación junto con todas sus dependencias (bibliotecas, herramientas, configuración) en un "contenedor" aislado. Esto garantiza que la aplicación se ejecute de forma consistente, sin importar dónde se despliegue.' },
      { term: 'Prueba criptográfica', body: 'Métodos matemáticos usados para verificar la autenticidad e integridad de datos o transacciones. Permite comunicación y verificación seguras sin que las partes necesiten confiar entre sí.' },
      { term: 'CUDA', body: 'Una plataforma de computación paralela y modelo de programación desarrollado por NVIDIA. CUDA permite a los desarrolladores usar las GPUs de NVIDIA para computación de propósito general, acelerando drásticamente las tareas intensivas en cómputo, especialmente en IA.' },
      { term: 'Descentralización', body: 'El principio de distribuir el control y la toma de decisiones a través de una red en lugar de concentrarlos en una única autoridad. En Svitlo Chain esto significa que los recursos de GPU se distribuyen entre muchos nodos a nivel global.' },
      { term: 'Docker', body: 'Una plataforma popular para desarrollar, distribuir y ejecutar aplicaciones usando tecnología de contenedores. Los contenedores Docker garantizan que el cliente de Svitlo Chain y los trabajos de IA se ejecuten de forma aislada y eficiente.' },
      { term: 'Blockchain L1 de Svitlo Chain', body: 'La blockchain L1 propia de Svitlo Chain, escrita en Rust y diseñada para seguridad, alta velocidad y procesamiento eficiente de datos. Forma la base para las transacciones, la lógica de programas y la infraestructura de red.' },
      { term: 'GPU (Unidad de Procesamiento Gráfico)', body: 'Un circuito electrónico especializado diseñado para manipular y alterar rápidamente la memoria para acelerar la creación de imágenes en un buffer de fotogramas. Las GPUs también son altamente efectivas para el procesamiento paralelo de grandes conjuntos de datos, haciéndolas ideales para el cómputo de IA.' },
      { term: 'Inferencia', body: 'El proceso de usar un modelo de IA entrenado para hacer predicciones o decisiones basadas en datos nuevos y no vistos previamente. Esta es la fase en la que el modelo de IA aplica lo que ha aprendido.' },
      { term: 'Minería', body: 'El proceso de verificar y añadir nuevas transacciones a una blockchain resolviendo rompecabezas criptográficos complejos. En el "Miner Mode" de Svitlo Chain, los nodos pueden ganar validando transacciones o realizando cómputo de IA.' },
      { term: 'Nodo', body: 'Una computadora o servidor que ejecuta el software cliente de Svitlo Chain y está conectado a la red. Los nodos proporcionan recursos de cómputo (GPUs) a la red.' },
      { term: 'Peer-to-peer (P2P)', body: 'Una red donde los nodos se comunican directamente entre sí sin necesitar un servidor central. Svitlo Chain se construye sobre una red P2P para distribuir las cargas de trabajo de IA.' },
      { term: 'Moneda SVIT', body: 'La criptomoneda nativa de la blockchain L1 de Svitlo Chain. SVIT se usa para pagar recursos de GPU, recompensar a los proveedores y participar en la gobernanza de la red.' },
      { term: 'Puntuación de reputación', body: 'Un sistema que evalúa la fiabilidad y el rendimiento de los proveedores de GPU de Svitlo Chain. Las puntuaciones altas conducen a más trabajos y mayores ganancias.' },
      { term: 'SHA-256', body: 'Una función hash criptográfica que produce un valor hash de 256 bits (32 bytes). Se usa ampliamente en tecnología blockchain para garantizar la integridad de los datos y crear identificadores únicos para los bloques.' },
      { term: 'Slashing', body: 'Un mecanismo de penalización en redes descentralizadas donde se elimina una parte del stake de un proveedor de GPU si actúa de forma maliciosa o no cumple sus obligaciones.' },
      { term: 'Contratos inteligentes', body: 'Contratos autoejecutables con los términos del acuerdo escritos directamente en código. Se ejecutan automáticamente en una blockchain cuando se cumplen condiciones predefinidas, eliminando la necesidad de intermediarios.' },
      { term: 'Staking', body: 'El proceso de bloquear una cierta cantidad de criptomoneda (SVIT en Svitlo Chain) como garantía para apoyar las operaciones de la red. Los proveedores de GPU pueden hacer staking de SVIT para elevar su puntuación de reputación y obtener más trabajos.' },
      { term: 'VRAM (Memoria de Acceso Aleatorio de Video)', body: 'Un tipo de RAM diseñado específicamente para almacenar los datos de imagen mostrados en una pantalla. Para el cómputo de IA, especialmente con grandes modelos, una VRAM suficiente es crítica para el rendimiento.' },
    ],
    footer: 'Este glosario se actualiza regularmente. Si tienes preguntas sobre términos específicos o quieres sugerir adiciones, no dudes en contactar a la comunidad de Svitlo Chain.',
  },
  compare: {
    eyebrow: 'Comparación',
    title: 'Svitlo Chain frente a proveedores de nube tradicionales',
    body: 'Svitlo Chain está revolucionando el acceso a recursos de GPU para proyectos de IA y machine learning. Esta comparación destaca cómo Svitlo Chain difiere de servicios cloud tradicionales como AWS, Google Cloud y Azure, y de otros proveedores de nube GPU centralizados.',
    tableHeaders: ['Dimensión', 'Svitlo Chain', 'Nube tradicional'],
    rows: [
      ['Precios (por GPU-hora)', 'Hasta un 70% más bajos, dinámicos', 'A menudo más caros, escalonados bajo demanda'],
      ['Descentralización', 'Totalmente descentralizado (peer-to-peer)', 'Centralizado'],
      ['Flexibilidad', 'Sin contratos largos, pago por uso, sin ataduras', 'A menudo requiere contratos, períodos de permanencia, acuerdos complejos'],
      ['Velocidad (emparejamiento y ejecución de trabajos)', 'Emparejamiento rápido vía red P2P', 'Variable, puede sufrir cuellos de botella bajo alta demanda'],
      ['Transparencia', 'Total transparencia y verificabilidad vía blockchain', 'Limitada, controlada corporativamente'],
      ['Comunidad', 'Desarrollo open-source y guiado por la comunidad', 'Gran ecosistema, pero no guiado por la comunidad'],
      ['Incentivos de token', 'Sí, tokens SVIT para proveedores y usuarios', 'No'],
    ],
    footer: 'Como muestra la tabla, Svitlo Chain ofrece una solución rentable, flexible y transparente para el cómputo de GPU, impulsada por un modelo descentralizado y la participación de la comunidad. Esto posiciona a Svitlo Chain como el futuro del cómputo de IA distribuido.',
  },
  cta: {
    title: '¿Listo para unirte a la revolución GPU descentralizada?',
    body: 'Ya sea que quieras ganar con tu cómputo inactivo o necesites poder de IA asequible y escalable, Svitlo Chain tiene la solución adecuada. Empieza a construir tu futuro o monetiza tu hardware existente en minutos.',
    ctaPrimary: 'Conviértete en proveedor',
    ctaGlass: 'Empieza a desarrollar',
  },
  contact: {
    eyebrow: 'Ponte en contacto',
    title: 'Contacto y soporte',
    body: '¿Tienes preguntas, necesitas ayuda, o quieres unirte a la comunidad de Svitlo Chain? Aquí están todos nuestros canales de contacto y recursos de soporte.',
    items: [
      { icon: '✉️', title: 'Soporte por email', body: 'svitlochain@gmail.com', href: 'mailto:svitlochain@gmail.com' },
      { icon: '✈️', title: 'Telegram', body: 'Únete a nuestro grupo de Telegram para actualizaciones rápidas y chat con la comunidad.', href: 'https://t.me/+8t6LS2j4CyJiOTU0' },
      { icon: '💬', title: 'Comunidad de Discord', body: 'Únete a nuestro Discord para soporte en tiempo real y discusión con el equipo y otros usuarios.', href: 'https://discord.gg/9wqA3fMfg' },
      { icon: '🐦', title: 'Síguenos en X', body: 'Mantente actualizado con las últimas noticias y actualizaciones de producto.', href: 'https://x.com/Svitlochain' },
      { icon: '📘', title: 'Facebook', body: 'Sigue nuestra página de Facebook para noticias y actualizaciones de la comunidad.', href: 'https://www.facebook.com/share/1D53mnv4kk/' },
      { icon: '🐙', title: 'Repositorio de GitHub', body: 'Explora nuestro código open-source y contribuye al desarrollo de la plataforma.' },
      { icon: '📄', title: 'Documentación', body: 'Lee nuestras guías completas y especificaciones técnicas para empezar.' },
      { icon: '📰', title: 'Blog de Svitlo Chain', body: 'Obtén las últimas perspectivas, análisis y noticias sobre IA descentralizada.' },
    ],
  },
  footer: {
    tagline: 'Una blockchain Layer-1 para el cómputo de IA y la liquidación de inferencia.',
    cols: [
      { title: 'Producto', links: [{ label: 'Plataforma', href: '/es/platform/' }, { label: 'Documentación', href: '/es/documentation/' }, { label: 'Para desarrolladores', href: '#developers' }, { label: 'Para propietarios de GPU', href: '#gpu-owners' }, { label: 'Token SVIT', href: '#token' }] },
      { title: 'Empresa', links: [{ label: 'Hoja de ruta', href: '#roadmap' }, { label: 'FAQ', href: '#faq' }, { label: 'Contacto', href: '#contact' }] },
      { title: 'Wallet', links: [{ label: 'Abrir Wallet', href: '/es/wallet/' }, { label: 'Política de privacidad', href: '/privacy/' }, { label: 'Soporte', href: '/support/' }] },
    ],
    copyright: '© 2026 Svitlo Chain. Todos los derechos reservados.',
  },
};
