import type { UUID } from './common.js';
import type { UserStatus } from '../enums/user-status.js';

export interface User {
  id: UUID;
  nome: string;
  email: string;
  status: UserStatus;
  ultimoLogin?: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface AuthResponse {
  user: User;
}
