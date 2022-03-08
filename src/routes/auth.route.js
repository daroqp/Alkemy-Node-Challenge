const { Router } = require('express');
const router = Router();

const { getLogin, 
        getRegister, 
        postAuthLogin, 
        postAuthRegister 
    } = require('../controllers/auth.controller');
const validateUser = require('../middlewares/validators/users.validator');



router.get('/login', getLogin );
router.get('/register', getRegister );
router.post('/login', postAuthLogin );
router.post('/register',validateUser ,postAuthRegister );


module.exports = router;