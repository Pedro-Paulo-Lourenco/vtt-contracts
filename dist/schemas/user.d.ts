import { z } from 'zod';
import { UserStatus } from '../enums/user-status.js';
export declare const userSchema: z.ZodObject<{
    id: z.ZodString;
    nome: z.ZodString;
    email: z.ZodString;
    status: z.ZodEnum<typeof UserStatus>;
    ultimoLogin: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, z.core.$strip>;
export type UserInput = z.infer<typeof userSchema>;
//# sourceMappingURL=user.d.ts.map