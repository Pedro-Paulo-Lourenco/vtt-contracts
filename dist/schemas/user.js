import { z } from 'zod';
import { UserStatus } from '../enums/user-status.js';
import { dateSchema, uuidSchema } from './common.js';
export const userSchema = z.object({
    id: uuidSchema,
    nome: z.string().trim().min(1).max(120),
    email: z.string().email(),
    status: z.enum(UserStatus),
    ultimoLogin: dateSchema.nullable().optional(),
    createdAt: dateSchema,
    updatedAt: dateSchema,
});
//# sourceMappingURL=user.js.map