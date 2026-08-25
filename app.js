/* =========================================================================
 * ECCHIPS SMD Code Lookup Tool
 * MVP-001 · V1.3 Development Freeze
 * ========================================================================= */

/* -------------------------------------------------------------------------
 * 1. DATA TABLES
 * ------------------------------------------------------------------------- */

/* EIA-96 value table: code -> significant value (2-digit prefix)
 * Standard EIA-96 table (values 01-96). */
const EIA96_VALUES = {
  '01': 100, '02': 102, '03': 105, '04': 107, '05': 110, '06': 113, '07': 115,
  '08': 118, '09': 121, '10': 124, '11': 127, '12': 130, '13': 133, '14': 137,
  '15': 140, '16': 143, '17': 147, '18': 150, '19': 154, '20': 158, '21': 162,
  '22': 165, '23': 169, '24': 174, '25': 178, '26': 182, '27': 187, '28': 191,
  '29': 196, '30': 200, '31': 205, '32': 210, '33': 215, '34': 221, '35': 226,
  '36': 232, '37': 237, '38': 243, '39': 249, '40': 255, '41': 261, '42': 267,
  '43': 274, '44': 280, '45': 287, '46': 294, '47': 301, '48': 309, '49': 316,
  '50': 324, '51': 332, '52': 340, '53': 348, '54': 357, '55': 365, '56': 374,
  '57': 383, '58': 392, '59': 402, '60': 412, '61': 422, '62': 432, '63': 442,
  '64': 453, '65': 464, '66': 475, '67': 487, '68': 499, '69': 511, '70': 523,
  '71': 536, '72': 549, '73': 562, '74': 576, '75': 590, '76': 604, '77': 619,
  '78': 634, '79': 649, '80': 665, '81': 681, '82': 698, '83': 715, '84': 732,
  '85': 750, '86': 768, '87': 787, '88': 806, '89': 825, '90': 845, '91': 866,
  '92': 887, '93': 909, '94': 931, '95': 953, '96': 976
};

/* EIA-96 multiplier table: letter -> multiplier.
 * Standard IEC 60062 / EIA-96 set: Z Y X A B C D E F. */
const EIA96_MULTIPLIERS = {
  'Z': 0.001, 'Y': 0.01, 'X': 0.1,
  'A': 1, 'B': 10, 'C': 100, 'D': 1000, 'E': 10000, 'F': 100000
};

/* 3-digit resistor value table: "digits" -> base value (ohms), where the
 * third digit is the multiplier. We compute it directly rather than a table. */

/* -------------------------------------------------------------------------
 * 2. UTILITIES
 * ------------------------------------------------------------------------- */

const $ = (sel) => document.querySelector(sel);

/* Format an ohms value into a compact engineering string.
 * e.g. 10000 -> "10kΩ", 100 -> "100Ω", 1000000 -> "1MΩ" */
function formatResistance(ohms) {
  if (ohms >= 1000000) {
    const v = ohms / 1000000;
    return trimDecimals(v) + 'MΩ';
  }
  if (ohms >= 1000) {
    const v = ohms / 1000;
    return trimDecimals(v) + 'kΩ';
  }
  return trimDecimals(ohms) + 'Ω';
}

/* Format a capacitance value (pF) into engineering string.
 * e.g. 10000 pF -> "10nF", 1000 -> "1nF", 1000000 -> "1µF" */
function formatCapacitance(pF) {
  if (pF >= 1000000) {
    return trimDecimals(pF / 1000000) + 'µF';
  }
  if (pF >= 1000) {
    return trimDecimals(pF / 1000) + 'nF';
  }
  return trimDecimals(pF) + 'pF';
}

function trimDecimals(n) {
  return (Math.round(n * 100) / 100).toString();
}

/* -------------------------------------------------------------------------
 * 3. CORE LOOKUP LOGIC
 * ------------------------------------------------------------------------- */

/**
 * Detect the code type.
 * @returns {string} '3-digit' | '4-digit' | 'eia96' | 'invalid'
 */
function detectType(raw) {
  const code = raw.trim().toUpperCase();
  if (code.length === 0) return 'empty';

  // 3-digit: exactly 3 digits
  if (/^[0-9]{3}$/.test(code)) return '3-digit';

  // 4-digit: exactly 4 digits
  if (/^[0-9]{4}$/.test(code)) return '4-digit';

  // EIA-96: 2 digits + 1 letter (multiplier validated against table)
  if (/^[0-9]{2}[A-Z]$/.test(code)) return 'eia96';

  return 'invalid';
}

/**
 * Decode a 3-digit code.
 * First two digits = significant value, third digit = multiplier (0-9).
 * Returns resistor value in ohms and capacitor value in pF.
 */
function decode3Digit(code) {
  const sig = parseInt(code.slice(0, 2), 10);
  const mult = parseInt(code.slice(2, 3), 10);
  const ohms = sig * Math.pow(10, mult);
  const pF = sig * Math.pow(10, mult); // same math, different unit interpretation
  return { ohms, pF };
}

/**
 * Decode a 4-digit code (precision resistor only).
 * First three digits = significant value, fourth digit = multiplier.
 */
function decode4Digit(code) {
  const sig = parseInt(code.slice(0, 3), 10);
  const mult = parseInt(code.slice(3, 4), 10);
  const ohms = sig * Math.pow(10, mult);
  return { ohms };
}

/**
 * Decode an EIA-96 code: two digits + one letter.
 */
function decodeEIA96(code) {
  const numPart = code.slice(0, 2);
  const letter = code.slice(2, 3);
  const value = EIA96_VALUES[numPart];
  const mult = EIA96_MULTIPLIERS[letter];
  if (value === undefined || mult === undefined) return null;
  const ohms = value * mult;
  return { ohms, value, mult };
}

/**
 * Main lookup entry point.
 * @returns {{type:string, ok:boolean, error?:string, data?:object}}
 */
function lookup(raw) {
  const code = raw.trim().toUpperCase();
  const type = detectType(code);

  if (type === 'empty') {
    return { ok: false, type, error: 'empty' };
  }
  if (type === 'invalid') {
    return { ok: false, type, error: 'invalid' };
  }

  if (type === '3-digit') {
    const { ohms, pF } = decode3Digit(code);
    return {
      ok: true,
      type,
      data: {
        code,
        resistor: formatResistance(ohms),
        capacitor: formatCapacitance(pF)
      }
    };
  }

  if (type === '4-digit') {
    const { ohms } = decode4Digit(code);
    return {
      ok: true,
      type,
      data: {
        code,
        resistor: formatResistance(ohms)
      }
    };
  }

  if (type === 'eia96') {
    const decoded = decodeEIA96(code);
    if (!decoded) {
      return { ok: false, type, error: 'eia96-unknown' };
    }
    return {
      ok: true,
      type,
      data: {
        code,
        resistor: formatResistance(decoded.ohms)
      }
    };
  }

  return { ok: false, type, error: 'invalid' };
}

/* -------------------------------------------------------------------------
 * 4. COPY RESULT TEMPLATES (per type)
 * ------------------------------------------------------------------------- */

/* Local date in YYYY-MM-DD, used as an engineering-record timestamp. */
function todayISO() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return y + '-' + m + '-' + day;
}

function buildCopyText(result) {
  const { type, data } = result;
  const decodedOn = t('copy_decoded_on') + ': ' + todayISO();

  if (type === '3-digit') {
    return [
      t('copy_smd_code') + ': ' + data.code,
      '',
      t('label_resistor') + ':',
      data.resistor,
      '',
      t('label_capacitor') + ':',
      data.capacitor,
      '',
      t('copy_source') + ':',
      t('copy_toolname'),
      '',
      decodedOn
    ].join('\n');
  }

  if (type === '4-digit') {
    return [
      t('copy_smd_code') + ': ' + data.code,
      '',
      t('label_resistor') + ':',
      data.resistor,
      '',
      t('label_type') + ':',
      t('label_precision'),
      '',
      t('copy_source') + ':',
      t('copy_toolname'),
      '',
      decodedOn
    ].join('\n');
  }

  if (type === 'eia96') {
    return [
      t('copy_smd_code') + ': ' + data.code,
      '',
      t('label_resistor') + ':',
      data.resistor,
      '',
      t('label_system') + ':',
      t('label_eia96'),
      '',
      t('copy_source') + ':',
      t('copy_toolname'),
      '',
      decodedOn
    ].join('\n');
  }

  return '';
}

/* -------------------------------------------------------------------------
 * 5. RECENT HISTORY (LocalStorage)
 * ------------------------------------------------------------------------- */

const HISTORY_KEY = 'ecchips_smd_history';
const HISTORY_MAX = 10;

function getHistory() {
  try {
    const raw = localStorage.getItem(HISTORY_KEY);
    const arr = raw ? JSON.parse(raw) : [];
    return Array.isArray(arr) ? arr : [];
  } catch (e) {
    return [];
  }
}

function saveHistory(list) {
  try {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(list.slice(0, HISTORY_MAX)));
  } catch (e) {
    // storage may be unavailable (private mode); fail silently
  }
}

function addToHistory(code) {
  const list = getHistory();
  const filtered = list.filter((item) => item !== code);
  filtered.unshift(code);
  saveHistory(filtered);
  renderHistory();
}

function clearHistory() {
  saveHistory([]);
  renderHistory();
}

/* -------------------------------------------------------------------------
 * 6. LOCAL USAGE STATS (LocalStorage — NOT analytics)
 *    firstUsedAt / lastUsedAt / queryCount exist purely for local product
 *    experience. They live in the user's own browser and are never sent
 *    anywhere, so they cannot be used as a return-visitor metric.
 * ------------------------------------------------------------------------- */

const USAGE_KEY = 'ecchips_smd_usage';

function getUsage() {
  try {
    const raw = localStorage.getItem(USAGE_KEY);
    const obj = raw ? JSON.parse(raw) : {};
    return {
      firstUsedAt: obj.firstUsedAt || null,
      lastUsedAt: obj.lastUsedAt || null,
      queryCount: obj.queryCount || 0
    };
  } catch (e) {
    return { firstUsedAt: null, lastUsedAt: null, queryCount: 0 };
  }
}

function recordVisit() {
  const now = Date.now();
  const usage = getUsage();
  usage.firstUsedAt = usage.firstUsedAt || now;
  usage.lastUsedAt = now;
  try {
    localStorage.setItem(USAGE_KEY, JSON.stringify(usage));
  } catch (e) { /* ignore */ }
}

function recordQuery() {
  const now = Date.now();
  const usage = getUsage();
  usage.firstUsedAt = usage.firstUsedAt || now;
  usage.lastUsedAt = now;
  usage.queryCount = usage.queryCount + 1;
  try {
    localStorage.setItem(USAGE_KEY, JSON.stringify(usage));
  } catch (e) { /* ignore */ }
}

/* -------------------------------------------------------------------------
 * 7. ANALYTICS (event only — no code values, no user identifiers)
 *    Fires the six V1 events. Wire this to GA4 (gtag), Plausible or a
 *    dataLayer by loading that vendor's snippet; events flow automatically.
 *    No specific SMD code is ever recorded (privacy).
 * ------------------------------------------------------------------------- */

function trackEvent(name, props) {
  const payload = props || {};

  // Fire to exactly one destination to avoid double-counting. Priority:
  // GA4 (gtag) → Plausible → GTM (dataLayer).
  if (typeof window.gtag === 'function') {
    window.gtag('event', name, payload);
    return;
  }

  if (typeof window.plausible === 'function') {
    window.plausible(name, { props: payload });
    return;
  }

  if (window.dataLayer) {
    window.dataLayer.push(Object.assign({ event: name }, payload));
  }
}

/* Map internal type to the analytics query_type value. */
function queryTypeKey(type) {
  if (type === '3-digit') return '3_digit';
  if (type === '4-digit') return '4_digit';
  if (type === 'eia96') return 'eia96';
  return type;
}

/* Detect whether an invalid input looks like a component value
 * (e.g. "10k", "4.7k", "100nF", "1M") rather than a marking code. */
function isValueLike(raw) {
  const s = raw.trim().toUpperCase();
  if (!/[0-9]/.test(s)) return false;
  return /(K|M|R|N|P|U|µ|Ω|OHM|NF|PF|UF|μF)/.test(s);
}

/* -------------------------------------------------------------------------
 * 8. RENDERING
 * ------------------------------------------------------------------------- */

const resultArea = $('#result-area');

/* Track the last rendered state so we can re-render it when the language
 * changes (labels, notes and copy templates are translated). */
let lastRender = null;

function renderError(errorCode, hint) {
  let message = '';
  let sub = '';
  if (errorCode === 'empty') {
    message = t('err_empty');
  } else if (errorCode === 'invalid') {
    message = t('err_format');
    sub = t('err_check');
  } else if (errorCode === 'eia96-unknown') {
    message = t('err_eia96');
  }

  resultArea.innerHTML =
    '<div class="alert alert-error" role="alert">' +
    '<span class="alert-icon">⚠️</span>' +
    '<div><p>' + message + '</p>' +
    (sub ? '<p class="alert-sub">' + sub + '</p>' : '') +
    '</div></div>' +
    (hint
      ? '<div class="reverse-hint" role="note">' +
        '<span class="reverse-hint-icon">💡</span>' +
        '<span>' + escapeHtml(hint) + '</span>' +
        '</div>'
      : '');
}

function renderResult(result) {
  const { type, data } = result;
  const copyText = buildCopyText(result);

  let rows = '';
  if (type === '3-digit') {
    rows =
      rowHtml(t('label_resistor'), data.resistor) +
      rowHtml(t('label_capacitor'), data.capacitor);
  } else if (type === '4-digit') {
    rows =
      rowHtml(t('label_resistor'), data.resistor) +
      rowHtml(t('label_type'), t('label_precision'));
  } else if (type === 'eia96') {
    rows =
      rowHtml(t('label_resistor'), data.resistor) +
      rowHtml(t('label_system'), t('label_eia96'));
  }

  let note = '';
  if (type === '3-digit') {
    note = t('note_3');
  } else if (type === '4-digit') {
    note = t('note_4');
  } else if (type === 'eia96') {
    note = t('note_eia');
  }

  resultArea.innerHTML =
    '<div class="result-block">' +
    '<div class="result-head">' +
      '<h3>' + escapeHtml(t('result_title')) + '</h3>' +
      '<span class="result-code" dir="ltr">' + escapeHtml(data.code) + '</span>' +
    '</div>' +
    '<div class="result-body">' + rows + '</div>' +
    (note ? '<p class="result-note">' + escapeHtml(note) + '</p>' : '') +
    '<div class="copy-wrap">' +
      '<button type="button" class="btn copy-btn" id="copy-btn">' +
        '<span class="copy-icon">📋</span><span class="copy-label">' + escapeHtml(t('copy')) + '</span>' +
      '</button>' +
      '<div class="copy-preview" id="copy-preview" dir="auto" hidden></div>' +
    '</div>' +
    '</div>';

  const copyBtn = $('#copy-btn');
  const preview = $('#copy-preview');
  copyBtn.addEventListener('click', () => {
    copyToClipboard(copyText);
    preview.textContent = copyText;
    preview.hidden = false;
    trackEvent('copy_result', { query_type: queryTypeKey(type) });
    const label = copyBtn.querySelector('.copy-label');
    const icon = copyBtn.querySelector('.copy-icon');
    label.textContent = t('copied');
    icon.textContent = '✅';
    copyBtn.classList.add('copied');
    setTimeout(() => {
      label.textContent = t('copy');
      icon.textContent = '📋';
      copyBtn.classList.remove('copied');
    }, 2000);
  });
}

function rowHtml(label, value) {
  return '<div class="result-row">' +
    '<span class="result-label">' + escapeHtml(label) + '</span>' +
    '<span class="result-value" dir="ltr">' + escapeHtml(value) + '</span>' +
    '</div>';
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));
}

/* Clipboard with fallback for older browsers / non-secure contexts. */
function copyToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    try {
      navigator.clipboard.writeText(text).catch(() => fallbackCopy(text));
    } catch (e) {
      fallbackCopy(text);
    }
  } else {
    fallbackCopy(text);
  }
}

function fallbackCopy(text) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.opacity = '0';
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand('copy');
  } catch (e) { /* ignore */ }
  document.body.removeChild(ta);
}

function renderHistory() {
  const section = $('#history-section');
  const list = $('#history-list');
  const history = getHistory();

  if (history.length === 0) {
    section.hidden = true;
    return;
  }

  section.hidden = false;
  list.innerHTML = history.map((code) =>
    '<li><button type="button" class="history-item" data-code="' +
    escapeHtml(code) + '" dir="ltr">' + escapeHtml(code) + '</button></li>'
  ).join('');

  list.querySelectorAll('.history-item').forEach((btn) => {
    btn.addEventListener('click', () => {
      $('#code-input').value = btn.dataset.code;
      performLookup();
      trackEvent('recent_search_click');
    });
  });
}

/* -------------------------------------------------------------------------
 * 7. EVENT WIRING
 * ------------------------------------------------------------------------- */

function performLookup() {
  const input = $('#code-input');
  const raw = input.value;
  const result = lookup(raw);
  const code = raw.trim().toUpperCase();

  recordQuery();

  if (result.ok) {
    lastRender = { kind: 'result', value: result };
    renderResult(result);
    addToHistory(code);
    trackEvent('query_success', { query_type: queryTypeKey(result.type) });
  } else {
    // Categorize the invalid input. A value-like input (e.g. "10k") is a
    // strong signal for a future reverse-lookup tool, so tag it distinctly
    // and show the reverse-lookup hint instead of a generic error.
    let errorCode = result.error;
    let hint = false;
    let category = '';

    if (result.error === 'empty') {
      category = 'empty';
    } else if (isValueLike(raw)) {
      errorCode = 'invalid';
      category = 'value_like';
      hint = true;
    } else if (result.error === 'eia96-unknown') {
      category = 'eia96_unknown';
    } else {
      category = 'format';
    }

    lastRender = { kind: 'error', value: errorCode, hint: hint };
    renderError(errorCode, hint ? t('hint_reverse') : null);
    trackEvent('invalid_input', { category: category });
  }
}

function init() {
  $('#year').textContent = new Date().getFullYear();

  recordVisit();
  trackEvent('tool_view');

  const form = $('#lookup-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    performLookup();
  });

  $('#clear-history').addEventListener('click', clearHistory);

  document.querySelectorAll('.example-chip').forEach((chip) => {
    chip.addEventListener('click', () => {
      $('#code-input').value = chip.dataset.code;
      performLookup();
    });
  });

  // Re-render dynamic content when the language changes.
  window.__onLanguageChange = () => {
    if (lastRender) {
      if (lastRender.kind === 'result') {
        renderResult(lastRender.value);
      } else {
        renderError(lastRender.value, lastRender.hint ? t('hint_reverse') : null);
      }
    }
    renderHistory();
  };

  // Enter key inside input triggers form submit (default behavior).
  renderHistory();
}

document.addEventListener('DOMContentLoaded', init);