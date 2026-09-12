import type { JsonObject, UUID } from './common.js';
import type { AssetType } from '../enums/asset-type.js';
import type { AssetVisibility } from '../enums/asset-visibility.js';
export interface Asset {
    id: UUID;
    usuarioId?: UUID | null;
    salaId?: UUID | null;
    nome: string;
    tipo: AssetType;
    url: string;
    pastaId?: UUID | null;
    visibilidade: AssetVisibility;
    metadata?: JsonObject;
    createdAt: string;
    updatedAt: string;
}
//# sourceMappingURL=asset.d.ts.map