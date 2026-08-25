/* =========================================================================
 * ECCHIPS SMD Code Lookup — core decoder (deterministic, no UI)
 * =========================================================================
 * Rules:
 *   • 3-digit: first 2 digits = significant, 3rd digit = ×10^n.
 *              A 3-digit marking is inherently ambiguous — it cannot tell
 *              whether the part is a resistor or a ceramic capacitor.
 *   • 4-digit: first 3 digits = significant, 4th digit = ×10^n.
 *              Interpreted ONLY as a precision resistor.
 *   • EIA-96 : 2 digits + 1 letter, resolved against the EIA-96 table.
 *              Resistor only.
 *
 * Hard constraints:
 *   • No component-type guessing.
 *   • No fuzzy matching.
 *   • An unknown code is NEVER coerced into a "close enough" valid code.
 * ========================================================================= */

import { EIA96_VALUES, EIA96_MULTIPLIERS } from '../data/smdMapping.js';

/* -------------------------------------------------------------------------
 * Formatting helpers (deterministic)
 * ------------------------------------------------------------------------- */

function trimDecimals(n) {
  return String(Math.round(n * 100) / 100);
}

/* e.g. 10000 -> "10 kΩ", 4700 -> "4.7 kΩ", 220 -> "220 Ω", 1000000 -> "1 MΩ" */
function formatResistance(ohms) {
  if (ohms >= 1000000) return trimDecimals(ohms / 1000000) + ' MΩ';
  if (ohms >= 1000) return trimDecimals(ohms / 1000) + ' kΩ';
  return trimDecimals(ohms) + ' Ω';
}

/* Primary capacitance representation: 10000 pF -> "10 nF". */
function formatCapacitance(pF) {
  if (pF >= 1000000) return trimDecimals(pF / 1000000) + ' µF';
  if (pF >= 1000) return trimDecimals(pF / 1000) + ' nF';
  return trimDecimals(pF) + ' pF';
}

/* Full raw pF with thousands separators: 10000 -> "10,000 pF". */
function formatPicoFarads(pF) {
  return String(pF).replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' pF';
}

/* -------------------------------------------------------------------------
 * Per-format decoders
 * ------------------------------------------------------------------------- */

/**
 * 3-digit code → dual interpretation (resistor OR ceramic capacitor).
 * The marking cannot identify the component type, hence "ambiguous".
 */
export function decode3Digit(code) {
  const sig = parseInt(code.slice(0, 2), 10);
  const mult = parseInt(code.slice(2, 3), 10);
  const ohms = sig * Math.pow(10, mult);
  const pF = sig * Math.pow(10, mult);

  return {
    resistorValue: formatResistance(ohms),
    capacitorValue: formatCapacitance(pF),
    capacitorPicoFarads: formatPicoFarads(pF),
    interpretation: 'ambiguous'
  };
}

/**
 * 4-digit code → precision resistor only. Never returns a capacitor value.
 */
export function decode4Digit(code) {
  const sig = parseInt(code.slice(0, 3), 10);
  const mult = parseInt(code.slice(3, 4), 10);
  const ohms = sig * Math.pow(10, mult);

  return {
    resistorValue: formatResistance(ohms),
    type: 'precision-resistor'
  };
}

/**
 * EIA-96 code (2 digits + 1 letter) → resistor only.
 * Returns null when the code is well-formed but not in the table.
 */
export function decodeEIA96(code) {
  const numPart = code.slice(0, 2);
  const letter = code.slice(2, 3);
  const value = EIA96_VALUES[numPart];
  const mult = EIA96_MULTIPLIERS[letter];

  if (value === undefined || mult === undefined) return null;

  return {
    resistorValue: formatResistance(value * mult),
    type: 'resistor',
    system: 'EIA-96'
  };
}

/* -------------------------------------------------------------------------
 * Format detection
 * ------------------------------------------------------------------------- */

function detectFormat(code) {
  if (code.length === 0) return 'empty';
  if (/^[0-9]{3}$/.test(code)) return '3-digit';
  if (/^[0-9]{4}$/.test(code)) return '4-digit';
  if (/^[0-9]{2}[A-Z]$/.test(code)) return 'eia96';
  return 'invalid';
}

/* -------------------------------------------------------------------------
 * Unified entry point
 * ------------------------------------------------------------------------- */

/**
 * Decode any SMD marking string.
 *
 * Success shape:
 *   { ok: true, format: "3-digit"|"4-digit"|"eia96", code, ...specific }
 *
 *   - 3-digit: resistorValue, capacitorValue, capacitorPicoFarads,
 *              interpretation: "ambiguous"
 *   - 4-digit: resistorValue, type: "precision-resistor"
 *   - eia96  : resistorValue, type: "resistor", system: "EIA-96"
 *
 * Error shape:
 *   { ok: false, error: "empty" | "format" | "eia96-not-found" }
 */
export function decodeSmdCode(raw) {
  const code = String(raw == null ? '' : raw).trim().toUpperCase();
  const format = detectFormat(code);

  if (format === 'empty') return { ok: false, error: 'empty' };
  if (format === 'invalid') return { ok: false, error: 'format' };

  if (format === '3-digit') {
    return { ok: true, format, code, ...decode3Digit(code) };
  }

  if (format === '4-digit') {
    return { ok: true, format, code, ...decode4Digit(code) };
  }

  if (format === 'eia96') {
    const result = decodeEIA96(code);
    if (!result) return { ok: false, error: 'eia96-not-found' };
    return { ok: true, format, code, ...result };
  }

  return { ok: false, error: 'format' };
}
