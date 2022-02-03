const { check } = require('express-validator');
const validateResult = require('../middlewares/usersValidator');
const db = require('../database/models/index');

const validateCreate = [
    check('name')
        .notEmpty()
        .withMessage('Debes llenar el campo name'),
    check('password')
        .notEmpty()
        .withMessage('Debes llenar el campo password'),
    check('email')
        .exists()    
        .isEmail()
        .withMessage('Debes llenar el campo email')
        .custom( async value => {
             const userEmail = await db.Users.findOne({ where: { email: value } })
             if( userEmail ){
                 throw new Error( 'Email existente' )
             }
        }).withMessage('Email en uso'),
    (req, res, next) => {
        validateResult(req, res, next);
    }
]

module.exports = validateCreate;