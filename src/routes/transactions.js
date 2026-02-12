// POST /createTransaction
import { Router } from 'express';
import * as transactionsController from '../controllers/transactionsController.js';

export const router = Router();

router.post('/createTransaction', transactionsController.createTransaction);

// POST /createInternalTransfer
router.post('/createInternalTransfer', transactionsController.createInternalTransfer);

// GET /getTransactionById
//query => protoře get
router.get('/getTransactionById', transactionsController.getTransactionById);

// GET /listTransactions
router.get('/listTransactions', transactionsController.listTransactions);
