module.exports=app=>{
    const OrdersController=require("../controllers/order_controller")

    var orderRouter=require("express").Router();

    orderRouter.post("/",OrdersController.placeOrder);

    app.use("/api/order",orderRouter);
}