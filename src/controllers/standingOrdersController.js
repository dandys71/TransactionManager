export const createStandingOrder = async (req, res, next) => {
    try {
        // Tady se později přidá ukládání do databáze
        console.log('Data z požadavku:', req.body);

        res.status(201).json({
            status: 'success',
            message: 'Trvalý příkaz byl úspěšně vytvořen (zatím simulace)',
            data: req.body
        });
    } catch (error) {
        next(error);
    }
};