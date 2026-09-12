import { z } from 'zod';
export declare const uuidSchema: z.ZodString;
export declare const dateSchema: z.ZodString;
export declare const jsonObjectSchema: z.ZodRecord<z.ZodString, z.ZodUnknown>;
export declare const viewPreferencesSchema: z.ZodObject<{
    zoom: z.ZodNumber;
    panX: z.ZodNumber;
    panY: z.ZodNumber;
    aba: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const gridConfigSchema: z.ZodObject<{
    enabled: z.ZodBoolean;
    size: z.ZodNumber;
    color: z.ZodOptional<z.ZodString>;
    opacity: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
//# sourceMappingURL=common.d.ts.map