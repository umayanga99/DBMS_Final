const mysql = require("./db.js");

// constructor
const newUser = function(file) {
    this.name = file.name;
    this.password = file.password;
    this.email = file.email;
    this.type = file.type;
    this.role = file.role;
    this.id = file.id;
};

newUser.addUser = (name, password, email, type, role, id) => {
    mysql.query(`SELECT Sign_authentication (${email}, ${password}, ${name}, ${type}, ${id}, ${role})`, (err,res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        } else {
            result(null, res);
        }
    });
};

module.exports = newUser;