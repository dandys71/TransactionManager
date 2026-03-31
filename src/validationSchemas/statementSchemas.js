import { z } from 'zod';

export const generateAccountStatement = z.object({
    accountId: z.string(),
    dateFrom: z.string().optional(),
    dateTo: z.string().optional(),
    format: z.enum(["PDF", "XLS", "CSV"])
});

export const getStatement = z.object({
    statementId: z.string()
});