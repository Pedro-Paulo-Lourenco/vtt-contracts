import test from 'node:test';
import assert from 'node:assert/strict';
import {
  detectCircularDependencies,
  evaluateFormula,
  evaluateFormulaFields,
  validateFormula,
} from '../dist/services/formulaParser.js';

const values = { forca: 8, destreza: 5, constituicao: 6, inteligencia: 10, sabedoria: 7 };

test('avalia operadores, precedência, parênteses, unários e decimais', () => {
  assert.equal(evaluateFormula('@forca + 2 * 3', values), 14);
  assert.equal(evaluateFormula('(@forca + @destreza) / 2', values), 6.5);
  assert.equal(evaluateFormula('-1.5 + +2', values), 0.5);
});

test('avalia floor, ceil, min e max', () => {
  assert.equal(evaluateFormula('floor(@forca / 3)', values), 2);
  assert.equal(evaluateFormula('ceil(@destreza / 2)', values), 3);
  assert.equal(evaluateFormula('min(@forca, @destreza, 10)', values), 5);
  assert.equal(evaluateFormula('max(@sabedoria, @inteligencia, 10)', values), 10);
});

test('retorna erros controlados e valida referências', () => {
  assert.equal(validateFormula('@inexistente', Object.keys(values)).error.code, 'UNKNOWN_FIELD');
  assert.equal(validateFormula('(@forca + 2').error.code, 'INVALID_EXPRESSION');
  assert.throws(() => evaluateFormula('@forca / 0', values), { code: 'DIVISION_BY_ZERO' });
  assert.throws(() => evaluateFormula('round(@forca)', values), { code: 'UNKNOWN_FUNCTION' });
  assert.throws(() => evaluateFormula('min()', values), { code: 'INVALID_ARGUMENTS' });
});

test('recalcula dependências e detecta ciclos', () => {
  const fields = [
    { id: 'forca', formula: null },
    { id: 'atletismo', formula: '@forca + 2' },
    { id: 'total', formula: '@atletismo * 2' },
  ];
  assert.equal(evaluateFormulaFields(fields, { forca: 8 }).total, 20);
  assert.equal(detectCircularDependencies([
    { id: 'a', formula: '@b' },
    { id: 'b', formula: '@a' },
  ]), true);
});
