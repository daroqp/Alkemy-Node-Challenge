const { check } = require('express-validator');
const { hasEmail, validateResult } = require('../../helpers/validator.helper');

const validateUser = [
    check('name')
        .notEmpty()
        .withMessage('Must be filled the name field.'),
    check('password')
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

module.exports = validateUser;