const mysql = require("./db.js");

// constructor
const Manager = function(file) {
    // this.email = file.email;
    // this.password = file.password;
};

Manager.getSchedules = async (result) => {
    let queryArray = ["Select * from customer", "Select * from customer", "Select * from customer"];
    let resultArray = [];
  
    for (const q of queryArray) {
      mysql.query(q, (err, res) => {
        if (err) {
          console.log(err);
          return;
        }
        
        resultArray.push(res);
        console.log(resultArray);
      });
    }
    console.log(resultArray);

    result(null, resultArray);
    return;
  }
  

module.exports = Manager;