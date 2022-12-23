module.exports = app => {
    const CartController = require("../controller/cart_controller");
    
    var cartRouter = require("express").Router();
    // localhost:8080/api/cart/get:isdafnokans
    
    // Get cart iitems router
    cartRouter.get("/", CartController.getCartItems);
    
    // Add to cart
    cartRouter.post("/", CartController.addToCart);
    
    app.use('/api/cart', cartRouter);
    }