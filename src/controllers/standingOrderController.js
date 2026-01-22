

class StandingOrderController {  async getAccountById(req, res, next) {
    try {
        const q = validate(ValidationSchemas.accountIdQuerySchema, req.query);
        const item = await standingOService.getAccountById(q.accountId, req.user);
        if (!item) return res.status(404).json({ error: 'Not Found' });
        res.json(item);
    } catch (e) { next(e); }}