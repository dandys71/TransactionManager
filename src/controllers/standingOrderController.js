
import * as standingOService from '../services/standingOrderService.js';
import {validate} from "../services/validationService.js";
import * as ValidationSchemas from "../config/validationSchemas.js";
import * as AccountsService from "../services/accountsService.js";

class StandingOrderController {

    async createStandingOrder(req, res, next) {
        try {
            const body = validate(ValidationSchemas.createStandingOrder, req.body);
            const created = await AccountsService.createAccount(body, req.user);
            res.status(201).json(created);
        } catch (e) { next(e); }
    }
    async getStandingOrderById(req, res, next) {
        try {
            const q = validate(ValidationSchemas.accountIdQuerySchema, req.query);
            const item = await standingOService.createStandingOrder(q.accountId, req.user);
            if (!item) return res.status(404).json({error: 'Not Found'});
            res.json(item);
        } catch (e) {
            next(e);
        }
    }



}

const controller = new StandingOrderController();


export const getStandingOrderById = controller.getStandingOrderById.bind(controller);
export const createStandingOrder = controller.createStandingOrder.bind(controller);

