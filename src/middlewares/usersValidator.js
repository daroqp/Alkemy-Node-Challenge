const { validationResult } = require('express-validator');
const { response } = require('express');

const validateResult = (req, res=response, next) => {

    try {
        validationResult(req).throw()
        return next();
    } catch (error) {
        res.status(403).json({ errors: error.array() });
    }
}

module.exports = validateResult;