import { Router } from "express";
import * as EventsController from "../controllers/eventsController.js";

export const router = Router();

// POST /v1/events/createEventTemplate
router.post("/createEventTemplate", EventsController.createEventTemplate);
