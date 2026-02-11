// POST /createTransaction
import { Router } from 'express';
import * as transactionsController from '../controllers/transactionsController.js';
import { validate } from '../middlewares/validate.js';
import { createTransactionBodySchema } from '../config/validationSchemas.js';

const router = Router();

router.post('/createTransaction', validate(createTransactionBodySchema), transactionsController.createTransaction);

export default router;


// POST /createInternalTransfer
import { Router } from 'express';
import * as transactionsController from '../controllers/transactionsController.js';
import { validate } from '../middlewares/validate.js';
// Tady v importu přibylo to druhé schéma:
import { createInternalTransferBodySchema } from '../config/validationSchemas.js';

const router = Router();

router.post('/createInternalTransfer', validate(createInternalTransferBodySchema), transactionsController.createInternalTransfer);

export default router;


// GET /getTransactionById
//query => protoře get
import { Router } from 'express';
import * as transactionsController from '../controllers/transactionsController.js';
import { validate } from '../middlewares/validate.js';
import { getTransactionByIdQuerySchema } from '../config/validationSchemas.js';

const router = Router();

router.get('/getTransactionById', validate(getTransactionByIdQuerySchema, 'query'), transactionsController.getTransactionById);

export default router;


// GET /listTransactions
import { Router } from 'express';
import * as transactionsController from '../controllers/transactionsController.js';
import { validate } from '../middlewares/validate.js';
import { listTransactionsQuerySchema } from '../config/validationSchemas.js';

const router = Router();

router.get('/listTransactions', validate(listTransactionsQuerySchema, 'query'), transactionsController.listTransactions);

export default router;