import { z } from 'zod';

export const standingOrderID = z.object({
    standingOrderId: z.string(),
});

export const createStandingOrder = z.object({
    standingOrderId: z.string(),
    accountId: z.string(),
    templateId: z.string().optional(),
    customCron: z.string(),
})