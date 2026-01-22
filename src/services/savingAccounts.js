// src/services/savingAccountsController.js

import { savingAccounts } from "../models/savingAccounts.js";
import { v4 as uuid } from "uuid";

export const getAllSavingAccounts = () => savingAccounts;

export const getSavingAccountById = (id) =>
    savingAccounts.find(acc => acc.id === id);

export const createSavingAccount = (data) => {
    const newAccount = {
        id: uuid(),
        createdAt: new Date().toISOString(),
        isClosed: false,
        ...data
    };
    savingAccounts.push(newAccount);
    return newAccount;
};

export const updateSavingAccountById = (id, data) => {
    const index = savingAccounts.findIndex(acc => acc.id === id);
    if (index === -1) return null;

    savingAccounts[index] = {
        ...savingAccounts[index],
        ...data,
        updatedAt: new Date().toISOString()
    };

    return savingAccounts[index];
};

export const closeSavingAccountById = (id) => {
    const account = savingAccounts.find(acc => acc.id === id);
    if (!account) return null;

    account.isClosed = true;
    account.closedAt = new Date().toISOString();
    return account;
};
