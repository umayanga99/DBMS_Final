module.exports = app => {
    const ManagerController = require("../controllers/manager_controller");
    
    var managerRouter = require("express").Router();
 
    managerRouter.get("/getTrainSchedule",ManagerController.getTrainSchedule);
    managerRouter.get("/getTruckSchedule",ManagerController.getTruckSchedule);
    managerRouter.get("/getAssistantSchedule",ManagerController.getAssistantSchedule);
    managerRouter.get("/getDriverSchedule",ManagerController.getDriverSchedule);
    managerRouter.post("/getgetMostOrderReport",ManagerController.getMostOrderReport);
    managerRouter.post("/getQuarterlySalesReport",ManagerController.getQuarterlySalesReport);
    managerRouter.post("/getQuarterlyOrderReport",ManagerController.getQuarterlyOrderReport);
    managerRouter.post("/getCustomerOrderReport",ManagerController.getCustomerOrderReport);
    managerRouter.post("/getMostOrdered",ManagerController.getMostOrdered);
    managerRouter.post("/getCitiesRoutesReport",ManagerController.getCitiesRoutesReport);
    managerRouter.get("/getLastMonthOrders",ManagerController.getLastMonthOrders);

    app.use('/api/manager', managerRouter);
    }