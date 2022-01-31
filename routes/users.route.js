const { Router } = require('express');
const router = Router();

const { getLogin, 
        getRegister, 
        postAuthLogin, 
        postAuthRegister 
    } = require('../controllers/users.controller');



router.get('/login', getLogin );
router.get('/register', getRegister );
router.post('/auth', postAuthLogin );
router.post('/register', postAuthRegister );


module.exports = router;