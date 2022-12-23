 const mysql=require("./db.js");

 const Order=function(obj){
     this.title=obj.title;
    
 }

 Order.placeOrder= (customerID,cartID,qunatity,address,destination,diliveryDate,result)=>{
    mysql.query('select place_order(${customerID},${cartID},${quantity},${address},${destination},${diliveryDate})',(err,res)=>{
        if(err){
            console.log("error: ",err);
            result(err,null);
            return;
        }
        else{
            result(null,true);
        }

    });
 }