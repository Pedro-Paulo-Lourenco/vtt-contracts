import { z } from 'zod';
export declare const sheetFieldValueSchema: z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodObject<{
    atual: z.ZodNumber;
    maximo: z.ZodNumber;
}, z.core.$strip>, z.ZodNull]>;
export declare const templateFieldSchema: z.ZodObject<{
    id: z.ZodString;
    label: z.ZodString;
    type: z.ZodEnum<{
        formula: "formula";
        number: "number";
        resource: "resource";
        text: "text";
    }>;
    defaultValue: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodObject<{
        atual: z.ZodNumber;
        maximo: z.ZodNumber;
    }, z.core.$strip>, z.ZodNull]>>;
    formula: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    baseAttributeId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    required: z.ZodOptional<z.ZodBoolean>;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    min: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    max: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
}, z.core.$strip>;
export declare const sheetTemplateSchema: z.ZodObject<{
    cabecalho: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        type: z.ZodEnum<{
            formula: "formula";
            number: "number";
            resource: "resource";
            text: "text";
        }>;
        defaultValue: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodObject<{
            atual: z.ZodNumber;
            maximo: z.ZodNumber;
        }, z.core.$strip>, z.ZodNull]>>;
        formula: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        baseAttributeId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        required: z.ZodOptional<z.ZodBoolean>;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        min: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        max: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$strip>>;
    atributos: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        type: z.ZodEnum<{
            formula: "formula";
            number: "number";
            resource: "resource";
            text: "text";
        }>;
        defaultValue: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodObject<{
            atual: z.ZodNumber;
            maximo: z.ZodNumber;
        }, z.core.$strip>, z.ZodNull]>>;
        formula: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        baseAttributeId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        required: z.ZodOptional<z.ZodBoolean>;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        min: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        max: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$strip>>;
    recursos: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        type: z.ZodEnum<{
            formula: "formula";
            number: "number";
            resource: "resource";
            text: "text";
        }>;
        defaultValue: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodObject<{
            atual: z.ZodNumber;
            maximo: z.ZodNumber;
        }, z.core.$strip>, z.ZodNull]>>;
        formula: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        baseAttributeId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        required: z.ZodOptional<z.ZodBoolean>;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        min: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        max: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$strip>>;
    pericias: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        type: z.ZodEnum<{
            formula: "formula";
            number: "number";
            resource: "resource";
            text: "text";
        }>;
        defaultValue: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodObject<{
            atual: z.ZodNumber;
            maximo: z.ZodNumber;
        }, z.core.$strip>, z.ZodNull]>>;
        formula: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        baseAttributeId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        required: z.ZodOptional<z.ZodBoolean>;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        min: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        max: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const characterSheetDataSchema: z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodObject<{
    atual: z.ZodNumber;
    maximo: z.ZodNumber;
}, z.core.$strip>, z.ZodNull]>>;
export type TemplateFieldInput = z.infer<typeof templateFieldSchema>;
export type SheetTemplateInput = z.infer<typeof sheetTemplateSchema>;
export type CharacterSheetDataInput = z.infer<typeof characterSheetDataSchema>;
//# sourceMappingURL=sheetValidator.d.ts.map