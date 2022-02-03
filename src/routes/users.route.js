const { Router } = require('express');
const router = Router();
const validateUser = require('../middlewares/validators/users.validator');

const { getLogin, 
        getRegister, 
        postAuthLogin, 
        postAuthRegister 
    } = require('../controllers/users.controller');



router.get('/login', getLogin );
router.get('/register', getRegister );
router.post('/login', postAuthLogin );
router.post('/register', validateUser, postAuthRegister );


module.exports = router;