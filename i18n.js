/* =========================================================================
 * ECCHIPS SMD Code Lookup Tool — i18n
 * 12 languages: English, Chinese, Hindi, Spanish, French, Arabic,
 * Portuguese, Russian, German, Japanese, Korean, Italian
 * ========================================================================= */

const LANG_KEY = 'ecchips_lang';

/* Language list (native names for the selector), ordered by global reach. */
const LANGUAGES = [
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

const TRANSLATIONS = {

  /* ------------------------------- English ------------------------------ */
  en: {
    page_title: 'SMD Code Lookup — Decode SMD Markings | ECCHIPS',
    meta_description: 'Decode and interpret SMD resistor and ceramic capacitor markings (3-digit, 4-digit, EIA-96) instantly. ECCHIPS electronic components engineering tools.',
    brand_sub: 'Electronic Components Engineering Tools',
    brand_tagline: 'Practical tools for electronics engineers.',
    tool_name: 'SMD Code Lookup',
    nav_smd: 'SMD Lookup',
    nav_voltage: 'Voltage Divider',
    nav_led: 'LED Resistor',
    coming_soon: 'Coming soon',
    hero_title: 'Decode & Interpret SMD Markings',
    hero_sub: 'Decode common SMD resistor and capacitor markings instantly.',
    placeholder: 'Enter SMD code, e.g. 103, 1002, 01C',
    decode: 'Decode',
    examples: 'Examples:',
    recent: 'Recent Searches',
    clear: 'Clear',
    info_title: 'How to read SMD codes',
    info3_title: '3-Digit Code',
    info3_desc: 'First two digits are the significant value, third digit is the multiplier (power of 10). May represent a <strong>resistor</strong> or a <strong>ceramic capacitor</strong>.',
    info4_title: '4-Digit Code',
    info4_desc: 'First three digits are the significant value, fourth digit is the multiplier. Used for <strong>precision SMD resistors</strong> only.',
    infoeia_title: 'EIA-96 Code',
    infoeia_desc: 'Two digits map to a value from the EIA-96 table, followed by a letter multiplier. Used for <strong>1% precision resistors</strong>.',
    footer_text: 'ECCHIPS. Electronic Components Engineering Tools.',
    footer_about: 'About',
    footer_contact: 'Contact',
    trust_built: 'Built for engineers.',
    trust_no_account: 'No account required.',
    trust_local: 'Runs locally in your browser.',
    err_empty: 'Please enter an SMD code.',
    err_format: 'Unsupported SMD code format.',
    err_check: 'Please check your input.',
    err_eia96: 'Unknown EIA-96 code.',
    hint_reverse: 'Need value → code lookup? Coming soon.',
    label_resistor: 'Resistor',
    label_capacitor: 'Ceramic Capacitor',
    label_type: 'Type',
    label_system: 'System',
    label_precision: 'Precision SMD Resistor',
    label_eia96: 'EIA-96',
    note_3: 'This code may represent either a resistor or a ceramic capacitor depending on circuit context.',
    note_4: 'Four-digit codes are precision SMD resistor codes only.',
    note_eia: 'EIA-96 is a 1% precision resistor coding system.',
    result_title: 'Lookup Result',
    copy: 'Copy Result',
    copied: 'Copied!',
    copy_smd_code: 'SMD Code',
    copy_source: 'Source',
    copy_toolname: 'ECCHIPS SMD Code Lookup',
    copy_decoded_on: 'Decoded on'
  },

  /* --------------------------- Chinese (中文) --------------------------- */
  zh: {
    page_title: 'SMD代码查询 — 解码SMD标识 | ECCHIPS',
    meta_description: '即时解码与解读SMD电阻、陶瓷电容标识（三位、四位、EIA-96）。ECCHIPS电子元器件工程工具。',
    brand_sub: '电子元器件工程工具',
    brand_tagline: '为电子工程师打造的实用工具。',
    tool_name: 'SMD代码查询',
    nav_smd: 'SMD查询',
    nav_voltage: '分压计算器',
    nav_led: 'LED电阻计算器',
    coming_soon: '即将上线',
    hero_title: '解码与判读 SMD 标识',
    hero_sub: '即时解析常见的 SMD 电阻与电容标识。',
    placeholder: '输入SMD代码，例如 103、1002、01C',
    decode: '解码',
    examples: '示例：',
    recent: '最近查询',
    clear: '清空',
    info_title: '如何读懂SMD代码',
    info3_title: '三位代码',
    info3_desc: '前两位为有效数字，第三位为乘数（10的幂）。可能代表<strong>电阻</strong>或<strong>陶瓷电容</strong>。',
    info4_title: '四位代码',
    info4_desc: '前三位为有效数字，第四位为乘数。仅用于<strong>精密SMD电阻</strong>。',
    infoeia_title: 'EIA-96代码',
    infoeia_desc: '两位数字对应EIA-96表中的数值，后跟一个字母乘数。用于<strong>1%精密电阻</strong>。',
    footer_text: 'ECCHIPS. 电子元器件工程工具。',
    footer_about: '关于',
    footer_contact: '联系',
    trust_built: '为工程师打造。',
    trust_no_account: '无需注册账号。',
    trust_local: '在您的浏览器本地运行。',
    err_empty: '请输入SMD代码。',
    err_format: '不支持的SMD代码格式。',
    err_check: '请检查您的输入。',
    err_eia96: '未知的EIA-96代码。',
    hint_reverse: '需要 数值→代码 反向查询？即将上线。',
    label_resistor: '电阻',
    label_capacitor: '陶瓷电容',
    label_type: '类型',
    label_system: '体系',
    label_precision: '精密SMD电阻',
    label_eia96: 'EIA-96',
    note_3: '该代码根据电路上下文，可能代表电阻或陶瓷电容。',
    note_4: '四位代码仅表示精密SMD电阻。',
    note_eia: 'EIA-96是1%精密电阻的编码体系。',
    result_title: '查询结果',
    copy: '复制结果',
    copied: '已复制！',
    copy_smd_code: 'SMD代码',
    copy_source: '来源',
    copy_toolname: 'ECCHIPS SMD代码查询工具',
    copy_decoded_on: '解码日期'
  },

  /* ----------------------------- Hindi (हिन्दी) --------------------------- */
  hi: {
    page_title: 'SMD कोड लुकअप — SMD मार्किंग डिकोड करें | ECCHIPS',
    meta_description: 'SMD प्रतिरोधक और सिरेमिक संधारित्र मार्किंग (3-अंकीय, 4-अंकीय, EIA-96) को तुरंत डिकोड और समझें।',
    brand_sub: 'इलेक्ट्रॉनिक कंपोनेंट इंजीनियरिंग टूल्स',
    brand_tagline: 'इलेक्ट्रॉनिक्स इंजीनियरों के लिए व्यावहारिक उपकरण।',
    tool_name: 'SMD कोड लुकअप',
    nav_smd: 'SMD खोज',
    nav_voltage: 'वोल्टेज विभाजक',
    nav_led: 'LED प्रतिरोधक',
    coming_soon: 'जल्द आ रहा है',
    hero_title: 'SMD मार्किंग को डिकोड और समझें',
    hero_sub: 'सामान्य SMD प्रतिरोधक और संधारित्र मार्किंग को तुरंत डिकोड करें।',
    placeholder: 'SMD कोड दर्ज करें, जैसे 103, 1002, 01C',
    decode: 'डिकोड करें',
    examples: 'उदाहरण:',
    recent: 'हाल की खोजें',
    clear: 'साफ़ करें',
    info_title: 'SMD कोड कैसे पढ़ें',
    info3_title: '3-अंकीय कोड',
    info3_desc: 'पहले दो अंक महत्वपूर्ण मान हैं, तीसरा गुणक (10 की घात) है। यह <strong>प्रतिरोधक</strong> या <strong>सिरेमिक संधारित्र</strong> दर्शा सकता है।',
    info4_title: '4-अंकीय कोड',
    info4_desc: 'पहले तीन अंक महत्वपूर्ण मान हैं, चौथा गुणक है। केवल <strong>प्रेसिजन SMD प्रतिरोधकों</strong> के लिए।',
    infoeia_title: 'EIA-96 कोड',
    infoeia_desc: 'दो अंक EIA-96 तालिका के मान से मेल खाते हैं, उसके बाद एक अक्षर गुणक। <strong>1% प्रेसिजन प्रतिरोधकों</strong> के लिए।',
    footer_text: 'ECCHIPS. इलेक्ट्रॉनिक कंपोनेंट इंजीनियरिंग टूल्स।',
    footer_about: 'परिचय',
    footer_contact: 'संपर्क',
    trust_built: 'इंजीनियरों के लिए बनाया गया।',
    trust_no_account: 'किसी खाते की आवश्यकता नहीं।',
    trust_local: 'आपके ब्राउज़र में स्थानीय रूप से चलता है।',
    err_empty: 'कृपया एक SMD कोड दर्ज करें।',
    err_format: 'असमर्थित SMD कोड प्रारूप।',
    err_check: 'कृपया अपना इनपुट जाँचें।',
    err_eia96: 'अज्ञात EIA-96 कोड।',
    hint_reverse: 'मान → कोड लुकअप चाहिए? जल्द आ रहा है।',
    label_resistor: 'प्रतिरोधक',
    label_capacitor: 'सिरेमिक संधारित्र',
    label_type: 'प्रकार',
    label_system: 'प्रणाली',
    label_precision: 'प्रेसिजन SMD प्रतिरोधक',
    label_eia96: 'EIA-96',
    note_3: 'यह कोड सर्किट के संदर्भ के अनुसार प्रतिरोधक या सिरेमिक संधारित्र दर्शा सकता है।',
    note_4: 'चार अंकों वाले कोड केवल प्रेसिजन SMD प्रतिरोधक होते हैं।',
    note_eia: 'EIA-96 1% प्रेसिजन प्रतिरोधकों की कोडिंग प्रणाली है।',
    result_title: 'खोज परिणाम',
    copy: 'परिणाम कॉपी करें',
    copied: 'कॉपी हो गया!',
    copy_smd_code: 'SMD कोड',
    copy_source: 'स्रोत',
    copy_toolname: 'ECCHIPS SMD कोड लुकअप उपकरण',
    copy_decoded_on: 'डिकोड दिनांक'
  },

  /* ----------------------------- Spanish (Español) ---------------------- */
  es: {
    page_title: 'Búsqueda de códigos SMD — Decodificar marcajes SMD | ECCHIPS',
    meta_description: 'Decodifica e interpreta al instante marcajes de resistencias y condensadores cerámicos SMD (3, 4 dígitos, EIA-96).',
    brand_sub: 'Herramientas de ingeniería de componentes electrónicos',
    brand_tagline: 'Herramientas prácticas para ingenieros electrónicos.',
    tool_name: 'Búsqueda de códigos SMD',
    nav_smd: 'Búsqueda SMD',
    nav_voltage: 'Divisor de tensión',
    nav_led: 'Resistencia LED',
    coming_soon: 'Próximamente',
    hero_title: 'Decodificar e interpretar marcajes SMD',
    hero_sub: 'Decodifica al instante los marcajes comunes de resistencias y condensadores SMD.',
    placeholder: 'Introduce un código SMD, p. ej. 103, 1002, 01C',
    decode: 'Decodificar',
    examples: 'Ejemplos:',
    recent: 'Búsquedas recientes',
    clear: 'Borrar',
    info_title: 'Cómo leer los códigos SMD',
    info3_title: 'Código de 3 dígitos',
    info3_desc: 'Los dos primeros dígitos son el valor significativo, el tercero es el multiplicador (potencia de 10). Puede representar una <strong>resistencia</strong> o un <strong>condensador cerámico</strong>.',
    info4_title: 'Código de 4 dígitos',
    info4_desc: 'Los tres primeros dígitos son el valor significativo, el cuarto es el multiplicador. Se usa solo para <strong>resistencias SMD de precisión</strong>.',
    infoeia_title: 'Código EIA-96',
    infoeia_desc: 'Dos dígitos corresponden a un valor de la tabla EIA-96, seguidos de una letra multiplicadora. Se usa para <strong>resistencias de precisión al 1%</strong>.',
    footer_text: 'ECCHIPS. Herramientas de ingeniería de componentes electrónicos.',
    footer_about: 'Acerca de',
    footer_contact: 'Contacto',
    trust_built: 'Hecho para ingenieros.',
    trust_no_account: 'No requiere cuenta.',
    trust_local: 'Funciona localmente en tu navegador.',
    err_empty: 'Introduce un código SMD.',
    err_format: 'Formato de código SMD no compatible.',
    err_check: 'Comprueba tu entrada.',
    err_eia96: 'Código EIA-96 desconocido.',
    hint_reverse: '¿Necesitas búsqueda valor → código? Próximamente.',
    label_resistor: 'Resistencia',
    label_capacitor: 'Condensador cerámico',
    label_type: 'Tipo',
    label_system: 'Sistema',
    label_precision: 'Resistencia SMD de precisión',
    label_eia96: 'EIA-96',
    note_3: 'Este código puede representar una resistencia o un condensador cerámico según el contexto del circuito.',
    note_4: 'Los códigos de cuatro dígitos son solo resistencias SMD de precisión.',
    note_eia: 'EIA-96 es un sistema de codificación para resistencias de precisión al 1%.',
    result_title: 'Resultado de la búsqueda',
    copy: 'Copiar resultado',
    copied: '¡Copiado!',
    copy_smd_code: 'Código SMD',
    copy_source: 'Fuente',
    copy_toolname: 'Búsqueda de códigos SMD ECCHIPS',
    copy_decoded_on: 'Decodificado el'
  },

  /* ----------------------------- French (Français) ---------------------- */
  fr: {
    page_title: 'Recherche de codes SMD — Décoder les marquages SMD | ECCHIPS',
    meta_description: 'Décodez et interprétez instantanément les marquages de résistances et condensateurs céramiques SMD (3, 4 chiffres, EIA-96).',
    brand_sub: 'Outils d\'ingénierie pour composants électroniques',
    brand_tagline: 'Des outils pratiques pour les ingénieurs en électronique.',
    tool_name: 'Recherche de codes SMD',
    nav_smd: 'Recherche SMD',
    nav_voltage: 'Diviseur de tension',
    nav_led: 'Résistance LED',
    coming_soon: 'Bientôt disponible',
    hero_title: 'Décoder et interpréter les marquages SMD',
    hero_sub: 'Décodez instantanément les marquages courants de résistances et condensateurs SMD.',
    placeholder: 'Entrez un code SMD, ex. 103, 1002, 01C',
    decode: 'Décoder',
    examples: 'Exemples :',
    recent: 'Recherches récentes',
    clear: 'Effacer',
    info_title: 'Comment lire les codes SMD',
    info3_title: 'Code à 3 chiffres',
    info3_desc: 'Les deux premiers chiffres sont la valeur significative, le troisième est le multiplicateur (puissance de 10). Peut représenter une <strong>résistance</strong> ou un <strong>condensateur céramique</strong>.',
    info4_title: 'Code à 4 chiffres',
    info4_desc: 'Les trois premiers chiffres sont la valeur significative, le quatrième est le multiplicateur. Utilisé uniquement pour les <strong>résistances SMD de précision</strong>.',
    infoeia_title: 'Code EIA-96',
    infoeia_desc: 'Deux chiffres correspondent à une valeur du tableau EIA-96, suivis d\'une lettre multiplicateur. Utilisé pour les <strong>résistances de précision 1%</strong>.',
    footer_text: 'ECCHIPS. Outils d\'ingénierie pour composants électroniques.',
    footer_about: 'À propos',
    footer_contact: 'Contact',
    trust_built: 'Conçu pour les ingénieurs.',
    trust_no_account: 'Aucun compte requis.',
    trust_local: 'Fonctionne localement dans votre navigateur.',
    err_empty: 'Veuillez saisir un code SMD.',
    err_format: 'Format de code SMD non pris en charge.',
    err_check: 'Veuillez vérifier votre saisie.',
    err_eia96: 'Code EIA-96 inconnu.',
    hint_reverse: 'Besoin de la recherche valeur → code ? Bientôt disponible.',
    label_resistor: 'Résistance',
    label_capacitor: 'Condensateur céramique',
    label_type: 'Type',
    label_system: 'Système',
    label_precision: 'Résistance SMD de précision',
    label_eia96: 'EIA-96',
    note_3: 'Ce code peut représenter soit une résistance soit un condensateur céramique selon le contexte du circuit.',
    note_4: 'Les codes à quatre chiffres désignent uniquement des résistances SMD de précision.',
    note_eia: 'EIA-96 est un système de codage pour résistances de précision 1%.',
    result_title: 'Résultat de la recherche',
    copy: 'Copier le résultat',
    copied: 'Copié !',
    copy_smd_code: 'Code SMD',
    copy_source: 'Source',
    copy_toolname: 'Recherche de codes SMD ECCHIPS',
    copy_decoded_on: 'Décodé le'
  },

  /* ----------------------------- Arabic (العربية) ------------------------ */
  ar: {
    page_title: 'البحث عن أكواد SMD — فك رموز علامات SMD | ECCHIPS',
    meta_description: 'فك رموز وتفسير علامات المقاومات والمكثفات السيراميكية SMD (3 أرقام، 4 أرقام، EIA-96) فورًا.',
    brand_sub: 'أدوات هندسة المكونات الإلكترونية',
    brand_tagline: 'أدوات عملية لمهندسي الإلكترونيات.',
    tool_name: 'البحث عن أكواد SMD',
    nav_smd: 'بحث SMD',
    nav_voltage: 'مقسم الجهد',
    nav_led: 'مقاومة LED',
    coming_soon: 'قريبًا',
    hero_title: 'فك رموز علامات SMD وتفسيرها',
    hero_sub: 'فك رموز علامات المقاومات والمكثفات SMD الشائعة فورًا.',
    placeholder: 'أدخل كود SMD، مثل 103، 1002، 01C',
    decode: 'فك الترميز',
    examples: 'أمثلة:',
    recent: 'عمليات البحث الأخيرة',
    clear: 'مسح',
    info_title: 'كيفية قراءة أكواد SMD',
    info3_title: 'كود 3 أرقام',
    info3_desc: 'الرقمان الأولان هما القيمة المعنوية، والثالث هو المضاعف (قوة العدد 10). قد يمثل <strong>مقاومة</strong> أو <strong>مكثف سيراميكي</strong>.',
    info4_title: 'كود 4 أرقام',
    info4_desc: 'الأرقام الثلاثة الأولى هي القيمة المعنوية، والرابع هو المضاعف. يُستخدم فقط <strong>لمقاومات SMD الدقيقة</strong>.',
    infoeia_title: 'كود EIA-96',
    infoeia_desc: 'رقمان يقابلان قيمة من جدول EIA-96، يليهما حرف مضاعف. يُستخدم <strong>للمقاومات الدقيقة 1%</strong>.',
    footer_text: 'ECCHIPS. أدوات هندسة المكونات الإلكترونية.',
    footer_about: 'حول',
    footer_contact: 'اتصل بنا',
    trust_built: 'صُمم للمهندسين.',
    trust_no_account: 'لا حاجة لحساب.',
    trust_local: 'يعمل محليًا في متصفحك.',
    err_empty: 'يرجى إدخال كود SMD.',
    err_format: 'صيغة كود SMD غير مدعومة.',
    err_check: 'يرجى التحقق من الإدخال.',
    err_eia96: 'كود EIA-96 غير معروف.',
    hint_reverse: 'هل تحتاج البحث العكسي من القيمة إلى الرمز؟ قريبًا.',
    label_resistor: 'مقاومة',
    label_capacitor: 'مكثف سيراميكي',
    label_type: 'النوع',
    label_system: 'النظام',
    label_precision: 'مقاومة SMD دقيقة',
    label_eia96: 'EIA-96',
    note_3: 'قد يمثل هذا الكود مقاومة أو مكثفًا سيراميكيًا حسب سياق الدائرة.',
    note_4: 'الأكواد ذات الأربعة أرقام هي مقاومات SMD دقيقة فقط.',
    note_eia: 'EIA-96 هو نظام ترميز للمقاومات الدقيقة 1%.',
    result_title: 'نتيجة البحث',
    copy: 'نسخ النتيجة',
    copied: 'تم النسخ!',
    copy_smd_code: 'كود SMD',
    copy_source: 'المصدر',
    copy_toolname: 'البحث عن أكواد SMD من ECCHIPS',
    copy_decoded_on: 'تاريخ فك الترميز'
  },

  /* --------------------------- Portuguese (Português) -------------------- */
  pt: {
    page_title: 'Busca de códigos SMD — Decodificar marcações SMD | ECCHIPS',
    meta_description: 'Decodifique e interprete instantaneamente marcações de resistores e capacitores cerâmicos SMD (3, 4 dígitos, EIA-96).',
    brand_sub: 'Ferramentas de engenharia de componentes eletrônicos',
    brand_tagline: 'Ferramentas práticas para engenheiros eletrônicos.',
    tool_name: 'Busca de códigos SMD',
    nav_smd: 'Busca SMD',
    nav_voltage: 'Divisor de tensão',
    nav_led: 'Resistor LED',
    coming_soon: 'Em breve',
    hero_title: 'Decodificar e interpretar marcações SMD',
    hero_sub: 'Decodifique instantaneamente as marcações comuns de resistores e capacitores SMD.',
    placeholder: 'Digite um código SMD, ex. 103, 1002, 01C',
    decode: 'Decodificar',
    examples: 'Exemplos:',
    recent: 'Buscas recentes',
    clear: 'Limpar',
    info_title: 'Como ler códigos SMD',
    info3_title: 'Código de 3 dígitos',
    info3_desc: 'Os dois primeiros dígitos são o valor significativo, o terceiro é o multiplicador (potência de 10). Pode representar um <strong>resistor</strong> ou um <strong>capacitor cerâmico</strong>.',
    info4_title: 'Código de 4 dígitos',
    info4_desc: 'Os três primeiros dígitos são o valor significativo, o quarto é o multiplicador. Usado apenas para <strong>resistores SMD de precisão</strong>.',
    infoeia_title: 'Código EIA-96',
    infoeia_desc: 'Dois dígitos correspondem a um valor da tabela EIA-96, seguidos por uma letra multiplicadora. Usado para <strong>resistores de precisão de 1%</strong>.',
    footer_text: 'ECCHIPS. Ferramentas de engenharia de componentes eletrônicos.',
    footer_about: 'Sobre',
    footer_contact: 'Contato',
    trust_built: 'Feito para engenheiros.',
    trust_no_account: 'Sem necessidade de conta.',
    trust_local: 'Funciona localmente no seu navegador.',
    err_empty: 'Digite um código SMD.',
    err_format: 'Formato de código SMD não suportado.',
    err_check: 'Verifique sua entrada.',
    err_eia96: 'Código EIA-96 desconhecido.',
    hint_reverse: 'Precisa de busca valor → código? Em breve.',
    label_resistor: 'Resistor',
    label_capacitor: 'Capacitor cerâmico',
    label_type: 'Tipo',
    label_system: 'Sistema',
    label_precision: 'Resistor SMD de precisão',
    label_eia96: 'EIA-96',
    note_3: 'Este código pode representar um resistor ou um capacitor cerâmico dependendo do contexto do circuito.',
    note_4: 'Códigos de quatro dígitos indicam apenas resistores SMD de precisão.',
    note_eia: 'EIA-96 é um sistema de codificação para resistores de precisão de 1%.',
    result_title: 'Resultado da busca',
    copy: 'Copiar resultado',
    copied: 'Copiado!',
    copy_smd_code: 'Código SMD',
    copy_source: 'Fonte',
    copy_toolname: 'Busca de códigos SMD ECCHIPS',
    copy_decoded_on: 'Decodificado em'
  },

  /* ----------------------------- Russian (Русский) ----------------------- */
  ru: {
    page_title: 'Поиск SMD-кодов — Декодирование маркировок SMD | ECCHIPS',
    meta_description: 'Мгновенно декодируйте и интерпретируйте маркировки SMD-резисторов и керамических конденсаторов (3, 4 знака, EIA-96).',
    brand_sub: 'Инженерные инструменты для электронных компонентов',
    brand_tagline: 'Практичные инструменты для инженеров-электронщиков.',
    tool_name: 'Поиск SMD-кодов',
    nav_smd: 'Поиск SMD',
    nav_voltage: 'Делитель напряжения',
    nav_led: 'Резистор для LED',
    coming_soon: 'Скоро',
    hero_title: 'Декодирование и интерпретация маркировок SMD',
    hero_sub: 'Мгновенно расшифровывайте распространённые маркировки SMD-резисторов и конденсаторов.',
    placeholder: 'Введите SMD-код, напр. 103, 1002, 01C',
    decode: 'Декодировать',
    examples: 'Примеры:',
    recent: 'Недавние поиски',
    clear: 'Очистить',
    info_title: 'Как читать SMD-коды',
    info3_title: '3-значный код',
    info3_desc: 'Первые две цифры — значение, третья — множитель (степень 10). Может обозначать <strong>резистор</strong> или <strong>керамический конденсатор</strong>.',
    info4_title: '4-значный код',
    info4_desc: 'Первые три цифры — значение, четвёртая — множитель. Только для <strong>прецизионных SMD-резисторов</strong>.',
    infoeia_title: 'Код EIA-96',
    infoeia_desc: 'Две цифры соответствуют значению из таблицы EIA-96, за ними следует буквенный множитель. Для <strong>прецизионных резисторов 1%</strong>.',
    footer_text: 'ECCHIPS. Инженерные инструменты для электронных компонентов.',
    footer_about: 'О нас',
    footer_contact: 'Контакты',
    trust_built: 'Создано для инженеров.',
    trust_no_account: 'Без регистрации.',
    trust_local: 'Работает локально в вашем браузере.',
    err_empty: 'Введите SMD-код.',
    err_format: 'Неподдерживаемый формат SMD-кода.',
    err_check: 'Проверьте введённые данные.',
    err_eia96: 'Неизвестный код EIA-96.',
    hint_reverse: 'Нужен поиск значение → код? Скоро.',
    label_resistor: 'Резистор',
    label_capacitor: 'Керамический конденсатор',
    label_type: 'Тип',
    label_system: 'Система',
    label_precision: 'Прецизионный SMD-резистор',
    label_eia96: 'EIA-96',
    note_3: 'Этот код может обозначать резистор или керамический конденсатор в зависимости от контекста схемы.',
    note_4: 'Четырёхзначные коды — только прецизионные SMD-резисторы.',
    note_eia: 'EIA-96 — система кодирования прецизионных резисторов 1%.',
    result_title: 'Результат поиска',
    copy: 'Скопировать результат',
    copied: 'Скопировано!',
    copy_smd_code: 'SMD-код',
    copy_source: 'Источник',
    copy_toolname: 'Инструмент поиска SMD-кодов ECCHIPS',
    copy_decoded_on: 'Дата декодирования'
  },

  /* ----------------------------- German (Deutsch) ------------------------ */
  de: {
    page_title: 'SMD-Code-Suche — SMD-Kennzeichnungen dekodieren | ECCHIPS',
    meta_description: 'Dekodieren und interpretieren Sie SMD-Widerstands- und Keramikkondensator-Kennzeichnungen (3-stellig, 4-stellig, EIA-96) sofort.',
    brand_sub: 'Engineering-Tools für elektronische Bauteile',
    brand_tagline: 'Praktische Tools für Elektronikingenieure.',
    tool_name: 'SMD-Code-Suche',
    nav_smd: 'SMD-Suche',
    nav_voltage: 'Spannungsteiler',
    nav_led: 'LED-Widerstand',
    coming_soon: 'Bald verfügbar',
    hero_title: 'SMD-Kennzeichnungen dekodieren und interpretieren',
    hero_sub: 'Dekodieren Sie gängige SMD-Widerstands- und Kondensator-Kennzeichnungen sofort.',
    placeholder: 'SMD-Code eingeben, z. B. 103, 1002, 01C',
    decode: 'Dekodieren',
    examples: 'Beispiele:',
    recent: 'Letzte Suchen',
    clear: 'Löschen',
    info_title: 'So liest man SMD-Codes',
    info3_title: '3-stelliger Code',
    info3_desc: 'Die ersten beiden Ziffern sind der Wert, die dritte ist der Multiplikator (Zehnerpotenz). Kann einen <strong>Widerstand</strong> oder einen <strong>Keramikkondensator</strong> darstellen.',
    info4_title: '4-stelliger Code',
    info4_desc: 'Die ersten drei Ziffern sind der Wert, die vierte ist der Multiplikator. Nur für <strong>Präzisions-SMD-Widerstände</strong>.',
    infoeia_title: 'EIA-96-Code',
    infoeia_desc: 'Zwei Ziffern entsprechen einem Wert aus der EIA-96-Tabelle, gefolgt von einem Buchstaben-Multiplikator. Für <strong>1%-Präzisionswiderstände</strong>.',
    footer_text: 'ECCHIPS. Engineering-Tools für elektronische Bauteile.',
    footer_about: 'Über uns',
    footer_contact: 'Kontakt',
    trust_built: 'Für Ingenieure gemacht.',
    trust_no_account: 'Kein Konto erforderlich.',
    trust_local: 'Läuft lokal in Ihrem Browser.',
    err_empty: 'Bitte einen SMD-Code eingeben.',
    err_format: 'Nicht unterstütztes SMD-Code-Format.',
    err_check: 'Bitte Eingabe überprüfen.',
    err_eia96: 'Unbekannter EIA-96-Code.',
    hint_reverse: 'Wert → Code-Suche nötig? Bald verfügbar.',
    label_resistor: 'Widerstand',
    label_capacitor: 'Keramikkondensator',
    label_type: 'Typ',
    label_system: 'System',
    label_precision: 'Präzisions-SMD-Widerstand',
    label_eia96: 'EIA-96',
    note_3: 'Dieser Code kann je nach Schaltungskontext einen Widerstand oder einen Keramikkondensator darstellen.',
    note_4: 'Vierstellige Codes sind ausschließlich Präzisions-SMD-Widerstände.',
    note_eia: 'EIA-96 ist ein Kodierungssystem für 1%-Präzisionswiderstände.',
    result_title: 'Suchergebnis',
    copy: 'Ergebnis kopieren',
    copied: 'Kopiert!',
    copy_smd_code: 'SMD-Code',
    copy_source: 'Quelle',
    copy_toolname: 'ECCHIPS SMD-Code-Suchtool',
    copy_decoded_on: 'Dekodiert am'
  },

  /* ---------------------------- Japanese (日本語) ------------------------ */
  ja: {
    page_title: 'SMDコード検索 — SMDマーキングをデコード | ECCHIPS',
    meta_description: 'SMD抵抗器とセラミックコンデンサのマーキング（3桁・4桁・EIA-96）を即座にデコード・解釈。',
    brand_sub: '電子部品エンジニアリングツール',
    brand_tagline: '電子技術者のための実用的なツール。',
    tool_name: 'SMDコード検索',
    nav_smd: 'SMD検索',
    nav_voltage: '分圧計算',
    nav_led: 'LED抵抗',
    coming_soon: '近日公開',
    hero_title: 'SMDマーキングのデコードと解釈',
    hero_sub: '一般的なSMD抵抗器・コンデンサのマーキングを即座にデコード。',
    placeholder: 'SMDコードを入力（例：103、1002、01C）',
    decode: 'デコード',
    examples: '例：',
    recent: '最近の検索',
    clear: 'クリア',
    info_title: 'SMDコードの読み方',
    info3_title: '3桁コード',
    info3_desc: '最初の2桁が有効数字、3桁目が乗数（10の累乗）です。<strong>抵抗器</strong>または<strong>セラミックコンデンサ</strong>を表す場合があります。',
    info4_title: '4桁コード',
    info4_desc: '最初の3桁が有効数字、4桁目が乗数です。<strong>高精度SMD抵抗器</strong>専用です。',
    infoeia_title: 'EIA-96コード',
    infoeia_desc: '2桁がEIA-96表の値に対応し、その後に文字の乗数が続きます。<strong>1%精度の抵抗器</strong>に使用されます。',
    footer_text: 'ECCHIPS. 電子部品エンジニアリングツール。',
    footer_about: '概要',
    footer_contact: 'お問い合わせ',
    trust_built: '技術者のために設計。',
    trust_no_account: 'アカウント不要。',
    trust_local: 'ブラウザ内でローカルに動作。',
    err_empty: 'SMDコードを入力してください。',
    err_format: '未対応のSMDコード形式です。',
    err_check: '入力を確認してください。',
    err_eia96: '不明なEIA-96コードです。',
    hint_reverse: '値→コードの逆引きが必要ですか？近日公開。',
    label_resistor: '抵抗器',
    label_capacitor: 'セラミックコンデンサ',
    label_type: 'タイプ',
    label_system: '方式',
    label_precision: '高精度SMD抵抗器',
    label_eia96: 'EIA-96',
    note_3: 'このコードは回路の状況により、抵抗器またはセラミックコンデンサを表す場合があります。',
    note_4: '4桁コードは高精度SMD抵抗器のみを表します。',
    note_eia: 'EIA-96は1%精度抵抗器のコード体系です。',
    result_title: '検索結果',
    copy: '結果をコピー',
    copied: 'コピーしました！',
    copy_smd_code: 'SMDコード',
    copy_source: '出典',
    copy_toolname: 'ECCHIPS SMDコード検索ツール',
    copy_decoded_on: 'デコード日'
  },

  /* ----------------------------- Korean (한국어) -------------------------- */
  ko: {
    page_title: 'SMD 코드 조회 — SMD 마킹 디코드 | ECCHIPS',
    meta_description: 'SMD 저항기와 세라믹 커패시터 마킹(3자리, 4자리, EIA-96)을 즉시 디코드하고 해석합니다.',
    brand_sub: '전자 부품 엔지니어링 도구',
    brand_tagline: '전자 엔지니어를 위한 실용적인 도구.',
    tool_name: 'SMD 코드 조회',
    nav_smd: 'SMD 검색',
    nav_voltage: '전압 분배기',
    nav_led: 'LED 저항',
    coming_soon: '곧 제공 예정',
    hero_title: 'SMD 마킹 디코드 및 해석',
    hero_sub: '일반적인 SMD 저항기 및 커패시터 마킹을 즉시 해석합니다.',
    placeholder: 'SMD 코드 입력 (예: 103, 1002, 01C)',
    decode: '디코드',
    examples: '예:',
    recent: '최근 검색',
    clear: '지우기',
    info_title: 'SMD 코드 읽는 법',
    info3_title: '3자리 코드',
    info3_desc: '앞 두 자리는 유효 숫자, 세 번째 자리는 승수(10의 거듭제곱)입니다. <strong>저항기</strong> 또는 <strong>세라믹 커패시터</strong>를 나타낼 수 있습니다.',
    info4_title: '4자리 코드',
    info4_desc: '앞 세 자리는 유효 숫자, 네 번째 자리는 승수입니다. <strong>정밀 SMD 저항기</strong> 전용입니다.',
    infoeia_title: 'EIA-96 코드',
    infoeia_desc: '두 자리는 EIA-96 표의 값에 해당하고 그 뒤에 문자 승수가 붙습니다. <strong>1% 정밀 저항기</strong>에 사용됩니다.',
    footer_text: 'ECCHIPS. 전자 부품 엔지니어링 도구.',
    footer_about: '소개',
    footer_contact: '문의',
    trust_built: '엔지니어를 위해 제작.',
    trust_no_account: '계정 불필요.',
    trust_local: '브라우저에서 로컬로 실행.',
    err_empty: 'SMD 코드를 입력하세요.',
    err_format: '지원되지 않는 SMD 코드 형식입니다.',
    err_check: '입력을 확인하세요.',
    err_eia96: '알 수 없는 EIA-96 코드입니다.',
    hint_reverse: '값 → 코드 역방향 조회가 필요하신가요? 곧 제공.',
    label_resistor: '저항기',
    label_capacitor: '세라믹 커패시터',
    label_type: '유형',
    label_system: '체계',
    label_precision: '정밀 SMD 저항기',
    label_eia96: 'EIA-96',
    note_3: '이 코드는 회로 상황에 따라 저항기 또는 세라믹 커패시터를 나타낼 수 있습니다.',
    note_4: '4자리 코드는 정밀 SMD 저항기만을 나타냅니다.',
    note_eia: 'EIA-96은 1% 정밀 저항기의 코드 체계입니다.',
    result_title: '조회 결과',
    copy: '결과 복사',
    copied: '복사됨!',
    copy_smd_code: 'SMD 코드',
    copy_source: '출처',
    copy_toolname: 'ECCHIPS SMD 코드 조회 도구',
    copy_decoded_on: '디코드 날짜'
  },

  /* ----------------------------- Italian (Italiano) ---------------------- */
  it: {
    page_title: 'Ricerca codici SMD — Decodifica marcaggi SMD | ECCHIPS',
    meta_description: 'Decodifica e interpreta istantaneamente i marcaggi di resistori e condensatori ceramici SMD (3, 4 cifre, EIA-96).',
    brand_sub: 'Strumenti di ingegneria per componenti elettronici',
    brand_tagline: 'Strumenti pratici per ingegneri elettronici.',
    tool_name: 'Ricerca codici SMD',
    nav_smd: 'Ricerca SMD',
    nav_voltage: 'Partitore di tensione',
    nav_led: 'Resistenza LED',
    coming_soon: 'In arrivo',
    hero_title: 'Decodifica e interpreta i marcaggi SMD',
    hero_sub: 'Decodifica istantaneamente i marcaggi comuni di resistori e condensatori SMD.',
    placeholder: 'Inserisci un codice SMD, es. 103, 1002, 01C',
    decode: 'Decodifica',
    examples: 'Esempi:',
    recent: 'Ricerche recenti',
    clear: 'Cancella',
    info_title: 'Come leggere i codici SMD',
    info3_title: 'Codice a 3 cifre',
    info3_desc: 'Le prime due cifre sono il valore significativo, la terza è il moltiplicatore (potenza di 10). Può rappresentare un <strong>resistore</strong> o un <strong>condensatore ceramico</strong>.',
    info4_title: 'Codice a 4 cifre',
    info4_desc: 'Le prime tre cifre sono il valore significativo, la quarta è il moltiplicatore. Usato solo per <strong>resistori SMD di precisione</strong>.',
    infoeia_title: 'Codice EIA-96',
    infoeia_desc: 'Due cifre corrispondono a un valore della tabella EIA-96, seguite da una lettera moltiplicatore. Usato per <strong>resistori di precisione 1%</strong>.',
    footer_text: 'ECCHIPS. Strumenti di ingegneria per componenti elettronici.',
    footer_about: 'Informazioni',
    footer_contact: 'Contatti',
    trust_built: 'Fatto per gli ingegneri.',
    trust_no_account: 'Nessun account richiesto.',
    trust_local: 'Funziona localmente nel tuo browser.',
    err_empty: 'Inserisci un codice SMD.',
    err_format: 'Formato codice SMD non supportato.',
    err_check: 'Controlla il tuo input.',
    err_eia96: 'Codice EIA-96 sconosciuto.',
    hint_reverse: 'Serve la ricerca valore → codice? In arrivo.',
    label_resistor: 'Resistore',
    label_capacitor: 'Condensatore ceramico',
    label_type: 'Tipo',
    label_system: 'Sistema',
    label_precision: 'Resistore SMD di precisione',
    label_eia96: 'EIA-96',
    note_3: 'Questo codice può rappresentare un resistore o un condensatore ceramico a seconda del contesto del circuito.',
    note_4: 'I codici a quattro cifre indicano solo resistori SMD di precisione.',
    note_eia: 'EIA-96 è un sistema di codifica per resistori di precisione 1%.',
    result_title: 'Risultato della ricerca',
    copy: 'Copia risultato',
    copied: 'Copiato!',
    copy_smd_code: 'Codice SMD',
    copy_source: 'Fonte',
    copy_toolname: 'Ricerca codici SMD ECCHIPS',
    copy_decoded_on: 'Decodificato il'
  }
};

/* -------------------------------------------------------------------------
 * i18n runtime
 * ------------------------------------------------------------------------- */

let currentLang = 'en';

function getLang() {
  return currentLang;
}

function t(key) {
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

function applyLanguage(lang) {
  const meta = languageMeta(lang);
  currentLang = meta.code;

  document.documentElement.lang = meta.code;
  document.documentElement.dir = meta.dir;

  try {
    localStorage.setItem(LANG_KEY, meta.code);
  } catch (e) { /* ignore */ }

  // Static text (innerHTML because some strings contain <strong>).
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    el.innerHTML = t(el.getAttribute('data-i18n'));
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
  });

  document.querySelectorAll('[data-i18n-title]').forEach((el) => {
    el.title = t(el.getAttribute('data-i18n-title'));
  });

  document.title = t('page_title');
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.content = t('meta_description');

  const sel = document.getElementById('lang-select');
  if (sel) sel.value = meta.code;

  // Let app.js re-render dynamic content (result / error / history).
  if (typeof window.__onLanguageChange === 'function') {
    window.__onLanguageChange();
  }
}

function initI18n() {
  const sel = document.getElementById('lang-select');
  if (sel) {
    sel.innerHTML = LANGUAGES.map((l) =>
      '<option value="' + l.code + '">' + l.name + '</option>'
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
}

document.addEventListener('DOMContentLoaded', initI18n);
