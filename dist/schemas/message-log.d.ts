import { z } from 'zod';
import { MessageType } from '../enums/message-type.js';
export declare const messageLogSchema: z.ZodObject<{
    id: z.ZodString;
    salaId: z.ZodString;
    autorId: z.ZodString;
    tipo: z.ZodEnum<typeof MessageType>;
    conteudo: z.ZodString;
    secreto: z.ZodBoolean;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    createdAt: z.ZodString;
}, z.core.$strip>;
//# sourceMappingURL=message-log.d.ts.map