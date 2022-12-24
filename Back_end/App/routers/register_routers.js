module.exports = app => {
    const RegisterController = require("../controllers/register_controller");
    
    var registerRouter = require("express").Router();
    
    registerRouter.post("/", RegisterController.addUser);
    
    app.use('api/register', registerRouter);
    }