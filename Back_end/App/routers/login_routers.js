module.exports = app => {
    const LoginController = require("../controllers/login_controller");
    
    var loginRouter = require("express").Router();
    
    loginRouter.post("/", LoginController.checkValidity);
    // requestAnimationFrame.header
    // loginRouter.post("/", authorization,LoginController.inputValidation ,LoginController.checkValidity);
    
    app.use('/api/login', loginRouter);
    }

    // router name change -> auth_router.js
    // Login and resgister