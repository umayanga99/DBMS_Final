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



Cart.GetCartItems=(email,result)=>{
 mysql.query("CALL get_cart_items_procedure(?)",[email],(err,res)=>{
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