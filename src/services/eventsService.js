
//[POST]triggerRandomEvent
import * as EventsModel from '../models/eventsModel.js';

export const shiftSimulation = async (data) => {
    return EventsModel.createSimulationStatusObject(data.days, data.months);
};