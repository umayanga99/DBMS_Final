const mysql = require("./db.js");

// constructor
const Auth = function(file) {
    this.email = file.email;
    this.password = file.password;
    this.name = file.name;
    this.password = file.password;
    this.type = file.type;
    this.TP = file.TP;
} ; 

Auth.checkValidity = (email, password,result) => {
    mysql.query(`select login_authentication(?,?) as isLoggedIn`, [email, password], (err,res) => {
        if (err) {
            // console.log("error: ",  err);
            console.log("Error in model",err);
            result(err, null);
            return;
        } else {
            
            // result(null, res);
            console.log(`login_authentication('${email}','${password}')`, res[0].isLoggedIn != '0' );
            if(res[0].isLoggedIn!='0'){
                console.log(`success`);
                result(null,true);
            }
            else{
                console.log(`username or password error`);
                result(null,false);
            }
            console.log(res[0].isLoggedIn);
            
            
        }
    });
};

//${email}, ${password}, ${name}, ${type}, ${TP}

Auth.addUser = (email, password, name, type, TP, result) => {
    mysql.query(`SELECT Sign_authentication (?,?,?,?,?)`,[email,password,name,type,TP], (err,res) => {
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