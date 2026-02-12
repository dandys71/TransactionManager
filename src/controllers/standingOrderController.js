class StandingOrderController {

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
     async createStandingOrder(req, res, next) {

     }


}

const controller = new StandingOrderController();


export const getStandingOrderById = controller.getStandingOrderById.bind(controller);
export const createStandingOrder = controller.createStandingOrder.bind(controller);

