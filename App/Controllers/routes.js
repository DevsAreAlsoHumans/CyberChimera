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
  
      this.app.get('/game1', (req, res) => {
        res.sendFile(__dirname.replace('Controllers', '') + '/templates/game1.html');
      });

      this.app.get('/game2', (req, res) => {
        res.sendFile(__dirname.replace('Controllers', '') + '/templates/game2.html');
      });

<<<<<<< HEAD
      this.app.get('/game3', (req, res) => {
        res.sendFile(__dirname.replace('Controllers', '') + '/templates/game3.html');
=======
      this.app.get('/game4', (req, res) => {
        res.sendFile(__dirname.replace('Controllers', '') + '/templates/game4.html');
>>>>>>> 987833870191e3ab41853e8f51f451d4d08246cf
      });

      this.app.get('/games', (req, res) => {
        res.sendFile(__dirname.replace('Controllers', '') + '/templates/gamesList.html');
      });

      this.app.get('*', (req, res) => {
        res.sendFile(__dirname.replace('Controllers', '') + '/templates/error404.html');
      });
    }
}
  
module.exports = {
    Routes
};  