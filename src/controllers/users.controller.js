const db = require('../database/models/index');

module.exports = {
    
    getLogin: (req, res) => {
        res.render('login/index');
    },

    getRegister: (req, res) => {
        res.render('login/register');
    },

    postAuthLogin: (req, res) => {
        
        const { email, password } = req.body;
    },


    postAuthRegister: async (req, res) => {
       
        const { name, email, password } = req.body;
        const id = 'uuuid';

        try {
            await db.Users.create({
                id: id,
                name: name,
                email: email,
                password: password,
                google: 0,
                status: 1,
            });   
        } catch (error) {
            throw new Error( error );  
        }

        res.json({
            name: name,
            email: email,
            msg: "Created successfully"
        })
    },

}