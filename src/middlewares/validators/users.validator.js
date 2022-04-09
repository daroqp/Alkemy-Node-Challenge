const { check } = require('express-validator');
const { hasEmail, validateResult } = require('../../helpers/validator.helper');

const validateUserRegister = [
    check('name')
        .exists()
        .notEmpty()
        .withMessage('Must be filled the name field.'),
    check('password')
        .exists()
        .notEmpty()
        .withMessage('Must be filled the password field.'),
    check('email')
        .exists()    
        .isEmail()
        .withMessage('Must be filled the email field.')
        .custom( hasEmail ),
    (req, res, next) => {
        validateResult(req, res, next);
    }
]

const validateUserLogin = [
    check('password')
        .exists()
        .notEmpty()
        .withMessage('Must be filled the password field.'),
    check('email')
        .exists()    
        .isEmail()
        .withMessage('Must be filled the email field.'),
    (req, res, next) => {
        validateResult(req, res, next);
    }
]

module.exports = {
    validateUserRegister,
    validateUserLogin
}