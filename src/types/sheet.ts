import type { JsonObject, UUID } from './common.js';
import type { SheetFieldType } from '../enums/sheet-field-type.js';

export interface SheetTemplate {
  id: UUID;
  usuarioId?: UUID | null;
  salaId?: UUID | null;
  nome: string;
  sistema?: string | null;
  camposSchema: SheetFieldsSchema;
  createdAt: string;
  updatedAt: string;
}

export interface CharacterSheet {
  id: UUID;
  templateId: UUID;
  usuarioId: UUID;
  salaId?: UUID | null;
  nome: string;
  dadosPreenchidos: JsonObject;
  versao: number;
  createdAt: string;
  updatedAt: string;
}

export interface SheetFieldsSchema {
  cabecalho: SheetField[];
  atributos: SheetField[];
  recursos: SheetField[];
  pericias: SheetField[];
}

export interface SheetField {
  id: string;
  label: string;
  type: SheetFieldType;
  formula?: string | null;
  required?: boolean;
  attributeId?: string | null;
}
