
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.SECRET;

generateAccessToken = async ( user ) => {
    return jwt.sign(
        {
            id: user.id,
            role: user.role
        },
        JWT_SECRET,
        {
            expiresIn: "2h"
        }
    );
},

validateToken = async ( token ) => {
    try {
        return jwt.verify( token, JWT_SECRET );
    } catch ( error ) {
        return null;
    }
}

module.exports = {
    generateAccessToken,
    validateToken,
}
    