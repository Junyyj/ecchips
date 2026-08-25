/* =========================================================================
 * ECCHIPS SMD Code Lookup — unit tests for smdDecoder.js
 * Run with:  node --test src/scripts/smdDecoder.test.js
 * ========================================================================= */

import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import {
  decodeSmdCode,
  decode3Digit,
  decode4Digit,
  decodeEIA96
} from './smdDecoder.js';

describe('3-digit code (ambiguous resistor / ceramic capacitor)', () => {
  test('103 → 10 kΩ resistor + 10 nF capacitor', () => {
    const r = decodeSmdCode('103');
    assert.equal(r.ok, true);
    assert.equal(r.format, '3-digit');
    assert.equal(r.code, '103');
    assert.equal(r.resistorValue, '10 kΩ');
    assert.equal(r.capacitorValue, '10 nF');
    assert.equal(r.capacitorPicoFarads, '10,000 pF');
    assert.equal(r.interpretation, 'ambiguous');
  });

  test('472 → 4.7 kΩ resistor + 4.7 nF capacitor', () => {
    const r = decodeSmdCode('472');
    assert.equal(r.resistorValue, '4.7 kΩ');
    assert.equal(r.capacitorValue, '4.7 nF');
    assert.equal(r.capacitorPicoFarads, '4,700 pF');
    assert.equal(r.interpretation, 'ambiguous');
  });

  test('104 → 100 kΩ resistor + 100 nF capacitor', () => {
    const r = decodeSmdCode('104');
    assert.equal(r.resistorValue, '100 kΩ');
    assert.equal(r.capacitorValue, '100 nF');
    assert.equal(r.capacitorPicoFarads, '100,000 pF');
  });

  test('220 → 22 Ω resistor + 22 pF capacitor (multiplier 10^0)', () => {
    const r = decode3Digit('220');
    assert.equal(r.resistorValue, '22 Ω');
    assert.equal(r.capacitorValue, '22 pF');
    assert.equal(r.capacitorPicoFarads, '22 pF');
  });
});

describe('4-digit code (precision resistor only)', () => {
  test('1002 → 10 kΩ precision resistor, no capacitor', () => {
    const r = decodeSmdCode('1002');
    assert.equal(r.ok, true);
    assert.equal(r.format, '4-digit');
    assert.equal(r.resistorValue, '10 kΩ');
    assert.equal(r.type, 'precision-resistor');
    assert.equal('capacitorValue' in r, false, 'must NOT include capacitorValue');
    assert.equal('capacitorPicoFarads' in r, false, 'must NOT include capacitorPicoFarads');
    assert.equal('interpretation' in r, false, 'must NOT include interpretation');
  });

  test('4991 → 4.99 kΩ precision resistor', () => {
    const r = decodeSmdCode('4991');
    assert.equal(r.resistorValue, '4.99 kΩ');
    assert.equal(r.type, 'precision-resistor');
  });

  test('1000 → 100 Ω (multiplier 10^0)', () => {
    const r = decode4Digit('1000');
    assert.equal(r.resistorValue, '100 Ω');
    assert.equal(r.type, 'precision-resistor');
  });
});

describe('EIA-96 code (resistor only)', () => {
  test('01C → 10 kΩ resistor', () => {
    const r = decodeSmdCode('01C');
    assert.equal(r.ok, true);
    assert.equal(r.format, 'eia96');
    assert.equal(r.resistorValue, '10 kΩ');
    assert.equal(r.type, 'resistor');
    assert.equal(r.system, 'EIA-96');
    assert.equal('capacitorValue' in r, false, 'EIA-96 must not include capacitor');
  });

  test('68B → 4.99 kΩ resistor', () => {
    const r = decodeEIA96('68B');
    assert.equal(r.resistorValue, '4.99 kΩ');
    assert.equal(r.type, 'resistor');
  });
});

describe('input normalization', () => {
  test('lowercase "01c" is normalized to "01C"', () => {
    const r = decodeSmdCode('01c');
    assert.equal(r.ok, true);
    assert.equal(r.code, '01C');
    assert.equal(r.resistorValue, '10 kΩ');
  });

  test('leading/trailing whitespace is trimmed', () => {
    const r = decodeSmdCode('  103  ');
    assert.equal(r.ok, true);
    assert.equal(r.code, '103');
    assert.equal(r.resistorValue, '10 kΩ');
  });
});

describe('error states', () => {
  test('empty string → error "empty"', () => {
    const r = decodeSmdCode('');
    assert.equal(r.ok, false);
    assert.equal(r.error, 'empty');
  });

  test('whitespace only → error "empty"', () => {
    const r = decodeSmdCode('   ');
    assert.equal(r.ok, false);
    assert.equal(r.error, 'empty');
  });

  test('2-digit "12" → error "format"', () => {
    const r = decodeSmdCode('12');
    assert.equal(r.ok, false);
    assert.equal(r.error, 'format');
  });

  test('5-digit "12345" → error "format"', () => {
    const r = decodeSmdCode('12345');
    assert.equal(r.ok, false);
    assert.equal(r.error, 'format');
  });

  test('illegal letters "ABC" → error "format"', () => {
    const r = decodeSmdCode('ABC');
    assert.equal(r.ok, false);
    assert.equal(r.error, 'format');
  });

  test('illegal mixed "1A2" → error "format"', () => {
    const r = decodeSmdCode('1A2');
    assert.equal(r.ok, false);
    assert.equal(r.error, 'format');
  });

  test('non-existent EIA-96 "99Z" (index out of range) → error "eia96-not-found"', () => {
    const r = decodeSmdCode('99Z');
    assert.equal(r.ok, false);
    assert.equal(r.error, 'eia96-not-found');
  });

  test('non-existent EIA-96 "01Q" (invalid multiplier) → error "eia96-not-found"', () => {
    const r = decodeSmdCode('01Q');
    assert.equal(r.ok, false);
    assert.equal(r.error, 'eia96-not-found');
  });
});

describe('no guessing (hard constraints)', () => {
  test('"10k" is NOT coerced into 10 kΩ → error "eia96-not-found"', () => {
    // "10K" matches the EIA-96 shape (2 digits + letter) but "K" is not a
    // valid multiplier. It must fail, not silently become "10 kΩ".
    const r = decodeSmdCode('10k');
    assert.equal(r.ok, false);
    assert.equal(r.error, 'eia96-not-found');
  });

  test('decodeEIA96 returns null for a well-formed but unknown code', () => {
    assert.equal(decodeEIA96('99Z'), null);
    assert.equal(decodeEIA96('01Q'), null);
  });
});
