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


    postAuthRegister: (req, res) => {
        
        const { name, email, password } = req.body;

        res.json({
            name: name,
            email: email,
            msg: "Created successfully"
        })
    },

}