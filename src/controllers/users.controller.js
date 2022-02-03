const db = require('../database/models/index');
const uuid = require('uuid');
const bcrypt = require('bcrypt');
const { process_params } = require('express/lib/router');

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
        const id = uuid.v4();

        const saltRounds = bcrypt.genSaltSync();
        const hash = bcrypt.hashSync(password, saltRounds);
        
        try {
            await db.Users.create({
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