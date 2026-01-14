import { Router } from 'express';
import * as standingOrdersController from '../controllers/standingOrdersController.js';
import { createStandingOrderBodySchema } from '../config/validationSchemas.js';
import { validate } from '../middlewares/validate.js';

const router = Router();

// Definice cesty pro vytvoření trvalého příkazu
router.post
(
    '/',
    validate(createStandingOrderBodySchema), // validace
    standingOrdersController.createStandingOrder
);

export default router;