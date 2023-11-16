class Routes {
    constructor(app, db) {
      this.app = app;
      this.db = db;
    }
  
    setup() {
      // Ajout des routes ici
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
        res.sendFile(__dirname + '/templates/acceuil.html');
      });
  
      this.app.get('/login', (req, res) => {
        res.sendFile(__dirname + '/templates/login.html');
      });
  
      this.app.get('/register', (req, res) => {
        res.sendFile(__dirname + '/templates/register.html');
      });
  
      this.app.get('/profil', (req, res) => {
        res.sendFile(__dirname + '/templates/profil.html');
      });
  
      this.app.get('/', (req, res) => {
        res.sendFile(__dirname + '/templates/error404.html');
      });
    }
  }
  
module.exports = {
    Routes
};