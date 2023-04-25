const mysql = require("./db.js");

const Manager = function(file) {};

Manager.getTruckSchedule = ( result) => {
    mysql.query(`select * from truck_report`,(err,res) => {
        if (err) {
            result(err, null);
            return;
        } else {
            result(null, res);
            
        }
    });
};

Manager.getAssistantSchedule = ( result ) => {
    mysql.query(`select * from assistant`,(err,res) => {
        if (err) {
            result(err, null);
            return;
        } else {
            result(null, res);
            
        }
    });
};

Manager.getDriverSchedule = (result) => {
    mysql.query(` select * from driver`,(err,res) => {
        if (err) {
            result(err, null);
            return;
        } else {
            result(null, res);
            
        }
    });
};

Manager.getTrainSchedule = (result) => {
    mysql.query(`select * from train_schedule`,(err,res) => {
        if (err) {
            result(err, null);
            return;
        } else {
            result(null, res);
            
        }
    });
};

Manager.getQuarterlySalesReport = (year, result) => {
    mysql.query(`select quarter, total_quantity, total_income from quarterly_sales_report where year = ?`,[year],(err,res) => {
        if (err) {
            result(err, null);
            return;
        } else {
            result(null, res);
            
        }
    });
};

Manager.getQuarterlyOrderReport = (year, result) => {
    mysql.query(`select quarter, product, total_sells, total_income from quarter_order_details where year =  ?`,[year],(err,res) => {
        if (err) {
            result(err, null);
            return;
        } else {
            result(null, res);
            
        }
    });
};

Manager.getMostOrdered = (year, result) => {
    // mysql.query(`select product_name, total_quantity from most_ordered where year =?`,[year],(err,res) => {
    mysql.query(`call most_ordered_report(?)`,[year],(err,res) => {
        if (err) {
            result(err, null);
            return;
        } else {
            result(null, res[0]);
            
        }
    });
};

Manager.getCustomerOrderReport = (year, result) => {
    mysql.query(`select customer_email,customer_name,customer_type,ordered_date,product_name,quantity,total_price from customer_order_report where year = ? order by customer_type,customer_email,ordered_date`,[year],(err,res) => {
        if (err) {
            result(err, null);
            return;
        } else {
            result(null, res);
            
        }
    });
};

Manager.getCitiesRoutesReport = (year,result) => {
    mysql.query("select * from cities_routes_report where year=? order by truck_route ",[year],(err,res) => {
        if (err) {
            result(err, null);
            return;
        } else {
            result(null, res);
            
        }
    });
};

Manager.getLastMonthOrders = (result) => {
    mysql.query("CALL get_order_details()",(err,res) => {
        if (err) {
            result(err, null);
            return;
        } else {
            result(null, res[0]);
            
        }
    });
};

module.exports = Manager;