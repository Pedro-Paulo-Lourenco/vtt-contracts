import { z } from 'zod';
import { dateSchema, jsonObjectSchema, uuidSchema } from './common.js';
export const statusBarMapSchema = z.record(z.string(), z.object({
    current: z.string().min(1),
    maximum: z.string().min(1),
    color: z.string().max(32).optional(),
}));
export const tokenSchema = z.object({
    id: uuidSchema,
    cenaId: uuidSchema,
    assetOrigemId: uuidSchema.nullable().optional(),
    characterSheetId: uuidSchema.nullable().optional(),
    nome: z.string().trim().min(1).max(120),
    x: z.number().finite(),
    y: z.number().finite(),
    escala: z.number().positive().finite(),
    statusBarMap: statusBarMapSchema.nullable().optional(),
    customData: jsonObjectSchema.optional(),
});
//# sourceMappingURL=token.js.map