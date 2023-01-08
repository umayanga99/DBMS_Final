const CartModel = require("../models/cart_models");


exports.saveCart = (req, res) => {
 
  if (!req.body) {
    res.status(400).send({  
      message: "Content can not be empty!"
    });
  } 

 
  const email = req.body.email;
  const quantity=req.body.cartID;
  const productID = req.body.productID;
  console.log(cartID, productID);
  
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


exports.getCartItems = (req, res) => {
 

    let email = req.query.email;
  
   
 CartModel.GetCartItem(email, (err, data) => {
     if(err) {
        res.status(200).send({
<<<<<<< HEAD
            message: "Fail",
        
=======
            message: "fail",
            data: {
                products : data
            }
>>>>>>> Shehan_23
        });
     } else {
         
             

             res.status(200).send({
                message: "Successfull",
                data: {
                    products : data
                }
         });
         console.log(data);
     }
 } )
 
 }


