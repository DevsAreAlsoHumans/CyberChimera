class Routes {
    constructor(app, db) {
      this.app = app;
      this.db = db;
    }

    setup() {

      this.app.post('/ajout_compte', (req, res) => {
        const pseudo = req.body.pseudo;
        const email = req.body.email;
        const password = req.body.password;
        
        this.db.ajoutCompte(pseudo, email, password, (result) => {
          res.json(result);
        });
      });

      this.app.post('/recup_compte', (req, res) => {
        const email = req.body.email;
        this.db.recupCompte(email, (result) => {
          res.json(result);
        });
      });
      this.app.post('/connexion_compte', (req, res) => {
        const email = req.body.email;
        const password = req.body.password;
  
        this.db.connexionCompte(email, password, (result) => {
          res.json(result);
        });
      });
  
      this.app.get('/acceuil', (req, res) => {
        res.sendFile(__dirname.replace('Controllers', '') + "/templates/acceuil.html");
      });
  
      this.app.get('/login', (req, res) => {
        res.sendFile(__dirname.replace('Controllers', '') + '/templates/login.html');
      });
  
      this.app.get('/register', (req, res) => {
        res.sendFile(__dirname.replace('Controllers', '') + '/templates/register.html');
      });
  
      this.app.get('/profil', (req, res) => {
        res.sendFile(__dirname.replace('Controllers', '') + '/templates/profil.html');
      });
  
      this.app.get('/game', (req, res) => {
        res.sendFile(__dirname.replace('Controllers', '') + '/templates/game.html');
      });

      this.app.get('/game2', (req, res) => {
        res.sendFile(__dirname.replace('Controllers', '') + '/templates/game2.html');
      });

      this.app.get('/interface', (req, res) => {
        res.sendFile(__dirname.replace('Controllers', '') + '/templates/interface.html');
      });

      this.app.get('/', (req, res) => {
        res.sendFile(__dirname.replace('Controllers', '') + '/templates/error404.html');
      });
    }
  }
  
module.exports = {
    Routes
};