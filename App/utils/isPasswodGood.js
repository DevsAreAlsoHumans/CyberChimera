const crypto = require('crypto');

function is_password_good(password_try, user) {
    const hashedAttempt = crypto.pbkdf2Sync(password_try, user.salt, 10000, 64, 'sha512').toString('hex');
    if (hashedAttempt === user.password) {
        return user
    }
    return false
}


module.exports = {
    is_password_good
};