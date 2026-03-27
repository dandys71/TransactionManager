export const createTransaction = async (req, res, next) => {
    try {
        const data = req.body;

        // RUČNÍ VALIDACE (místo knihovny Joi)
        // Zkontrolujeme, jestli nám nechybí povinná pole
        if (!data.fromAccountId || !data.toAccountNumber || !data.amount) {
            return res.status(400).json({
                status: "error",
                message: "Chybí povinné údaje: fromAccountId, toAccountNumber nebo amount."
            });
        }

        // Zkontrolujeme, jestli je částka číslo a jestli je kladná
        if (typeof data.amount !== 'number' || data.amount <= 0) {
            return res.status(400).json({
                status: "error",
                message: "Částka musí být kladné číslo."
            });
        }

        // Pokud je vše v pořádku, vrátíme úspěch
        res.status(201).json({
            status: "success",
            message: "Transakce vytvořena",
            transactionId: "TXN-" + Date.now(), // jednoduché ID pomocí času
            receivedData: data
        });

    } catch (error) {
        next(error);
    }
};

export const createInternalTransfer = async (req, res, next) => {
    try {
        const { fromAccountId, toAccountId, amount, currency } = req.body;

        // 1. Základní kontrola polí
        if (!fromAccountId || !toAccountId || !amount) {
            return res.status(400).json({ status: "error", message: "Chybí údaje pro převod." });
        }

        // 2. Kontrola, aby to nebyl stejný účet
        if (fromAccountId === toAccountId) {
            return res.status(400).json({
                status: "error",
                message: "Nelze poslat peníze na stejný účet."
            });
        }

        // 3. Úspěšná odpověď
        res.status(201).json({
            status: "success",
            message: "Interní převod byl úspěšně zadán",
            data: { fromAccountId, toAccountId, amount, currency: currency || 'CZK' }
        });
    } catch (error) {
        next(error);
    }
};

export const getTransactionById = async (req, res, next) => {
    try {
        // Query parametry vytáhneme z req.query (ne z req.body!)
        const { transactionId } = req.query;

        if (!transactionId) {
            return res.status(400).json({
                status: "error",
                message: "Chybí transactionId v parametrech."
            });
        }

        // Tady jen simulujeme, že vracíme data ze screenshotu
        res.status(200).json({
            transactionId: transactionId,
            accountId: "ACC-999",
            counterpartyAccount: "CZ1234567890",
            amount: 1500,
            currency: "CZK",
            direction: "income",
            status: "pending",
            vs: "2026001",
            note: "Platba za obed",
            createdAt: new Date().toISOString()
        });
    } catch (error) {
        next(error);
    }
};


export const listTransactions = async (req, res, next) => {
    try {
        // Vytáhneme si filtry z query (pro tebe teď nepovinné, ale připravené)
        const { accountId, page = 1, pageSize = 50 } = req.query;

        // Simulujeme pole transakcí (vracíme seznam s jednou ukázkovou transakcí)
        res.status(200).json({
            items: [
                {
                    transactionId: "TXN-001",
                    accountId: accountId || "ACC-DEFAULT",
                    counterpartyAccount: "CZ987654321",
                    amount: 500,
                    currency: "CZK",
                    direction: "outcome",
                    status: "completed",
                    vs: "111222",
                    ks: "0308",
                    ss: "",
                    note: "Platba kartou - Supermarket",
                    createdAt: "2026-03-27T21:31:58.262Z",
                    postedAt: "2026-03-27T21:31:58.262Z"
                }
            ],
            total: 1,
            page: Number(page),
            pageSize: Number(pageSize)
        });
    } catch (error) {
        next(error);
    }
};