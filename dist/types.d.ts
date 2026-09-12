export type UUID = string;
export type JsonPrimitive = string | number | boolean | null;
export type JsonValue = JsonPrimitive | JsonObject | JsonValue[];
export type JsonObject = {
    [key: string]: JsonValue;
};
export interface User {
    id: UUID;
    nome: string;
    email: string;
    status: UserStatus;
    ultimoLogin?: string | null;
    createdAt: string;
    updatedAt: string;
}
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
export interface Board {
    id: UUID;
    salaId: UUID;
    nome: string;
    cenaAtivaId?: UUID | null;
    createdAt: string;
    updatedAt: string;
}
export interface Scene {
    id: UUID;
    tabuleiroId: UUID;
    nome: string;
    backgroundUrl?: string | null;
    gridConfig: GridConfig;
    visivel: boolean;
    createdAt: string;
    updatedAt: string;
}
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
export interface Asset {
    id: UUID;
    usuarioId?: UUID | null;
    salaId?: UUID | null;
    nome: string;
    tipo: AssetType;
    url: string;
    pastaId?: UUID | null;
    visibilidade: AssetVisibility;
    metadata?: JsonObject;
    createdAt: string;
    updatedAt: string;
}
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
export interface AuthResponse {
    user: User;
}
export interface ApiError {
    code: string;
    message: string;
    correlationId?: string;
    details?: JsonObject;
}
export interface ApiSuccess<T> {
    data: T;
    correlationId?: string;
}
export interface ViewPreferences {
    zoom: number;
    panX: number;
    panY: number;
    aba?: string;
}
export interface GridConfig {
    enabled: boolean;
    size: number;
    color?: string;
    opacity?: number;
}
export interface StatusBarMap {
    [barName: string]: {
        current: string;
        maximum: string;
        color?: string;
    };
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
export declare enum UserStatus {
    PENDENTE = "PENDENTE",
    ATIVO = "ATIVO",
    BLOQUEADO = "BLOQUEADO"
}
export declare enum RoomStatus {
    ATIVA = "ATIVA",
    PAUSADA = "PAUSADA",
    ENCERRADA = "ENCERRADA"
}
export declare enum ParticipantRole {
    MESTRE = "MESTRE",
    JOGADOR = "JOGADOR"
}
export declare enum AssetType {
    TEMPLATE_FICHA = "TEMPLATE_FICHA",
    NPC_PRESET = "NPC_PRESET",
    MAPA = "MAPA",
    TOKEN = "TOKEN"
}
export declare enum AssetVisibility {
    PRIVADO = "PRIVADO",
    SALA = "SALA",
    ATRIBUIDO = "ATRIBUIDO",
    GLOBAL = "GLOBAL"
}
export declare enum MessageType {
    CHAT = "CHAT",
    ROLAGEM = "ROLAGEM",
    SISTEMA = "SISTEMA"
}
export declare enum SheetFieldType {
    TEXT = "TEXT",
    NUMBER = "NUMBER",
    BOOLEAN = "BOOLEAN",
    RESOURCE = "RESOURCE",
    FORMULA = "FORMULA"
}
//# sourceMappingURL=types.d.ts.map