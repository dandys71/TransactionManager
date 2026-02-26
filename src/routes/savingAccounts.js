// src/routes/savingAccountsController.js

import { Router } from 'express';
import * as SavingAccountsController from '../controllers/savingAccountsController.js';
import { allowRoles } from "../middlewares/roles.js";
import { authMiddleware } from "../middlewares/auth.js";

export const router = Router();

// GET /v1/savingsAccounts/getAccountById?id=...
router.get('/getAccountById', authMiddleware, SavingAccountsController.getAccountById);

// GET /v1/savingsAccounts/listAccounts?userId=...&page=1&pageSize=50
router.get('/listAccounts', SavingAccountsController.listAccounts);

// POST /v1/savingsAccounts/createAccount
router.post('/createAccount', SavingAccountsController.createAccount, allowRoles("admin", "boss"));

// POST /v1/savingsAccounts/updateAccount
router.post('/updateAccount', SavingAccountsController.updateAccount);

// POST /v1/savingsAccounts/closeAccount
router.post('/closeAccount', SavingAccountsController.closeAccount);

//GET /v1/savingAccounts/getBalance
router.get('/getBalance', SavingAccountsController.getBalance);

//GET /v1/savingAccounts/getBalance
router.get('/getHistory', SavingAccountsController.getHistory);

//POST /v1/savingAccounts/transferToCurrent
router.post("/transferToCurrent", SavingAccountsController.transferToCurrent);