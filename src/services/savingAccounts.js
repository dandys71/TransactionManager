import { Router } from 'express';
export const router = Router();

router.post('/createAccount', (req, res) => {
    res.json({ ok: true, service: 'TransactionManager', time: new Date().toISOString() });
});