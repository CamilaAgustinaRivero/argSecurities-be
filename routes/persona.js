/*
    Persona routes
    host + /api/persona
*/

const { Router } = require('express');
const router = Router();
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validateFields');
const { personaFisica, personaJuridica } = require('../controllers/persona');

router.post(
    '/fisica',
    [
        check('nombre', 'El nombre es obligatorio. (*)').not().isEmpty(),
        check('apellido', 'El apellido es obligatorio. (*)').not().isEmpty(),
        check('tipoDNI', 'Ingrese tipo ID. (*)').not().isEmpty(),
        check('DNI', 'El DNI es obligatorio. (*)'),
        validateFields
    ],
    personaFisica
);

router.post('/juridica', personaJuridica);

module.exports = router;
