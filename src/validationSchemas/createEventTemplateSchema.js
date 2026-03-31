import { z } from "zod";

export const createEventTemplateSchema = z.object({
    eventTemplateId: z.string(),
    institutionId: z.string(),
    name: z.string(),
    type: z.enum(["income", "expense"]),
    probability: z.number().min(0).max(1),
    amountType: z.enum(["fixed", "range"]),
    amount: z.number().optional(),
    minAmount: z.number().optional(),
    maxAmount: z.number().optional(),
    cooldownDays: z.number().min(0),
    targetAccountStrategy: z.enum(["same", "specific"]),
    specificAccountId: z.string().optional()
});
