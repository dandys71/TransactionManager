import * as eventsModel from "../models/eventsModel.js";

export function createEventTemplate(data) {
    return eventsModel.createEventTemplate(data);
}
export function updateEventTemplate(data) {
    return eventsModel.updateEventTemplate(data);
}

export function deleteEventTemplate(eventTemplateId) {
    return eventsModel.deleteEventTemplate(eventTemplateId);
}

export function getEventTemplateById(eventTemplateId) {
    return eventsModel.getEventTemplateById(eventTemplateId);
}
