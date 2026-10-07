export type DiceArithmeticModifier = {
  kind: 'TOTAL' | 'PER_DIE' | 'SUCCESS';
  operator: '+' | '-' | '++' | '--' | '>>' | '<<';
  value: number;
};

export interface DiceRollModifiers {
  exploding: boolean;
  noSort: boolean;
  arithmetic: DiceArithmeticModifier | null;
}

export interface DiceRollDieResult {
  rolls: number[];
  modifiedRolls: number[];
  rawTotal: number;
  modifiedTotal: number;
  explosionLimitReached: boolean;
}

export interface DiceRollRepetitionResult {
  repetition: number;
  dice: DiceRollDieResult[];
  rawRolls: number[];
  displayRolls: number[];
  modifiedRolls: number[];
  displayModifiedRolls: number[];
  total: number | null;
  successes: number | null;
  explosionLimitReached: boolean;
}

export interface DiceRollResult {
  expression: string;
  repetitionCount: number;
  dicePerRepetition: number;
  sides: number;
  modifiers: DiceRollModifiers;
  repetitions: DiceRollRepetitionResult[];
}
