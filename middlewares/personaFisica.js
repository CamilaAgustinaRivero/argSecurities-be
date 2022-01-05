const { check } = require('express-validator');
const { camposValidaciones } = require('./campos');

module.exports = {
    personaFisicaValidaciones: [
        // Datos principales
        check('datosPrincipales.nombre', 'El nombre es obligatorio. (*)').trim().not().isEmpty(),
        check('datosPrincipales.nombre', 'El nombre ingresado no es válido.').isLength({ min: 3, max: 50 }).matches('^[a-zA-Z\u00C0-\u017F\s, . ]+$'),
        check('datosPrincipales.apellido', 'El apellido es obligatorio. (*)').trim().not().isEmpty(),
        check('datosPrincipales.apellido', 'El apellido ingresado no es válido.').isLength({ min: 3, max: 50 }).matches('^[a-zA-Z\u00C0-\u017F\s, . ]+$'),
        check('datosPrincipales.tipoDNI', 'Seleccione el tipo de DNI. (*)').trim().not().isEmpty(),
        check('datosPrincipales.DNI', 'El DNI es obligatorio. (*)').trim().not().isEmpty(),
        // TO DO: mejorar la validación del DNI
        check('datosPrincipales.DNI', 'El DNI ingresado no es válido.').isNumeric(),
        // Datos fiscales nacionales
        check('datosFiscalesNacionales.tipoCF', 'Seleccione el tipo de Clave Fiscal. (*)').trim().not().isEmpty(),
        check('datosFiscalesNacionales.CF', 'La Clave Fiscal es obligatoria. (*)').trim().not().isEmpty(),
        // TO DO: mejorar la validación de la CF
        check('datosFiscalesNacionales.CF', 'La Clave Fiscal ingresada no es válida.').isNumeric(),
        check('datosFiscalesNacionales.tipoIVA', 'Seleccione el tipo Responsable IVA. (*)').trim().not().isEmpty(),
        check('datosFiscalesNacionales.tipoGanancias', 'Seleccione el tipo Responsable Ganancias. (*)').trim().not().isEmpty(),
        // Datos personales
        check('datosPersonales.fechaNacimiento', 'La fecha de nacimiento es obligatoria. (*)').trim().not().isEmpty(),
        // YYYY - MM - DD
        check('datosPersonales.fechaNacimiento', 'La fecha de nacimiento ingresada no es válida.').isDate(),
        check('datosPersonales.sexo', 'Seleccione el sexo. (*)').trim().not().isEmpty(),
        check('datosPersonales.estadoCivil', 'Seleccione el estado civil. (*)').trim().not().isEmpty(),
        check('datosPersonales.idioma', 'Seleccione el idioma. (*)').trim().not().isEmpty(),
        check('datosPersonales.nacionalidad', 'Seleccione la nacionalidad. (*)').trim().not().isEmpty(),
        check('datosPersonales.paisResidencia', 'Seleccione el país de residencia. (*)').trim().not().isEmpty(),
        check('datosPersonales.lugarNacimiento', 'Indique lugar de nacimiento. (*)').trim().not().isEmpty(),
        check('datosPersonales.lugarNacimiento', 'El lugar de nacimiento ingresado no es válido.').isLength({ min: 4, max: 50 }).matches('^[a-zA-Z\u00C0-\u017F\s, . ]+$'),
        check('datosPersonales.profesion', 'La profesión es obligatoria. (*)').trim().not().isEmpty(),
        check('datosPersonales.profesion', 'La profesión ingresada no es válida.').isLength({ min: 4, max: 50 }).matches('^[a-zA-Z\u00C0-\u017F\s, . ]+$'),
        camposValidaciones
    ]
};
