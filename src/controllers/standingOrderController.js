
import * as StandingOrderService from '../services/standingOrderService.js';
import {validate} from "../services/validationService.js";
import * as StandingOrderSchema from "../validationSchemas/standingOrderSchemas.js"
import {StandingOrder} from "../models/standingOrder.js";


class StandingOrderController {

    async createStandingOrder(req, res, next) {
        try {
            const body = validate(StandingOrderSchema.createStandingOrder, req.body);
            const created = await StandingOrderService.createStandingOrder(body);
            res.status(201).json(created);
        } catch (e) { next(e); }
    }
    async getStandingOrderById(req, res, next) {
        try {
            const q = validate(StandingOrderSchema.standingOrderID, req.query);
            const item = await StandingOrderService.getStandingOrderById(q.standingOrderId);
            if (!item) return res.status(404).json({error: 'Not Found'});
            res.json(item);
        } catch (e) {
            next(e);
        }
    }
    async updateStandingOrder(req, res, next) {
        try {
            const body = validate(StandingOrderSchema.updateStandingOrder, req.body);
            const updated = await StandingOrderService.updateStandingOrder(body);
            res.status(201).json(updated);
        } catch (e) { next(e); }
    }



}

const controller = new StandingOrderController();


export const getStandingOrderById = controller.getStandingOrderById.bind(controller);
export const createStandingOrder = controller.createStandingOrder.bind(controller);

