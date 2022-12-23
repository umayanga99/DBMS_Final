const mysql = require("./db.js");

// constructor
const User = function(file) {
    this.userName = file.userName;
    this.password = file.password;
};

User.checkValidity = (userName, password) => {
    mysql.query(`login_authentication(${userName},${password})`, (err,res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        } else {
            result(null, res);
        }
    });
};

module.exports = User;