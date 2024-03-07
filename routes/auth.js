const {Router, response} = require('express');
const { crearUsuario, login, renewToken } = require('../controllers/auth');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const router = Router();

router.post('/new', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'La contresañe es obligatoria').not().isEmpty(),
    check('email', 'El correo es obligatorio').isEmail(),
    validarCampos,
] , crearUsuario);

router.post('/', [
    check('password', 'La contresañe es obligatoria').not().isEmpty(),
    check('email', 'El correo es obligatorio').isEmail(),
], login);

router.get('/renew', validarJWT, renewToken);




module.exports = router;