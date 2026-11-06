export const fieldTypeValues = ['number', 'text', 'formula', 'resource'] as const;
export type FieldType = (typeof fieldTypeValues)[number];

export const sheetSectionValues = ['cabecalho', 'atributos', 'recursos', 'pericias'] as const;
export type SheetSection = (typeof sheetSectionValues)[number];

export interface ResourceValue {
  atual: number;
  maximo: number;
}

export type SheetFieldValue = string | number | ResourceValue | null;

export interface TemplateFieldSchema {
  id: string;
  label: string;
  type: FieldType;
  defaultValue?: SheetFieldValue;
  formula?: string | null;
  baseAttributeId?: string | null;
  required?: boolean;
  description?: string | null;
  min?: number | null;
  max?: number | null;
}

export interface SheetTemplateSchema {
  cabecalho: TemplateFieldSchema[];
  atributos: TemplateFieldSchema[];
  recursos: TemplateFieldSchema[];
  pericias: TemplateFieldSchema[];
}

export type CharacterSheetData = Record<string, SheetFieldValue>;
