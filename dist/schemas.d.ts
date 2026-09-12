import { z } from 'zod';
export declare const uuidSchema: z.ZodString;
export declare const jsonObjectSchema: z.ZodRecord<z.ZodString, z.ZodUnknown>;
export declare const userSchema: z.ZodObject<{
    id: z.ZodString;
    nome: z.ZodString;
    email: z.ZodString;
    status: z.ZodEnum<{
        ATIVO: "ATIVO";
        BLOQUEADO: "BLOQUEADO";
        PENDENTE: "PENDENTE";
    }>;
    ultimoLogin: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, z.core.$strip>;
export declare const roomSchema: z.ZodObject<{
    id: z.ZodString;
    nome: z.ZodString;
    codigoConvite: z.ZodString;
    criadorId: z.ZodString;
    status: z.ZodEnum<{
        ATIVA: "ATIVA";
        ENCERRADA: "ENCERRADA";
        PAUSADA: "PAUSADA";
    }>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, z.core.$strip>;
export declare const participantSchema: z.ZodObject<{
    id: z.ZodString;
    salaId: z.ZodString;
    usuarioId: z.ZodString;
    papel: z.ZodEnum<{
        JOGADOR: "JOGADOR";
        MESTRE: "MESTRE";
    }>;
    ativo: z.ZodBoolean;
    preferenciasView: z.ZodObject<{
        zoom: z.ZodNumber;
        panX: z.ZodNumber;
        panY: z.ZodNumber;
        aba: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
    joinedAt: z.ZodString;
}, z.core.$strip>;
export declare const boardSchema: z.ZodObject<{
    id: z.ZodString;
    salaId: z.ZodString;
    nome: z.ZodString;
    cenaAtivaId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, z.core.$strip>;
export declare const sceneSchema: z.ZodObject<{
    id: z.ZodString;
    tabuleiroId: z.ZodString;
    nome: z.ZodString;
    backgroundUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    gridConfig: z.ZodObject<{
        enabled: z.ZodBoolean;
        size: z.ZodNumber;
        color: z.ZodOptional<z.ZodString>;
        opacity: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>;
    visivel: z.ZodBoolean;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, z.core.$strip>;
export declare const tokenSchema: z.ZodObject<{
    id: z.ZodString;
    cenaId: z.ZodString;
    assetOrigemId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    characterSheetId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    nome: z.ZodString;
    x: z.ZodNumber;
    y: z.ZodNumber;
    escala: z.ZodNumber;
    statusBarMap: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodObject<{
        current: z.ZodString;
        maximum: z.ZodString;
        color: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>>;
    customData: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, z.core.$strip>;
export declare const assetSchema: z.ZodObject<{
    id: z.ZodString;
    usuarioId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    salaId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    nome: z.ZodString;
    tipo: z.ZodEnum<{
        MAPA: "MAPA";
        NPC_PRESET: "NPC_PRESET";
        TEMPLATE_FICHA: "TEMPLATE_FICHA";
        TOKEN: "TOKEN";
    }>;
    url: z.ZodString;
    pastaId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    visibilidade: z.ZodEnum<{
        ATRIBUIDO: "ATRIBUIDO";
        GLOBAL: "GLOBAL";
        PRIVADO: "PRIVADO";
        SALA: "SALA";
    }>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, z.core.$strip>;
export declare const sheetFieldsSchema: z.ZodObject<{
    cabecalho: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        type: z.ZodEnum<{
            BOOLEAN: "BOOLEAN";
            FORMULA: "FORMULA";
            NUMBER: "NUMBER";
            RESOURCE: "RESOURCE";
            TEXT: "TEXT";
        }>;
        formula: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        required: z.ZodOptional<z.ZodBoolean>;
        attributeId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>;
    atributos: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        type: z.ZodEnum<{
            BOOLEAN: "BOOLEAN";
            FORMULA: "FORMULA";
            NUMBER: "NUMBER";
            RESOURCE: "RESOURCE";
            TEXT: "TEXT";
        }>;
        formula: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        required: z.ZodOptional<z.ZodBoolean>;
        attributeId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>;
    recursos: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        type: z.ZodEnum<{
            BOOLEAN: "BOOLEAN";
            FORMULA: "FORMULA";
            NUMBER: "NUMBER";
            RESOURCE: "RESOURCE";
            TEXT: "TEXT";
        }>;
        formula: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        required: z.ZodOptional<z.ZodBoolean>;
        attributeId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>;
    pericias: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        type: z.ZodEnum<{
            BOOLEAN: "BOOLEAN";
            FORMULA: "FORMULA";
            NUMBER: "NUMBER";
            RESOURCE: "RESOURCE";
            TEXT: "TEXT";
        }>;
        formula: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        required: z.ZodOptional<z.ZodBoolean>;
        attributeId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const sheetTemplateSchema: z.ZodObject<{
    id: z.ZodString;
    usuarioId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    salaId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    nome: z.ZodString;
    sistema: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    camposSchema: z.ZodObject<{
        cabecalho: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            label: z.ZodString;
            type: z.ZodEnum<{
                BOOLEAN: "BOOLEAN";
                FORMULA: "FORMULA";
                NUMBER: "NUMBER";
                RESOURCE: "RESOURCE";
                TEXT: "TEXT";
            }>;
            formula: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            required: z.ZodOptional<z.ZodBoolean>;
            attributeId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>;
        atributos: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            label: z.ZodString;
            type: z.ZodEnum<{
                BOOLEAN: "BOOLEAN";
                FORMULA: "FORMULA";
                NUMBER: "NUMBER";
                RESOURCE: "RESOURCE";
                TEXT: "TEXT";
            }>;
            formula: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            required: z.ZodOptional<z.ZodBoolean>;
            attributeId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>;
        recursos: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            label: z.ZodString;
            type: z.ZodEnum<{
                BOOLEAN: "BOOLEAN";
                FORMULA: "FORMULA";
                NUMBER: "NUMBER";
                RESOURCE: "RESOURCE";
                TEXT: "TEXT";
            }>;
            formula: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            required: z.ZodOptional<z.ZodBoolean>;
            attributeId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>;
        pericias: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            label: z.ZodString;
            type: z.ZodEnum<{
                BOOLEAN: "BOOLEAN";
                FORMULA: "FORMULA";
                NUMBER: "NUMBER";
                RESOURCE: "RESOURCE";
                TEXT: "TEXT";
            }>;
            formula: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            required: z.ZodOptional<z.ZodBoolean>;
            attributeId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, z.core.$strip>;
export declare const characterSheetSchema: z.ZodObject<{
    id: z.ZodString;
    templateId: z.ZodString;
    usuarioId: z.ZodString;
    salaId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    nome: z.ZodString;
    dadosPreenchidos: z.ZodRecord<z.ZodString, z.ZodUnknown>;
    versao: z.ZodNumber;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, z.core.$strip>;
export declare const messageLogSchema: z.ZodObject<{
    id: z.ZodString;
    salaId: z.ZodString;
    autorId: z.ZodString;
    tipo: z.ZodEnum<{
        CHAT: "CHAT";
        ROLAGEM: "ROLAGEM";
        SISTEMA: "SISTEMA";
    }>;
    conteudo: z.ZodString;
    secreto: z.ZodBoolean;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    createdAt: z.ZodString;
}, z.core.$strip>;
export declare const apiErrorSchema: z.ZodObject<{
    code: z.ZodString;
    message: z.ZodString;
    correlationId: z.ZodOptional<z.ZodString>;
    details: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, z.core.$strip>;
export type UserInput = z.infer<typeof userSchema>;
export type RoomInput = z.infer<typeof roomSchema>;
export type ParticipantInput = z.infer<typeof participantSchema>;
export type SheetTemplateInput = z.infer<typeof sheetTemplateSchema>;
//# sourceMappingURL=schemas.d.ts.map