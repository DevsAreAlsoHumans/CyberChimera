const mysql = require('mysql');
const passFunc = require('./assets/js/utils/isPasswodGood');
const config = require("./config")
const hash = require('./assets/js/utils/hashPassword');

class DatabaseFunctions {
    constructor() {
        this.db = mysql.createConnection({
            host: config.dbConfig.host,
            user: config.dbConfig.user,
            password: config.dbConfig.password,
            database: config.dbConfig.database,
        });
  
        this.db.connect((err) => {
            if (err) throw err;
            console.log('Connecté à la base de données MySQL!');
        });
    }
  
    ajoutCompte(pseudo, email, password, callback) {
        const [hashedpassword, salt] = hash.hash_password(password);
        this.db.query(
        'INSERT INTO user (pseudo, email, password, salt) VALUES (?, ?, ?, ?)',
        [pseudo, email, hashedpassword, salt],
        (err, result) => {
            if (err) throw err;
            console.log(result);
            callback(result);
        });
    }
  
    connexionCompte(email, password, callback, req) {
        this.db.query('SELECT * FROM user WHERE email = ?', [email], (err, result) => {
            if (err) throw err;
            if (result.length !== 0) {
                const userConnected = passFunc.is_password_good(password, result[0]);
                if (userConnected !== false) {
                    console.log('Connecté');
                } else {
                    console.log('NON CONNECTÉ');
                }
            }
        callback(result);
        });
    }
}


module.exports = {
    DatabaseFunctions
};