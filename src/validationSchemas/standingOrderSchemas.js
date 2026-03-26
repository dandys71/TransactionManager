import { z } from 'zod';

export const standingOrderID = z.object({
    standingOrderId: z.string(),
});

export const createStandingOrder = z.object({
    accountId: z.string(),
    templateId: z.string().optional(),
    customCron: z.string(),
    dayOfMonth: z.bigint().optional(),
    amount: z.number(),
    currency: z.string(),
    nextRunAt: z.string(),
    active: z.boolean(),
})

export const updateStandingOrder = z.object({
    standingOrderId: z.string(),

    accountId: z.string(),
    templateId: z.string().optional(),
    customCron: z.string(),
    dayOfMonth: z.bigint().optional(),
    amount: z.number(),
    currency: z.string(),
    nextRunAt: z.string(),
    active: z.boolean(),
})

export const deleteStandingOrder = z.object( {
    standingOrderId: z.string()
});