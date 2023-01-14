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
    let flag;
    
     mysql.query(`call payment_proceed(?,?,?,?,?,@?)`, [email,prefered_dilivery_date,address,route,totalPrice,flag],(err,res) => {
       
         if(err){
             result(err, null);
             console.log("1");
             return;
         } 
        
     });
     mysql.query("select @?",[flag],(err,res)=>{
        if(err){
            result(err,null);
            console.log("2");
            return;
        }
        else{
            result(null,res);
            console.log(res)
            return;
        }
     })
 };

 module.exports=Order;