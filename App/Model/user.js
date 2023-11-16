class User {
    constructor(name,email,salt,password){
        this.name=name;
        this.email=email;
        this.salt=salt;
        this.password = password
    }
    
}

module.exports = {
    User
};