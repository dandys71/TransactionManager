/**
 * Controller vyřídí HTTP požadavek, servisa rozhodne „co se má stát“ a model je místo, kde se drží a načítají data.
 */

import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';

import { router as accountsRouter } from './routes/accounts.js';
import { router as usersRouter } from './routes/users.js';
import { router as healthRouter } from './routes/health.js';

import {router as savingAccountsRoutes }from "./routes/savingAccounts.js";

import { errorHandler } from './middlewares/errorHandler.js';

dotenv.config();

const app = express();

// Globální middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Naše routy
app.use("/v1/savingsAccounts", savingAccountsRoutes);
app.use('/v1/accounts', accountsRouter);
app.use('/v1/health', healthRouter);
app.use('/v1/users', usersRouter);

// Centrální error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`TransactionManager running on http://localhost:${PORT}`);
});
