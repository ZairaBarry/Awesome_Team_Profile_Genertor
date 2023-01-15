const Employee =  require("./Employee");

class Engnineer extends Employee {
    constructor (name, id,email, github){
    super(name,id,email);
    this.github= this.github;
    }

    getGithub() {
        return this.github
    };

    getRole() {
        return "Engineer"
    }
};

module.exports = Engineer;