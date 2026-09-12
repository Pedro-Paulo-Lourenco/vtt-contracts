import { z } from 'zod';
import { dateSchema, uuidSchema } from './common.js';

export const boardSchema = z.object({
  id: uuidSchema,
  salaId: uuidSchema,
  nome: z.string().trim().min(1).max(120),
  cenaAtivaId: uuidSchema.nullable().optional(),
  createdAt: dateSchema,
  updatedAt: dateSchema,
});
