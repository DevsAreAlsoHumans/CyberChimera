const mysql = require('mysql');

const db = mysql.createConnection({ host: "localhost", user: "root", password: "", database: "cyberchimera" });

const authUtils = require('./utils');

db.connect((err) => {
    if (err) throw err;
    console.log("Connecté à la base de données MySQL!");
});

function ajoutCompte(pseudo, email, password, callback) {
    [hashedpassword, salt] = authUtils.hash_password(password);
    db.query("INSERT INTO user (pseudo, email, password, salt) VALUES (?, ?, ?, ?)", [pseudo, email, hashedpassword, salt], (err, result) => {
        if (err) {
            callback({ success: false, message: "Une erreur s'est produite lors de l'inscription." });
        } else {
            callback({ success: true, message: "Inscription réussie !" });
            
        }
    });
}

function connexionCompte(email, password, callback) {
    db.query("SELECT * FROM user WHERE email = ?", [email], (err, result) => {
        if (err) throw err;
        if (result.length!= 0) { 
            user = authUtils.is_password_good(password,result);
            if (user != false)  {
                req.session.user = {
                    pseudo: user.pseudo,
                    email: user.email
                };
            }
            else {
                console.log("NOT CONNECTED")
            }
        }
        callback(result);
    });
}

module.exports = {
    ajoutCompte,
    connexionCompte
};
