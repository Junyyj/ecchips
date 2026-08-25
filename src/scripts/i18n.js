/* =========================================================================
 * ECCHIPS — client-side i18n (UI chrome only)
 * 12 languages. Copy templates, FAQ/guide body content, SEO title/meta and
 * JSON-LD stay English (English-first per V1.0 spec).
 * ========================================================================= */

export const LANG_KEY = 'ecchips_lang';

export const LANGUAGES = [
  { code: 'en', name: 'English',   dir: 'ltr' },
  { code: 'zh', name: '中文',       dir: 'ltr' },
  { code: 'hi', name: 'हिन्दी',      dir: 'ltr' },
  { code: 'es', name: 'Español',   dir: 'ltr' },
  { code: 'fr', name: 'Français',  dir: 'ltr' },
  { code: 'ar', name: 'العربية',    dir: 'rtl' },
  { code: 'pt', name: 'Português', dir: 'ltr' },
  { code: 'ru', name: 'Русский',   dir: 'ltr' },
  { code: 'de', name: 'Deutsch',   dir: 'ltr' },
  { code: 'ja', name: '日本語',      dir: 'ltr' },
  { code: 'ko', name: '한국어',      dir: 'ltr' },
  { code: 'it', name: 'Italiano',  dir: 'ltr' }
];

export const TRANSLATIONS = {
  en: {
    brand_sub: 'Electronic Component Intelligence',
    nav_about: 'About',
    trust_built: 'Built for engineers.',
    trust_no_account: 'No account required.',
    trust_local: 'Runs locally in your browser.',
    footer_home: 'Home',
    footer_privacy: 'Privacy',
    home_sub: 'Practical tools for electronics engineers.',
    tools_title: 'Tools',
    available: 'Available',
    coming_soon: 'Coming Soon',
    about_teaser: 'Building practical tools for electronics engineers.',
    hero_title: 'Identify & Decode SMD Markings',
    hero_sub: 'Decode common SMD markings and identify possible resistor or ceramic capacitor values.',
    input_label: 'Enter SMD code',
    placeholder: 'Enter SMD code, e.g. 103, 1002, or 01C',
    decode: 'Decode',
    recent: 'Recent',
    clear: 'Clear',
    guide_why: 'Why can the same SMD code mean different things?',
    guide_identify: 'How to identify the actual component',
    codes_title: 'How the codes work',
    code_3digit: '3-Digit Code',
    code_4digit: '4-Digit Code',
    code_eia96: 'EIA-96 Code',
    faq_title: 'FAQ',
    label_resistor_interp: 'Resistor Interpretation',
    label_capacitor_interp: 'Ceramic Capacitor Interpretation',
    label_resistor: 'Resistor',
    note_precision: 'Precision resistor marking',
    warning_marking: 'Important: The marking alone does not identify the component type.',
    copy: 'Copy Result',
    copied: 'Copied',
    err_empty: 'Please enter an SMD marking.',
    err_format: 'Unsupported SMD code format. Please check your input.',
    err_eia96: 'This code is not recognized in the supported EIA-96 reference table.'
  },
  zh: {
    brand_sub: '电子元器件智能',
    nav_about: '关于',
    trust_built: '为工程师打造。',
    trust_no_account: '无需注册账号。',
    trust_local: '在您的浏览器本地运行。',
    footer_home: '首页',
    footer_privacy: '隐私',
    home_sub: '为电子工程师打造的实用工具。',
    tools_title: '工具',
    available: '已上线',
    coming_soon: '即将上线',
    about_teaser: '为电子工程师构建实用工具。',
    hero_title: '识别与解码 SMD 标识',
    hero_sub: '解码常见 SMD 标识，判断可能的电阻或陶瓷电容取值。',
    input_label: '输入 SMD 代码',
    placeholder: '输入 SMD 代码，例如 103、1002 或 01C',
    decode: '解码',
    recent: '最近',
    clear: '清空',
    guide_why: '为什么相同的 SMD 代码含义不同？',
    guide_identify: '如何判断实际元器件',
    codes_title: '代码如何工作',
    code_3digit: '3 位代码',
    code_4digit: '4 位代码',
    code_eia96: 'EIA-96 代码',
    faq_title: '常见问题',
    label_resistor_interp: '电阻解读',
    label_capacitor_interp: '陶瓷电容解读',
    label_resistor: '电阻',
    note_precision: '精密电阻标识',
    warning_marking: '重要：仅凭标识无法确定元器件类型。',
    copy: '复制结果',
    copied: '已复制',
    err_empty: '请输入 SMD 标识。',
    err_format: '不支持的 SMD 代码格式。请检查您的输入。',
    err_eia96: '该代码在支持的 EIA-96 参考表中不存在。'
  },
  hi: {
    brand_sub: 'इलेक्ट्रॉनिक कंपोनेंट इंटेलिजेंस',
    nav_about: 'परिचय',
    trust_built: 'इंजीनियरों के लिए बनाया गया।',
    trust_no_account: 'किसी खाते की आवश्यकता नहीं।',
    trust_local: 'आपके ब्राउज़र में स्थानीय रूप से चलता है।',
    footer_home: 'होम',
    footer_privacy: 'गोपनीयता',
    home_sub: 'इलेक्ट्रॉनिक्स इंजीनियरों के लिए व्यावहारिक उपकरण।',
    tools_title: 'उपकरण',
    available: 'उपलब्ध',
    coming_soon: 'जल्द आ रहा है',
    about_teaser: 'इलेक्ट्रॉनिक्स इंजीनियरों के लिए व्यावहारिक उपकरण बना रहे हैं।',
    hero_title: 'SMD मार्किंग की पहचान और डिकोड',
    hero_sub: 'सामान्य SMD मार्किंग डिकोड करें और संभावित प्रतिरोधक या संधारित्र मान पहचानें।',
    input_label: 'SMD कोड दर्ज करें',
    placeholder: 'SMD कोड दर्ज करें, जैसे 103, 1002 या 01C',
    decode: 'डिकोड करें',
    recent: 'हाल ही में',
    clear: 'साफ़ करें',
    guide_why: 'एक ही SMD कोड के अलग-अलग अर्थ क्यों हो सकते हैं?',
    guide_identify: 'वास्तविक कंपोनेंट की पहचान कैसे करें',
    codes_title: 'कोड कैसे काम करते हैं',
    code_3digit: '3-अंकीय कोड',
    code_4digit: '4-अंकीय कोड',
    code_eia96: 'EIA-96 कोड',
    faq_title: 'सामान्य प्रश्न',
    label_resistor_interp: 'प्रतिरोधक व्याख्या',
    label_capacitor_interp: 'सिरेमिक संधारित्र व्याख्या',
    label_resistor: 'प्रतिरोधक',
    note_precision: 'प्रेसिजन प्रतिरोधक मार्किंग',
    warning_marking: 'महत्वपूर्ण: केवल मार्किंग से कंपोनेंट का प्रकार निर्धारित नहीं होता।',
    copy: 'परिणाम कॉपी करें',
    copied: 'कॉपी हो गया',
    err_empty: 'कृपया एक SMD मार्किंग दर्ज करें।',
    err_format: 'असमर्थित SMD कोड प्रारूप। कृपया अपना इनपुट जाँचें।',
    err_eia96: 'यह कोड समर्थित EIA-96 संदर्भ तालिका में मान्यता प्राप्त नहीं है।'
  },
  es: {
    brand_sub: 'Inteligencia de componentes electrónicos',
    nav_about: 'Acerca de',
    trust_built: 'Hecho para ingenieros.',
    trust_no_account: 'No requiere cuenta.',
    trust_local: 'Funciona localmente en tu navegador.',
    footer_home: 'Inicio',
    footer_privacy: 'Privacidad',
    home_sub: 'Herramientas prácticas para ingenieros electrónicos.',
    tools_title: 'Herramientas',
    available: 'Disponible',
    coming_soon: 'Próximamente',
    about_teaser: 'Construyendo herramientas prácticas para ingenieros electrónicos.',
    hero_title: 'Identificar y decodificar marcajes SMD',
    hero_sub: 'Decodifica marcajes SMD comunes e identifica posibles valores de resistencia o condensador cerámico.',
    input_label: 'Introduce el código SMD',
    placeholder: 'Introduce el código SMD, p. ej. 103, 1002 o 01C',
    decode: 'Decodificar',
    recent: 'Reciente',
    clear: 'Borrar',
    guide_why: '¿Por qué el mismo código SMD puede significar cosas diferentes?',
    guide_identify: 'Cómo identificar el componente real',
    codes_title: 'Cómo funcionan los códigos',
    code_3digit: 'Código de 3 dígitos',
    code_4digit: 'Código de 4 dígitos',
    code_eia96: 'Código EIA-96',
    faq_title: 'Preguntas frecuentes',
    label_resistor_interp: 'Interpretación de resistencia',
    label_capacitor_interp: 'Interpretación de condensador cerámico',
    label_resistor: 'Resistencia',
    note_precision: 'Marcaje de resistencia de precisión',
    warning_marking: 'Importante: el marcaje por sí solo no identifica el tipo de componente.',
    copy: 'Copiar resultado',
    copied: 'Copiado',
    err_empty: 'Introduce un marcaje SMD.',
    err_format: 'Formato de código SMD no compatible. Comprueba tu entrada.',
    err_eia96: 'Este código no se reconoce en la tabla de referencia EIA-96 compatible.'
  },
  fr: {
    brand_sub: 'Intelligence des composants électroniques',
    nav_about: 'À propos',
    trust_built: 'Conçu pour les ingénieurs.',
    trust_no_account: 'Aucun compte requis.',
    trust_local: 'Fonctionne localement dans votre navigateur.',
    footer_home: 'Accueil',
    footer_privacy: 'Confidentialité',
    home_sub: 'Des outils pratiques pour les ingénieurs en électronique.',
    tools_title: 'Outils',
    available: 'Disponible',
    coming_soon: 'Bientôt disponible',
    about_teaser: 'Construire des outils pratiques pour les ingénieurs en électronique.',
    hero_title: 'Identifier et décoder les marquages SMD',
    hero_sub: 'Décodez les marquages SMD courants et identifiez les valeurs possibles de résistance ou de condensateur céramique.',
    input_label: 'Saisissez le code SMD',
    placeholder: 'Saisissez un code SMD, ex. 103, 1002 ou 01C',
    decode: 'Décoder',
    recent: 'Récent',
    clear: 'Effacer',
    guide_why: 'Pourquoi le même code SMD peut-il signifier des choses différentes ?',
    guide_identify: 'Comment identifier le composant réel',
    codes_title: 'Comment fonctionnent les codes',
    code_3digit: 'Code à 3 chiffres',
    code_4digit: 'Code à 4 chiffres',
    code_eia96: 'Code EIA-96',
    faq_title: 'FAQ',
    label_resistor_interp: 'Interprétation résistance',
    label_capacitor_interp: 'Interprétation condensateur céramique',
    label_resistor: 'Résistance',
    note_precision: 'Marquage de résistance de précision',
    warning_marking: 'Important : le marquage seul ne permet pas d\'identifier le type de composant.',
    copy: 'Copier le résultat',
    copied: 'Copié',
    err_empty: 'Veuillez saisir un marquage SMD.',
    err_format: 'Format de code SMD non pris en charge. Veuillez vérifier votre saisie.',
    err_eia96: 'Ce code n\'est pas reconnu dans la table de référence EIA-96 prise en charge.'
  },
  ar: {
    brand_sub: 'ذكاء المكونات الإلكترونية',
    nav_about: 'حول',
    trust_built: 'صُمم للمهندسين.',
    trust_no_account: 'لا حاجة لحساب.',
    trust_local: 'يعمل محليًا في متصفحك.',
    footer_home: 'الرئيسية',
    footer_privacy: 'الخصوصية',
    home_sub: 'أدوات عملية لمهندسي الإلكترونيات.',
    tools_title: 'الأدوات',
    available: 'متاح',
    coming_soon: 'قريبًا',
    about_teaser: 'نبني أدوات عملية لمهندسي الإلكترونيات.',
    hero_title: 'تحديد وفك رموز علامات SMD',
    hero_sub: 'فك رموز علامات SMD الشائعة وتحديد قيم المقاومة أو المكثف السيراميكي المحتملة.',
    input_label: 'أدخل كود SMD',
    placeholder: 'أدخل كود SMD، مثل 103، 1002 أو 01C',
    decode: 'فك الترميز',
    recent: 'الأخيرة',
    clear: 'مسح',
    guide_why: 'لماذا يمكن أن يعني نفس كود SMD أشياء مختلفة؟',
    guide_identify: 'كيفية تحديد المكون الفعلي',
    codes_title: 'كيف تعمل الأكواد',
    code_3digit: 'كود 3 أرقام',
    code_4digit: 'كود 4 أرقام',
    code_eia96: 'كود EIA-96',
    faq_title: 'الأسئلة الشائعة',
    label_resistor_interp: 'تفسير المقاومة',
    label_capacitor_interp: 'تفسير المكثف السيراميكي',
    label_resistor: 'مقاومة',
    note_precision: 'علامة مقاومة دقيقة',
    warning_marking: 'مهم: العلامة وحدها لا تحدد نوع المكون.',
    copy: 'نسخ النتيجة',
    copied: 'تم النسخ',
    err_empty: 'يرجى إدخال علامة SMD.',
    err_format: 'صيغة كود SMD غير مدعومة. يرجى التحقق من الإدخال.',
    err_eia96: 'هذا الرمز غير معروف في جدول مرجع EIA-96 المدعوم.'
  },
  pt: {
    brand_sub: 'Inteligência de componentes eletrônicos',
    nav_about: 'Sobre',
    trust_built: 'Feito para engenheiros.',
    trust_no_account: 'Sem necessidade de conta.',
    trust_local: 'Funciona localmente no seu navegador.',
    footer_home: 'Início',
    footer_privacy: 'Privacidade',
    home_sub: 'Ferramentas práticas para engenheiros eletrônicos.',
    tools_title: 'Ferramentas',
    available: 'Disponível',
    coming_soon: 'Em breve',
    about_teaser: 'Construindo ferramentas práticas para engenheiros eletrônicos.',
    hero_title: 'Identificar e decodificar marcações SMD',
    hero_sub: 'Decodifique marcações SMD comuns e identifique possíveis valores de resistor ou capacitor cerâmico.',
    input_label: 'Digite o código SMD',
    placeholder: 'Digite um código SMD, ex. 103, 1002 ou 01C',
    decode: 'Decodificar',
    recent: 'Recente',
    clear: 'Limpar',
    guide_why: 'Por que o mesmo código SMD pode significar coisas diferentes?',
    guide_identify: 'Como identificar o componente real',
    codes_title: 'Como os códigos funcionam',
    code_3digit: 'Código de 3 dígitos',
    code_4digit: 'Código de 4 dígitos',
    code_eia96: 'Código EIA-96',
    faq_title: 'Perguntas frequentes',
    label_resistor_interp: 'Interpretação de resistor',
    label_capacitor_interp: 'Interpretação de capacitor cerâmico',
    label_resistor: 'Resistor',
    note_precision: 'Marcação de resistor de precisão',
    warning_marking: 'Importante: a marcação por si só não identifica o tipo de componente.',
    copy: 'Copiar resultado',
    copied: 'Copiado',
    err_empty: 'Digite uma marcação SMD.',
    err_format: 'Formato de código SMD não suportado. Verifique sua entrada.',
    err_eia96: 'Este código não é reconhecido na tabela de referência EIA-96 suportada.'
  },
  ru: {
    brand_sub: 'Интеллект электронных компонентов',
    nav_about: 'О нас',
    trust_built: 'Создано для инженеров.',
    trust_no_account: 'Без регистрации.',
    trust_local: 'Работает локально в вашем браузере.',
    footer_home: 'Главная',
    footer_privacy: 'Конфиденциальность',
    home_sub: 'Практичные инструменты для инженеров-электронщиков.',
    tools_title: 'Инструменты',
    available: 'Доступно',
    coming_soon: 'Скоро',
    about_teaser: 'Создаём практичные инструменты для инженеров-электронщиков.',
    hero_title: 'Идентификация и декодирование маркировок SMD',
    hero_sub: 'Декодируйте распространённые маркировки SMD и определяйте возможные номиналы резистора или керамического конденсатора.',
    input_label: 'Введите SMD-код',
    placeholder: 'Введите SMD-код, напр. 103, 1002 или 01C',
    decode: 'Декодировать',
    recent: 'Недавние',
    clear: 'Очистить',
    guide_why: 'Почему один и тот же SMD-код может означать разные вещи?',
    guide_identify: 'Как определить фактический компонент',
    codes_title: 'Как работают коды',
    code_3digit: '3-значный код',
    code_4digit: '4-значный код',
    code_eia96: 'Код EIA-96',
    faq_title: 'Частые вопросы',
    label_resistor_interp: 'Интерпретация резистора',
    label_capacitor_interp: 'Интерпретация керамического конденсатора',
    label_resistor: 'Резистор',
    note_precision: 'Маркировка прецизионного резистора',
    warning_marking: 'Важно: сама по себе маркировка не определяет тип компонента.',
    copy: 'Скопировать результат',
    copied: 'Скопировано',
    err_empty: 'Введите маркировку SMD.',
    err_format: 'Неподдерживаемый формат SMD-кода. Проверьте введённые данные.',
    err_eia96: 'Этот код не распознан в поддерживаемой справочной таблице EIA-96.'
  },
  de: {
    brand_sub: 'Elektronische Bauteil-Intelligenz',
    nav_about: 'Über uns',
    trust_built: 'Für Ingenieure gemacht.',
    trust_no_account: 'Kein Konto erforderlich.',
    trust_local: 'Läuft lokal in Ihrem Browser.',
    footer_home: 'Start',
    footer_privacy: 'Datenschutz',
    home_sub: 'Praktische Tools für Elektronikingenieure.',
    tools_title: 'Tools',
    available: 'Verfügbar',
    coming_soon: 'Bald verfügbar',
    about_teaser: 'Praktische Tools für Elektronikingenieure bauen.',
    hero_title: 'SMD-Kennzeichnungen identifizieren und dekodieren',
    hero_sub: 'Dekodieren Sie gängige SMD-Kennzeichnungen und identifizieren Sie mögliche Widerstands- oder Kondensatorwerte.',
    input_label: 'SMD-Code eingeben',
    placeholder: 'SMD-Code eingeben, z. B. 103, 1002 oder 01C',
    decode: 'Dekodieren',
    recent: 'Zuletzt',
    clear: 'Löschen',
    guide_why: 'Warum kann derselbe SMD-Code verschiedene Dinge bedeuten?',
    guide_identify: 'So identifizieren Sie das tatsächliche Bauteil',
    codes_title: 'So funktionieren die Codes',
    code_3digit: '3-stelliger Code',
    code_4digit: '4-stelliger Code',
    code_eia96: 'EIA-96-Code',
    faq_title: 'FAQ',
    label_resistor_interp: 'Widerstands-Interpretation',
    label_capacitor_interp: 'Keramikkondensator-Interpretation',
    label_resistor: 'Widerstand',
    note_precision: 'Präzisionswiderstands-Kennzeichnung',
    warning_marking: 'Wichtig: Die Kennzeichnung allein identifiziert nicht den Bauteiltyp.',
    copy: 'Ergebnis kopieren',
    copied: 'Kopiert',
    err_empty: 'Bitte geben Sie eine SMD-Kennzeichnung ein.',
    err_format: 'Nicht unterstütztes SMD-Code-Format. Bitte überprüfen Sie Ihre Eingabe.',
    err_eia96: 'Dieser Code ist in der unterstützten EIA-96-Referenztabelle nicht bekannt.'
  },
  ja: {
    brand_sub: '電子部品インテリジェンス',
    nav_about: '概要',
    trust_built: '技術者のために設計。',
    trust_no_account: 'アカウント不要。',
    trust_local: 'ブラウザ内でローカルに動作。',
    footer_home: 'ホーム',
    footer_privacy: 'プライバシー',
    home_sub: '電子技術者のための実用的なツール。',
    tools_title: 'ツール',
    available: '利用可能',
    coming_soon: '近日公開',
    about_teaser: '電子技術者のための実用的なツールを構築。',
    hero_title: 'SMDマーキングの識別とデコード',
    hero_sub: '一般的なSMDマーキングをデコードし、考えられる抵抗値・コンデンサ値を特定します。',
    input_label: 'SMDコードを入力',
    placeholder: 'SMDコードを入力（例：103、1002、01C）',
    decode: 'デコード',
    recent: '最近',
    clear: 'クリア',
    guide_why: 'なぜ同じSMDコードが異なる意味を持つのか？',
    guide_identify: '実際の部品を特定する方法',
    codes_title: 'コードの仕組み',
    code_3digit: '3桁コード',
    code_4digit: '4桁コード',
    code_eia96: 'EIA-96コード',
    faq_title: 'よくある質問',
    label_resistor_interp: '抵抗器の解釈',
    label_capacitor_interp: 'セラミックコンデンサの解釈',
    label_resistor: '抵抗器',
    note_precision: '高精度抵抗器のマーキング',
    warning_marking: '重要：マーキングだけでは部品の種類を特定できません。',
    copy: '結果をコピー',
    copied: 'コピーしました',
    err_empty: 'SMDマーキングを入力してください。',
    err_format: '未対応のSMDコード形式です。入力を確認してください。',
    err_eia96: 'このコードは対応するEIA-96参照表に存在しません。'
  },
  ko: {
    brand_sub: '전자 부품 인텔리전스',
    nav_about: '소개',
    trust_built: '엔지니어를 위해 제작.',
    trust_no_account: '계정 불필요.',
    trust_local: '브라우저에서 로컬로 실행.',
    footer_home: '홈',
    footer_privacy: '개인정보',
    home_sub: '전자 엔지니어를 위한 실용적인 도구.',
    tools_title: '도구',
    available: '사용 가능',
    coming_soon: '곧 제공 예정',
    about_teaser: '전자 엔지니어를 위한 실용적인 도구를 만듭니다.',
    hero_title: 'SMD 마킹 식별 및 디코드',
    hero_sub: '일반적인 SMD 마킹을 디코드하고 가능한 저항 또는 커패시터 값을 식별합니다.',
    input_label: 'SMD 코드 입력',
    placeholder: 'SMD 코드 입력 (예: 103, 1002 또는 01C)',
    decode: '디코드',
    recent: '최근',
    clear: '지우기',
    guide_why: '왜 같은 SMD 코드가 다른 의미를 가질까요?',
    guide_identify: '실제 부품을 식별하는 방법',
    codes_title: '코드 작동 방식',
    code_3digit: '3자리 코드',
    code_4digit: '4자리 코드',
    code_eia96: 'EIA-96 코드',
    faq_title: '자주 묻는 질문',
    label_resistor_interp: '저항기 해석',
    label_capacitor_interp: '세라믹 커패시터 해석',
    label_resistor: '저항기',
    note_precision: '정밀 저항기 마킹',
    warning_marking: '중요: 마킹만으로는 부품 유형을 식별할 수 없습니다.',
    copy: '결과 복사',
    copied: '복사됨',
    err_empty: 'SMD 마킹을 입력하세요.',
    err_format: '지원되지 않는 SMD 코드 형식입니다. 입력을 확인하세요.',
    err_eia96: '이 코드는 지원되는 EIA-96 참조 표에 없습니다.'
  },
  it: {
    brand_sub: 'Intelligenza dei componenti elettronici',
    nav_about: 'Informazioni',
    trust_built: 'Fatto per gli ingegneri.',
    trust_no_account: 'Nessun account richiesto.',
    trust_local: 'Funziona localmente nel tuo browser.',
    footer_home: 'Home',
    footer_privacy: 'Privacy',
    home_sub: 'Strumenti pratici per ingegneri elettronici.',
    tools_title: 'Strumenti',
    available: 'Disponibile',
    coming_soon: 'In arrivo',
    about_teaser: 'Costruiamo strumenti pratici per ingegneri elettronici.',
    hero_title: 'Identifica e decodifica i marcaggi SMD',
    hero_sub: 'Decodifica i marcaggi SMD comuni e identifica i possibili valori di resistore o condensatore ceramico.',
    input_label: 'Inserisci il codice SMD',
    placeholder: 'Inserisci un codice SMD, es. 103, 1002 o 01C',
    decode: 'Decodifica',
    recent: 'Recenti',
    clear: 'Cancella',
    guide_why: 'Perché lo stesso codice SMD può significare cose diverse?',
    guide_identify: 'Come identificare il componente reale',
    codes_title: 'Come funzionano i codici',
    code_3digit: 'Codice a 3 cifre',
    code_4digit: 'Codice a 4 cifre',
    code_eia96: 'Codice EIA-96',
    faq_title: 'Domande frequenti',
    label_resistor_interp: 'Interpretazione resistore',
    label_capacitor_interp: 'Interpretazione condensatore ceramico',
    label_resistor: 'Resistore',
    note_precision: 'Marcatura di resistore di precisione',
    warning_marking: 'Importante: il marcaggio da solo non identifica il tipo di componente.',
    copy: 'Copia risultato',
    copied: 'Copiato',
    err_empty: 'Inserisci un marcaggio SMD.',
    err_format: 'Formato codice SMD non supportato. Controlla il tuo input.',
    err_eia96: 'Questo codice non è riconosciuto nella tabella di riferimento EIA-96 supportata.'
  }
};

let currentLang = 'en';

export function t(key) {
  if (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key] !== undefined) {
    return TRANSLATIONS[currentLang][key];
  }
  if (TRANSLATIONS.en[key] !== undefined) {
    return TRANSLATIONS.en[key];
  }
  return key;
}

function languageMeta(code) {
  return LANGUAGES.find((l) => l.code === code) || LANGUAGES[0];
}

function detectBrowserLang() {
  const nav = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
  const short = nav.split('-')[0];
  if (LANGUAGES.some((l) => l.code === short)) return short;
  if (LANGUAGES.some((l) => l.code === nav)) return nav;
  return 'en';
}

function ready(fn) {
  if (document.readyState !== 'loading') fn();
  else document.addEventListener('DOMContentLoaded', fn);
}

export function applyLanguage(lang) {
  const meta = languageMeta(lang);
  currentLang = meta.code;

  document.documentElement.lang = meta.code;
  document.documentElement.dir = meta.dir;

  try {
    localStorage.setItem(LANG_KEY, meta.code);
  } catch (e) { /* ignore */ }

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    el.innerHTML = t(el.getAttribute('data-i18n'));
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
  });

  const sel = document.getElementById('lang-select');
  if (sel) sel.value = meta.code;

  if (typeof window.__onLanguageChange === 'function') {
    window.__onLanguageChange();
  }
}

export function initI18n() {
  ready(() => {
    const sel = document.getElementById('lang-select');
    if (sel) {
      sel.innerHTML = LANGUAGES.map((l) =>
        `<option value="${l.code}">${l.name}</option>`
      ).join('');
      sel.addEventListener('change', () => applyLanguage(sel.value));
    }

    let saved = '';
    try {
      saved = localStorage.getItem(LANG_KEY) || '';
    } catch (e) { /* ignore */ }

    if (!saved || !LANGUAGES.some((l) => l.code === saved)) {
      saved = detectBrowserLang();
    }

    applyLanguage(saved);
  });
}
