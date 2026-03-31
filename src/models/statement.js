import crypto from 'crypto';
const _mem = new Map();

// models/statement.js
export const Statement = {
    create(data) {
        const statementId = `st_${crypto.randomUUID()}`;
        const item = {
            statementId,
            accountId: data.accountId,
            format: data.format || "PDF",
            url: `https://bank.api/download/${statementId}.pdf`,
            createdAt: new Date().toISOString()
        };
        _mem.set(statementId, item);
        return item;
    },

    get(statementId) {
        return _mem.get(statementId) || null;
    }
};