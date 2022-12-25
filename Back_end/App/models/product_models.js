const product = require("./db.js");

// constructor
const Product = function(file) {
    // this.email = file.email;
    // this.password = file.password;
};

// User.checkValidity = (email, password) => {
//     mysql.query(`SELECT login_authentication(${email},${password})`, (err,res) => {
//         if (err) {
//             console.log("error: ", err);
//             result(err, null);
//             return;
//         } else {
//             result(null, res);
//         }
//     });
// };

module.exports = Product;