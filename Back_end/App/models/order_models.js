 const mysql = require("./db.js");

 const Order=function(file){
     this.title = file.title;
     this.prefered_dilivery_date = file.prefered_dilivery_date;
    
 };

 Order.validateDate = (prefered_dilivery_date) => {
    mysql.query(`SELECT validate_Day(${prefered_dilivery_date})`, (err,res) => {
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        } else {
            result(null, res);
        }
    });
};

 Order.placeOrder= (customerID,cartID,qunatity,address,destination,diliveryDate,result)=>{
    mysql.query(`select place_order(${customerID},${cartID},${quantity},${address},${destination},${diliveryDate})`,(err,res)=>{
        if(err){
            console.log("error: ",err);
            result(err,null);
            return;
        }
        else{
            result(null,true);
        }

    });
};

 Order.getTotal=(email,result)=>{

    mysql.query(`CALL Total_Price(${email})`,(err,res)=>{
        if(err){
            console.log("error ",err);
            result(err,null);
            return;
        }else{
            result(null,res);
        }
        console.log("added : ",res);
    });

 };

 module.exports=Order;