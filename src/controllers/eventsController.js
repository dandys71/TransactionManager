import { createEventTemplateSchema,
        updateEventTemplateSchema,
        deleteEventTemplateSchema
} from "../validationSchemas/createEventTemplateSchema.js";
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

export async function updateEventTemplate(req, res, next) {
    try {
        const data = validate(updateEventTemplateSchema, req.body);
        const updated = await eventsService.updateEventTemplate(data);
        res.status(201).json(updated);
    }catch(err) {
        next(err);
    }
}

export async function deleteEventTemplate(req, res, next) {
    try {
        const data = validate(deleteEventTemplateSchema, req.body);
        eventsService.deleteEventTemplate(data.eventTemplateId) ;
        res.status(204).end();
    } catch (err) {
        next(err);
    }
}

export function getEventTemplateById(req, res, next) {
    try {
        const { eventTemplateId } = req.query;

        if (!eventTemplateId) {
            const err = new Error("Missing eventTemplateId");
            err.status = 400;
            throw err;
        }

        const template = eventsService.getEventTemplateById(eventTemplateId);

        res.status(200).json(template);
    } catch (err) {
        next(err);
    }
}



