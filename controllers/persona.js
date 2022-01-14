const { response } = require('express');

const personaFisica = (req, res = response) => {
    const {
        titular
    } = req.body;

    res.status(201).json({
        msg: 'Los datos fueron cargados de manera exitosa.',
        titular
    });
};

const personaJuridica = (req, res = response) => {
    res.json({
        msg: 'Persona jurídica'
    });
};

module.exports = {
    personaFisica,
    personaJuridica
}
