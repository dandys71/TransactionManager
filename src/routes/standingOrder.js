import {Router} from "express";
import * as standingOrderService from "../services/accountsService.js";


export const router = Router();

router.get('/createStandingOrder', standingOrder(req, res) => {} );