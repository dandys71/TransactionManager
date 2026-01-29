import {Router} from "express";
import * as StandingController from '../controllers/standingOrderController.js';


export const router = Router();

router.get('/createStandingOrder', StandingController.getStandingOrderById);