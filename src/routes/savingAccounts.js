// src/routes/savingAccounts.js

import express from "express";
import {
    getSavingAccounts,
    getSavingAccount,
    postSavingAccount, updateSavingAccount
} from "../controllers/savingAccounts.js";

import validate from "../middlewares/auth.js";
import { createSavingAccountSchema } from "../config/validationSchemas.js";

const router = express.Router();

router.get("/", getSavingAccounts);
router.get("/:id", getSavingAccount);
router.post("/", validate(createSavingAccountSchema), postSavingAccount);

export default router;



//Nevím zda funguje a jestli se používá//
router.post(
    "/updateAccount",
    validate(updateSavingAccountSchema),
    updateSavingAccount
);