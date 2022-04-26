const express = require("express");
const cors = require("cors");
const { join } = require("path");
const db = require("../database/models");

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../../docs/index.js");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.paths = {
      userAuth: "/auth",
      character: "/characters",
      movies: "/movies",
      docs: "/docs",
    };

    this.dbConnection();
    this.middlewares();
    this.routes();
  }

  async dbConnection() {
    try {
      await db.sequelize.authenticate();
      console.log("Database online");
    } catch (error) {
      throw new Error(error);
    }
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.paths.userAuth, require("../routes/auth.route"));
    this.app.use(this.paths.character, require("../routes/character.route"));
    this.app.use(this.paths.movies, require("../routes/movie.route"));
    this.app.use(
      this.paths.docs,
      swaggerUi.serve,
      swaggerUi.setup(swaggerDocument)
    );
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running on http://localhost:${this.port}/docs`);
    });
  }
}

module.exports = Server;
