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
    //Truck schedule
    mysql.query(`select * from truck_report`,(err,res) => {
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
    mysql.query(`select * from assistant`,(err,res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        } else {
            result(null, res);
            
        }
    });
};

Manager.getDriverSchedule = (result) => {
    //check the query
    mysql.query(` select * from driver`,(err,res) => {
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
    mysql.query(`select * from train_schedule`,(err,res) => {
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
    mysql.query(`select quarter, total_quantity, total_income from quarterly_sales_report where year = ?`,[year],(err,res) => {
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
    mysql.query(`select quarter, product, total_sells, total_income from quarter_order_details where year =  ?`,[year],(err,res) => {
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
    mysql.query(`select product_name, total_quantity from most_ordered where year =?`,[year],(err,res) => {
        // mysql.query(`select product_name, total_quantity from most_ordered`,(err,res) => {
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
    mysql.query(`select customer_email,customer_name,customer_type,ordered_date,product_name,quantity,total_price from customer_order_report where year = ?`,[year],(err,res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        } else {
            result(null, res);
            
        }
    });
};

Manager.getCitiesRoutesReport = (branch,result) => {
    //check the query
    mysql.query("select truck_route,product_name,year,tot_orders from cities_routes_report where city =?",[branch],(err,res) => {
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