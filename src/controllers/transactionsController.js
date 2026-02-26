// POST /createTransaction
import * as ValidationSchemas from "../validationSchemas/transactionSchema.js";
import { validate } from '../services/validationService.js';

export const createTransaction = async (req, res, next) => {
    try {
        const q = validate(ValidationSchemas.createTransactionBodySchema);
        // Data, která vracíme (přesně podle tvého JSONu)
        const responseData = {
            transactionId: "string",
            accountId: "string",
            counterpartyAccount: "string",
            amount: 0,
            currency: "string",
            direction: "income",
            status: "pending",
            vs: "string",
            ks: "string",
            ss: "string",
            note: "string",
            createdAt: "2026-02-11T22:02:30.599Z",
            postedAt: "2026-02-11T22:02:30.599Z"
        };

        // Tady to pošleme zpátky s kódem 201 (Created)
        res.status(201).json(responseData);

    } catch (error) {
        next(error);
    }
};



// POST /createInternalTransfer
export const createInternalTransfer = async (req, res, next) => {
    try {
        // Vracíme objekt přesně podle tvého zadání
        res.status(201).json({
            transactionId: "string",
            accountId: "string",
            counterpartyAccount: "string",
            amount: 0,
            currency: "string",
            direction: "income",
            status: "pending",
            vs: "string",
            ks: "string",
            ss: "string",
            note: "string",
            createdAt: "2026-02-11T22:31:57.419Z",
            postedAt: "2026-02-11T22:31:57.419Z"
        });
    } catch (error) {
        next(error);
    }
};


// GET /getTransactionById
export const getTransactionById = async (req, res, next) => {
    try {
        const { transactionId } = req.query;

        // if "null" nebo "0" => 404
        if (transactionId === "null" || transactionId === "0") {
            return res.status(404).json({
                code: "TRANSACTION_NOT_FOUND",
                message: "Transakce s tímto ID nebyla nalezena."
            });
        }

        // jinak vrácení úspěch
        res.status(200).json({
            transactionId: "string",
            accountId: "string",
            counterpartyAccount: "string",
            amount: 0,
            currency: "string",
            direction: "income",
            status: "pending",
            vs: "string",
            ks: "string",
            ss: "string",
            note: "string",
            createdAt: "2026-02-11T22:39:58.414Z",
            postedAt: "2026-02-11T22:39:58.414Z"
        });

    } catch (error) {
        next(error);
    }
};


// GET /listTransactions
export const listTransactions = async (req, res, next) => {
    try {
        const { page, pageSize } = req.query;

        // Simulujeme seznam s jednou transakcí, aby to vypadalo jako na obrázku
        res.status(200).json({
            items: [
                {
                    transactionId: "string",
                    accountId: "string",
                    counterpartyAccount: "string",
                    amount: 0,
                    currency: "string",
                    direction: "income",
                    status: "pending",
                    vs: "string",
                    ks: "string",
                    ss: "string",
                    note: "string",
                    createdAt: "2026-02-11T22:47:27.882Z",
                    postedAt: "2026-02-11T22:47:27.882Z"
                }
            ],
            total: 0,
            page: 0,
            pageSize: 0
        });
    } catch (error) {
        next(error);
    }
};