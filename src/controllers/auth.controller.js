const User = require('../models/User');
const uuid = require('uuid');
const bcrypt = require('bcryptjs');
const { generateAccessToken } = require('../helpers/auth.helper')

module.exports = {
    
    getLogin: (req, res) => {
        res.render('login/index');
    },

    getRegister: (req, res) => {
        res.render('login/register');
    },

    postAuthLogin: async (req, res) => {
        
        const { email, password } = req.body;
        
        try {
            const userDB = await User.findOne({ where: { email: email } });
            
            const passwordCorrect = userDB === null
                ? false
                : await bcrypt.compare(password, userDB.password);

            if(!( userDB && passwordCorrect )){
                res.status(401).json({
                    error: 'invalid user or password'
                })
            }
            
            const accessToken = await generateAccessToken( userDB );

            res.header('authorization', accessToken).json({
                name: userDB.name,
                token: accessToken,
                messagge: 'User authenticate',
            })

        } catch (error) {
           throw new Error( error );
        }

    },


    postAuthRegister: async (req, res) => {
       
        const { name, email, password } = req.body;
        
        const id = uuid.v4();
        const saltRounds = bcrypt.genSaltSync();
        const hash = bcrypt.hashSync(password, saltRounds);
        
        try {
            await User.create({
                id: id,
                name: name,
                email: email,
                password: hash,
                google: 0,
                status: 1,
            });   
            
            res.status(201).json({
                name: name,
                email: email,
                msg: "Created successfully"
            })
        } catch (error) {
            throw new Error( error );  
        }

    },

}