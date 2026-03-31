import * as statementService from '../services/statementService.js';

class StatementController {
    async generateAccountStatement(req, res, next) {
        try {
            const result = await statementService.generateAccountStatement(req.body);
            res.status(201).json(result);
        } catch (e) { next(e); }
    }

    async getStatement(req, res, next) {
        try {
            const { statementId } = req.query;
            const result = await statementService.getStatement(statementId);
            if (!result) return res.status(404).json({ error: "Not Found" });
            res.status(200).json(result);
        } catch (e) { next(e); }
    }
}

const controller = new StatementController();

export const generateAccountStatement = controller.generateAccountStatement.bind(controller);
export const getStatement = controller.getStatement.bind(controller);