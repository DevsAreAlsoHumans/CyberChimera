const mysql = require('mysql');

const db = mysql.createConnection({ host: "localhost", user: "root", password: "", database: "cyberchimera" });

db.connect((err) => {
    if (err) throw err;
    console.log("Connecté à la base de données MySQL!");
});

function ajoutCompte(pseudo, email, password, callback) {
    db.query("INSERT INTO user (pseudo, email, password) VALUES (?, ?, ?)", [pseudo, email, password], (err, result) => {
        if (err) throw err;
        console.log(result);
        callback(result);
    });
}

function connexionCompte(email, password, callback) {
    db.query("SELECT * FROM user WHERE email = ?", [email], (err, result) => {
        if (err) throw err;
        console.log(result);
        callback(result);
    });
}

module.exports = {
    ajoutCompte,
    connexionCompte
};
