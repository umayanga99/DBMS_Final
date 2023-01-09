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
  


Manager.getTruckSchedule = ( result) => {
    //check the query
    mysql.query(`Select ID, total_duration from working_hours where roll = 'truck' order by total_duration;`,(err,res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        } else {
            result(null, res);
            
        }
    });
};


Manager.getAssistantSchedule = ( result ) => {
    //check the query
    mysql.query(`Select ID, total_duration from working_hours where roll = 'assistant' order by total_duration`,(err,res) => {
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
    mysql.query(`Select ID, total_duration from working_hours where roll = 'driver' order by total_duration`,(err,res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        } else {
            result(null, res);
            
        }
    });
};

Manager.getTrainSchedule = (result) => {
    //check the query
    mysql.query(`Select ID, total_duration from working_hours where roll = 'truck' order by total_duration;`,(err,res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        } else {
            result(null, res);
            
        }
    });
};


Manager.getMostOrderedReport = (year, result) => {
    //check the query
    mysql.query(`SELECT product_name, total_quantity FROM most_ordered where year = ?`,[year],(err,res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        } else {
            result(null, res);
            
        }
    });
};

Manager.getQuarterlySalesReport = (year, result) => {
    //check the query
    mysql.query(`SELECT quarter, total_quantity, total_income FROM quarterly_sales_report where year = ?`,[year],(err,res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        } else {
            result(null, res);
            
        }
    });
};

Manager.getQuarterlyOrderReport = (year, result) => {
    //check the query
    mysql.query(`SELECT quarter, product, total_sells, total_income FROM quarter_order_details where year = ?`,[year],(err,res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        } else {
            result(null, res);
            
        }
    });
};



Manager.getMostOrdered = (year, result) => {
    //check the query
    mysql.query(`SELECT product_name, total_quantity FROM most_ordered where year = ?`,[year],(err,res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        } else {
            result(null, res);
            
        }
    });
};

Manager.getCustomerOrderReport = (year, result) => {
    //check the query
    mysql.query(`SELECT product_name, total_quantity FROM most_ordered where year = ?`,[year],(err,res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        } else {
            result(null, res);
            
        }
    });
};

Manager.getCitiesRoutesReport = (result) => {
    //check the query
    mysql.query("SELECT * FROM cities_routes_report",(err,res) => {
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