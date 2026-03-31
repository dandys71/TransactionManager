import { Statement } from '../models/statement.js';

export async function generateAccountStatement(data) {
    return Statement.create(data);
}

export async function getStatement(statementId) {
    return Statement.get(statementId);
}