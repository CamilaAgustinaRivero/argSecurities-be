const { response } = require('express');

const personaFisica = (req, res = response) => {
    res.json({
        msg: 'Persona fisica'
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
