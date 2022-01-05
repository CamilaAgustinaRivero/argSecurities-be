const { check } = require('express-validator');
const { camposValidaciones } = require('./campos');

/* 
    TO DO: 
        - Validar los campos que no son obligatorios.
        - Cuentas bancarias del exterior y Datos del cónyuge
*/

module.exports = {
    personaFisicaValidaciones: [
        // Datos principales
        check('datosPrincipales.nombre', 'El nombre es obligatorio. (*)').trim().notEmpty(),
        check('datosPrincipales.nombre', 'El nombre ingresado no es válido.').isLength({ min: 3, max: 50 }).matches('^[a-zA-Z\u00C0-\u017F\s, . ]+$'),
        check('datosPrincipales.apellido', 'El apellido es obligatorio. (*)').trim().notEmpty(),
        check('datosPrincipales.apellido', 'El apellido ingresado no es válido.').isLength({ min: 3, max: 50 }).matches('^[a-zA-Z\u00C0-\u017F\s, . ]+$'),
        check('datosPrincipales.tipoDNI', 'Seleccione el tipo de ID. (*)').trim().notEmpty(),
        check('datosPrincipales.DNI', 'El DNI es obligatorio. (*)').trim().notEmpty(),
        // TO DO: mejorar la validación del DNI
        check('datosPrincipales.DNI', 'El DNI ingresado no es válido.').isNumeric(),
        // Datos fiscales nacionales
        check('datosFiscalesNacionales.tipoCF', 'Seleccione el tipo de Clave Fiscal. (*)').trim().notEmpty(),
        check('datosFiscalesNacionales.CF', 'La Clave Fiscal es obligatoria. (*)').trim().notEmpty(),
        // TO DO: mejorar la validación de la CF (CUIL o CUIT)
        check('datosFiscalesNacionales.CF', 'La Clave Fiscal ingresada no es válida.').isNumeric(),
        check('datosFiscalesNacionales.tipoIVA', 'Seleccione el tipo Responsable IVA. (*)').trim().notEmpty(),
        check('datosFiscalesNacionales.tipoGanancias', 'Seleccione el tipo Responsable Ganancias. (*)').trim().notEmpty(),
        // Datos personales
        check('datosPersonales.fechaNacimiento', 'La fecha de nacimiento es obligatoria. (*)').trim().notEmpty(),
        // YYYY - MM - DD
        check('datosPersonales.fechaNacimiento', 'La fecha de nacimiento ingresada no es válida.').isDate(),
        check('datosPersonales.sexo', 'Seleccione el sexo. (*)').trim().notEmpty(),
        check('datosPersonales.estadoCivil', 'Seleccione el estado civil. (*)').trim().notEmpty(),
        check('datosPersonales.idioma', 'Seleccione el idioma. (*)').trim().notEmpty(),
        check('datosPersonales.nacionalidad', 'Seleccione la nacionalidad. (*)').trim().notEmpty(),
        check('datosPersonales.paisResidencia', 'Seleccione el país de residencia. (*)').trim().notEmpty(),
        check('datosPersonales.lugarNacimiento', 'Indique lugar de nacimiento. (*)').trim().notEmpty(),
        check('datosPersonales.lugarNacimiento', 'El lugar de nacimiento ingresado no es válido.').isLength({ min: 4, max: 50 }).matches('^[a-zA-Z\u00C0-\u017F\s, . ]+$'),
        check('datosPersonales.profesion', 'La profesión es obligatoria. (*)').trim().notEmpty(),
        check('datosPersonales.profesion', 'La profesión ingresada no es válida.').isLength({ min: 4, max: 50 }).matches('^[a-zA-Z\u00C0-\u017F\s, . ]+$'),
        // Medios de comunicación
        check('mediosComunicacion.email', 'El e-mail es obligatorio. (*)').trim().notEmpty(),
        check('mediosComunicacion.email', 'El e-mail ingresado no es válido. (*)').isEmail().normalizeEmail(),
        check('mediosComunicacion.usoEmail', 'Seleccione el tipo de uso. (*)').trim().notEmpty(),
        check('mediosComunicacion.telefono', 'El teléfono es obligatorio. (*)').trim().notEmpty(),
        // TO DO: mejorar la validación del teléfono
        check('mediosComunicacion.telefono', 'El teléfono ingresado no es válido. (*)').isNumeric(),
        check('mediosComunicacion.usoTelefono', 'Seleccione el tipo de uso. (*)').trim().notEmpty(),
        // Domicilios urbanos
        check('domiciliosUrbanos.calle', 'La calle es obligatoria. (*)').trim().notEmpty(),
        check('domiciliosUrbanos.calle', 'La calle ingresada no es válida.').isLength({ min: 3, max: 50 }).matches('^[a-zA-Z0-9\u00C0-\u017F\s, . ]+$'),
        check('domiciliosUrbanos.numero', 'El número es obligatorio. (*)').trim().notEmpty(),
        check('domiciliosUrbanos.numero', 'El número ingresado no es válido').isInt(),
        check('domiciliosUrbanos.lugar', 'Seleccione el lugar. (*)').trim().notEmpty(),
        check('domiciliosUrbanos.lugar', 'El lugar ingresado no es válido.').isLength({ min: 3, max: 50 }).matches('^[a-zA-Z0-9\u00C0-\u017F\s, . ]+$'),
        check('domiciliosUrbanos.codigoPostal', 'El código postal es obligatorio. (*)').trim().notEmpty(),
        // TO DO: mejorar la validacón del código postal
        check('domiciliosUrbanos.codigoPostal', 'El código postal ingresado no es válido.').isNumeric(),
        // Cuentas bancarias
        check('cuentasBancarias.tipoID', 'Seleccione el tipo de ID. (*)').trim().notEmpty(),
        check('cuentasBancarias.ID', 'El CBU / CVU es obligatorio. (*)').trim().notEmpty(),
        check('cuentasBancarias.ID', 'El CBU / CVU ingresado no es válido.').isLength(22).isInt(),
        check('cuentasBancarias.tipoCuenta', 'Seleccione el tipo de cuenta. (*)').trim().notEmpty(),
        check('cuentasBancarias.moneda', 'Seleccione el tipo de moneda. (*)').trim().notEmpty(),
        check('cuentasBancarias.usoCuenta', 'Seleccione el tipo de uso. (*)').trim().notEmpty(),
        // Información patrimonial
        check('informacionPatrimonial.fecha', 'La fecha es obligatoria. (*)').trim().notEmpty(),
        // YYYY - MM - DD
        check('informacionPatrimonial.fecha', 'La fecha ingresada no es válida.').isDate(),
        check('informacionPatrimonial.ingresosAnuales', 'Los ingresos son obligatorios. (*)').trim().notEmpty(),
        check('informacionPatrimonial.ingresosAnuales', 'Los ingresos declarados no son válidos.').isNumeric(),
        check('informacionPatrimonial.inversores', 'El porcentaje destinado a inversores es obligatorio. (*)').trim().notEmpty(),
        check('informacionPatrimonial.inversores', 'El porcentaje declarado no es válido.').isNumeric(),
        check('informacionPatrimonial.procedenciaFondos', 'La procedencia de los fondos es obligatoria. (*)').trim().notEmpty(),
        check('informacionPatrimonial.observaciones', 'Las observaciones son obligatorias. (*)').optional().trim().notEmpty(),
        check('informacionPatrimonial.observaciones', 'El texto es demasiado corto o contiene caracteres especiales.').optional().isLength({ min: 10 }).matches('^[a-zA-Z\u00C0-\u017F\s, . ]+$'),
        check('informacionPatrimonial.medioFondeo', 'El medio de fondeo es obligatorio. (*)').trim().notEmpty(),
        camposValidaciones
    ]
};
