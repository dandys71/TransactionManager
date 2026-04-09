import * as eventsModel from "../models/eventsModel.js";

export const triggerEvent = async (data) => {
    return eventsModel.createTriggeredEventObject(data);
};


export const previewNextWindow = async (data) => {
    return eventsModel.createPreviewWindowObject(data);
};