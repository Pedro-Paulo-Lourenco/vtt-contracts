import { z } from 'zod';
import { AssetType } from '../enums/asset-type.js';
import { AssetVisibility } from '../enums/asset-visibility.js';
import { dateSchema, jsonObjectSchema, uuidSchema } from './common.js';
export const assetSchema = z.object({
    id: uuidSchema,
    usuarioId: uuidSchema.nullable().optional(),
    salaId: uuidSchema.nullable().optional(),
    nome: z.string().trim().min(1).max(160),
    tipo: z.enum(AssetType),
    url: z.string().url(),
    pastaId: uuidSchema.nullable().optional(),
    visibilidade: z.enum(AssetVisibility),
    metadata: jsonObjectSchema.optional(),
    createdAt: dateSchema,
    updatedAt: dateSchema,
});
//# sourceMappingURL=asset.js.map