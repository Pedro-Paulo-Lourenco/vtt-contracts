import { z } from 'zod';
export declare const boardSchema: z.ZodObject<{
    id: z.ZodString;
    salaId: z.ZodString;
    nome: z.ZodString;
    cenaAtivaId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, z.core.$strip>;
//# sourceMappingURL=board.d.ts.map