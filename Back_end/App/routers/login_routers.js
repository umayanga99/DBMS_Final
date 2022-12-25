module.exports = app => {
    const LoginController = require("../controllers/login_controller");
    
    var loginRouter = require("express").Router();
    
    loginRouter.post("/", LoginController.checkValidity);
    
    app.use('/api/login', loginRouter);
    }