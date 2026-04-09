import { z } from 'zod';

// Musí tu být EXPORT, aby to ostatní soubory viděly
export const triggerEventSchema = z.object({
    type: z.string().min(1, "Typ události je povinný"),
    params: z.record(z.any()).optional().default({}),
    force: z.boolean().optional().default(false)
});


export const previewNextWindowSchema = z.object({
    institutionId: z.string().min(1, "institutionId je povinné"),
    accountId: z.string().min(1, "accountId je povinné"),
    windowDays: z.number().int().positive().default(30)
});