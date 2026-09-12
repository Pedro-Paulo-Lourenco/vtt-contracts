import { z } from 'zod';
import { AssetType } from '../enums/asset-type.js';
import { AssetVisibility } from '../enums/asset-visibility.js';
export declare const assetSchema: z.ZodObject<{
    id: z.ZodString;
    usuarioId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    salaId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    nome: z.ZodString;
    tipo: z.ZodEnum<typeof AssetType>;
    url: z.ZodString;
    pastaId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    visibilidade: z.ZodEnum<typeof AssetVisibility>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, z.core.$strip>;
//# sourceMappingURL=asset.d.ts.map