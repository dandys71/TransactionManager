// src/controllers/savingAccountsController.js

import {
    getAllSavingAccounts,
    getSavingAccountById,
    createSavingAccount,
    updateSavingAccountById,
    closeSavingAccountById
} from "../services/savingAccounts.js";

export const getSavingAccounts = (req, res) => {
    res.json(getAllSavingAccounts());
};

export const getSavingAccount = (req, res) => {
    const { id } = req.params; // ← správně
    const account = getSavingAccountById(id);

    if (!account) {
        return res.status(404).json({ message: "Saving account not found" });
    }

    res.json(account);
};


export const postSavingAccount = (req, res) => {
    const newAcc = createSavingAccount(req.body);
    res.status(201).json(newAcc);
};

export const updateSavingAccount = (req, res) => {
    const { id } = req.body;
    const updated = updateSavingAccountById(id, req.body);

    if (!updated) {
        return res.status(404).json({ message: "Saving account not found" });
    }

    res.json(updated);
};

export const closeSavingAccount = (req, res) => {
    const { id } = req.body;
    const closed = closeSavingAccountById(id);

    if (!closed) {
        return res.status(404).json({ message: "Saving account not found" });
    }

    res.json({ message: "Account closed", account: closed });
};
