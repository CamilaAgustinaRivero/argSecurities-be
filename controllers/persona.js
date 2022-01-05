const { response } = require('express');

const personaFisica = (req, res = response) => {
    const { datosPrincipales } = req.body;
    const { nombre, apellido, tipoDNI, DNI } = datosPrincipales;
    res.json({
        nombre,
        apellido,
        tipoDNI,
        DNI
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
