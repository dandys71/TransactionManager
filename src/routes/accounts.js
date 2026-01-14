
import { Router } from 'express';
import * as AccountsController from '../controllers/accountsController.js'; //
import { allowRoles } from "../middlewares/roles.js";
import {authMiddleware} from "../middlewares/auth.js";


//export = zpřístupníš proměnnou/funkci z jednoho souboru pro použití v jiném.
export const router = Router();

// GET /v1/accounts/getAccountById?accountId=...
router.get('/getAccountById', authMiddleware, AccountsController.getAccountById);

// GET /v1/accounts/listAccounts?userId=...&page=1&pageSize=50
router.get('/listAccounts', AccountsController.listAccounts);

// POST /v1/accounts/createAccount
router.post('/createAccount', AccountsController.createAccount, allowRoles("admin", "boss"));

// POST /v1/accounts/updateAccount
router.post('/updateAccount', AccountsController.updateAccount);

// POST /v1/accounts/closeAccount
router.post('/closeAccount', AccountsController.closeAccount);

// GET /v1/accounts/getBalance?accountId=...
router.get('/getBalance', AccountsController.getBalance);

// GET /v1/accounts/getHistory?accountId=...
router.get('/getHistory', AccountsController.getHistory);

import { Router } from 'express';
// 1. Import schémata
import {
    createStandingOrderBodySchema,
    createInternalTransferBodySchema
} from '../config/validationSchemas.js';

// 2. Import controller
import * as accountsController from '../controllers/accountsController.js';

// 3. Import validační middleware
import { validate } from '../middlewares/validate.js';

const router = Router();


// Standing Order)
router.post(
    '/createStandingOrder',
    validate(createStandingOrderBodySchema),
    accountsController.createStandingOrder
);

// (Internal Transfer)
router.post(
    '/createInternalTransfer',
    validate(createInternalTransferBodySchema),
    accountsController.createInternalTransfer
);

export default router;