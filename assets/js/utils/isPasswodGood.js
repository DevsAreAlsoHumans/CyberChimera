const crypto = require('crypto');

function is_password_good(password_try, list_user) {
    for (let index = 0; index < list_user.length; index++) {
        const element = list_user[index];
        const hashedAttempt = crypto.pbkdf2Sync(password_try, element.salt, 10000, 64, 'sha512').toString('hex');
        if (hashedAttempt === element.password) {
            return element
        }
    }
    return false
}


module.exports = {
    is_password_good
};