import { z } from 'zod';

// Centralizovaná definice validačních schémat (použij pro různé controllery)
export const listAccountsQuerySchema = z.object({
  userId: z.string().optional(),
  page: z.coerce.number().int().min(1).default(1),
  pageSize: z.coerce.number().int().min(1).max(200).default(50)
});

export const accountIdQuerySchema = z.object({
  accountId: z.string()
});

export const getBalanceQuerySchema = accountIdQuerySchema;

export const getHistoryQuerySchema = z.object({
  accountId: z.string(),
  page: z.coerce.number().int().min(1).default(1),
  pageSize: z.coerce.number().int().min(1).max(200).default(50)
});

export const createAccountBodySchema = z.object({
  userId: z.string(),
  institutionId: z.string(),
  currency: z.string(),
  name: z.string().optional()
});

export const updateAccountBodySchema = z.object({
  accountId: z.string(),
  name: z.string().optional(),
  note: z.string().optional(),
  isActive: z.boolean().optional()
});

export const closeAccountBodySchema = z.object({
  accountId: z.string(),
  // closeDate lze posílat jako ISO string (volitelně)
  // TODO LA tady doporučuji použít přímo z.iso.datetime();
  closeDate: z.string().optional()
});


import { z } from 'zod';


// POST /createTransaction
export const createTransactionBodySchema = z.object({
  fromAccountId: "string",
  toAccountNumber: "string",
  amount: 0,
  currency: "CZK",
  vs: "string",
  ks: "string",
  ss: "string",
  note: "string",
  scheduleAt: "2026-02-11T22:02:30.593Z"
});


// POST /createInternalTransfer
export const createInternalTransferBodySchema = z.object({
  fromAccountId: "string",
  toAccountId: "string",
  amount: 0,
  note: "string"
});


// GET /getTransactionById
// (parametry v URL)
export const getTransactionByIdQuerySchema = z.object({
  transactionId: z.string({ required_error: "transactionId povinný údaj" })
});


// GET /listTransactions
export const listTransactionsQuerySchema = z.object({
  accountId: z.string().optional(),
  institutionId: z.string().optional(),
  userId: z.string().optional(),
  dateFrom: z.string().optional(),
  dateTo: z.string().optional(),
  page: z.coerce.number().int().min(1).default(1),
  pageSize: z.coerce.number().int().min(1).max(200).default(50)
});