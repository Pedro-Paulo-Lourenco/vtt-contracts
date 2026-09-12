import { z } from 'zod';
import { jsonObjectSchema } from './common.js';
export const apiErrorSchema = z.object({
    code: z.string().min(1),
    message: z.string().min(1),
    correlationId: z.string().min(1).optional(),
    details: jsonObjectSchema.optional(),
});
//# sourceMappingURL=api.js.map