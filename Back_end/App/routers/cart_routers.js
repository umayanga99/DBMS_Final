module.exports = app => {
    const CartController = require("../controllers/cart_controller");
    
    var cartRouter = require("express").Router();

    cartRouter.post("/getCartItems", CartController.getCartItems);
    cartRouter.post("/saveCart", CartController.saveCart);
    cartRouter.post("/clearCart", CartController.clearCart);
    
    app.use('/api/cart', cartRouter);
    }