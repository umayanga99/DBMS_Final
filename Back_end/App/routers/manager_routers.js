module.exports = app => {
    const ManagerController = require("../controllers/manager_controller");
    
    var managerRouter = require("express").Router();
    managerRouter.get("/",ManagerController.getSchedules);
    
    app.use('/api/manager', managerRouter);
    }