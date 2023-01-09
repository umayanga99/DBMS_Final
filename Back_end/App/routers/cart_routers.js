module.exports = app => {
    const CartController = require("../controllers/cart_controller");
    
    var cartRouter = require("express").Router();
    // localhost:8080/api/cart/get:isdafnokans
    
    // Get cart iitems router
    cartRouter.post("/getCartItems", CartController.getCartItems);
    
    // Add to cart
    cartRouter.post("/saveCart", CartController.saveCart);
    
    app.use('/api/cart', cartRouter);
    }