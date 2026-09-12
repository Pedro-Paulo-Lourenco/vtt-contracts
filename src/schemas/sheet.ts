import { z } from 'zod';
import { SheetFieldType } from '../enums/sheet-field-type.js';
import { dateSchema, uuidSchema, jsonObjectSchema } from './common.js';

export const sheetFieldSchema = z.object({
  id: z.string().trim().min(1).max(80),
  label: z.string().trim().min(1).max(120),
  type: z.enum(SheetFieldType),
  formula: z.string().max(500).nullable().optional(),
  required: z.boolean().optional(),
  attributeId: z.string().trim().max(80).nullable().optional(),
});

export const sheetFieldsSchema = z.object({
  cabecalho: z.array(sheetFieldSchema),
  atributos: z.array(sheetFieldSchema),
  recursos: z.array(sheetFieldSchema),
  pericias: z.array(sheetFieldSchema),
});

export const sheetTemplateSchema = z.object({
  id: uuidSchema,
  usuarioId: uuidSchema.nullable().optional(),
  salaId: uuidSchema.nullable().optional(),
  nome: z.string().trim().min(1).max(160),
  sistema: z.string().trim().max(80).nullable().optional(),
  camposSchema: sheetFieldsSchema,
  createdAt: dateSchema,
  updatedAt: dateSchema,
});

export const characterSheetSchema = z.object({
  id: uuidSchema,
  templateId: uuidSchema,
  usuarioId: uuidSchema,
  salaId: uuidSchema.nullable().optional(),
  nome: z.string().trim().min(1).max(160),
  dadosPreenchidos: jsonObjectSchema,
  versao: z.number().int().nonnegative(),
  createdAt: dateSchema,
  updatedAt: dateSchema,
});

export type SheetTemplateInput = z.infer<typeof sheetTemplateSchema>;
