const mysql = require("./db.js");

// constructor
const Auth = function(file) {
    this.email = file.email;
    this.password = file.password;
    this.name = file.name;
    this.password = file.password;
    this.type = file.type;
    this.TP = file.TP;
};

Auth.checkValidity = (email, password) => {
    mysql.query(`SELECT login_authentication(${email},${password})`, (err,res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        } else {
            result(null, res);
        }
    });
};

Auth.addUser = (email, password, name, type, TP) => {
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

module.exports = Auth;