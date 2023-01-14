const mysql = require("./db.js");

const Auth = function(file) {
    this.email = file.email;
    this.password = file.password;
    this.name = file.name;
    this.password = file.password;
    this.type = file.type;
    this.TP = file.TP;
} ; 


//select login_authentication($[email],$[password])
Auth.checkValidity = (email, password,result) => {
    mysql.query(`select login_authentication(?,?) as isLoggedIn`, [email, password], (err,res) => {
        if (err) {
            result(err, null);
            return;
        } else {
           // console.log(`login_authentication('${email}','${password}')`, res[0].isLoggedIn != '0' );
            if(res[0].isLoggedIn=='1'){
                result(null,1);
            }
            else if(res[0].isLoggedIn=='2'){
                result(null,2);
            }
            else{
                result(null,false);
            }
        }
    });
};

Auth.addUser = (email, password, name, type, TP, result) => {
    let subTP=TP.substring(2);
    console.log(subTP);
    mysql.query(`SELECT Sign_authentication (?,?,?,?,?) as message`,[email,password,name,type,subTP], (err,res) => {
        if (err) {
            result(err, null);
            return;
        } else {
            if(res[0].message=='0'){
                result(null,0);
            }
            else{
                result(null,1);
            }
            
        }
    });
};

module.exports = Auth;
