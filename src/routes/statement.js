import { Router } from "express";
import * as statementController from "../controllers/statementController.js";

export const router = Router();

router.post("/generateAccountStatement", statementController.generateAccountStatement);
router.get("/getStatement", statementController.getStatement);