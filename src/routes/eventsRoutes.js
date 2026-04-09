import { Router } from 'express';
import * as eventsController from "../controllers/eventsController.js";

export const router = Router();

router.post("/trigger", eventsController.triggerRandomEvent);

router.post("/previewNextWindow", eventsController.previewNextWindow);
