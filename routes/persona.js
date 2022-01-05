/*
    Persona routes
    host + /api/persona
*/

const { Router } = require('express');
const router = Router();
const { personaFisicaValidaciones } = require('../middlewares/personaFisica');
const { personaFisica, personaJuridica } = require('../controllers/persona');

router.post(
    '/fisica',
    personaFisicaValidaciones,
    personaFisica
);

router.post('/juridica', personaJuridica);

module.exports = router;
