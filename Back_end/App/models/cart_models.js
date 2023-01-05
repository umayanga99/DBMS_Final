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
    const tempList=mysql.query(`CALL Save_To_Cart(?,?,?)`,[email,subArray.id,subArray.quantity]);
    newItems.push(tempList);  
  }
  
  // console.log(newItems,email);
  // const arr = JSON.stringify(newItems);
  
  };


Cart.GetCartItem =  (email, result) => {
  const cartItemIDList=mysql.query("select id from cart_product where cart_ID = (select cart_ID from cart where email=?)",[email]);
   mysql.query(`select * from cart_product where cart_id = (select cart_id from cart where cart.email=?)`,[email], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, res);
      return;
    } else {
      console.log("success");
      result(null, res);
    }
    // not found Tutorial with the id
    console.log("returned : ", res);
  });
};

module.exports = Cart;