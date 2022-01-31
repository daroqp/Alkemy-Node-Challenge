const express = require('express');
const cors = require('cors');
const { join } = require('path');

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.userAuthPath = '/auth';

        this.middlewares();
        this.routes();
    }

    middlewares() {

        this.app.use( cors() );
        this.app.use( express.json() );

        this.app.set('views', join(__dirname, '../views'));
        this.app.set('view engine', 'ejs');
    }

    routes() {
        this.app.use(this.userAuthPath, require('../routes/users.route'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Server running on port: ' + this.port );
        });
    }
}

module.exports = Server;