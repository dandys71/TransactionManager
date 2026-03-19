import crypto from 'crypto';

const _mem = new Map();

const item = {
    standingOrderId: "so_123",
    accountId: "",
    templateId: "",
    interval: "",
    customCron: "",
    dayOfMonth: "",
    amount: 100,
    currency: "",
    nextRunAt: "",
    isActive: true,
};

_mem.set(item.standingOrderId, item);

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

    },

    get(standingOrderId){
        const result = _mem.get(standingOrderId)
        if (!result) return null;
        return result;
    },
    update(data) {


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

    },
}
