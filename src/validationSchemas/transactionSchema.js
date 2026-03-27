import { z } from 'zod';

export const createTransactionBodySchema = z.object({
    fromAccountId: z.string(),
    toAccountNumber: z.string(),
    amount: z.number().positive(),
    currency: z.string().length(3).default('CZK'),
    vs: z.string().optional(),
    ks: z.string().optional(),
    ss: z.string().optional(),
    note: z.string().optional()
});

export const createInternalTransferBodySchema = z.object({
    fromAccountId: z.string(),
    toAccountId: z.string(), // Pozor, tady je "toAccountId", ne "AccountNumber"
    amount: z.number().positive(),
    currency: z.string().length(3).default('CZK'),
    note: z.string().optional()
});

export const getTransactionByIdSchema = z.object({
    transactionId: z.string().min(1, "ID transakce je povinné")
});

// Jen jako ukázka v src/validationSchemas/transactionSchema.js
export const listTransactionsSchema = z.object({
    accountId: z.string().optional(),
    page: z.number().default(1),
    pageSize: z.number().default(50)
});