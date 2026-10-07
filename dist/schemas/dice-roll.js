import { z } from 'zod';
const safeIntegerSchema = z.number().int().safe();
export const diceArithmeticModifierSchema = z.object({
    kind: z.enum(['TOTAL', 'PER_DIE', 'SUCCESS']),
    operator: z.enum(['+', '-', '++', '--', '>>', '<<']),
    value: safeIntegerSchema,
});
export const diceRollModifiersSchema = z.object({
    exploding: z.boolean(),
    noSort: z.boolean(),
    arithmetic: diceArithmeticModifierSchema.nullable(),
});
export const diceRollDieResultSchema = z.object({
    rolls: z.array(safeIntegerSchema).min(1).max(101),
    modifiedRolls: z.array(safeIntegerSchema).min(1).max(101),
    rawTotal: safeIntegerSchema,
    modifiedTotal: safeIntegerSchema,
    explosionLimitReached: z.boolean(),
});
export const diceRollRepetitionResultSchema = z.object({
    repetition: z.number().int().min(1).max(100),
    dice: z.array(diceRollDieResultSchema).min(1).max(100),
    rawRolls: z.array(safeIntegerSchema).min(1).max(10_100),
    displayRolls: z.array(safeIntegerSchema).min(1).max(10_100),
    modifiedRolls: z.array(safeIntegerSchema).min(1).max(10_100),
    displayModifiedRolls: z.array(safeIntegerSchema).min(1).max(10_100),
    total: safeIntegerSchema.nullable(),
    successes: safeIntegerSchema.nullable(),
    explosionLimitReached: z.boolean(),
});
export const diceRollResultSchema = z.object({
    expression: z.string().min(1).max(1000),
    repetitionCount: z.number().int().min(1).max(100),
    dicePerRepetition: z.number().int().min(1).max(100),
    sides: z.number().int().min(2).max(1_000_000),
    modifiers: diceRollModifiersSchema,
    repetitions: z.array(diceRollRepetitionResultSchema).min(1).max(100),
});
//# sourceMappingURL=dice-roll.js.map