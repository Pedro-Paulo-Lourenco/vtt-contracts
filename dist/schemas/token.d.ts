import { z } from 'zod';
export declare const statusBarMapSchema: z.ZodRecord<z.ZodString, z.ZodObject<{
    current: z.ZodString;
    maximum: z.ZodString;
    color: z.ZodOptional<z.ZodString>;
}, z.core.$strip>>;
export declare const tokenSchema: z.ZodObject<{
    id: z.ZodString;
    cenaId: z.ZodString;
    assetOrigemId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    characterSheetId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    nome: z.ZodString;
    x: z.ZodNumber;
    y: z.ZodNumber;
    escala: z.ZodNumber;
    statusBarMap: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodObject<{
        current: z.ZodString;
        maximum: z.ZodString;
        color: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>>;
    customData: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, z.core.$strip>;
//# sourceMappingURL=token.d.ts.map