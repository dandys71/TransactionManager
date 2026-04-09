import {
    triggerEventSchema,
    previewNextWindowSchema
} from "../validationSchemas/createEventTemplateSchema.js";

import * as eventsService from "../services/eventsService.js";
import { validate } from "../services/validationService.js";

// [POST] Endpoint 1: Spuštění události
export const triggerRandomEvent = async (req, res, next) => {
    try {
        const validatedData = validate(triggerEventSchema, req.body);
        const result = await eventsService.triggerEvent(validatedData);
        res.status(201).json(result);
    } catch (error) {
        next(error);
    }
};


// [POST] Endpoint 2: Náhled na budoucí události v časovém okně
export const previewNextWindow = async (req, res, next) => {
    try {
        const validatedData = validate(previewNextWindowSchema, req.body);
        const result = await eventsService.previewNextWindow(validatedData);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
};