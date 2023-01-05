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
  result(null,true);
  

  console.log(newItems,email);
  // const arr = JSON.stringify(newItems);
  
  };


Cart.GetCartItem =  (email, result) => {
  const cartItemIDList=JSON.stringify(mysql.query("select id from cart_product where cart_ID = (select cart_ID from cart where email=?)",[email]));
  console.log(cartItemIDList);
  let itemList=[];
  for(let i =0;i<cartItemIDList.length;i++){
      const tempList=mysql.query("select itemTotal, price, product_description, product_name, product_weight, quantity, unit_capacity from get_cart_items where id =?",[cartItemIDList[i]]);
      itemList.push(tempList);
      console.log(tempList);

    }
    console.log(itemList);
    result(null,itemList);
    
};

module.exports = Cart;