const mysql = require("./db.js");

// constructor
const newUser = function(file) {
    this.name = file.name;
    this.password = file.password;
    this.email = file.email;
    this.type = file.type;
    this.TP = file.TP;
};

newUser.addUser = (email, password, name, type, TP) => {
    mysql.query(`SELECT Sign_authentication (${email}, ${password}, ${name}, ${type}, ${TP})`, (err,res) => {
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