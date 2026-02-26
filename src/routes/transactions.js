// POST /createTransaction
import { Router } from 'express';
import * as transactionsController from '../controllers/transactionsController.js';
import * as path from "node:path";

export const router = Router();


// POST /createTransaction
router.post('/createTransaction', transactionsController.createTransaction);

// POST /createInternalTransfer
router.post('/createInternalTransfer', transactionsController.createInternalTransfer);

// GET /getTransactionById
//query => protoře get
router.get('/getTransactionById', transactionsController.getTransactionById);

// GET /listTransactions
router.get('/listTransactions', transactionsController.listTransactions);

// POST /refundTransaction
router.post('/refundTransaction', transactionsController.refundTransaction);

// POST /generateStatement
router.post('/generateStatement', transactionsController.generateStatement);

// GET /getPending
router.get('/getPending', transactionsController.getPending);

// POST /cancelPending
router.post('/cancelPending', transactionsController.cancelPending);
