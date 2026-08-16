/* ── Auth modal: standard email/password (+ Google) sign-in/sign-up,
   followed by an in-modal API-key generation step for buyer/provider setup.
   Self-contained, no build step (this site is plain static HTML/GitHub
   Pages) -- injects its own markup on load and wires up the existing
   #nav-auth-login / #nav-auth-signup links in every language's nav.

   Talks directly to the same backend the platforma app uses
   (api.svitlochain.com) -- svitlochain.com/www.svitlochain.com are already
   allowed CORS origins there (see platforma/backend/main.py). Session is
   kept in this origin's own localStorage, separate from app.svitlochain.com's. */
(function () {
  var API_BASE = "https://api.svitlochain.com/api/v1";
  var TOKEN_KEY = "svitlo_site_token";
  var APIKEY_KEY = "svitlo_site_api_key";

  // Fill in via Google Cloud Console (OAuth client ID, Web application,
  // authorized JS origins: https://svitlochain.com + https://www.svitlochain.com)
  // -- the "Continue with Google" button stays hidden until this is set, so a
  // half-wired button never shows up during a live demo.
  var GOOGLE_CLIENT_ID = "";

  var LANG = document.documentElement.getAttribute("lang") || "en";

  var STR = {
    en: {
      loginTitle: "Welcome back", loginSub: "Sign in to your Svitlo Chain account",
      signupTitle: "Create your account", signupSub: "Rent GPU compute or start earning as a provider",
      email: "Email", password: "Password", confirm: "Confirm password",
      loginBtn: "Sign in", loginBusy: "Signing in…", signupBtn: "Create account", signupBusy: "Creating account…",
      or: "or", google: "Continue with Google",
      noAccount: "Don't have an account?", signupLink: "Sign up",
      haveAccount: "Already have an account?", loginLink: "Sign in",
      errLen: "Password must be at least 8 characters", errMatch: "Passwords don't match",
      connectMark: "🖥️", connectTitle: "Connect your PC",
      connectSub: "Generate an API key, paste it into Svitlo Node Agent, and connect as a buyer or a provider.",
      connectHint: "This key identifies your account to node_agent — no password needed there.",
      generateBtn: "Generate API key", generateBusy: "Generating…",
      yourKey: "Your API key", copy: "Copy", copied: "Copied",
      keyWarn: "⚠️ Shown once — copy it now. You can generate a new one anytime from the dashboard.",
      step1: "Download Svitlo Node Agent from", step1link: "the downloads page",
      step2: "Paste your API key when the app asks for it",
      step3: "Choose Provider (earn) or Buyer (spend) mode — you can switch anytime",
      dashboard: "Continue to Dashboard →",
    },
    uk: {
      loginTitle: "З поверненням", loginSub: "Увійдіть у свій акаунт Svitlo Chain",
      signupTitle: "Створіть акаунт", signupSub: "Орендуйте GPU або заробляйте як провайдер",
      email: "Ел. пошта", password: "Пароль", confirm: "Підтвердіть пароль",
      loginBtn: "Увійти", loginBusy: "Вхід…", signupBtn: "Зареєструватися", signupBusy: "Реєстрація…",
      or: "або", google: "Продовжити через Google",
      noAccount: "Немає акаунта?", signupLink: "Зареєструватися",
      haveAccount: "Вже є акаунт?", loginLink: "Увійти",
      errLen: "Пароль має містити щонайменше 8 символів", errMatch: "Паролі не збігаються",
      connectMark: "🖥️", connectTitle: "Підключіть свій ПК",
      connectSub: "Згенеруйте API-ключ, вставте його в Svitlo Node Agent і підключайтесь як покупець або провайдер.",
      connectHint: "Цей ключ ідентифікує ваш акаунт для node_agent — пароль там не потрібен.",
      generateBtn: "Згенерувати API-ключ", generateBusy: "Генерація…",
      yourKey: "Ваш API-ключ", copy: "Копіювати", copied: "Скопійовано",
      keyWarn: "⚠️ Показується один раз — скопіюйте зараз. Новий ключ можна згенерувати будь-коли з дашборду.",
      step1: "Завантажте Svitlo Node Agent зі", step1link: "сторінки завантажень",
      step2: "Вставте API-ключ, коли застосунок його запитає",
      step3: "Оберіть режим Provider (заробіток) чи Buyer (витрати) — можна змінити будь-коли",
      dashboard: "Перейти до дашборду →",
    },
    de: {
      loginTitle: "Willkommen zurück", loginSub: "Melde dich bei deinem Svitlo-Chain-Konto an",
      signupTitle: "Konto erstellen", signupSub: "GPU-Rechenleistung mieten oder als Anbieter verdienen",
      email: "E-Mail", password: "Passwort", confirm: "Passwort bestätigen",
      loginBtn: "Anmelden", loginBusy: "Anmeldung…", signupBtn: "Konto erstellen", signupBusy: "Wird erstellt…",
      or: "oder", google: "Mit Google fortfahren",
      noAccount: "Noch kein Konto?", signupLink: "Registrieren",
      haveAccount: "Schon ein Konto?", loginLink: "Anmelden",
      errLen: "Das Passwort muss mindestens 8 Zeichen haben", errMatch: "Passwörter stimmen nicht überein",
      connectMark: "🖥️", connectTitle: "PC verbinden",
      connectSub: "Erstelle einen API-Schlüssel, füge ihn in Svitlo Node Agent ein und verbinde dich als Käufer oder Anbieter.",
      connectHint: "Dieser Schlüssel identifiziert dein Konto für node_agent — dort ist kein Passwort nötig.",
      generateBtn: "API-Schlüssel erstellen", generateBusy: "Wird erstellt…",
      yourKey: "Dein API-Schlüssel", copy: "Kopieren", copied: "Kopiert",
      keyWarn: "⚠️ Wird nur einmal angezeigt — jetzt kopieren. Ein neuer Schlüssel ist jederzeit im Dashboard möglich.",
      step1: "Lade Svitlo Node Agent von der", step1link: "Downloads-Seite",
      step2: "Füge deinen API-Schlüssel ein, wenn die App danach fragt",
      step3: "Wähle Provider (verdienen) oder Buyer (ausgeben) — jederzeit wechselbar",
      dashboard: "Weiter zum Dashboard →",
    },
    fr: {
      loginTitle: "Content de te revoir", loginSub: "Connecte-toi à ton compte Svitlo Chain",
      signupTitle: "Créer un compte", signupSub: "Loue du calcul GPU ou gagne en tant que fournisseur",
      email: "E-mail", password: "Mot de passe", confirm: "Confirmer le mot de passe",
      loginBtn: "Se connecter", loginBusy: "Connexion…", signupBtn: "Créer un compte", signupBusy: "Création…",
      or: "ou", google: "Continuer avec Google",
      noAccount: "Pas encore de compte ?", signupLink: "S'inscrire",
      haveAccount: "Déjà un compte ?", loginLink: "Se connecter",
      errLen: "Le mot de passe doit contenir au moins 8 caractères", errMatch: "Les mots de passe ne correspondent pas",
      connectMark: "🖥️", connectTitle: "Connecte ton PC",
      connectSub: "Génère une clé API, colle-la dans Svitlo Node Agent, et connecte-toi comme acheteur ou fournisseur.",
      connectHint: "Cette clé identifie ton compte pour node_agent — aucun mot de passe requis là-bas.",
      generateBtn: "Générer la clé API", generateBusy: "Génération…",
      yourKey: "Ta clé API", copy: "Copier", copied: "Copié",
      keyWarn: "⚠️ Affichée une seule fois — copie-la maintenant. Tu peux en générer une nouvelle depuis le dashboard.",
      step1: "Télécharge Svitlo Node Agent depuis la", step1link: "page de téléchargements",
      step2: "Colle ta clé API quand l'appli la demande",
      step3: "Choisis Provider (gagner) ou Buyer (dépenser) — modifiable à tout moment",
      dashboard: "Continuer vers le Dashboard →",
    },
    es: {
      loginTitle: "Bienvenido de nuevo", loginSub: "Inicia sesión en tu cuenta de Svitlo Chain",
      signupTitle: "Crea tu cuenta", signupSub: "Alquila GPU o gana como proveedor",
      email: "Correo electrónico", password: "Contraseña", confirm: "Confirmar contraseña",
      loginBtn: "Iniciar sesión", loginBusy: "Iniciando…", signupBtn: "Crear cuenta", signupBusy: "Creando…",
      or: "o", google: "Continuar con Google",
      noAccount: "¿No tienes cuenta?", signupLink: "Regístrate",
      haveAccount: "¿Ya tienes cuenta?", loginLink: "Inicia sesión",
      errLen: "La contraseña debe tener al menos 8 caracteres", errMatch: "Las contraseñas no coinciden",
      connectMark: "🖥️", connectTitle: "Conecta tu PC",
      connectSub: "Genera una clave API, pégala en Svitlo Node Agent y conéctate como comprador o proveedor.",
      connectHint: "Esta clave identifica tu cuenta ante node_agent — no hace falta contraseña ahí.",
      generateBtn: "Generar clave API", generateBusy: "Generando…",
      yourKey: "Tu clave API", copy: "Copiar", copied: "Copiado",
      keyWarn: "⚠️ Se muestra una sola vez — cópiala ahora. Puedes generar otra desde el dashboard cuando quieras.",
      step1: "Descarga Svitlo Node Agent desde la", step1link: "página de descargas",
      step2: "Pega tu clave API cuando la app la pida",
      step3: "Elige Provider (ganar) o Buyer (gastar) — puedes cambiarlo cuando quieras",
      dashboard: "Continuar al Dashboard →",
    },
    it: {
      loginTitle: "Bentornato", loginSub: "Accedi al tuo account Svitlo Chain",
      signupTitle: "Crea il tuo account", signupSub: "Noleggia GPU o guadagna come provider",
      email: "Email", password: "Password", confirm: "Conferma password",
      loginBtn: "Accedi", loginBusy: "Accesso…", signupBtn: "Crea account", signupBusy: "Creazione…",
      or: "oppure", google: "Continua con Google",
      noAccount: "Non hai un account?", signupLink: "Registrati",
      haveAccount: "Hai già un account?", loginLink: "Accedi",
      errLen: "La password deve avere almeno 8 caratteri", errMatch: "Le password non coincidono",
      connectMark: "🖥️", connectTitle: "Collega il tuo PC",
      connectSub: "Genera una chiave API, incollala in Svitlo Node Agent e collegati come acquirente o provider.",
      connectHint: "Questa chiave identifica il tuo account per node_agent — lì non serve password.",
      generateBtn: "Genera chiave API", generateBusy: "Generazione…",
      yourKey: "La tua chiave API", copy: "Copia", copied: "Copiato",
      keyWarn: "⚠️ Mostrata una sola volta — copiala ora. Puoi generarne una nuova dal dashboard quando vuoi.",
      step1: "Scarica Svitlo Node Agent dalla", step1link: "pagina download",
      step2: "Incolla la chiave API quando l'app la richiede",
      step3: "Scegli Provider (guadagna) o Buyer (spendi) — puoi cambiare quando vuoi",
      dashboard: "Vai al Dashboard →",
    },
    fi: {
      loginTitle: "Tervetuloa takaisin", loginSub: "Kirjaudu Svitlo Chain -tilillesi",
      signupTitle: "Luo tili", signupSub: "Vuokraa GPU-laskentaa tai ansaitse tarjoajana",
      email: "Sähköposti", password: "Salasana", confirm: "Vahvista salasana",
      loginBtn: "Kirjaudu", loginBusy: "Kirjaudutaan…", signupBtn: "Luo tili", signupBusy: "Luodaan…",
      or: "tai", google: "Jatka Googlella",
      noAccount: "Ei vielä tiliä?", signupLink: "Rekisteröidy",
      haveAccount: "Onko sinulla jo tili?", loginLink: "Kirjaudu",
      errLen: "Salasanan on oltava vähintään 8 merkkiä", errMatch: "Salasanat eivät täsmää",
      connectMark: "🖥️", connectTitle: "Yhdistä tietokoneesi",
      connectSub: "Luo API-avain, liitä se Svitlo Node Agentiin ja yhdisty ostajana tai tarjoajana.",
      connectHint: "Tämä avain tunnistaa tilisi node_agentille — salasanaa ei tarvita siellä.",
      generateBtn: "Luo API-avain", generateBusy: "Luodaan…",
      yourKey: "API-avaimesi", copy: "Kopioi", copied: "Kopioitu",
      keyWarn: "⚠️ Näytetään vain kerran — kopioi nyt. Voit luoda uuden milloin tahansa dashboardista.",
      step1: "Lataa Svitlo Node Agent", step1link: "latayssivulta",
      step2: "Liitä API-avain, kun sovellus pyytää sitä",
      step3: "Valitse Provider (ansaitse) tai Buyer (kuluta) — vaihdettavissa milloin vain",
      dashboard: "Jatka Dashboardiin →",
    },
    pt: {
      loginTitle: "Bem-vindo de volta", loginSub: "Entre na sua conta Svitlo Chain",
      signupTitle: "Crie sua conta", signupSub: "Alugue GPU ou ganhe como provedor",
      email: "E-mail", password: "Senha", confirm: "Confirmar senha",
      loginBtn: "Entrar", loginBusy: "Entrando…", signupBtn: "Criar conta", signupBusy: "Criando…",
      or: "ou", google: "Continuar com Google",
      noAccount: "Ainda não tem conta?", signupLink: "Registrar",
      haveAccount: "Já tem conta?", loginLink: "Entrar",
      errLen: "A senha deve ter pelo menos 8 caracteres", errMatch: "As senhas não coincidem",
      connectMark: "🖥️", connectTitle: "Conecte seu PC",
      connectSub: "Gere uma chave de API, cole no Svitlo Node Agent e conecte-se como comprador ou provedor.",
      connectHint: "Esta chave identifica sua conta para o node_agent — não precisa de senha lá.",
      generateBtn: "Gerar chave de API", generateBusy: "Gerando…",
      yourKey: "Sua chave de API", copy: "Copiar", copied: "Copiado",
      keyWarn: "⚠️ Mostrada apenas uma vez — copie agora. Você pode gerar outra a qualquer momento no dashboard.",
      step1: "Baixe o Svitlo Node Agent na", step1link: "página de downloads",
      step2: "Cole sua chave de API quando o app pedir",
      step3: "Escolha Provider (ganhar) ou Buyer (gastar) — pode trocar quando quiser",
      dashboard: "Ir para o Dashboard →",
    },
    ja: {
      loginTitle: "おかえりなさい", loginSub: "Svitlo Chain アカウントにサインイン",
      signupTitle: "アカウントを作成", signupSub: "GPUをレンタル、またはプロバイダーとして収益化",
      email: "メールアドレス", password: "パスワード", confirm: "パスワード確認",
      loginBtn: "サインイン", loginBusy: "サインイン中…", signupBtn: "アカウント作成", signupBusy: "作成中…",
      or: "または", google: "Googleで続ける",
      noAccount: "アカウントをお持ちでない方", signupLink: "新規登録",
      haveAccount: "すでにアカウントをお持ちの方", loginLink: "サインイン",
      errLen: "パスワードは8文字以上で入力してください", errMatch: "パスワードが一致しません",
      connectMark: "🖥️", connectTitle: "PCを接続",
      connectSub: "APIキーを生成してSvitlo Node Agentに貼り付け、購入者またはプロバイダーとして接続します。",
      connectHint: "このキーはnode_agentに対してアカウントを識別します — そこではパスワード不要です。",
      generateBtn: "APIキーを生成", generateBusy: "生成中…",
      yourKey: "あなたのAPIキー", copy: "コピー", copied: "コピーしました",
      keyWarn: "⚠️ 一度しか表示されません — 今すぐコピーしてください。新しいキーはダッシュボードからいつでも生成できます。",
      step1: "ダウンロードページから", step1link: "Svitlo Node Agent",
      step2: "アプリが求めたらAPIキーを貼り付け",
      step3: "Provider（収益化）またはBuyer（利用）モードを選択 — いつでも切り替え可能",
      dashboard: "ダッシュボードへ →",
    },
    ko: {
      loginTitle: "다시 오신 것을 환영합니다", loginSub: "Svitlo Chain 계정으로 로그인하세요",
      signupTitle: "계정 만들기", signupSub: "GPU를 대여하거나 프로바이더로 수익을 창출하세요",
      email: "이메일", password: "비밀번호", confirm: "비밀번호 확인",
      loginBtn: "로그인", loginBusy: "로그인 중…", signupBtn: "계정 만들기", signupBusy: "생성 중…",
      or: "또는", google: "Google로 계속하기",
      noAccount: "계정이 없으신가요?", signupLink: "회원가입",
      haveAccount: "이미 계정이 있으신가요?", loginLink: "로그인",
      errLen: "비밀번호는 8자 이상이어야 합니다", errMatch: "비밀번호가 일치하지 않습니다",
      connectMark: "🖥️", connectTitle: "PC 연결하기",
      connectSub: "API 키를 생성해 Svitlo Node Agent에 붙여넣고 구매자 또는 프로바이더로 연결하세요.",
      connectHint: "이 키는 node_agent에 계정을 식별시킵니다 — 거기서는 비밀번호가 필요 없습니다.",
      generateBtn: "API 키 생성", generateBusy: "생성 중…",
      yourKey: "내 API 키", copy: "복사", copied: "복사됨",
      keyWarn: "⚠️ 한 번만 표시됩니다 — 지금 복사하세요. 새 키는 대시보드에서 언제든 다시 생성할 수 있습니다.",
      step1: "다운로드 페이지에서", step1link: "Svitlo Node Agent",
      step2: "앱이 요청하면 API 키를 붙여넣으세요",
      step3: "Provider(수익) 또는 Buyer(지출) 모드를 선택하세요 — 언제든 전환 가능",
      dashboard: "대시보드로 이동 →",
    },
    zh: {
      loginTitle: "欢迎回来", loginSub: "登录你的 Svitlo Chain 账户",
      signupTitle: "创建账户", signupSub: "租用 GPU 算力，或作为提供者赚取收益",
      email: "电子邮箱", password: "密码", confirm: "确认密码",
      loginBtn: "登录", loginBusy: "登录中…", signupBtn: "创建账户", signupBusy: "创建中…",
      or: "或", google: "使用 Google 继续",
      noAccount: "还没有账户？", signupLink: "注册",
      haveAccount: "已有账户？", loginLink: "登录",
      errLen: "密码至少需要8个字符", errMatch: "两次输入的密码不一致",
      connectMark: "🖥️", connectTitle: "连接你的电脑",
      connectSub: "生成一个 API 密钥，粘贴到 Svitlo Node Agent 中，以购买者或提供者身份连接。",
      connectHint: "此密钥用于向 node_agent 标识你的账户 — 那里不需要密码。",
      generateBtn: "生成 API 密钥", generateBusy: "生成中…",
      yourKey: "你的 API 密钥", copy: "复制", copied: "已复制",
      keyWarn: "⚠️ 仅显示一次 — 请立即复制。你可以随时在仪表盘重新生成新密钥。",
      step1: "从", step1link: "下载页面",
      step2: "在应用请求时粘贴你的 API 密钥",
      step3: "选择 Provider（赚取）或 Buyer（消费）模式 — 可随时切换",
      dashboard: "前往仪表盘 →",
    },
    sv: {
      loginTitle: "Välkommen tillbaka", loginSub: "Logga in på ditt Svitlo Chain-konto",
      signupTitle: "Skapa konto", signupSub: "Hyr GPU-kraft eller tjäna pengar som leverantör",
      email: "E-post", password: "Lösenord", confirm: "Bekräfta lösenord",
      loginBtn: "Logga in", loginBusy: "Loggar in…", signupBtn: "Skapa konto", signupBusy: "Skapar…",
      or: "eller", google: "Fortsätt med Google",
      noAccount: "Inget konto än?", signupLink: "Registrera",
      haveAccount: "Har du redan ett konto?", loginLink: "Logga in",
      errLen: "Lösenordet måste vara minst 8 tecken", errMatch: "Lösenorden matchar inte",
      connectMark: "🖥️", connectTitle: "Anslut din dator",
      connectSub: "Skapa en API-nyckel, klistra in den i Svitlo Node Agent och anslut som köpare eller leverantör.",
      connectHint: "Den här nyckeln identifierar ditt konto för node_agent — inget lösenord behövs där.",
      generateBtn: "Skapa API-nyckel", generateBusy: "Skapar…",
      yourKey: "Din API-nyckel", copy: "Kopiera", copied: "Kopierad",
      keyWarn: "⚠️ Visas bara en gång — kopiera nu. Du kan skapa en ny när som helst från dashboarden.",
      step1: "Ladda ner Svitlo Node Agent från", step1link: "nedladdningssidan",
      step2: "Klistra in din API-nyckel när appen frågar efter den",
      step3: "Välj Provider (tjäna) eller Buyer (spendera) — byt när som helst",
      dashboard: "Fortsätt till Dashboard →",
    },
    no: {
      loginTitle: "Velkommen tilbake", loginSub: "Logg inn på Svitlo Chain-kontoen din",
      signupTitle: "Opprett konto", signupSub: "Lei GPU-kraft eller tjen penger som leverandør",
      email: "E-post", password: "Passord", confirm: "Bekreft passord",
      loginBtn: "Logg inn", loginBusy: "Logger inn…", signupBtn: "Opprett konto", signupBusy: "Oppretter…",
      or: "eller", google: "Fortsett med Google",
      noAccount: "Ingen konto ennå?", signupLink: "Registrer",
      haveAccount: "Har du allerede konto?", loginLink: "Logg inn",
      errLen: "Passordet må være minst 8 tegn", errMatch: "Passordene stemmer ikke overens",
      connectMark: "🖥️", connectTitle: "Koble til PC-en din",
      connectSub: "Generer en API-nøkkel, lim den inn i Svitlo Node Agent, og koble til som kjøper eller leverandør.",
      connectHint: "Denne nøkkelen identifiserer kontoen din for node_agent — passord trengs ikke der.",
      generateBtn: "Generer API-nøkkel", generateBusy: "Genererer…",
      yourKey: "Din API-nøkkel", copy: "Kopier", copied: "Kopiert",
      keyWarn: "⚠️ Vises bare én gang — kopier nå. Du kan generere en ny når som helst fra dashbordet.",
      step1: "Last ned Svitlo Node Agent fra", step1link: "nedlastingssiden",
      step2: "Lim inn API-nøkkelen når appen ber om den",
      step3: "Velg Provider (tjen) eller Buyer (bruk) — bytt når som helst",
      dashboard: "Fortsett til Dashboard →",
    },
  };
  var t = STR[LANG] || STR.en;

  var DOWNLOADS_URL = "/" + LANG + "/platform/";
  var DASHBOARD_URL = "https://app.svitlochain.com/dashboard";

  // ── Markup ────────────────────────────────────────────────────────────
  var overlay = document.createElement("div");
  overlay.className = "auth-modal-overlay";
  overlay.innerHTML =
    '<div class="auth-modal glass" role="dialog" aria-modal="true">' +
      '<button type="button" class="auth-modal-close" aria-label="Close">✕</button>' +
      '<div class="auth-modal-body"></div>' +
    "</div>";
  document.body.appendChild(overlay);
  var modalBody = overlay.querySelector(".auth-modal-body");
  var modalBox = overlay.querySelector(".auth-modal");

  function close() {
    overlay.classList.remove("open");
  }
  overlay.querySelector(".auth-modal-close").addEventListener("click", close);
  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) close();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && overlay.classList.contains("open")) close();
  });
  modalBox.addEventListener("click", function (e) { e.stopPropagation(); });

  function open() {
    overlay.classList.add("open");
  }

  function esc(s) {
    var d = document.createElement("div");
    d.textContent = s;
    return d.innerHTML;
  }

  // ── API ──────────────────────────────────────────────────────────────
  function api(path, opts) {
    opts = opts || {};
    var headers = { "Content-Type": "application/json" };
    var token = localStorage.getItem(TOKEN_KEY);
    if (token) headers["Authorization"] = "Bearer " + token;
    return fetch(API_BASE + path, {
      method: opts.method || "GET",
      headers: headers,
      body: opts.body ? JSON.stringify(opts.body) : undefined,
    }).then(function (res) {
      return res.json().catch(function () { return {}; }).then(function (data) {
        if (!res.ok) {
          var detail = typeof data.detail === "string" ? data.detail : JSON.stringify(data.detail || res.statusText);
          throw new Error(detail);
        }
        return data;
      });
    });
  }

  // ── Views ────────────────────────────────────────────────────────────
  function renderAuth(mode) {
    var isSignup = mode === "signup";
    modalBody.innerHTML =
      '<div class="auth-modal-head">' +
        "<div class=\"mark\">⚡</div>" +
        "<h2>" + esc(isSignup ? t.signupTitle : t.loginTitle) + "</h2>" +
        "<p>" + esc(isSignup ? t.signupSub : t.loginSub) + "</p>" +
      "</div>" +
      '<div class="auth-error-slot"></div>' +
      '<form class="auth-form">' +
        '<div class="auth-field"><label>' + esc(t.email) + '</label><input type="email" name="email" required autocomplete="email"></div>' +
        '<div class="auth-field"><label>' + esc(t.password) + '</label><input type="password" name="password" required autocomplete="' + (isSignup ? "new-password" : "current-password") + '"></div>' +
        (isSignup ? '<div class="auth-field"><label>' + esc(t.confirm) + '</label><input type="password" name="confirm" required autocomplete="new-password"></div>' : "") +
        '<button type="submit" class="auth-submit">' + esc(isSignup ? t.signupBtn : t.loginBtn) + "</button>" +
      "</form>" +
      (GOOGLE_CLIENT_ID ? '<div class="auth-divider">' + esc(t.or) + '</div><div id="auth-google-slot"></div>' : "") +
      '<p class="auth-switch">' +
        (isSignup
          ? esc(t.haveAccount) + ' <button type="button" data-switch="login">' + esc(t.loginLink) + "</button>"
          : esc(t.noAccount) + ' <button type="button" data-switch="signup">' + esc(t.signupLink) + "</button>") +
      "</p>";

    modalBody.querySelector('[data-switch]').addEventListener("click", function (e) {
      renderAuth(e.target.getAttribute("data-switch"));
    });

    var form = modalBody.querySelector(".auth-form");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var email = form.email.value.trim();
      var password = form.password.value;
      var errSlot = modalBody.querySelector(".auth-error-slot");
      errSlot.innerHTML = "";

      if (isSignup) {
        if (password.length < 8) return showErr(errSlot, t.errLen);
        if (password !== form.confirm.value) return showErr(errSlot, t.errMatch);
      }

      var btn = form.querySelector(".auth-submit");
      btn.disabled = true;
      btn.textContent = isSignup ? t.signupBusy : t.loginBusy;

      api(isSignup ? "/auth/register" : "/auth/login", {
        method: "POST",
        body: { email: email, password: password },
      }).then(function (res) {
        localStorage.setItem(TOKEN_KEY, res.access_token);
        if (res.user && res.user.api_key) localStorage.setItem(APIKEY_KEY, res.user.api_key);
        renderConnect();
      }).catch(function (err) {
        btn.disabled = false;
        btn.textContent = isSignup ? t.signupBtn : t.loginBtn;
        showErr(errSlot, err.message || "Error");
      });
    });

    if (GOOGLE_CLIENT_ID) renderGoogleButton();
  }

  function showErr(slot, msg) {
    slot.innerHTML = '<div class="auth-error">' + esc(msg) + "</div>";
  }

  function renderGoogleButton() {
    var slot = modalBody.querySelector("#auth-google-slot");
    if (!slot || !window.google || !window.google.accounts) return;
    google.accounts.id.initialize({
      client_id: GOOGLE_CLIENT_ID,
      callback: function (resp) {
        var errSlot = modalBody.querySelector(".auth-error-slot");
        api("/auth/google", { method: "POST", body: { id_token: resp.credential } })
          .then(function (res) {
            localStorage.setItem(TOKEN_KEY, res.access_token);
            if (res.user && res.user.api_key) localStorage.setItem(APIKEY_KEY, res.user.api_key);
            renderConnect();
          })
          .catch(function (err) { if (errSlot) showErr(errSlot, err.message || "Error"); });
      },
    });
    google.accounts.id.renderButton(slot, { theme: "outline", size: "large", width: 320, text: "continue_with" });
  }

  function renderConnect() {
    modalBody.innerHTML =
      '<div class="auth-modal-head">' +
        '<div class="mark">' + t.connectMark + "</div>" +
        "<h2>" + esc(t.connectTitle) + "</h2>" +
        "<p>" + esc(t.connectSub) + "</p>" +
      "</div>" +
      '<div class="auth-key-slot"></div>' +
      '<ol class="auth-key-steps">' +
        "<li>" + esc(t.step1) + ' <a href="' + DOWNLOADS_URL + '">' + esc(t.step1link) + "</a></li>" +
        "<li>" + esc(t.step2) + "</li>" +
        "<li>" + esc(t.step3) + "</li>" +
      "</ol>" +
      '<a class="auth-dashboard-link" href="' + DASHBOARD_URL + '">' + esc(t.dashboard) + "</a>";

    var keySlot = modalBody.querySelector(".auth-key-slot");
    var existingKey = localStorage.getItem(APIKEY_KEY);
    renderKeySlot(keySlot, null);

    function renderKeySlot(slot) {
      slot.innerHTML =
        '<p style="font-size:13px;color:var(--ink-m);line-height:1.6;margin:0 0 14px">' + esc(t.connectHint) + "</p>" +
        '<button type="button" class="auth-submit auth-gen-btn">' + esc(t.generateBtn) + "</button>";
      slot.querySelector(".auth-gen-btn").addEventListener("click", function (e) {
        var btn = e.target;
        btn.disabled = true;
        btn.textContent = t.generateBusy;
        api("/auth/api-key/regenerate", { method: "POST" }).then(function (res) {
          localStorage.setItem(APIKEY_KEY, res.api_key);
          showKey(slot, res.api_key);
        }).catch(function (err) {
          btn.disabled = false;
          btn.textContent = t.generateBtn;
          slot.insertAdjacentHTML("beforeend", '<div class="auth-error" style="margin-top:10px">' + esc(err.message || "Error") + "</div>");
        });
      });
    }

    function showKey(slot, key) {
      slot.innerHTML =
        '<div class="auth-key-box"><code>' + esc(key) + '</code><button type="button" class="auth-key-copy">' + esc(t.copy) + "</button></div>" +
        '<p class="auth-key-warn">' + esc(t.keyWarn) + "</p>";
      slot.querySelector(".auth-key-copy").addEventListener("click", function (e) {
        navigator.clipboard && navigator.clipboard.writeText(key);
        e.target.textContent = t.copied;
        setTimeout(function () { e.target.textContent = t.copy; }, 1500);
      });
    }
  }

  // ── Wire up nav links ───────────────────────────────────────────────
  function wire(id, mode) {
    var el = document.getElementById(id);
    if (!el) return;
    el.addEventListener("click", function (e) {
      e.preventDefault();
      var token = localStorage.getItem(TOKEN_KEY);
      if (token) renderConnect(); else renderAuth(mode);
      open();
    });
  }
  wire("nav-auth-login", "login");
  wire("nav-auth-signup", "signup");

  if (GOOGLE_CLIENT_ID) {
    var s = document.createElement("script");
    s.src = "https://accounts.google.com/gsi/client";
    s.async = true;
    document.head.appendChild(s);
  }
})();
