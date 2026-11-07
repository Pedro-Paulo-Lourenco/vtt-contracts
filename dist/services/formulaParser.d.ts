import type { SheetField } from '../types/sheet.js';
export type FormulaValue = number | null | undefined;
export type FormulaErrorCode = 'EMPTY_FORMULA' | 'INVALID_NUMBER' | 'INVALID_REFERENCE' | 'INVALID_CHARACTER' | 'INVALID_EXPRESSION' | 'DIVISION_BY_ZERO' | 'UNKNOWN_FUNCTION' | 'INVALID_ARGUMENTS' | 'UNKNOWN_FIELD' | 'CIRCULAR_DEPENDENCY';
export declare class FormulaError extends Error {
    readonly code: FormulaErrorCode;
    constructor(code: FormulaErrorCode, message: string);
}
export declare function extractFormulaReferences(formula: string | null | undefined): string[];
export interface FormulaValidationResult {
    valid: boolean;
    references: string[];
    error?: FormulaError;
}
export declare function validateFormula(formula: string | null | undefined, availableFieldIds?: Iterable<string>): FormulaValidationResult;
export declare function detectCircularDependencies(fields: Pick<SheetField, 'id' | 'formula'>[]): boolean;
export declare function findCircularDependency(fields: Pick<SheetField, 'id' | 'formula'>[]): string[] | undefined;
export declare function evaluateFormula(formula: string, values: Record<string, unknown>): number;
export declare function evaluateFormulaFields(fields: Pick<SheetField, 'id' | 'formula'>[], values: Record<string, unknown>): Record<string, unknown>;
//# sourceMappingURL=formulaParser.d.ts.map