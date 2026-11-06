import { z } from 'zod';
import { fieldTypeValues } from '../types/sheetEngine.js';

const resourceValueSchema = z.object({
  atual: z.number().finite(),
  maximo: z.number().finite(),
});

export const sheetFieldValueSchema = z.union([
  z.string(),
  z.number().finite(),
  resourceValueSchema,
  z.null(),
]);

export const templateFieldSchema = z.object({
  id: z.string().trim().min(1).max(80),
  label: z.string().trim().min(1).max(120),
  type: z.enum(fieldTypeValues),
  defaultValue: sheetFieldValueSchema.optional(),
  formula: z.string().trim().max(500).nullable().optional(),
  baseAttributeId: z.string().trim().max(80).nullable().optional(),
  required: z.boolean().optional(),
  description: z.string().trim().max(500).nullable().optional(),
  min: z.number().finite().nullable().optional(),
  max: z.number().finite().nullable().optional(),
});

export const sheetTemplateSchema = z.object({
  cabecalho: z.array(templateFieldSchema),
  atributos: z.array(templateFieldSchema),
  recursos: z.array(templateFieldSchema),
  pericias: z.array(templateFieldSchema),
});

export const characterSheetDataSchema = z.record(z.string().trim().min(1), sheetFieldValueSchema);

export type TemplateFieldInput = z.infer<typeof templateFieldSchema>;
export type SheetTemplateInput = z.infer<typeof sheetTemplateSchema>;
export type CharacterSheetDataInput = z.infer<typeof characterSheetDataSchema>;
