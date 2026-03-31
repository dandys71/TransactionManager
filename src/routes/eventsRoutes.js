
import {Router} from 'express';
import { createEventTemplate } from "../controllers/eventsController.js";

export const router = Router();

//[POST]triggerRandomEvent
router.post("/simulation/shift", eventsController.shiftSimulation);

router.post("/previewNextWindow", eventsController.)

export default router;