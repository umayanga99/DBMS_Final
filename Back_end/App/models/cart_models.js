const mysql = require("./db.js");

constructor
const Cart = function(file) {
  this.title = file.title;
  this.description = file.description;
  this.published = file.published;
};


Cart.addToCart = (cartID, productID, result) => {
    mysql.query(`SELECT Add_to_cart(${productID},${cartID})`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      } else {
        result(null, true);
      }
      // not found Tutorial with the id
      console.log("added : ", res);
    });
  };


Cart.GetCartItem =  (cartID, result) => {
   mysql.query(`SELECT * from cart `, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    } else {
      result(null, res);
    }
    // not found Tutorial with the id
    console.log("added : ", res);
  });
};


  

module.exports = Cart;


