import type { UUID } from './common.js';
export interface Board {
    id: UUID;
    salaId: UUID;
    nome: string;
    cenaAtivaId?: UUID | null;
    createdAt: string;
    updatedAt: string;
}
//# sourceMappingURL=board.d.ts.map