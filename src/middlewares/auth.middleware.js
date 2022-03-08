const { validateToken } = require('../helpers/auth.helper');

module.exports = {

    checkAuth : async ( req, res, next ) => {
        try {
            const accessToken = req.headers['authorization'];
            if( !accessToken )  res.status(409).json({ msg: "Access denied" });
            
            const tokenData = await validateToken( accessToken );
            if( tokenData.id ) {
                next();
            } else {
                res.status(409).json({ msg: "Access denied, token expired or incorrect" });
            }
        } catch (error) {
            console.log( error );
            res.status(409).json({
                msg: 'Access denied'
            })
        }

    },

    checkRoleAuth : ( roles ) => async (req, res, next) => {
        
        try {
            const accessToken = req.headers['authorization'];
            const tokenData = await validateToken( accessToken );
            const roleUser =  tokenData.role;
    
            if( [...roles ].includes(roleUser) ){
                next();
            } else {
                res.status(409).json({ msg: "You don't have permissions" });
            }  
        } catch (error) {
            console.log( error )
            res.status(409).json({
                msg: "You don't have permissions"
            });
        }
    }
}