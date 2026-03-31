
import { createEventTemplateSchema } from "../validationSchemas/createEventTemplateSchema.js";
import { shiftSimulationSchema } from "../validationSchemas/shiftSimulationSchema.js"; // Tvůj nový import
import * as eventsService from "../services/eventsService.js";
import { validate } from "../services/validationService.js";


//[POST]triggerRandomEvent
export const shiftSimulation = async (req, res, next) => {
    try {
        // Použijeme tu jejich validate funkci
        const data = validate(shiftSimulationSchema, req.body);

        const result = await eventsService.shiftSimulation(data);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
};