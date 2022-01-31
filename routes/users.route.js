const { Router } = require('express');
const { getLogin } = require('../controllers/users.controller');

const router = Router();


router.get('/login', getLogin );


module.exports = router;