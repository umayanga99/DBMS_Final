const mysql = require("./db.js");
// let pool = require('../../database/connection');
// const {decodeToken} = require('../../middleware/authMiddleware') // add this middle ware to authenticate without login

constructor
const Cart = function(file) {
  this.email=email;
  this.items=items;
  this.title = file.title;
  this.description = file.description;
  this.published = file.published;
};


Cart.saveCart = (email,items, result) => {
  let newItems=[];
  // console.log(items);
  for (let i=0;i<items.length;i++){
    let subArray=items[i];
    console.log(subArray.id,subArray.quantity);
    mysql.query("Call Save_To_Cart(?,?,?)",[email,subArray.id,subArray.quantity],(err,res)=>{
      // console.log(newItems[i].id,newItems[i].quantity);
      if(err){result(err,null);
      return;}
    })
}

}



Cart.getCartItem=(email,result)=>{
 mysql.query("select itemTotal,price,product_description,product_name,product_weight,quantity,unit_capacity from get_cart_items where get_cart_items.email = ? ",[email],(err,res)=>{
  if(err){
    result(err,null);
    return;
  }else{
    result(null,res);
    return;
  }
 })
};

Cart.clearCart=(email,result)=>{
  mysql.query("Call clear_cart(?) ",[email],(err,res)=>{
   if(err){
     result(err,null);
     return;
   }else{
     result(null,res);
     return;
   }
  })
 };


module.exports=Cart;