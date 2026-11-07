import type { SheetField } from '../types/sheet.js';

export type FormulaValue = number | null | undefined;
export type FormulaErrorCode =
  | 'EMPTY_FORMULA'
  | 'INVALID_NUMBER'
  | 'INVALID_REFERENCE'
  | 'INVALID_CHARACTER'
  | 'INVALID_EXPRESSION'
  | 'DIVISION_BY_ZERO'
  | 'UNKNOWN_FUNCTION'
  | 'INVALID_ARGUMENTS'
  | 'UNKNOWN_FIELD'
  | 'CIRCULAR_DEPENDENCY';

export class FormulaError extends Error {
  public constructor(
    public readonly code: FormulaErrorCode,
    message: string,
  ) {
    super(message);
    this.name = 'FormulaError';
  }
}

const variablePattern = /@([A-Za-z_][A-Za-z0-9_]*)/g;
const supportedFunctions = new Set(['floor', 'ceil', 'min', 'max']);

export function extractFormulaReferences(formula: string | null | undefined): string[] {
  if (!formula) return [];
  return [...formula.matchAll(variablePattern)]
    .map((match) => match[1])
    .filter((id): id is string => id !== undefined)
    .filter((id, index, references) => references.indexOf(id) === index);
}

export interface FormulaValidationResult {
  valid: boolean;
  references: string[];
  error?: FormulaError;
}

export function validateFormula(
  formula: string | null | undefined,
  availableFieldIds?: Iterable<string>,
): FormulaValidationResult {
  if (!formula?.trim()) {
    return {
      valid: false,
      references: [],
      error: new FormulaError('EMPTY_FORMULA', 'A fórmula não pode ficar vazia.'),
    };
  }
  const references = extractFormulaReferences(formula);
  if (availableFieldIds) {
    const available = new Set(availableFieldIds);
    const missing = references.find((id) => !available.has(id));
    if (missing) {
      return {
        valid: false,
        references,
        error: new FormulaError('UNKNOWN_FIELD', `Campo inexistente na fórmula: @${missing}.`),
      };
    }
  }
  try {
    new FormulaParser(tokenize(formula), {}).parse(false);
    return { valid: true, references };
  } catch (error) {
    return { valid: false, references, error: toFormulaError(error) };
  }
}

export function detectCircularDependencies(fields: Pick<SheetField, 'id' | 'formula'>[]): boolean {
  return findCircularDependency(fields) !== undefined;
}

export function findCircularDependency(
  fields: Pick<SheetField, 'id' | 'formula'>[],
): string[] | undefined {
  const graph = new Map(fields.map((field) => [field.id, extractFormulaReferences(field.formula)]));
  const visiting = new Set<string>();
  const visited = new Set<string>();
  const path: string[] = [];

  const visit = (id: string): string[] | undefined => {
    if (visiting.has(id)) return [...path.slice(path.indexOf(id)), id];
    if (visited.has(id)) return undefined;
    visiting.add(id);
    path.push(id);
    for (const dependency of graph.get(id) ?? []) {
      if (graph.has(dependency)) {
        const cycle = visit(dependency);
        if (cycle) return cycle;
      }
    }
    path.pop();
    visiting.delete(id);
    visited.add(id);
    return undefined;
  };

  for (const field of fields) {
    const cycle = visit(field.id);
    if (cycle) return cycle;
  }
  return undefined;
}

type Token =
  | { kind: 'number'; value: number }
  | { kind: 'variable'; value: string }
  | { kind: 'identifier'; value: string }
  | { kind: 'operator'; value: '+' | '-' | '*' | '/' }
  | { kind: 'leftParen' }
  | { kind: 'rightParen' }
  | { kind: 'comma' }
  | { kind: 'eof' };

function tokenize(formula: string): Token[] {
  const tokens: Token[] = [];
  let index = 0;
  while (index < formula.length) {
    const character = formula[index];
    if (character === undefined) break;
    if (/\s/.test(character)) {
      index += 1;
      continue;
    }
    if (/[0-9.]/.test(character)) {
      const start = index;
      let dots = 0;
      while (index < formula.length && /[0-9.]/.test(formula[index] ?? '')) {
        if (formula[index] === '.') dots += 1;
        index += 1;
      }
      const value = Number(formula.slice(start, index));
      if (dots > 1 || !Number.isFinite(value)) {
        throw new FormulaError('INVALID_NUMBER', `Número inválido na posição ${start}.`);
      }
      tokens.push({ kind: 'number', value });
      continue;
    }
    if (character === '@') {
      const match = formula.slice(index).match(/^@([A-Za-z_][A-Za-z0-9_]*)/);
      if (!match) throw new FormulaError('INVALID_REFERENCE', `Referência inválida na posição ${index}.`);
      tokens.push({ kind: 'variable', value: match[1] ?? '' });
      index += match[0].length;
      continue;
    }
    if (/[A-Za-z_]/.test(character)) {
      const match = formula.slice(index).match(/^[A-Za-z_][A-Za-z0-9_]*/);
      if (!match) throw new FormulaError('INVALID_EXPRESSION', `Identificador inválido na posição ${index}.`);
      tokens.push({ kind: 'identifier', value: match[0] });
      index += match[0].length;
      continue;
    }
    if (character === '+' || character === '-' || character === '*' || character === '/') {
      tokens.push({ kind: 'operator', value: character });
    } else if (character === '(') {
      tokens.push({ kind: 'leftParen' });
    } else if (character === ')') {
      tokens.push({ kind: 'rightParen' });
    } else if (character === ',') {
      tokens.push({ kind: 'comma' });
    } else {
      throw new FormulaError('INVALID_CHARACTER', `Caractere não suportado na posição ${index}: "${character}".`);
    }
    index += 1;
  }
  tokens.push({ kind: 'eof' });
  return tokens;
}

function toFormulaError(error: unknown): FormulaError {
  if (error instanceof FormulaError) return error;
  return new FormulaError('INVALID_EXPRESSION', error instanceof Error ? error.message : 'Fórmula inválida.');
}

function numericValue(value: unknown): number {
  if (typeof value === 'number' && Number.isFinite(value)) return value;
  if (typeof value === 'boolean') return value ? 1 : 0;
  if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
    const current = (value as Record<string, unknown>).atual;
    if (typeof current === 'number' && Number.isFinite(current)) return current;
  }
  return 0;
}

class FormulaParser {
  private position = 0;

  public constructor(
    private readonly tokens: Token[],
    private readonly values: Record<string, unknown>,
  ) {}

  public parse(requireValue = true): number {
    if (this.peek().kind === 'eof') {
      if (requireValue) throw new FormulaError('EMPTY_FORMULA', 'A fórmula não pode ficar vazia.');
      return 0;
    }
    const value = this.parseExpression();
    if (this.peek().kind !== 'eof') throw new FormulaError('INVALID_EXPRESSION', 'Tokens após a expressão.');
    return value;
  }

  private parseExpression(): number {
    let value = this.parseTerm();
    while (this.matchOperator('+') || this.matchOperator('-')) {
      const operator = this.previous();
      const right = this.parseTerm();
      value = operator.value === '+' ? value + right : value - right;
    }
    return value;
  }

  private parseTerm(): number {
    let value = this.parseUnary();
    while (this.matchOperator('*') || this.matchOperator('/')) {
      const operator = this.previous();
      const right = this.parseUnary();
      if (operator.value === '/') {
        if (right === 0) throw new FormulaError('DIVISION_BY_ZERO', 'Divisão por zero na fórmula.');
        value /= right;
      } else value *= right;
    }
    return value;
  }

  private parseUnary(): number {
    if (this.matchOperator('+')) return this.parseUnary();
    if (this.matchOperator('-')) return -this.parseUnary();
    return this.parsePrimary();
  }

  private parsePrimary(): number {
    const token = this.peek();
    if (token.kind === 'number') {
      this.advance();
      return token.value;
    }
    if (token.kind === 'variable') {
      this.advance();
      return numericValue(this.values[token.value]);
    }
    if (this.match('leftParen')) {
      const value = this.parseExpression();
      this.expect('rightParen');
      return value;
    }
    if (token.kind === 'identifier') return this.parseFunction();
    throw new FormulaError('INVALID_EXPRESSION', 'Expressão esperada.');
  }

  private parseFunction(): number {
    const name = this.advance();
    if (name.kind !== 'identifier') throw new FormulaError('INVALID_EXPRESSION', 'Função inválida.');
    if (!supportedFunctions.has(name.value)) throw new FormulaError('UNKNOWN_FUNCTION', `Função desconhecida: ${name.value}.`);
    this.expect('leftParen');
    const args: number[] = [];
    if (!this.check('rightParen')) {
      do args.push(this.parseExpression());
      while (this.match('comma'));
    }
    this.expect('rightParen');
    if ((name.value === 'floor' || name.value === 'ceil') && args.length !== 1) {
      throw new FormulaError('INVALID_ARGUMENTS', `${name.value} espera exatamente um argumento.`);
    }
    if ((name.value === 'min' || name.value === 'max') && args.length === 0) {
      throw new FormulaError('INVALID_ARGUMENTS', `${name.value} espera pelo menos um argumento.`);
    }
    if (name.value === 'floor') return Math.floor(args[0] ?? 0);
    if (name.value === 'ceil') return Math.ceil(args[0] ?? 0);
    return name.value === 'min' ? Math.min(...args) : Math.max(...args);
  }

  private matchOperator(operator: '+' | '-' | '*' | '/'): boolean {
    const token = this.peek();
    return token.kind === 'operator' && token.value === operator
      ? Boolean(this.advance())
      : false;
  }

  private match(kind: Token['kind']): boolean {
    if (!this.check(kind)) return false;
    this.advance();
    return true;
  }

  private check(kind: Token['kind']): boolean { return this.peek().kind === kind; }

  private expect(kind: 'leftParen' | 'rightParen' | 'comma'): void {
    if (!this.match(kind)) throw new FormulaError('INVALID_EXPRESSION', `Fórmula inválida: esperado ${kind}.`);
  }

  private advance(): Token {
    const token = this.tokens[this.position] ?? { kind: 'eof' as const };
    this.position += 1;
    return token;
  }

  private peek(): Token { return this.tokens[this.position] ?? { kind: 'eof' as const }; }

  private previous(): Extract<Token, { kind: 'operator' }> {
    const token = this.tokens[this.position - 1];
    if (!token || token.kind !== 'operator') throw new FormulaError('INVALID_EXPRESSION', 'Operador inválido.');
    return token;
  }
}

export function evaluateFormula(formula: string, values: Record<string, unknown>): number {
  return new FormulaParser(tokenize(formula), values).parse();
}

export function evaluateFormulaFields(
  fields: Pick<SheetField, 'id' | 'formula'>[],
  values: Record<string, unknown>,
): Record<string, unknown> {
  const ids = new Set(fields.map((field) => field.id));
  for (const field of fields) {
    if (!field.formula) continue;
    const result = validateFormula(field.formula, ids);
    if (!result.valid) throw result.error ?? new FormulaError('INVALID_EXPRESSION', 'Fórmula inválida.');
  }
  const cycle = findCircularDependency(fields);
  if (cycle) throw new FormulaError('CIRCULAR_DEPENDENCY', `Dependência circular: ${cycle.join(' -> ')}.`);

  const calculated: Record<string, unknown> = { ...values };
  const formulaById = new Map(fields.filter((field) => field.formula).map((field) => [field.id, field]));
  const calculating = new Set<string>();
  const calculate = (id: string): number => {
    const field = formulaById.get(id);
    if (!field?.formula) return numericValue(calculated[id]);
    if (calculating.has(id)) throw new FormulaError('CIRCULAR_DEPENDENCY', `Dependência circular no campo @${id}.`);
    calculating.add(id);
    for (const dependency of extractFormulaReferences(field.formula)) {
      if (formulaById.has(dependency)) calculate(dependency);
    }
    const result = evaluateFormula(field.formula, calculated);
    calculated[id] = result;
    calculating.delete(id);
    return result;
  };
  for (const field of formulaById.values()) calculate(field.id);
  return calculated;
}
