import * as schemas from '../validationSchemas/transactionSchema.js';

// [POST] createTransaction
export const createTransaction = async (req, res, next) => {
    try {
        // Použijeme safeParse, aby nám to nesestřelilo server
        const validation = schemas.createTransactionBodySchema.safeParse(req.body);

        if (!validation.success) {
            return res.status(400).json({
                status: "error",
                message: "Neplatná data transakce",
                errors: validation.error.format() // Vypíše přesně, co je špatně
            });
        }

        const data = validation.data;

        res.status(201).json({
            status: "success",
            message: "Transakce vytvořena",
            transactionId: "TXN-" + Date.now(),
            receivedData: data
        });
    } catch (error) {
        next(error);
    }
};

// [POST] createInternalTransfer
export const createInternalTransfer = async (req, res, next) => {
    try {
        const validation = schemas.createInternalTransferBodySchema.safeParse(req.body);

        if (!validation.success) {
            return res.status(400).json({ status: "error", errors: validation.error.format() });
        }

        const { fromAccountId, toAccountId, amount, currency } = validation.data;

        // Tuhle logiku si necháme, tu Zod sám nepozná (že jsou stejné)
        if (fromAccountId === toAccountId) {
            return res.status(400).json({
                status: "error",
                message: "Nelze poslat peníze na stejný účet."
            });
        }

        res.status(201).json({
            status: "success",
            message: "Interní převod byl úspěšně zadán",
            data: { fromAccountId, toAccountId, amount, currency: currency || 'CZK' }
        });
    } catch (error) {
        next(error);
    }
};

// [GET] getTransactionById
export const getTransactionById = async (req, res, next) => {
    try {
        // U GETu validujeme req.query
        const validation = schemas.getTransactionByIdSchema.safeParse(req.query);

        if (!validation.success) {
            return res.status(400).json({ status: "error", errors: validation.error.format() });
        }

        const { transactionId } = validation.data;

        res.status(200).json({
            transactionId: transactionId,
            accountId: "ACC-999",
            amount: 1500,
            currency: "CZK",
            status: "pending",
            createdAt: new Date().toISOString()
        });
    } catch (error) {
        next(error);
    }
};

// [GET] listTransactions
export const listTransactions = async (req, res, next) => {
    try {
        const validation = schemas.listTransactionsSchema.safeParse(req.query);

        const { accountId, page, pageSize } = validation.success
            ? validation.data
            : { page: 1, pageSize: 50 };

        res.status(200).json({
            items: [
                {
                    transactionId: "TXN-001",
                    accountId: accountId || "ACC-DEFAULT",
                    amount: 500,
                    currency: "CZK",
                    direction: "outcome",
                    status: "completed",
                    createdAt: "2026-03-27T21:31:58.262Z"
                }
            ],
            total: 1,
            page: Number(page),
            pageSize: Number(pageSize)
        });
    } catch (error) {
        next(error);
    }
};

// [POST] refundTransaction
export const refundTransaction = async (req, res, next) => {
    try {

        const validation = schemas.refundTransactionSchema.safeParse(req.body);

        if (!validation.success) {
            return res.status(400).json({ status: "error", errors: validation.error.format() });
        }

        const { transactionId, note } = validation.data;

        res.status(200).json({
            status: "success",
            message: "Refund úspěšně zpracován",
            transactionId,
            note: note || "Reversal"
        });
    } catch (error) {
        next(error);
    }
};