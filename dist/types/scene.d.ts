import type { UUID, GridConfig } from './common.js';
export interface Scene {
    id: UUID;
    tabuleiroId: UUID;
    nome: string;
    backgroundUrl?: string | null;
    gridConfig: GridConfig;
    visivel: boolean;
    createdAt: string;
    updatedAt: string;
}
//# sourceMappingURL=scene.d.ts.map