import { z } from 'zod';

//[POST]triggerRandomEvent
export const shiftSimulationSchema = z.object({
    days: z.number().int().min(1, "Musíš posunout aspoň o 1 den"),
    months: z.number().int().optional().default(0),
    allowOverdraft: z.boolean().optional().default(false)
});
