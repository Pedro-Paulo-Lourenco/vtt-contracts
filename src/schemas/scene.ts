import { z } from 'zod';
import { dateSchema, gridConfigSchema, uuidSchema } from './common.js';

export const sceneSchema = z.object({
  id: uuidSchema,
  tabuleiroId: uuidSchema,
  nome: z.string().trim().min(1).max(120),
  backgroundUrl: z.string().url().nullable().optional(),
  gridConfig: gridConfigSchema,
  visivel: z.boolean(),
  createdAt: dateSchema,
  updatedAt: dateSchema,
});
