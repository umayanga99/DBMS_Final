module.exports = app => {
    const ManagerController = require("../controllers/manager_controller");
    
    var managerRouter = require("express").Router();
    
    managerRouter.post("/", ManagerController.checkValidity);
    
    app.use('api/login', managerRouter);
    }