const CartModel = require("../models/cart_models");
<<<<<<< HEAD

=======
>>>>>>> Shehan_23

exports.saveCart = (req, res) => {
 
  if (!req.body) {
    res.status(400).send({  
      message: "Content can not be empty!"
    });
  } 
  const email = req.body.email;
<<<<<<< HEAD
  const quantity=req.body.cartID;
  const productID = req.body.productID;
  console.log(cartID, productID);
=======
  const items = req.body.items;
>>>>>>> Shehan_23
  
CartModel.saveCart(email, productID,quantity, (err, data) => {
    if(err) {
       
        res.status(500).send({
            message: "Fail",
           
        });
    } else {
        res.status(200).send({
            message:"Successful"
        });
    }
} )
}

exports.clearCart = (req, res) => {
 
    if (!req.body) {
      res.status(400).send({  
        message: "Content can not be empty!"
      });
    } 
    const email = req.body.email;
    
  CartModel.clearCart(email, (err, data) => {
      if(err) {
         
          res.status(200).send({
              message: "Fail",
              
          });
      } else {
          res.status(200).send({
              message: "Successfull"
          });
      }
  } )
  }

exports.getCartItems = (req, res) => {
    let email = req.body.email;

<<<<<<< HEAD
    let email = req.query.email;
  
   
 CartModel.GetCartItem(email, (err, data) => {
=======
 CartModel.getCartItem(email, (err, data) => {
>>>>>>> Umayanga
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
                data: {
                    products : data
                }
         });
     }
 } )
 
 }


