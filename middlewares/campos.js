const { response } = require('express');
const { validationResult } = require('express-validator');


const camposValidaciones = (req, res = response, next) => {
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({
            errores: errores.mapped()
        });
    }
    next();
}

module.exports = {
    camposValidaciones
};
