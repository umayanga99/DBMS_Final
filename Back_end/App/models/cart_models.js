const mysql = require("./db.js");

constructor
const Cart = function(file) {
  this.title = file.title;
  this.description = file.description;
  this.published = file.published;
};


Cart.saveCart = (email,items, result) => {
  let newItems=[];
  for (let i=0;i<items.length;i++){
    let subArray=items[i];
    let newSubArray=[];
    newSubArray.push(subArray.id);
    newSubArray.push(subArray.quantity);
    newItems.push(newSubArray);
    
    
  }
  console.log(newItems);
    mysql.query(`CALL Add_to_cart(?,?)`,[email,newItems], (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      } else {
        result(null, true);
      }
      
      console.log("added : ", res);
    });
  };


Cart.GetCartItem =  (email, result) => {
   mysql.query(`select * from cart_product where cart_id = (select cart_id from cart where cart.email=?)`,[email], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, res);
      return;
    } else {
      result(null, res);
    }
    // not found Tutorial with the id
    console.log("returned : ", res);
  });
};


  

module.exports = Cart;


