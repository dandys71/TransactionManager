import crypto from 'crypto';

const _mem = new Map();

export const StandingOrder = {

    create(data) {
        const standingOrderId = `so_${crypto.randomUUID()}`;

        const item = {
            standingOrderId,
            accountId: data.accountId,
            templateId: data.templateId,
            interval: data.interval,
            customCron: data.customCron,
            dayOfMonth: data.dayOfMonth,
            amount: data.amount,
            currency: data.currency,
            nextRunAt: data.nextRunAt,
            isActive: true,
        };

        _mem.set(standingOrderId, item);
        return item;
    }

}
