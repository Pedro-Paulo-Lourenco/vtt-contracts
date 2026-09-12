import { z } from 'zod';
export declare const sceneSchema: z.ZodObject<{
    id: z.ZodString;
    tabuleiroId: z.ZodString;
    nome: z.ZodString;
    backgroundUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    gridConfig: z.ZodObject<{
        enabled: z.ZodBoolean;
        size: z.ZodNumber;
        color: z.ZodOptional<z.ZodString>;
        opacity: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>;
    visivel: z.ZodBoolean;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, z.core.$strip>;
//# sourceMappingURL=scene.d.ts.map