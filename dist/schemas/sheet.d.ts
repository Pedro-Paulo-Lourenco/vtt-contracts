import { z } from 'zod';
import { SheetFieldType } from '../enums/sheet-field-type.js';
export declare const sheetFieldSchema: z.ZodObject<{
    id: z.ZodString;
    label: z.ZodString;
    type: z.ZodEnum<typeof SheetFieldType>;
    formula: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    required: z.ZodOptional<z.ZodBoolean>;
    attributeId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export declare const sheetFieldsSchema: z.ZodObject<{
    cabecalho: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        type: z.ZodEnum<typeof SheetFieldType>;
        formula: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        required: z.ZodOptional<z.ZodBoolean>;
        attributeId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>;
    atributos: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        type: z.ZodEnum<typeof SheetFieldType>;
        formula: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        required: z.ZodOptional<z.ZodBoolean>;
        attributeId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>;
    recursos: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        type: z.ZodEnum<typeof SheetFieldType>;
        formula: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        required: z.ZodOptional<z.ZodBoolean>;
        attributeId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>;
    pericias: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        type: z.ZodEnum<typeof SheetFieldType>;
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
            type: z.ZodEnum<typeof SheetFieldType>;
            formula: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            required: z.ZodOptional<z.ZodBoolean>;
            attributeId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>;
        atributos: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            label: z.ZodString;
            type: z.ZodEnum<typeof SheetFieldType>;
            formula: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            required: z.ZodOptional<z.ZodBoolean>;
            attributeId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>;
        recursos: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            label: z.ZodString;
            type: z.ZodEnum<typeof SheetFieldType>;
            formula: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            required: z.ZodOptional<z.ZodBoolean>;
            attributeId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>;
        pericias: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            label: z.ZodString;
            type: z.ZodEnum<typeof SheetFieldType>;
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
export type SheetTemplateInput = z.infer<typeof sheetTemplateSchema>;
//# sourceMappingURL=sheet.d.ts.map