import type { UUID, ViewPreferences } from './common.js';
import type { ParticipantRole } from '../enums/participant-role.js';
import type { RoomStatus } from '../enums/room-status.js';

export interface Room {
  id: UUID;
  nome: string;
  codigoConvite: string;
  criadorId: UUID;
  status: RoomStatus;
  createdAt: string;
  updatedAt: string;
}

export interface Participant {
  id: UUID;
  salaId: UUID;
  usuarioId: UUID;
  papel: ParticipantRole;
  ativo: boolean;
  preferenciasView: ViewPreferences;
  joinedAt: string;
}
