module.exports = app => {
    const ManagerController = require("../controllers/manager_controller");
    
    var managerRouter = require("express").Router();

    
    managerRouter.get("/getTrainSchedule",ManagerController.getTrainSchedule);
    managerRouter.get("/getTruckSchedule",ManagerController.getTruckSchedule);
    managerRouter.get("/getAssistantSchedule",ManagerController.getAssistantSchedule);
    managerRouter.get("/getDriverSchedule",ManagerController.getDriverSchedule);
    managerRouter.get("/getgetMostOrderReport",ManagerController.getMostOrderReport);
    managerRouter.get("/getQuarterlySalesReport",ManagerController.getQuarterlySalesReport);
    managerRouter.get("/getQuarterlyOrderReport",ManagerController.getQuarterlyOrderReport);
    managerRouter.get("/getCustomerOrderReport",ManagerController.getCustomerOrderReport);
    managerRouter.get("/getMostOrdered",ManagerController.getMostOrdered);
    managerRouter.get("/getCitiesRoutesReport",ManagerController.getCitiesRoutesReport);
   
    
    
    app.use('/api/manager', managerRouter);
    }