// src/controllers/savingAccountsController.js

import {
    getAllSavingAccounts,
    getSavingAccountById,
    createSavingAccount
} from "../services/savingAccounts.js";

export const getSavingAccounts = (req, res) => {
    res.json(getAllSavingAccounts());
};

export const getSavingAccount = (req, res) => {
    const account = getSavingAccountById(req.params.id);
    if (!account) {
        return res.status(404).json({ message: "Saving account not found" });
    }
    res.json(account);
};

export const postSavingAccount = (req, res) => {
    const newAcc = createSavingAccount(req.body);
    res.status(201).json(newAcc);
};


//Asi se nepoužívá//

export const updateSavingAccount = (req, res) => {
    const { id } = req.body;
    const update = updateSavingAccountByid(id, req.body);
    if (!updated) {
        return res.status(404).json({ message: "Saving account not found" });
    }
}