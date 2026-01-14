// src/config/validationSchemas.js

import Joi from "joi";

export const createSavingAccountSchema = Joi.object({
    userId: Joi.string().required(),
    accountNumber: Joi.string().required(),
    balance: Joi.number().min(0).required(),
    interestRate: Joi.number().min(0).required()
});
