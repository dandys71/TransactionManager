
import crypto from 'crypto';
const _mem = new Map();

export const saving_Accounts = {
    create(data) {
        const accountId = `acc_${crypto.randomUUID()}`;
        const createdAt = new Date().toISOString();

        const item = {
            accountId,
            userId: data.userId,
            institutionId: data.institutionId,
            accountNumber: data.accountNumber || '000000-0000000000/0100',
            name: data.name || 'Můj účet',
            currency: data.currency,
            balance: data.balance ?? 0,
            isActive: true,
            type: data.type,
            createdAt
        };
        _mem.set(accountId, item);
        return item;
    },
    update({ accountId, ...rest }) {
        const curr = _mem.get(accountId);
        if (!curr) return null;

        const updated = { ...curr, ...rest };
        _mem.set(accountId, updated);
        return updated;
    },
    close(accountId, closeDate) {
        const curr = _mem.get(accountId);
        if (!curr) return null;
        curr.isActive = false;
        curr.closeDate = closeDate || new Date().toISOString().slice(0,10);
        _mem.set(accountId, curr);
        return curr;
    },
    findByIdForUser(accountId, userId) {
        const a = _mem.get(accountId);
        if (!a) return null;
        if (userId && a.userId !== userId) return null;
        return a;
    },
    listByUser(userId, { page = 1, pageSize = 50 } = {}) {
        const all = [..._mem.values()].filter(a => !userId || a.userId === userId);
        const start = (page - 1) * pageSize;
        return all.slice(start, start + pageSize);
    }


};