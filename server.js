const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const session = require('express-session');
const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname,"assets")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(session({
    secret: 'votre_secret_key',
    resave: false,
    saveUninitialized: true
}));

const db = require('./assets/js/database');

app.post('/ajout_compte', (req, res) => {
    const pseudo = req.body.pseudo;
    const email = req.body.email;
    const password = req.body.password;

    db.ajoutCompte(pseudo, email, password, (result) => {
        res.json(result);
    });
});

app.post('/connexion_compte', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    db.connexionCompte(email, password, (result) => {
        console.log(result);
        res.json(result);
    });
});

// Route pour "/documents"
app.get('/acceuil', (req, res) => {
    res.sendFile(__dirname+'/templates/acceuil.html');
});

// Route pour "/login"
app.get('/login', (req, res) => {
    res.sendFile(__dirname+"/templates/login.html");
});

// Route pour "/register"
app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/templates/register.html');
});

// Route pour "/profil"
app.get('/profil', (req, res) => {
    res.sendFile(__dirname + '/templates/profil.html');
});

app.listen(port, () => {
    console.log(`Le serveur est lancé sur http://localhost:${port}/acceuil`);
});
