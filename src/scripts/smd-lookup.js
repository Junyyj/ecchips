/* =========================================================================
 * ECCHIPS SMD Code Lookup — client UI wiring
 * Connects the deterministic decoder to the DOM: input → decode → result,
 * copy (per-type template), recent history (LocalStorage), error states.
 * No frameworks. No tracking. No network requests.
 * ========================================================================= */

import { decodeSmdCode } from './smdDecoder.js';
import { t } from './i18n.js';

const HISTORY_KEY = 'ecchips_smd_history';
const HISTORY_MAX = 10;

/* Track the last render so we can re-render it when the language changes. */
let lastRender = null;

function errorMessage(error) {
  if (error === 'empty') return t('err_empty');
  if (error === 'eia96-not-found') return t('err_eia96');
  return t('err_format');
}

function ready(fn) {
  if (document.readyState !== 'loading') fn();
  else document.addEventListener('DOMContentLoaded', fn);
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));
}

/* -------------------------------------------------------------------------
 * Copy result — per-type templates (exact wording).
 * ------------------------------------------------------------------------- */

function buildCopyText(result) {
  const { format, code, resistorValue, capacitorValue } = result;

  if (format === '3-digit') {
    return [
      `SMD Code: ${code}`,
      `Resistor: ${resistorValue}`,
      `Ceramic Capacitor: ${capacitorValue}`,
      'Source: ECCHIPS SMD Code Lookup'
    ].join('\n');
  }

  if (format === '4-digit') {
    return [
      `SMD Code: ${code}`,
      `Resistor: ${resistorValue}`,
      'Type: Precision Resistor',
      'Source: ECCHIPS SMD Code Lookup'
    ].join('\n');
  }

  if (format === 'eia96') {
    return [
      `SMD Code: ${code}`,
      `Resistor: ${resistorValue}`,
      'System: EIA-96',
      'Source: ECCHIPS SMD Code Lookup'
    ].join('\n');
  }

  return '';
}

function copyToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    try {
      navigator.clipboard.writeText(text).catch(() => fallbackCopy(text));
      return;
    } catch {
      /* fall through to execCommand */
    }
  }
  fallbackCopy(text);
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
  } catch {
    /* ignore */
  }
  document.body.removeChild(ta);
}

/* -------------------------------------------------------------------------
 * Result rendering
 * ------------------------------------------------------------------------- */

function renderResult(result) {
  const area = document.getElementById('result-area');
  if (!area) return;

  const copyText = buildCopyText(result);
  let body = '';

  if (result.format === '3-digit') {
    body = `
      <p class="result-warning" role="note">${escapeHtml(t('warning_marking'))}</p>
      <dl class="result-list">
        <div class="result-row">
          <dt>${escapeHtml(t('label_resistor_interp'))}</dt>
          <dd>${escapeHtml(result.resistorValue)}</dd>
        </div>
        <div class="result-row">
          <dt>${escapeHtml(t('label_capacitor_interp'))}</dt>
          <dd>${escapeHtml(result.capacitorValue)} / ${escapeHtml(result.capacitorPicoFarads)}</dd>
        </div>
      </dl>`;
  } else if (result.format === '4-digit') {
    body = `
      <dl class="result-list">
        <div class="result-row">
          <dt>${escapeHtml(t('label_resistor'))}</dt>
          <dd>${escapeHtml(result.resistorValue)}</dd>
        </div>
      </dl>
      <p class="result-note">${escapeHtml(t('note_precision'))}</p>`;
  } else if (result.format === 'eia96') {
    body = `
      <dl class="result-list">
        <div class="result-row">
          <dt>${escapeHtml(t('label_resistor'))}</dt>
          <dd>${escapeHtml(result.resistorValue)}</dd>
        </div>
      </dl>
      <p class="result-note">EIA-96</p>`;
  }

  area.innerHTML = `
    <div class="result-panel">
      <p class="result-code" dir="ltr">${escapeHtml(result.code)}</p>
      ${body}
      <button type="button" class="btn btn-copy" id="copy-btn">${escapeHtml(t('copy'))}</button>
    </div>`;

  const copyBtn = area.querySelector('#copy-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      copyToClipboard(copyText);
      copyBtn.textContent = t('copied');
      setTimeout(() => {
        copyBtn.textContent = t('copy');
      }, 1500);
    });
  }
}

function renderError(error) {
  const area = document.getElementById('result-area');
  if (!area) return;
  const message = errorMessage(error);
  area.innerHTML = `<p class="error" role="alert">${escapeHtml(message)}</p>`;
}

/* -------------------------------------------------------------------------
 * Recent history (LocalStorage — no server upload)
 * ------------------------------------------------------------------------- */

function getHistory() {
  try {
    const raw = localStorage.getItem(HISTORY_KEY);
    const arr = raw ? JSON.parse(raw) : [];
    return Array.isArray(arr) ? arr : [];
  } catch {
    return [];
  }
}

function saveHistory(list) {
  try {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(list.slice(0, HISTORY_MAX)));
  } catch {
    /* ignore */
  }
}

function renderHistory() {
  const section = document.getElementById('recent-history');
  const list = document.getElementById('history-list');
  if (!section || !list) return;

  const history = getHistory();
  if (history.length === 0) {
    section.hidden = true;
    return;
  }

  section.hidden = false;
  list.innerHTML = history
    .map(
      (code) =>
        `<li><button type="button" class="history-chip" data-code="${escapeHtml(code)}" dir="ltr">${escapeHtml(code)}</button></li>`
    )
    .join('');

  list.querySelectorAll('.history-chip').forEach((btn) => {
    btn.addEventListener('click', () => {
      const input = document.getElementById('smd-code-input');
      if (input) input.value = btn.dataset.code;
      performLookup();
    });
  });
}

function addToHistory(code) {
  const list = getHistory().filter((c) => c !== code);
  list.unshift(code);
  saveHistory(list);
  renderHistory();
}

function clearHistory() {
  saveHistory([]);
  renderHistory();
}

/* -------------------------------------------------------------------------
 * Lookup
 * ------------------------------------------------------------------------- */

function performLookup() {
  const input = document.getElementById('smd-code-input');
  if (!input) return;

  const result = decodeSmdCode(input.value);

  if (result.ok) {
    lastRender = { kind: 'result', value: result };
    renderResult(result);
    addToHistory(result.code);
  } else {
    lastRender = { kind: 'error', value: result.error };
    renderError(result.error);
  }
}

export function initLookup() {
  ready(() => {
    const form = document.getElementById('smd-lookup-form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        performLookup();
      });
    }

    const clearBtn = document.getElementById('clear-history');
    if (clearBtn) clearBtn.addEventListener('click', clearHistory);

    // Re-render the dynamic result/error when the language changes.
    window.__onLanguageChange = () => {
      if (!lastRender) return;
      if (lastRender.kind === 'result') {
        renderResult(lastRender.value);
      } else {
        renderError(lastRender.value);
      }
    };

    renderHistory();
  });
}
