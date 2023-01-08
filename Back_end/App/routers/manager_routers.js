module.exports = app => {
    const ManagerController = require("../controllers/manager_controller");
    
    var managerRouter = require("express").Router();

    
    managerRouter.get("/getTrainSchedule",ManagerController.getTrainSchedule);
    managerRouter.get("/getAssistantSchedule",ManagerController.getAssistantSchedule);
    managerRouter.get("/getDriverSchedule",ManagerController.getDriverSchedule);
    managerRouter.get("/getReport",ManagerController.getReport);
    
   
    
    
    app.use('/api/manager', managerRouter);
    }