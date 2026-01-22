// src/routes/savingAccountsController.js

import express from "express";
import {
    getSavingAccounts,
    getSavingAccount
} from "../controllers/savingAccountsController.js";



const router = express.Router();

router.get("/listAccounts", getSavingAccounts);
router.get("/getAccountById/:id", getSavingAccount);

export default router;
