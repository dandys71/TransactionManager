
import { Router } from 'express';
export const router = Router();

router.get('/ping', (_req, res) => {
  res.json({ ok: true, service: 'TransactionManager', time: new Date().toISOString() });
});

router.get('/', (_req, res) => {
    res.json({ massage: "Ahoj" });
})


