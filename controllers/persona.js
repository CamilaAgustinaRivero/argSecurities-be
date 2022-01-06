const { response } = require('express');

const personaFisica = (req, res = response) => {
    const {
        datosPrincipales,
        datosFiscalesNacionales,
        datosPersonales,
        mediosComunicacion,
        domiciliosUrbanos,
        cuentasBancarias,
        informacionPatrimonial,
        actividades,
        declaraciones
    } = req.body;

    res.status(201).json({
        msg: 'Los datos fueron cargados de manera exitosa.',
        datosPrincipales,
        datosFiscalesNacionales,
        datosPersonales,
        mediosComunicacion,
        domiciliosUrbanos,
        cuentasBancarias,
        informacionPatrimonial,
        actividades,
        declaraciones
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
