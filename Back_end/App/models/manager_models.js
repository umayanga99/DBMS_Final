const mysql = require("./db.js");

// constructor
const Manager = function(file) {
    this.email = file.email;
    this.password = file.password;
};

Manager.checkValidity = (email, password) => {
    mysql.query(`SELECT Is_Manger(${email},${password})`, (err,res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        } else {
            result(null, res);
        }
    });
};

module.exports = Manager;