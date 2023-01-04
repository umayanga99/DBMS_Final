const CartModel = require("../models/cart_models");
//

exports.saveCart = (req, res) => {
 
  if (!req.body) {
    res.status(400).send({  
      message: "Content can not be empty!"
    });
  } 

 
  const email = req.body.email;
  const productID = req.body.productID;
  console.log(cartID, productID);
  
CartModel.saveCart(email, productID, (err, data) => {
    if(err) {
       
        res.status(200).send({
            message: "Fail",
            data: {
                productId: "dsfsdf"
            }
        });
    } else {
        res.status(200).send({
            message: "Successfull"
        });
    }
} )
}


exports.getCartItems = (req, res) => {
 

    let cartID = req.query.cartID;
  
   
 CartModel.GetCartItem(cartID, (err, data) => {
     if(err) {
       
        res.status(200).send({
            message: "fail",
            data: {
                products : data
            }
        });
     } else {
         res.status(200).send({
             message: "Successfull",
             
             data:data
         });
         console.log(data);
     }
 } )
 
 }


