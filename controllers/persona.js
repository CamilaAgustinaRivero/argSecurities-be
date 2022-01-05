const { response } = require('express');

const personaFisica = (req, res = response) => {
    const {
        datosPrincipales,
        datosFiscalesNacionales,
        datosPersonales
    } = req.body;
    // const { nombre, apellido, tipoDNI, DNI } = datosPrincipales;
    // const { tipoCF, CF, tipoIVA, tipoGanancias, actividadesEconomicas } = datosFiscalesNacionales;
    // const { fechaNacimiento, sexo, estadoCivil, idioma, nacionalidad, paisResidencia, paisOrigen, lugarNacimiento, CIE, profesion} = datosPersonales;
    res.status(201).json({
        msg: 'Los datos fueron cargados de manera exitosa.',
        datosPrincipales,
        datosFiscalesNacionales,
        datosPersonales
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
