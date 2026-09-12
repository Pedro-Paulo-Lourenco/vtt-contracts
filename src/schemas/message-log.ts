import { z } from 'zod';
import { MessageType } from '../enums/message-type.js';
import { dateSchema, jsonObjectSchema, uuidSchema } from './common.js';

export const messageLogSchema = z.object({
  id: uuidSchema,
  salaId: uuidSchema,
  autorId: uuidSchema,
  tipo: z.enum(MessageType),
  conteudo: z.string().trim().min(1).max(4000),
  secreto: z.boolean(),
  metadata: jsonObjectSchema.optional(),
  createdAt: dateSchema,
});
