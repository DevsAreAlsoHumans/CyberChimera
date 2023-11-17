var expect = require('expect.js')
const hash = require("../App/utils/hashPassword")
const password = require("../App/utils/isPasswodGood");
const { User } = require('../App/Model/user');
const { describe } = require('mocha');

describe('hashPassword', function () {
  it('should be an array', function (done) {
    expect(hash.hash_password("password")).to.be.an(Array);
    done()
  });
  it('should have length of 2', function (done) {
    expect(hash.hash_password("password")).to.have.length(2)
    done()
  });
  
});

describe('is_password_good', function () {
  const [hashedpassword, salt] = hash.hash_password("password");
  var user = new User("","",salt,hashedpassword)
  it('should be a User', function (done) {
    expect(password.is_password_good("password",user)).to.be.an(User);
    done()
  });
  it('should be false', function (done) {
    expect(password.is_password_good("passwordfalse",user)).to.be(false);
    done()
  });
  
});

