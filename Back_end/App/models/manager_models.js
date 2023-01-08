const mysql = require("./db.js");

// constructor
const Manager = function(file) {
    // this.email = file.email;
    // this.password = file.password;
};

// Manager.getSchedules = async (result) => {
//     let queryArray = ["Select * from customer", "Select * from customer", "Select * from customer"];
//     let resultArray = [];
  
//     for (const q of queryArray) {
//       mysql.query(q, (err, res) => {
//         if (err) {
//           console.log(err);
//           return;
//         }
        
//         resultArray.push(res);
//         console.log(resultArray);
//       });
//     }
//     console.log(resultArray);

//     result(null, resultArray);
//     return;
//   }
  


Manager.getTrainSchedule = ( result) => {
    //check the query
    mysql.query(`select * from Train`,(err,res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        } else {
            result(null, res);
            
        }
    });
};


Manager.getAssistantSchedule = ( result) => {
    //check the query
    mysql.query(`select * from Train`,(err,res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        } else {
            result(null, res);
            
        }
    });
};

Manager.getDriverSchedule = ( result) => {
    //check the query
    mysql.query(`select * from Train`,(err,res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        } else {
            result(null, res);
            
        }
    });
};

Manager.getreport = (year, result) => {
    //check the query
    mysql.query(`select * from Train where ? `,[year],(err,res) => {
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