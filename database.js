const mysql = require('mysql');
const passFunc = require('./assets/js/utils/isPasswodGood');
const config = require("./config")
const hash = require('./assets/js/utils/hashPassword');
const User = require('./assets/js/user');
const res = require('express/lib/response');

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
        this.db.query("INSERT INTO user (pseudo, email, password, salt) VALUES (?, ?, ?, ?)", [pseudo, email, hashedpassword, salt], (err, result) => {
            if (err) {
                callback({ success: false, message: "Une erreur s'est produite lors de l'inscription." });
            } else {
                callback({ success: true, message: "Inscription réussie !" });
                
            }
        });
    }
  
    connexionCompte(email, password, callback) {
        this.db.query("SELECT * FROM user WHERE email = ?", [email], (err, result) => {
            if (err) throw err;
            if (result.length!= 0) { 
                const userTest = new User.User(result[0].pseudo,result[0].email,result[0].salt,result[0].password)
                const user = passFunc.is_password_good(password,userTest);
                if (user != false)  {
                    callback(user);
                }
                else {
                    console.log("NOT CONNECTED")
                    callback({success:false})
                }
            }else{
                console.log("NOT CONNECTED")
                callback({success:false})
            }
        });
    }

    recupCompte(email,callback){
        this.db.query("SELECT * FROM user WHERE email = ?", [email], (err, result) => {
            if (err) throw err;
            if (result.length!= 0) { 
                callback(result)
            }
        });

    }
    
}


module.exports = {
    DatabaseFunctions
};