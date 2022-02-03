const { Router } = require('express');
const router = Router();
const validateCreate = require('../validators/users');

const { getLogin, 
        getRegister, 
        postAuthLogin, 
        postAuthRegister 
    } = require('../controllers/users.controller');



router.get('/login', getLogin );
router.get('/register', getRegister );
router.post('/login', postAuthLogin );
router.post('/register', validateCreate, postAuthRegister );


module.exports = router;