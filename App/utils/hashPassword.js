const crypto = require('crypto');

function hash_password(password) {
    const salt = crypto.randomBytes(16).toString('hex');
    const hashedPassword = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
    return [hashedPassword,salt] ;
}


module.exports = {
    hash_password
};