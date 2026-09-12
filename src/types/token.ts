import type { JsonObject, UUID } from './common.js';

export interface Token {
  id: UUID;
  cenaId: UUID;
  assetOrigemId?: UUID | null;
  characterSheetId?: UUID | null;
  nome: string;
  x: number;
  y: number;
  escala: number;
  statusBarMap?: StatusBarMap | null;
  customData?: JsonObject;
}

export interface StatusBarMap {
  [barName: string]: {
    current: string;
    maximum: string;
    color?: string;
  };
}
