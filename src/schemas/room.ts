import { z } from 'zod';
import { ParticipantRole } from '../enums/participant-role.js';
import { RoomStatus } from '../enums/room-status.js';
import { dateSchema, uuidSchema, viewPreferencesSchema } from './common.js';

export const createRoomRequestSchema = z.strictObject({
  nome: z.string().trim().min(1).max(120),
});

export const joinRoomRequestSchema = z.strictObject({
  codigoConvite: z.string().min(6).max(64),
});

export const roomIdSchema = uuidSchema;

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

export type CreateRoomRequest = z.infer<typeof createRoomRequestSchema>;
export type JoinRoomRequest = z.infer<typeof joinRoomRequestSchema>;
export type RoomInput = z.infer<typeof roomSchema>;
export type ParticipantInput = z.infer<typeof participantSchema>;
