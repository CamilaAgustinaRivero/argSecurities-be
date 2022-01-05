const { check } = require('express-validator');
const { camposValidaciones } = require('./campos');

module.exports = {
    personaFisicaValidaciones: [
        // Datos principales
        check('datosPrincipales.nombre', 'El nombre es obligatorio. (*)').trim().not().isEmpty(),
        check('datosPrincipales.nombre', 'El nombre ingresado no es válido.').isLength({ min: 3, max: 50 }),
        check('datosPrincipales.apellido', 'El apellido es obligatorio. (*)').trim().not().isEmpty(),
        check('datosPrincipales.apellido', 'El apellido ingresado no es válido.').isLength({ min: 3, max: 50 }),
        check('datosPrincipales.tipoDNI', 'Ingrese tipo ID. (*)').not().isEmpty(),
        check('datosPrincipales.DNI', 'El DNI es obligatorio. (*)').trim().not().isEmpty(),
        // TO DO: mejorar la validación del DNI
        camposValidaciones
    ]
};
