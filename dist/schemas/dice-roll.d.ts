import { z } from 'zod';
export declare const diceArithmeticModifierSchema: z.ZodObject<{
    kind: z.ZodEnum<{
        PER_DIE: "PER_DIE";
        SUCCESS: "SUCCESS";
        TOTAL: "TOTAL";
    }>;
    operator: z.ZodEnum<{
        "+": "+";
        "++": "++";
        "-": "-";
        "--": "--";
        "<<": "<<";
        ">>": ">>";
    }>;
    value: z.ZodNumber;
}, z.core.$strip>;
export declare const diceRollModifiersSchema: z.ZodObject<{
    exploding: z.ZodBoolean;
    noSort: z.ZodBoolean;
    arithmetic: z.ZodNullable<z.ZodObject<{
        kind: z.ZodEnum<{
            PER_DIE: "PER_DIE";
            SUCCESS: "SUCCESS";
            TOTAL: "TOTAL";
        }>;
        operator: z.ZodEnum<{
            "+": "+";
            "++": "++";
            "-": "-";
            "--": "--";
            "<<": "<<";
            ">>": ">>";
        }>;
        value: z.ZodNumber;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const diceRollDieResultSchema: z.ZodObject<{
    rolls: z.ZodArray<z.ZodNumber>;
    modifiedRolls: z.ZodArray<z.ZodNumber>;
    rawTotal: z.ZodNumber;
    modifiedTotal: z.ZodNumber;
    explosionLimitReached: z.ZodBoolean;
}, z.core.$strip>;
export declare const diceRollRepetitionResultSchema: z.ZodObject<{
    repetition: z.ZodNumber;
    dice: z.ZodArray<z.ZodObject<{
        rolls: z.ZodArray<z.ZodNumber>;
        modifiedRolls: z.ZodArray<z.ZodNumber>;
        rawTotal: z.ZodNumber;
        modifiedTotal: z.ZodNumber;
        explosionLimitReached: z.ZodBoolean;
    }, z.core.$strip>>;
    rawRolls: z.ZodArray<z.ZodNumber>;
    displayRolls: z.ZodArray<z.ZodNumber>;
    modifiedRolls: z.ZodArray<z.ZodNumber>;
    displayModifiedRolls: z.ZodArray<z.ZodNumber>;
    total: z.ZodNullable<z.ZodNumber>;
    successes: z.ZodNullable<z.ZodNumber>;
    explosionLimitReached: z.ZodBoolean;
}, z.core.$strip>;
export declare const diceRollResultSchema: z.ZodObject<{
    expression: z.ZodString;
    repetitionCount: z.ZodNumber;
    dicePerRepetition: z.ZodNumber;
    sides: z.ZodNumber;
    modifiers: z.ZodObject<{
        exploding: z.ZodBoolean;
        noSort: z.ZodBoolean;
        arithmetic: z.ZodNullable<z.ZodObject<{
            kind: z.ZodEnum<{
                PER_DIE: "PER_DIE";
                SUCCESS: "SUCCESS";
                TOTAL: "TOTAL";
            }>;
            operator: z.ZodEnum<{
                "+": "+";
                "++": "++";
                "-": "-";
                "--": "--";
                "<<": "<<";
                ">>": ">>";
            }>;
            value: z.ZodNumber;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    repetitions: z.ZodArray<z.ZodObject<{
        repetition: z.ZodNumber;
        dice: z.ZodArray<z.ZodObject<{
            rolls: z.ZodArray<z.ZodNumber>;
            modifiedRolls: z.ZodArray<z.ZodNumber>;
            rawTotal: z.ZodNumber;
            modifiedTotal: z.ZodNumber;
            explosionLimitReached: z.ZodBoolean;
        }, z.core.$strip>>;
        rawRolls: z.ZodArray<z.ZodNumber>;
        displayRolls: z.ZodArray<z.ZodNumber>;
        modifiedRolls: z.ZodArray<z.ZodNumber>;
        displayModifiedRolls: z.ZodArray<z.ZodNumber>;
        total: z.ZodNullable<z.ZodNumber>;
        successes: z.ZodNullable<z.ZodNumber>;
        explosionLimitReached: z.ZodBoolean;
    }, z.core.$strip>>;
}, z.core.$strip>;
//# sourceMappingURL=dice-roll.d.ts.map