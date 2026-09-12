import { z } from 'zod';

export const uuidSchema = z.string().uuid();
export const dateSchema = z.string().datetime();
export const jsonObjectSchema = z.record(z.string(), z.unknown());

export const viewPreferencesSchema = z.object({
  zoom: z.number().finite(),
  panX: z.number().finite(),
  panY: z.number().finite(),
  aba: z.string().max(80).optional(),
});

export const gridConfigSchema = z.object({
  enabled: z.boolean(),
  size: z.number().int().positive(),
  color: z.string().max(32).optional(),
  opacity: z.number().min(0).max(1).optional(),
});
