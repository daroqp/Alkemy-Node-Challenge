const express = require('express');
const cors = require('cors');
const { join } = require('path');
const sequelize = require('../database/database');

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.userAuthPath = '/auth';

        this.dbConnection();
        this.middlewares();
        this.routes();
    }

    async dbConnection() {

        try {
            await sequelize.authenticate();
            console.log('Database online');
            
        } catch (error) {
          throw new Error( error );  
        }
    }

    middlewares() {

        this.app.use( cors() );
        this.app.use( express.json() );

        this.app.set('views', join(__dirname, '../views'));
        this.app.set('view engine', 'ejs');
    }

    routes() {
        this.app.use(this.userAuthPath, require('../routes/auth.route'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Server running on port: ' + this.port );
        });
    }
}

module.exports = Server;