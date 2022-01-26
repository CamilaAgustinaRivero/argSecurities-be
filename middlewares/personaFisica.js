const { check } = require('express-validator');
const { camposValidaciones } = require('./campos');

module.exports = {
    personaFisicaValidaciones: [
        check('titular.personaFisica', 'No es una persona física.').notEmpty().isBoolean().matches('true'),
        // Datos principales
        check('titular.datosPrincipalesFisicas.nombre', 'El nombre es obligatorio. (*)').trim().notEmpty(),
        check('titular.datosPrincipalesFisicas.nombre', 'El nombre ingresado no es válido.').isLength({ min: 3, max: 50 }).matches('^[a-zA-Z\u00C0-\u017F\s, . ]+$'),
        check('titular.datosPrincipalesFisicas.apellido', 'El apellido es obligatorio. (*)').trim().notEmpty(),
        check('titular.datosPrincipalesFisicas.apellido', 'El apellido ingresado no es válido.').isLength({ min: 3, max: 50 }).matches('^[a-zA-Z\u00C0-\u017F\s, . ]+$'),
        check('titular.datosPrincipalesFisicas.tipoID', 'Seleccione el tipo de ID. (*)').trim().notEmpty(),
        check('titular.datosPrincipalesFisicas.id', 'El DNI es obligatorio. (*)').trim().notEmpty(),
        check('titular.datosPrincipalesFisicas.id', 'El DNI ingresado no es válido.').isNumeric(),

        // Datos fiscales nacionales
        check('titular.datosFiscales.tipoCodigo', 'Seleccione el tipo de Clave Fiscal. (*)').trim().notEmpty(),
        check('titular.datosFiscales.cuit', 'La Clave Fiscal es obligatoria. (*)').trim().notEmpty(),
        check('titular.datosFiscales.cuit', 'La Clave Fiscal ingresada no es válida.').isNumeric(),
        check('titular.datosFiscales.tipoResponsableIVA', 'Seleccione el tipo Responsable IVA. (*)').trim().notEmpty(),
        check('titular.datosFiscales.tipoResponsableGanancias', 'Seleccione el tipo Responsable Ganancias. (*)').trim().notEmpty(),
        check('titular.codigosActividades', 'El texto es demasiado largo.').optional().trim().isLength({ max: 50 }),

        // Datos personales
        check('titular.datosPersonales.fechaNacimiento', 'La fecha de nacimiento es obligatoria. (*)').trim().notEmpty(),
        // YYYY - MM - DD
        check('titular.datosPersonales.fechaNacimiento', 'La fecha de nacimiento ingresada no es válida.').notEmpty(),
        check('titular.datosPersonales.sexo', 'Seleccione el sexo. (*)').trim().notEmpty(),
        check('titular.datosPersonales.estadoCivil', 'Seleccione el estado civil. (*)').trim().notEmpty(),
        check('titular.datosPersonales.idioma', 'Seleccione el idioma. (*)').trim().notEmpty(),
        check('titular.datosPersonales.nacionalidad', 'Seleccione la nacionalidad. (*)').trim().notEmpty(),
        check('titular.datosPersonales.paisResidencia', 'Seleccione el país de residencia. (*)').trim().notEmpty(),
        check('titular.datosPersonales.paisOrigen', 'Seleccione el país de origen.').optional().trim(),
        check('titular.datosPersonales.lugarNacimiento', 'Indique lugar de nacimiento. (*)').trim().notEmpty(),
        check('titular.datosPersonales.lugarNacimiento', 'El lugar de nacimiento ingresado no es válido.').isLength({ min: 4, max: 50 }).matches('^[a-zA-Z\u00C0-\u017F\s, . ]+$'),
        check('titular.datosPersonales.cie', 'El texto es demasiado largo.').optional().trim().isLength({ max: 50 }),
        check('titular.datosPersonales.actividad', 'La profesión es obligatoria. (*)').trim().notEmpty(),
        check('titular.datosPersonales.actividad', 'La profesión ingresada no es válida.').isLength({ min: 4, max: 50 }).matches('^[a-zA-Z\u00C0-\u017F\s, . ]+$'),

        // Datos cónyuge
        check('titular.datosConyuge[0].nombre', 'El texto es demasiado largo.').optional().trim().isLength({ max: 50 }),
        check('titular.datosConyuge[0].apellido', 'El texto es demasiado largo.').optional().trim().isLength({ max: 50 }),
        check('titular.datosConyuge[0].tipoID', 'El texto es demasiado largo.').optional().trim().isLength({ max: 50 }),
        check('titular.datosConyuge[0].id', 'El texto es demasiado largo.').optional().trim().isLength({ max: 50 }),
        check('titular.datosConyuge[0].tipoFiscal', 'El texto es demasiado largo.').optional().trim().isLength({ max: 50 }),
        check('titular.datosConyuge[0].claveFiscal', 'El texto es demasiado largo.').optional().trim().isLength({ max: 50 }),

        // Medios de comunicación
        check('titular.mediocomunicacion[0].tipo', 'El  tipo es obligatorio. (*)').trim().notEmpty(),
        check('titular.mediocomunicacion[0].medio', 'El e-mail es obligatorio. (*)').trim().notEmpty(),
        check('titular.mediocomunicacion[0].medio', 'El e-mail ingresado no es válido. (*)').isEmail().normalizeEmail(),
        check('titular.mediocomunicacion[0].uso', 'Seleccione el tipo de uso. (*)').trim().notEmpty(),
        check('titular.mediocomunicacion[0].principal', 'La opción seleccionada no es válida.').optional().isBoolean(),
        check('titular.mediocomunicacion[1].tipo', 'El  tipo es obligatorio. (*)').trim().notEmpty(),
        check('titular.mediocomunicacion[1].medio', 'El teléfono es obligatorio. (*)').trim().notEmpty(),
        check('titular.mediocomunicacion[1].medio', 'El teléfono ingresado no es válido. (*)').isNumeric(),
        check('titular.mediocomunicacion[1].uso', 'Seleccione el tipo de uso. (*)').trim().notEmpty(),
        check('titular.mediocomunicacion[1].principal', 'La opción seleccionada no es válida.').optional().isBoolean(),

        // Domicilios urbanos
        check('titular.domicilioUrbano[0].uso', 'Seleccione el tipo de uso (*).').trim().notEmpty(),
        check('titular.domicilioUrbano[0].barrio', 'El barrio ingresado no es válido.').optional().trim().isLength({ max: 50 }),
        check('titular.domicilioUrbano[0].calle', 'La calle es obligatoria. (*)').trim().notEmpty(),
        check('titular.domicilioUrbano[0].calle', 'La calle ingresada no es válida.').isLength({ min: 3, max: 50 }).matches('^[a-zA-Z0-9\u00C0-\u017F\s, . ]+$'),
        check('titular.domicilioUrbano[0].numero', 'El número es obligatorio. (*)').trim().notEmpty(),
        check('titular.domicilioUrbano[0].numero', 'El número ingresado no es válido').isInt(),
        check('titular.domicilioUrbano[0].torre', 'La torre ingresada no es válida.').optional().trim().isLength({ max: 50 }),
        check('titular.domicilioUrbano[0].piso', 'El piso ingresado no es válido.').optional().trim().isLength({ max: 50 }),
        check('titular.domicilioUrbano[0].departamento', 'El departamento ingresado no es válido.').optional().trim().isLength({ max: 50 }),
        check('titular.domicilioUrbano[0].lugar', 'El lugar es obligatorio.').trim().notEmpty(),
        check('titular.domicilioUrbano[0].lugar', 'El lugar ingresado no es válido.').isLength({ min: 3, max: 50 }).matches('^[a-zA-Z0-9\u00C0-\u017F\s, . ]+$'),
        check('titular.domicilioUrbano[0].codigoPostal', 'El código postal es obligatorio. (*)').trim().notEmpty(),
        check('titular.domicilioUrbano[0].codigoPostal', 'El código postal ingresado no es válido.').isNumeric(),
        check('titular.domicilioUrbano[0].notas', 'El texto es demasiado largo.').optional().trim().isLength({ max: 50 }),
        /* --- */
        check('titular.domicilioUrbano[1].uso', 'La opción seleccionada no es válida.').optional().trim(),
        check('titular.domicilioUrbano[1].barrio', 'El barrio ingresado no es válido.').optional().trim().isLength({ max: 50 }),
        check('titular.domicilioUrbano[1].calle', 'La calle ingresada no es válida.').optional().isLength({ max: 50 }).matches('^[a-zA-Z0-9\u00C0-\u017F\s, . ]+$'),
        check('titular.domicilioUrbano[1].numero', 'El número ingresado no es válido').optional().trim(),
        check('titular.domicilioUrbano[1].torre', 'La torre ingresada no es válida.').optional().trim().isLength({ max: 50 }),
        check('titular.domicilioUrbano[1].piso', 'El piso ingresado no es válido.').optional().trim().isLength({ max: 50 }),
        check('titular.domicilioUrbano[1].departamento', 'El departamento ingresado no es válido.').optional().trim().isLength({ max: 50 }),
        check('titular.domicilioUrbano[1].lugar', 'El lugar ingresado no es válido.').optional().isLength({ max: 50 }).matches('^[a-zA-Z0-9\u00C0-\u017F\s, . ]+$'),
        check('titular.domicilioUrbano[1].codigoPostal', 'El código postal ingresado no es válido.').optional().isNumeric(),
        check('titular.domicilioUrbano[1].notas', 'El texto es demasiado largo.').optional().trim().isLength({ max: 50 }),
        /* --- */
        check('titular.domicilioUrbano[2].uso', 'La opción seleccionada no es válida.').optional().trim(),
        check('titular.domicilioUrbano[2].barrio', 'El barrio ingresado no es válido.').optional().trim().isLength({ max: 50 }),
        check('titular.domicilioUrbano[2].calle', 'La calle ingresada no es válida.').optional().isLength({ max: 50 }).matches('^[a-zA-Z0-9\u00C0-\u017F\s, . ]+$'),
        check('titular.domicilioUrbano[2].numero', 'El número ingresado no es válido.').optional().trim(),
        check('titular.domicilioUrbano[2].torre', 'La torre ingresada no es válida.').optional().trim().isLength({ max: 50 }),
        check('titular.domicilioUrbano[2].piso', 'El piso ingresado no es válido.').optional().trim().isLength({ max: 50 }),
        check('titular.domicilioUrbano[2].departamento', 'El departamento ingresado no es válido.').optional().trim().isLength({ max: 50 }),
        check('titular.domicilioUrbano[2].lugar', 'El lugar ingresado no es válido.').optional().isLength({ max: 50 }).matches('^[a-zA-Z0-9\u00C0-\u017F\s, . ]+$'),
        check('titular.domicilioUrbano[2].codigoPostal', 'El código postal ingresado no es válido.').optional().isNumeric(),
        check('titular.domicilioUrbano[2].notas', 'El texto es demasiado largo.').optional().trim().isLength({ max: 50 }),

        // Cuenta bancaria
        check('titular.cuentaBancaria[0].tipoID', 'Seleccione el tipo de ID. (*)').trim().notEmpty(),
        check('titular.cuentaBancaria[0].cbu', 'El CBU / CVU es obligatorio. (*)').trim().notEmpty(),
        check('titular.cuentaBancaria[0].cbu', 'El CBU / CVU ingresado no es válido.').isLength(22).isInt(),
        check('titular.cuentaBancaria[0].alias', 'El texto es demasiado largo.').optional().trim().isLength({ max: 50 }),
        check('titular.cuentaBancaria[0].interbanking', 'La opción seleccionada no es válida.').optional().isBoolean(),
        check('titular.cuentaBancaria[0].denominacion', 'El texto es demasiado largo.').optional().trim().isLength({ max: 50 }),
        check('titular.cuentaBancaria[0].tipo', 'Seleccione el tipo de cuenta. (*)').trim().notEmpty(),
        check('titular.cuentaBancaria[0].moneda', 'Seleccione el tipo de moneda. (*)').trim().notEmpty(),
        check('titular.cuentaBancaria[0].numero', 'El número ingresado no es válido.').optional().trim(),
        check('titular.cuentaBancaria[0].uso', 'Seleccione el tipo de uso. (*)').trim().notEmpty(),
        check('titular.cuentaBancaria[0].notas', 'El texto es demasiado largo.').optional().trim().isLength({ max: 50 }),

        // Cuenta bancaria exterior
        check('titular.cuentaBancaria[0].cuenta', 'El texto es demasiado largo.').optional().trim().isLength({ max: 50 }),
        check('titular.cuentaBancaria[0].moneda', 'El texto es demasiado largo.').optional().trim().isLength({ max: 50 }),
        check('titular.cuentaBancaria[0].banco', 'El texto es demasiado largo.').optional().trim().isLength({ max: 50 }),
        check('titular.cuentaBancaria[0].denominacion', 'El texto es demasiado largo.').optional().trim().isLength({ max: 50 }),
        check('titular.cuentaBancaria[0].direccion', 'El texto es demasiado largo.').optional().trim().isLength({ max: 50 }),
        check('titular.cuentaBancaria[0].holderType', 'El texto es demasiado largo.').optional().trim().isLength({ max: 50 }),
        check('titular.cuentaBancaria[0].accountType', 'El texto es demasiado largo.').optional().trim().isLength({ max: 50 }),
        check('titular.cuentaBancaria[0].nroBancoABA', 'El número ingresado no es válido.').optional().trim(),
        check('titular.cuentaBancaria[0].idSWIFT', 'El texto es demasiado largo.').optional().trim().isLength({ max: 50 }),
        check('titular.cuentaBancaria[0].notas', 'El texto es demasiado largo.').optional().trim().isLength({ max: 50 }),

        // Información patrimonial
        check('titular.infoPatrimonial[0].fecha', 'La fecha es obligatoria. (*)').trim().notEmpty(),
        // YYYY - MM - DD
        check('titular.infoPatrimonial[0].fecha', 'La fecha ingresada no es válida.').notEmpty(),
        check('titular.cuentaBancaria[0].patrimonio', 'El texto es demasiado largo.').optional().trim().isLength({ max: 50 }),
        check('titular.infoPatrimonial[0].ingresos', 'Los ingresos son obligatorios. (*)').trim().notEmpty(),
        check('titular.infoPatrimonial[0].ingresos', 'Los ingresos declarados no son válidos.').isNumeric(),
        check('titular.infoPatrimonial[0].inversion', 'El porcentaje destinado a inversores es obligatorio. (*)').trim().notEmpty(),
        check('titular.infoPatrimonial[0].inversion', 'El porcentaje declarado no es válido.').isNumeric(),
        check('titular.infoPatrimonial[0].procedenciaFondos', 'La procedencia de los fondos es obligatoria. (*)').optional(),
        check('titular.infoPatrimonial[0].observaciones', 'El texto es demasiado largo.').optional().trim().isLength({ max: 50 }),

        // Actividades
        check('titular.actividadPersona[0].actividad', 'La actividad principal es obligatoria. (*)').trim().notEmpty(),
        check('titular.actividadPersona[0].codigoTipoActividad', 'El texto es demasiado largo.').optional().trim().isLength({ max: 50 }),
        check('titular.actividadPersona[0].rubro', 'El texto es demasiado largo.').optional().trim().isLength({ max: 50 }),
        check('titular.actividadPersona[0].puesto', 'El texto es demasiado largo.').optional().trim().isLength({ max: 50 }),
        check('titular.actividadPersona[0].departamento', 'El texto es demasiado largo.').optional().trim().isLength({ max: 50 }),
        check('titular.actividadPersona[0].organizacion', 'El texto es demasiado largo.').optional().trim().isLength({ max: 50 }),
        check('titular.actividadPersona[0].inicio', 'El texto es demasiado largo.').optional().trim(),
        check('titular.actividadPersona[0].fin', 'El texto es demasiado largo.').optional().trim(),
        check('titular.actividadPersona[0].observaciones', 'El texto es demasiado largo.').optional().trim().isLength({ max: 50 }),
        
        // Declaraciones
        check('titular.declaracionesPF.expuestaPoliticamente', 'La opción seleccionada no es válida.').optional().isBoolean(),
        check('titular.declaracionesPF.detalleExpPoliticamente', 'El texto es demasiado largo.').optional().trim().isLength({ max: 50 }),
        check('titular.declaracionesPF.sujetoObligado', 'La opción seleccionada no es válida.').optional().isBoolean(),
        check('titular.declaracionesPF.sujetoObligadoUIF', 'El texto es demasiado largo.').optional().trim().isLength({ max: 50 }),
        check('titular.declaracionesPF.numeroInscripcion', 'El texto es demasiado largo.').optional().trim().isLength({ max: 50 }),
        camposValidaciones
    ]
};
