export const validate = (schema) => (req, res, next) => {
    try
    {
        // Zkouška validovat body požadavku
        schema.parse(req.body);
        next();
    }

    catch (error)
    {
        return res.status(400).json({
            status: 'fail',
            errors: error.errors.map(e => ({ path: e.path, message: e.message }))
        });
    }
};