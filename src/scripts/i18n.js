/* =========================================================================
 * ECCHIPS SMD Code Lookup — client-side i18n (tool UI only)
 * 12 languages. Copy templates and long-form guide content remain English
 * (engineering lingua franca) per V1 spec.
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
    nav_home: 'Home',
    nav_smd: 'SMD Lookup',
    nav_about: 'About',
    nav_privacy: 'Privacy',
    page_title: 'SMD Code Lookup – Identify & Decode SMD Markings | ECCHIPS',
    meta_description: 'Decode common 3-digit, 4-digit and EIA-96 SMD markings. Get resistor and ceramic capacitor interpretations instantly with ECCHIPS.',
    hero_title: 'Identify & Decode SMD Markings',
    hero_sub: 'Decode common SMD markings and understand their possible component values.',
    input_label: 'Enter SMD code',
    placeholder: 'e.g. 103, 1002, or 01C',
    decode: 'Decode',
    examples: 'Examples:',
    recent: 'Recent',
    clear: 'Clear',
    err_empty: 'Enter an SMD marking to decode.',
    err_format: 'Unsupported SMD code format. Please check your input.',
    err_eia96: 'This code does not match a recognized EIA-96 value.',
    warning_marking: 'The marking "{code}" alone does not identify the component type. Check the physical part and circuit context.',
    label_resistor: 'Resistor Interpretation',
    label_capacitor: 'Ceramic Capacitor Interpretation',
    label_eia96: 'EIA-96',
    note_4: 'Four-digit markings are commonly used for precision resistor markings.',
    note_eia: 'Reference the common EIA-96 marking convention.',
    tolerance_note: 'V1 currently supports standard numeric and EIA-96 markings.',
    copy: 'Copy Result',
    copied: 'Copied!',
    footer_text: 'ECCHIPS. Electronic Component Intelligence.',
    trust_built: 'Built for engineers.',
    trust_no_account: 'No account required.',
    trust_local: 'Runs locally in your browser.'
  },
  zh: {
    brand_sub: '电子元器件智能',
    nav_home: '首页',
    nav_smd: 'SMD查询',
    nav_about: '关于',
    nav_privacy: '隐私',
    page_title: 'SMD代码查询 – 识别与解码SMD标识 | ECCHIPS',
    meta_description: '解码常见的3位、4位和EIA-96 SMD标识，即时获得电阻与陶瓷电容解读。',
    hero_title: '识别与解码 SMD 标识',
    hero_sub: '解码常见 SMD 标识，了解其可能的元器件取值。',
    input_label: '输入 SMD 代码',
    placeholder: '例如 103、1002 或 01C',
    decode: '解码',
    examples: '示例：',
    recent: '最近',
    clear: '清空',
    err_empty: '请输入要解码的 SMD 标识。',
    err_format: '不支持的 SMD 代码格式。请检查您的输入。',
    err_eia96: '该代码与已知的 EIA-96 值不匹配。',
    warning_marking: '仅凭标识 "{code}" 无法确定元器件类型。请核对实物与电路环境。',
    label_resistor: '电阻解读',
    label_capacitor: '陶瓷电容解读',
    label_eia96: 'EIA-96',
    note_4: '四位标识通常用于精密电阻标识。',
    note_eia: '请参考常见的 EIA-96 标识规范。',
    tolerance_note: 'V1 目前支持标准数字与 EIA-96 标识。',
    copy: '复制结果',
    copied: '已复制！',
    footer_text: 'ECCHIPS. 电子元器件智能。',
    trust_built: '为工程师打造。',
    trust_no_account: '无需注册账号。',
    trust_local: '在您的浏览器本地运行。'
  },
  hi: {
    brand_sub: 'इलेक्ट्रॉनिक कंपोनेंट इंटेलिजेंस',
    nav_home: 'होम',
    nav_smd: 'SMD खोज',
    nav_about: 'परिचय',
    nav_privacy: 'गोपनीयता',
    page_title: 'SMD कोड लुकअप – SMD मार्किंग की पहचान और डिकोड | ECCHIPS',
    meta_description: 'सामान्य 3-अंकीय, 4-अंकीय और EIA-96 SMD मार्किंग डिकोड करें।',
    hero_title: 'SMD मार्किंग की पहचान और डिकोड',
    hero_sub: 'सामान्य SMD मार्किंग डिकोड करें और संभावित कंपोनेंट मान समझें।',
    input_label: 'SMD कोड दर्ज करें',
    placeholder: 'जैसे 103, 1002 या 01C',
    decode: 'डिकोड करें',
    examples: 'उदाहरण:',
    recent: 'हाल ही में',
    clear: 'साफ़ करें',
    err_empty: 'डिकोड करने के लिए SMD मार्किंग दर्ज करें।',
    err_format: 'असमर्थित SMD कोड प्रारूप। कृपया अपना इनपुट जाँचें।',
    err_eia96: 'यह कोड किसी मान्यता प्राप्त EIA-96 मान से मेल नहीं खाता।',
    warning_marking: 'केवल मार्किंग "{code}" से कंपोनेंट का प्रकार निर्धारित नहीं होता। भौतिक भाग और सर्किट संदर्भ जाँचें।',
    label_resistor: 'प्रतिरोधक व्याख्या',
    label_capacitor: 'सिरेमिक संधारित्र व्याख्या',
    label_eia96: 'EIA-96',
    note_4: 'चार अंकों की मार्किंग आमतौर पर प्रेसिजन प्रतिरोधकों के लिए उपयोग होती है।',
    note_eia: 'सामान्य EIA-96 मार्किंग परंपरा देखें।',
    tolerance_note: 'V1 वर्तमान में मानक संख्यात्मक और EIA-96 मार्किंग का समर्थन करता है।',
    copy: 'परिणाम कॉपी करें',
    copied: 'कॉपी हो गया!',
    footer_text: 'ECCHIPS. इलेक्ट्रॉनिक कंपोनेंट इंटेलिजेंस।',
    trust_built: 'इंजीनियरों के लिए बनाया गया।',
    trust_no_account: 'किसी खाते की आवश्यकता नहीं।',
    trust_local: 'आपके ब्राउज़र में स्थानीय रूप से चलता है।'
  },
  es: {
    brand_sub: 'Inteligencia de componentes electrónicos',
    nav_home: 'Inicio',
    nav_smd: 'Búsqueda SMD',
    nav_about: 'Acerca de',
    nav_privacy: 'Privacidad',
    page_title: 'Búsqueda de códigos SMD – Identificar y decodificar marcajes SMD | ECCHIPS',
    meta_description: 'Decodifica marcajes SMD comunes de 3, 4 dígitos y EIA-96. Obtén interpretaciones de resistencia y condensador cerámico.',
    hero_title: 'Identificar y decodificar marcajes SMD',
    hero_sub: 'Decodifica marcajes SMD comunes y comprende sus posibles valores de componente.',
    input_label: 'Introduce el código SMD',
    placeholder: 'p. ej. 103, 1002 o 01C',
    decode: 'Decodificar',
    examples: 'Ejemplos:',
    recent: 'Reciente',
    clear: 'Borrar',
    err_empty: 'Introduce un marcaje SMD para decodificar.',
    err_format: 'Formato de código SMD no compatible. Comprueba tu entrada.',
    err_eia96: 'Este código no coincide con un valor EIA-96 reconocido.',
    warning_marking: 'El marcaje "{code}" por sí solo no identifica el tipo de componente. Verifica la pieza física y el contexto del circuito.',
    label_resistor: 'Interpretación de resistencia',
    label_capacitor: 'Interpretación de condensador cerámico',
    label_eia96: 'EIA-96',
    note_4: 'Las marcas de cuatro dígitos se usan comúnmente para resistencias de precisión.',
    note_eia: 'Consulta la convención de marcaje EIA-96 común.',
    tolerance_note: 'V1 admite marcajes numéricos estándar y EIA-96.',
    copy: 'Copiar resultado',
    copied: '¡Copiado!',
    footer_text: 'ECCHIPS. Inteligencia de componentes electrónicos.',
    trust_built: 'Hecho para ingenieros.',
    trust_no_account: 'No requiere cuenta.',
    trust_local: 'Funciona localmente en tu navegador.'
  },
  fr: {
    brand_sub: 'Intelligence des composants électroniques',
    nav_home: 'Accueil',
    nav_smd: 'Recherche SMD',
    nav_about: 'À propos',
    nav_privacy: 'Confidentialité',
    page_title: 'Recherche de codes SMD – Identifier et décoder les marquages SMD | ECCHIPS',
    meta_description: 'Décodez les marquages SMD courants (3, 4 chiffres, EIA-96). Obtenez des interprétations résistance et condensateur céramique.',
    hero_title: 'Identifier et décoder les marquages SMD',
    hero_sub: 'Décodez les marquages SMD courants et comprenez leurs valeurs de composant possibles.',
    input_label: 'Saisissez le code SMD',
    placeholder: 'ex. 103, 1002 ou 01C',
    decode: 'Décoder',
    examples: 'Exemples :',
    recent: 'Récent',
    clear: 'Effacer',
    err_empty: 'Saisissez un marquage SMD à décoder.',
    err_format: 'Format de code SMD non pris en charge. Veuillez vérifier votre saisie.',
    err_eia96: 'Ce code ne correspond à aucune valeur EIA-96 reconnue.',
    warning_marking: 'Le marquage "{code}" seul ne permet pas d\'identifier le type de composant. Vérifiez la pièce physique et le contexte du circuit.',
    label_resistor: 'Interprétation résistance',
    label_capacitor: 'Interprétation condensateur céramique',
    label_eia96: 'EIA-96',
    note_4: 'Les marquages à quatre chiffres sont couramment utilisés pour les résistances de précision.',
    note_eia: 'Référez-vous à la convention de marquage EIA-96 courante.',
    tolerance_note: 'V1 prend en charge les marquages numériques standard et EIA-96.',
    copy: 'Copier le résultat',
    copied: 'Copié !',
    footer_text: 'ECCHIPS. Intelligence des composants électroniques.',
    trust_built: 'Conçu pour les ingénieurs.',
    trust_no_account: 'Aucun compte requis.',
    trust_local: 'Fonctionne localement dans votre navigateur.'
  },
  ar: {
    brand_sub: 'ذكاء المكونات الإلكترونية',
    nav_home: 'الرئيسية',
    nav_smd: 'بحث SMD',
    nav_about: 'حول',
    nav_privacy: 'الخصوصية',
    page_title: 'البحث عن أكواد SMD – تحديد وفك رموز علامات SMD | ECCHIPS',
    meta_description: 'فك رموز علامات SMD الشائعة (3 أرقام، 4 أرقام، EIA-96) والحصول على تفسيرات المقاومة والمكثف.',
    hero_title: 'تحديد وفك رموز علامات SMD',
    hero_sub: 'فك رموز علامات SMD الشائعة وافهم قيم المكونات المحتملة.',
    input_label: 'أدخل كود SMD',
    placeholder: 'مثل 103، 1002 أو 01C',
    decode: 'فك الترميز',
    examples: 'أمثلة:',
    recent: 'الأخيرة',
    clear: 'مسح',
    err_empty: 'أدخل علامة SMD لفك ترميزها.',
    err_format: 'صيغة كود SMD غير مدعومة. يرجى التحقق من الإدخال.',
    err_eia96: 'هذا الرمز لا يطابق قيمة EIA-96 معروفة.',
    warning_marking: 'العلامة "{code}" وحدها لا تحدد نوع المكون. تحقق من الجزء الفعلي وسياق الدائرة.',
    label_resistor: 'تفسير المقاومة',
    label_capacitor: 'تفسير المكثف السيراميكي',
    label_eia96: 'EIA-96',
    note_4: 'تُستخدم العلامات ذات الأربعة أرقام عادةً للمقاومات الدقيقة.',
    note_eia: 'راجع اصطلاح تعليم EIA-96 الشائع.',
    tolerance_note: 'يدعم V1 حاليًا العلامات الرقمية القياسية وEIA-96.',
    copy: 'نسخ النتيجة',
    copied: 'تم النسخ!',
    footer_text: 'ECCHIPS. ذكاء المكونات الإلكترونية.',
    trust_built: 'صُمم للمهندسين.',
    trust_no_account: 'لا حاجة لحساب.',
    trust_local: 'يعمل محليًا في متصفحك.'
  },
  pt: {
    brand_sub: 'Inteligência de componentes eletrônicos',
    nav_home: 'Início',
    nav_smd: 'Busca SMD',
    nav_about: 'Sobre',
    nav_privacy: 'Privacidade',
    page_title: 'Busca de códigos SMD – Identificar e decodificar marcações SMD | ECCHIPS',
    meta_description: 'Decodifique marcações SMD comuns de 3, 4 dígitos e EIA-96. Obtenha interpretações de resistor e capacitor cerâmico.',
    hero_title: 'Identificar e decodificar marcações SMD',
    hero_sub: 'Decodifique marcações SMD comuns e entenda seus possíveis valores de componente.',
    input_label: 'Digite o código SMD',
    placeholder: 'ex. 103, 1002 ou 01C',
    decode: 'Decodificar',
    examples: 'Exemplos:',
    recent: 'Recente',
    clear: 'Limpar',
    err_empty: 'Digite uma marcação SMD para decodificar.',
    err_format: 'Formato de código SMD não suportado. Verifique sua entrada.',
    err_eia96: 'Este código não corresponde a um valor EIA-96 reconhecido.',
    warning_marking: 'A marcação "{code}" por si só não identifica o tipo de componente. Verifique a peça física e o contexto do circuito.',
    label_resistor: 'Interpretação de resistor',
    label_capacitor: 'Interpretação de capacitor cerâmico',
    label_eia96: 'EIA-96',
    note_4: 'Marcações de quatro dígitos são comumente usadas para resistores de precisão.',
    note_eia: 'Consulte a convenção de marcação EIA-96 comum.',
    tolerance_note: 'V1 suporta marcações numéricas padrão e EIA-96.',
    copy: 'Copiar resultado',
    copied: 'Copiado!',
    footer_text: 'ECCHIPS. Inteligência de componentes eletrônicos.',
    trust_built: 'Feito para engenheiros.',
    trust_no_account: 'Sem necessidade de conta.',
    trust_local: 'Funciona localmente no seu navegador.'
  },
  ru: {
    brand_sub: 'Интеллект электронных компонентов',
    nav_home: 'Главная',
    nav_smd: 'Поиск SMD',
    nav_about: 'О нас',
    nav_privacy: 'Конфиденциальность',
    page_title: 'Поиск SMD-кодов – Идентификация и декодирование маркировок SMD | ECCHIPS',
    meta_description: 'Декодируйте распространённые 3-, 4-значные и EIA-96 маркировки SMD. Получайте интерпретации резистора и керамического конденсатора.',
    hero_title: 'Идентификация и декодирование маркировок SMD',
    hero_sub: 'Декодируйте распространённые маркировки SMD и понимайте возможные номиналы компонентов.',
    input_label: 'Введите SMD-код',
    placeholder: 'напр. 103, 1002 или 01C',
    decode: 'Декодировать',
    examples: 'Примеры:',
    recent: 'Недавние',
    clear: 'Очистить',
    err_empty: 'Введите маркировку SMD для декодирования.',
    err_format: 'Неподдерживаемый формат SMD-кода. Проверьте введённые данные.',
    err_eia96: 'Этот код не соответствует известному значению EIA-96.',
    warning_marking: 'Сама по себе маркировка "{code}" не определяет тип компонента. Проверьте физический компонент и контекст схемы.',
    label_resistor: 'Интерпретация резистора',
    label_capacitor: 'Интерпретация керамического конденсатора',
    label_eia96: 'EIA-96',
    note_4: 'Четырёхзначные маркировки обычно используются для прецизионных резисторов.',
    note_eia: 'См. общепринятую конвенцию маркировки EIA-96.',
    tolerance_note: 'V1 поддерживает стандартные цифровые и EIA-96 маркировки.',
    copy: 'Скопировать результат',
    copied: 'Скопировано!',
    footer_text: 'ECCHIPS. Интеллект электронных компонентов.',
    trust_built: 'Создано для инженеров.',
    trust_no_account: 'Без регистрации.',
    trust_local: 'Работает локально в вашем браузере.'
  },
  de: {
    brand_sub: 'Elektronische Bauteil-Intelligenz',
    nav_home: 'Start',
    nav_smd: 'SMD-Suche',
    nav_about: 'Über uns',
    nav_privacy: 'Datenschutz',
    page_title: 'SMD-Code-Suche – SMD-Kennzeichnungen identifizieren und dekodieren | ECCHIPS',
    meta_description: 'Dekodieren Sie gängige 3-, 4-stellige und EIA-96 SMD-Kennzeichnungen. Erhalten Sie Widerstands- und Kondensator-Interpretationen.',
    hero_title: 'SMD-Kennzeichnungen identifizieren und dekodieren',
    hero_sub: 'Dekodieren Sie gängige SMD-Kennzeichnungen und verstehen Sie die möglichen Bauteilwerte.',
    input_label: 'SMD-Code eingeben',
    placeholder: 'z. B. 103, 1002 oder 01C',
    decode: 'Dekodieren',
    examples: 'Beispiele:',
    recent: 'Zuletzt',
    clear: 'Löschen',
    err_empty: 'Geben Sie eine SMD-Kennzeichnung zum Dekodieren ein.',
    err_format: 'Nicht unterstütztes SMD-Code-Format. Bitte überprüfen Sie Ihre Eingabe.',
    err_eia96: 'Dieser Code entspricht keinem bekannten EIA-96-Wert.',
    warning_marking: 'Die Kennzeichnung "{code}" allein identifiziert nicht den Bauteiltyp. Prüfen Sie das physische Bauteil und den Schaltungskontext.',
    label_resistor: 'Widerstands-Interpretation',
    label_capacitor: 'Keramikkondensator-Interpretation',
    label_eia96: 'EIA-96',
    note_4: 'Vierstellige Kennzeichnungen werden üblicherweise für Präzisionswiderstände verwendet.',
    note_eia: 'Beziehen Sie sich auf die gängige EIA-96-Kennzeichnungskonvention.',
    tolerance_note: 'V1 unterstützt derzeit standardmäßige numerische und EIA-96-Kennzeichnungen.',
    copy: 'Ergebnis kopieren',
    copied: 'Kopiert!',
    footer_text: 'ECCHIPS. Elektronische Bauteil-Intelligenz.',
    trust_built: 'Für Ingenieure gemacht.',
    trust_no_account: 'Kein Konto erforderlich.',
    trust_local: 'Läuft lokal in Ihrem Browser.'
  },
  ja: {
    brand_sub: '電子部品インテリジェンス',
    nav_home: 'ホーム',
    nav_smd: 'SMD検索',
    nav_about: '概要',
    nav_privacy: 'プライバシー',
    page_title: 'SMDコード検索 – SMDマーキングの識別とデコード | ECCHIPS',
    meta_description: '一般的な3桁・4桁・EIA-96のSMDマーキングをデコードし、抵抗器とコンデンサの解釈を取得。',
    hero_title: 'SMDマーキングの識別とデコード',
    hero_sub: '一般的なSMDマーキングをデコードし、考えられる部品値を理解します。',
    input_label: 'SMDコードを入力',
    placeholder: '例：103、1002、01C',
    decode: 'デコード',
    examples: '例：',
    recent: '最近',
    clear: 'クリア',
    err_empty: 'デコードするSMDマーキングを入力してください。',
    err_format: '未対応のSMDコード形式です。入力を確認してください。',
    err_eia96: 'このコードは既知のEIA-96値に一致しません。',
    warning_marking: 'マーキング "{code}" だけでは部品の種類を特定できません。実物と回路の状況を確認してください。',
    label_resistor: '抵抗器の解釈',
    label_capacitor: 'セラミックコンデンサの解釈',
    label_eia96: 'EIA-96',
    note_4: '4桁マーキングは通常、高精度抵抗器に使用されます。',
    note_eia: '一般的なEIA-96マーキング規約を参照してください。',
    tolerance_note: 'V1は現在、標準の数字およびEIA-96マーキングに対応しています。',
    copy: '結果をコピー',
    copied: 'コピーしました！',
    footer_text: 'ECCHIPS. 電子部品インテリジェンス。',
    trust_built: '技術者のために設計。',
    trust_no_account: 'アカウント不要。',
    trust_local: 'ブラウザ内でローカルに動作。'
  },
  ko: {
    brand_sub: '전자 부품 인텔리전스',
    nav_home: '홈',
    nav_smd: 'SMD 검색',
    nav_about: '소개',
    nav_privacy: '개인정보',
    page_title: 'SMD 코드 조회 – SMD 마킹 식별 및 디코드 | ECCHIPS',
    meta_description: '일반적인 3자리, 4자리, EIA-96 SMD 마킹을 디코드하고 저항기와 커패시터 해석을 얻으세요.',
    hero_title: 'SMD 마킹 식별 및 디코드',
    hero_sub: '일반적인 SMD 마킹을 디코드하고 가능한 부품 값을 이해하세요.',
    input_label: 'SMD 코드 입력',
    placeholder: '예: 103, 1002 또는 01C',
    decode: '디코드',
    examples: '예:',
    recent: '최근',
    clear: '지우기',
    err_empty: '디코드할 SMD 마킹을 입력하세요.',
    err_format: '지원되지 않는 SMD 코드 형식입니다. 입력을 확인하세요.',
    err_eia96: '이 코드는 알려진 EIA-96 값과 일치하지 않습니다.',
    warning_marking: '마킹 "{code}" 만으로는 부품 유형을 식별할 수 없습니다. 실제 부품과 회로 상황을 확인하세요.',
    label_resistor: '저항기 해석',
    label_capacitor: '세라믹 커패시터 해석',
    label_eia96: 'EIA-96',
    note_4: '4자리 마킹은 일반적으로 정밀 저항기에 사용됩니다.',
    note_eia: '일반적인 EIA-96 마킹 규약을 참조하세요.',
    tolerance_note: 'V1은 현재 표준 숫자 및 EIA-96 마킹을 지원합니다.',
    copy: '결과 복사',
    copied: '복사됨!',
    footer_text: 'ECCHIPS. 전자 부품 인텔리전스.',
    trust_built: '엔지니어를 위해 제작.',
    trust_no_account: '계정 불필요.',
    trust_local: '브라우저에서 로컬로 실행.'
  },
  it: {
    brand_sub: 'Intelligenza dei componenti elettronici',
    nav_home: 'Home',
    nav_smd: 'Ricerca SMD',
    nav_about: 'Informazioni',
    nav_privacy: 'Privacy',
    page_title: 'Ricerca codici SMD – Identifica e decodifica i marcaggi SMD | ECCHIPS',
    meta_description: 'Decodifica marcaggi SMD comuni a 3, 4 cifre ed EIA-96. Ottieni interpretazioni di resistori e condensatori ceramici.',
    hero_title: 'Identifica e decodifica i marcaggi SMD',
    hero_sub: 'Decodifica i marcaggi SMD comuni e comprendi i possibili valori dei componenti.',
    input_label: 'Inserisci il codice SMD',
    placeholder: 'es. 103, 1002 o 01C',
    decode: 'Decodifica',
    examples: 'Esempi:',
    recent: 'Recenti',
    clear: 'Cancella',
    err_empty: 'Inserisci un marcaggio SMD da decodificare.',
    err_format: 'Formato codice SMD non supportato. Controlla il tuo input.',
    err_eia96: 'Questo codice non corrisponde a un valore EIA-96 riconosciuto.',
    warning_marking: 'Il marcaggio "{code}" da solo non identifica il tipo di componente. Verifica il componente fisico e il contesto del circuito.',
    label_resistor: 'Interpretazione resistore',
    label_capacitor: 'Interpretazione condensatore ceramico',
    label_eia96: 'EIA-96',
    note_4: 'Le marcature a quattro cifre sono comunemente usate per resistori di precisione.',
    note_eia: 'Fai riferimento alla convenzione di marcatura EIA-96 comune.',
    tolerance_note: 'V1 supporta attualmente marcature numeriche standard ed EIA-96.',
    copy: 'Copia risultato',
    copied: 'Copiato!',
    footer_text: 'ECCHIPS. Intelligenza dei componenti elettronici.',
    trust_built: 'Fatto per gli ingegneri.',
    trust_no_account: 'Nessun account richiesto.',
    trust_local: 'Funziona localmente nel tuo browser.'
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

  document.querySelectorAll('[data-i18n-title]').forEach((el) => {
    el.title = t(el.getAttribute('data-i18n-title'));
  });

  document.title = t('page_title');
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.content = t('meta_description');

  const sel = document.getElementById('lang-select');
  if (sel) sel.value = meta.code;

  if (typeof window.__onLanguageChange === 'function') {
    window.__onLanguageChange();
  }
}

function ready(fn) {
  if (document.readyState !== 'loading') fn();
  else document.addEventListener('DOMContentLoaded', fn);
}

export function initI18n() {
  ready(() => {
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
  });
}
