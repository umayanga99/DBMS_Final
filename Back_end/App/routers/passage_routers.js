module.exports=app=>{
    const PassageController=require("../controllers/passage_controller");

    var passageRouter=require("express").Router();

    passageRouter.get("/",PassageController.getPassages);

    app.use("/api/passage",passageRouter);
}