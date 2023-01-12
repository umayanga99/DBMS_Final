 const mysql = require("./db.js");

 const Order=function(file){
    this.title = file.title;
    this.prefered_dilivery_date = file.prefered_dilivery_date;
    this.product_ID = file.product_ID;
    this.cart_ID = file.cart_ID;
    this.email = file.email;
    this.order_ID = file.order_ID;
    this.address = file.address;
    this.customer_email = file.customer_email;
    this.quantity = file.quantity;
    this.date = file.date;
    this.time = file.time;
    this.route_ID = file.route_ID;
    this.nearest_Branch = file.nearest_Branch;
    this.tot_capacity = file.tot_capacity;
    this.state = file.state;
    this.destination = file.destination;
 };

 Order.placeOrder = (email,prefered_dilivery_date,address,route,totalPrice,result) => {
   //check the query
    mysql.query(`CALL payment_proceed(?,?,?,?,?)`, [email,prefered_dilivery_date,address,route,totalPrice],(err,res) => {
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        } else {
            result(null, res);
        }
    });
};

// Order.validate_Date = (prefered_dilivery_date) => {
//     mysql.query(`SELECT validate_Day(${prefered_dilivery_date})`, (err,res) => {
//         if(err){
//             console.log("error: ", err);
//             result(err, null);
//             return;
//         } else {
//             result(null, res);
//         }
//     });
// };

//  Order.placeOrder= (customerID,cartID,qunatity,address,destination,diliveryDate,result)=>{
//     mysql.query(`select place_order(${customerID},${cartID},${quantity},${address},${destination},${diliveryDate})`,(err,res)=>{
//         if(err){
//             console.log("error: ",err);
//             result(err,null);
//             return;
//         }
//         else{
//             result(null,true);
            
//         }

//     });
// };

//  Order.getTotal=(email,result)=>{

//     mysql.query(`CALL Total_Price(${email})`,(err,res)=>{
//         if(err){
//             console.log("error ",err);
//             result(err,null);
//             return;
//         }else{
//             result(null,res);
//         }
//         console.log("added : ",res);
//     });

//  };

 module.exports=Order;