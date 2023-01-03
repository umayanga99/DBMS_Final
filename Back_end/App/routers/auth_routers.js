module.exports = app => {
    const AuthController = require("../controllers/auth_controller");
    
    var authRouter = require("express").Router();
    
    authRouter.post("/addUser", AuthController.addUser);
    authRouter.post("/checkValidity", AuthController.checkValidity);
    
    app.use('/api/auth', authRouter);
    }