const User = require('../models/User');
const { validationResult } = require('express-validator');

const validateResult = (req, res, next) => {

    try {
        validationResult(req).throw()
        return next();
    } catch (error) {
        res.status(403).json({ errors: error.array() });
    }
}

const hasEmail = async ( email ) => {
    const userEmail = await User.findOne({ where: { email: email } })
    if( userEmail ){
        throw new Error( 'Email existente' )
    }
}


module.exports = {
    validateResult,
    hasEmail,
}