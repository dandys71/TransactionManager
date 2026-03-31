import { createEventTemplateSchema } from "../validationSchemas/createEventTemplateSchema.js";
import * as eventsService from "../services/eventsService.js";
import {validate} from "../services/validationService.js";



export async function createEventTemplate(req, res, next) {
    try {
        const data = validate(createEventTemplateSchema, req.body);
        const created = await eventsService.createEventTemplate(data);
        res.status(201).json(created);
    } catch (err) {
        next(err);
    }
}