import type { JsonObject, UUID } from './common.js';
import type { MessageType } from '../enums/message-type.js';

export interface MessageLog {
  id: UUID;
  salaId: UUID;
  autorId: UUID;
  tipo: MessageType;
  conteudo: string;
  secreto: boolean;
  metadata?: JsonObject;
  createdAt: string;
}
