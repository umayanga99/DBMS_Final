module.exports = app => {
    const ManagerController = require("../controllers/manager_controller");
    
    var managerRouter = require("express").Router();
    // localhost:8080/api/cart/get:isdafnokans
    
    // Get cart iitems router
    // managerRouter.get("/", ManagerController.getCartItems);
    
    // Add to cart
    // managerRouter.post("/", ManagerController.addToCart);
    
    app.use('/api/manager', managerRouter);
    }