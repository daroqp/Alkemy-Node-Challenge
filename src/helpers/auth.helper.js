const jwt = require('jsonwebtoken');

module.exports = {
    generateAccessToken: async ( user ) => {
        return jwt.sign(
            {
                id: user.id,
                role: user.role
            },
            process.env.SECRET,
            {
                expiresIn: "2h"
            }
        );
    },

    validateToken: async ( token ) => {
        try {
            return jwt.verify(token, process.env.SECRET);
        } catch (error) {
            return null;
        }
    },
    
}