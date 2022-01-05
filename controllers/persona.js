const { response } = require('express');

const personaFisica = (req, res = response) => {
    const {
        datosPrincipales,
        datosFiscalesNacionales,
        datosPersonales,
        mediosComunicacion
    } = req.body;
    // const { nombre, apellido, tipoDNI, DNI } = datosPrincipales;
    // const { tipoCF, CF, tipoIVA, tipoGanancias, actividadesEconomicas } = datosFiscalesNacionales;
    // const { fechaNacimiento, sexo, estadoCivil, idioma, nacionalidad, paisResidencia, paisOrigen, lugarNacimiento, CIE, profesion} = datosPersonales;
    // const { email, vigDesdeEmail, vigHastaEmail, usoEmail, principalEmail, notasEmail, telefono, vigDesdeTelefono, vigHastaTelefono, usoTelefono, notasTelefono } = mediosComunicacion;
    res.status(201).json({
        msg: 'Los datos fueron cargados de manera exitosa.',
        datosPrincipales,
        datosFiscalesNacionales,
        datosPersonales,
        mediosComunicacion
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
