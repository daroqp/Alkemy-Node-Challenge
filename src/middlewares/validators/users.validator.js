const { check } = require('express-validator');
const { hasEmail, validateResult } = require('../../helpers/validator.helper');

const validateUser = [
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
        .custom( hasEmail ),
    (req, res, next) => {
        validateResult(req, res, next);
    }
]

module.exports = validateUser;