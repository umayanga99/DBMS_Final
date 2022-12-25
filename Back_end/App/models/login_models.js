const mysql = require("./db.js");

// constructor
const User = function(file) {
    this.email = file.email;
    this.password = file.password;
};

User.checkValidity = (email, password) => {
    mysql.query(`SELECT login_authentication(${email},${password})`, (err,res) => {
        if (err) {
            console.log("error: ", err);
            console.log("Fail");
            result(err, null);
            return;
        } else {
            result(null, res);
            console.log("Succeded");
        }
    });
};

module.exports = User;