// src/controllers/savingAccountsController.js

import {
    getAllSavingAccounts,
    getSavingAccountById,
    createSavingAccount,
    updateSavingAccountById,
    closeSavingAccountById,
    getBalance,
    getHistory
} from "../services/savingAccounts.js";

import {validate} from "../services/validationService.js";
import {
    createSavingAccountSchema,
    updateSavingAccountSchema,
    closeSavingAccountSchema,
    getBalanceQuerySchema,
    getHistoryQuerySchema
} from "../validationSchemas/savingAccountsSchemas.js";


class SavingAccountsController {

    async listAccounts(req, res, next) {
        try {
            const data = getAllSavingAccounts();
            res.json(data);
        } catch (e) { next(e); }
    }

    async getAccountById(req, res, next) {
        try {
            const { id } = req.params;
            const account = getSavingAccountById(id);

            if (!account) {
                return res.status(404).json({ message: "Saving account not found" });
            }

            res.json(account);
        } catch (e) { next(e); }
    }

    async getBalance(req, res, next) {
        try {
            const {accountId} =validate(getBalanceQuerySchema, req.body);
            const result = getBalance(accountId);

            if (!result) {
                return res.status(404).json({ message: "Saving balance not found" });

            }
            res.json(result);
        } catch (e) { next(e); }
    }

    async getHistory(req, res, next) {
        try {
            const { accountId } = validate(getHistoryQuerySchema, req.query);
            const history = getHistory(accountId);

            if (history === null) {
                return res.status(404).json({ message: "Saving account not found" });
            }

            res.json(history);
        } catch (e) { next(e); }
    }




    async createAccount(req, res, next) {
        try {
            const body = validate(createSavingAccountSchema, req.body);
            const created = createSavingAccount(body);
            res.status(201).json(created);
        } catch (e) { next(e); }
    }

    async updateAccount(req, res, next) {
        try {
            const body = validate(updateSavingAccountSchema, req.body);
            const updated = updateSavingAccountById(body.id, body);

            if (!updated) {
                return res.status(404).json({ message: "Saving account not found" });
            }

            res.json(updated);
        } catch (e) { next(e); }
    }

    async closeAccount(req, res, next) {
        try {
            const body = validate(closeSavingAccountSchema, req.body);
            const closed = closeSavingAccountById(body.id);

            if (!closed) {
                return res.status(404).json({ message: "Saving account not found" });
            }

            res.json({ message: "Account closed", account: closed });
        } catch (e) { next(e); }
    }
}

const controller = new SavingAccountsController();

export const listAccounts = controller.listAccounts.bind(controller);
export const getAccountById = controller.getAccountById.bind(controller);
export const createAccount = controller.createAccount.bind(controller);
export const updateAccount = controller.updateAccount.bind(controller);
export const closeAccount = controller.closeAccount.bind(controller);
export const getBalance = controller.getBalance.bind(controller);
export const getHistory = controller.getHistory.bind(controller);