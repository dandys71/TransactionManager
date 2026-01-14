import { Router } from 'express';
export const router = Router();

router.post('/createAccount', (req, res) => {
    res.json({ ok: true, service: 'TransactionManager', time: new Date().toISOString() });
});

// src/services/savingAccounts.js

import { savingAccounts } from "../models/savingAccounts.js";
import { v4 as uuid } from "uuid";

export const getAllSavingAccounts = () => savingAccounts;

export const getSavingAccountById = (id) =>
    savingAccounts.find(acc => acc.id === id);

export const createSavingAccount = (data) => {
    const newAccount = {
        id: uuid(),
        createdAt: new Date().toISOString(),
        ...data
    };
    savingAccounts.push(newAccount);
    return newAccount;
};

