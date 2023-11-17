const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const database = require('./Model/database')
const route = require('./Controllers/routes')

class Server {
  constructor() {
    this.app = express();
    this.port = 3000;

    // Middleware
    this.app.use(express.static(path.join(__dirname, 'public')));
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());

    // Database
    this.db = new database.DatabaseFunctions();

    // Routes
    this.setupRoutes();

    // Start the server
    this.app.listen(this.port, () => {
      console.log(`Le serveur est lancé sur http://localhost:${this.port}/acceuil`);
    });
  }

  setupRoutes() {
    const routes = new route.Routes(this.app, this.db);
    routes.setup();
  }
}

// Démarrage du serveur
const server = new Server();
