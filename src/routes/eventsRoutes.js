import { Router } from "express";
import * as EventsController from "../controllers/eventsController.js";

export const router = Router();

// POST /v1/events/createEventTemplate
router.post("/createEventTemplate", EventsController.createEventTemplate);

// POST /v1/events/updateEventTemplate
router.post("/updateEventTemplate", EventsController.updateEventTemplate);

// POST /v1/events/deleteEventTemplate
router.post("/deleteEventTemplate", EventsController.deleteEventTemplate);

// GET /v1/events/getEventTemplateById
router.get("/getEventTemplateById", EventsController.getEventTemplateById);

// GET /v1/events/getEventTemplateById
router.get("/listEventTemplates", EventsController.listEventTemplates);
