import crypto from "crypto";

export const createTriggeredEventObject = (data) => {
    return {
        eventId: crypto.randomUUID(),
        type: data.type,
        triggeredAt: new Date().toISOString(),
        status: "PROCESSED",
        impact: "Událost byla úspěšně simulována."
    };
};


export const createPreviewWindowObject = (data) => {
    return {
        items: [
            {
                templateId: "interest-payout",
                probability: 0.95,
                expectedAmount: 150.50
            },
            {
                templateId: "account-fee",
                probability: 1.0,
                expectedAmount: -20.0
            }
        ]
    };
};