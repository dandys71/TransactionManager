import { Router } from "express";
import * as StandingController from "../controllers/standingOrderController.js";
import { authMiddleware } from "../middlewares/auth.js";

export const router = Router();



// POST /v1/standingOrders/createStandingOrder
router.post("/createStandingOrder", StandingController.createStandingOrder);
router.post("/updateStandingOrder", StandingController.updateStandingOrder)
router.get("/getStandingOrderById", StandingController.getStandingOrderById);