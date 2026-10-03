import { z } from 'zod';
import { ParticipantRole } from '../enums/participant-role.js';
import { RoomStatus } from '../enums/room-status.js';
export declare const createRoomRequestSchema: z.ZodObject<{
    nome: z.ZodString;
}, z.core.$strict>;
export declare const joinRoomRequestSchema: z.ZodObject<{
    codigoConvite: z.ZodString;
}, z.core.$strict>;
export declare const roomIdSchema: z.ZodString;
export declare const roomSchema: z.ZodObject<{
    id: z.ZodString;
    nome: z.ZodString;
    codigoConvite: z.ZodString;
    criadorId: z.ZodString;
    status: z.ZodEnum<typeof RoomStatus>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, z.core.$strip>;
export declare const participantSchema: z.ZodObject<{
    id: z.ZodString;
    salaId: z.ZodString;
    usuarioId: z.ZodString;
    papel: z.ZodEnum<typeof ParticipantRole>;
    ativo: z.ZodBoolean;
    preferenciasView: z.ZodObject<{
        zoom: z.ZodNumber;
        panX: z.ZodNumber;
        panY: z.ZodNumber;
        aba: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
    joinedAt: z.ZodString;
}, z.core.$strip>;
export type CreateRoomRequest = z.infer<typeof createRoomRequestSchema>;
export type JoinRoomRequest = z.infer<typeof joinRoomRequestSchema>;
export type RoomInput = z.infer<typeof roomSchema>;
export type ParticipantInput = z.infer<typeof participantSchema>;
//# sourceMappingURL=room.d.ts.map