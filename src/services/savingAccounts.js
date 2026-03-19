// src/services/savingAccountsController.js

import * as savingAccounts from "../models/savingAccounts.js";
import crypto from 'crypto'; //toto se používá jen na generování náhodného ID pro uživatele

export const getAllSavingAccounts = () => {
    return savingAccounts.getAllSavingAccounts();
};

export const getSavingAccountById = (id) =>
    savingAccounts.find(acc => acc.id === id);

export const createSavingAccount = (data) => {
    const newAccount = {
        id: crypto.randomUUID(),
        createdAt: new Date().toISOString(),
        isClosed: false,
        ...data
    };
    savingAccounts.createSavingAccount(newAccount)
    return newAccount;
};

export const getALLBalance = (id) => {
    return savingAccounts.getBalance(id);
}
export const getALLHistory = (id) => {
    return savingAccounts.getHistory(id);
}

export const transferALLToCurrent = (savingId, currentId, amount) => {
    const current = Accounts.findByIdForUser(currentId);
    if(!current) return null;

    return savingAccounts.transferToCurrent(savingId, amount);

};


export const updateSavingAccountById = (id, data) => {
    return savingAccounts.updateSavingAccount(id, data);
};

export const closeSavingAccountById = (id) => {
    const account = savingAccounts.find(acc => acc.id === id);
    if (!account) return null;

    account.isClosed = true;
    account.closedAt = new Date().toISOString();
    return account;
};

