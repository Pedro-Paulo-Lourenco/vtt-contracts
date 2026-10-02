import { z } from 'zod';
import { jsonObjectSchema } from './common.js';
export const apiErrorSchema = z.object({
    code: z.string().min(1),
    message: z.string().min(1),
    correlationId: z.string().min(1).optional(),
    details: jsonObjectSchema.optional(),
});
export const apiSuccessSchema = (dataSchema) => z.object({
    success: z.literal(true),
    data: dataSchema,
    message: z.string().optional(),
    correlationId: z.string().min(1).optional(),
});
export const apiErrorResponseSchema = z.object({
    success: z.literal(false),
    error: apiErrorSchema,
});
//# sourceMappingURL=api.js.map