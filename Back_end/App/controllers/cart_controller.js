const CartModel = require("../models/cart_models");

// Input validation -- Express Validator

// Add to cart 
exports.addToCart = (req, res) => {
   // Validate request
  if (!req.body) {
    res.status(400).send({  
      message: "Content can not be empty!"
    });
  } 

  // Call the model and get the data
  const cartID = req.body.cartID;
  const productID = req.body.productID;
  console.log(cartID, productID);
  
CartModel.addToCart(cartID, productID, (err, data) => {
    if(err) {
        // res.status(500).send({
        //     message: err.message || "Something went wrong."
        // })
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

// Get cart items 
exports.getCartItems = (req, res) => {
 
    // Retrieve the tag from our URL path
    // var cartID = req.params.cartID;
    let cartID = req.query.cartID;
    const date = req.query.date;
   
 CartModel.GetCartItem(cartID, (err, data) => {
     if(err) {
        //  res.status(500).send({
        //      message: err.message || "Something went wrong."
        //  })
        res.status(200).send({
            message: "Successfull",
            data: {
                products : [
                    
                ]
            }
        });
     } else {
         res.status(200).send({
             message: "Successfull",
             data: {
                cartId : 'sdfasdf',
                products : [
                    'asdfasdf', 'sadfsadf'
                ]
             }
         });
     }
 } )
 
 }


