

const savingAccounts = new Map([
    ["sa-001",{
        id: "sa-001",
        userId: "u-001",
        accountNumber: "123456789",
        balance: 15000,
        interestRate: 1.8,
        createdAt: "2024-01-10T10:00:00Z"

    }],
    ["sa-002",{
        id: "sa-002",
        userId: "u-002",
        accountNumber: "987654321",
        balance: 42000,
        interestRate: 2.1,
        createdAt: "2024-02-01T12:30:00Z"
    }]
])




 //Potřebuju to???
export function getBalance(id) {
    const acc = savingAccounts.get(id);
    if (!acc) return null;
    return { id: acc.id, balance: acc.balance };
}

export function createSavingAccount(account) {
    savingAccounts.set(account.id, account);
}

