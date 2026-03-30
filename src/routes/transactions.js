import { Router } from "express";
import * as transactionsController from "../controllers/transactionsController.js";

const router = Router();


router.post("/createTransaction", transactionsController.createTransaction);

router.post("/createInternalTransfer", transactionsController.createInternalTransfer);

router.get("/getTransactionById", transactionsController.getTransactionById);

router.get("/listTransactions", transactionsController.listTransactions);

router.post("/refundTransaction", transactionsController.refundTransaction);




export { router };