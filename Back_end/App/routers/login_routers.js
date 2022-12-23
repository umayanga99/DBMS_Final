module.exports = app => {
    const LoginController = require("../controller/login_controller");
    
    var loginRouter = require("express").Router();
    
    loginRouter.post("/", LoginController.checkValidity);
    
    app.use('api/login', loginRouter);
    }