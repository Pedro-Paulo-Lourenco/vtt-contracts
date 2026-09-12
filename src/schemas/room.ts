import { z } from 'zod';
import { ParticipantRole } from '../enums/participant-role.js';
import { RoomStatus } from '../enums/room-status.js';
import { dateSchema, uuidSchema, viewPreferencesSchema } from './common.js';

export const roomSchema = z.object({
  id: uuidSchema,
  nome: z.string().trim().min(1).max(120),
  codigoConvite: z.string().min(6).max(64),
  criadorId: uuidSchema,
  status: z.enum(RoomStatus),
  createdAt: dateSchema,
  updatedAt: dateSchema,
});

export const participantSchema = z.object({
  id: uuidSchema,
  salaId: uuidSchema,
  usuarioId: uuidSchema,
  papel: z.enum(ParticipantRole),
  ativo: z.boolean(),
  preferenciasView: viewPreferencesSchema,
  joinedAt: dateSchema,
});

export type RoomInput = z.infer<typeof roomSchema>;
export type ParticipantInput = z.infer<typeof participantSchema>;
