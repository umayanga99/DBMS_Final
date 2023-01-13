const CartModel = require("../models/cart_models");

exports.saveCart = (req, res) => {
 
  if (!req.body) {
    res.status(400).send({  
      message: "Content can not be empty!"
    });
  } 
  const email = req.body.email;
  const items = req.body.items;
  
CartModel.saveCart(email, items, (err, data) => {
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

 CartModel.getCartItem(email, (err, data) => {
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
     }
 } )
 
 }