const ManagerModel = require("../models/manager_models");

exports.getSchedules=(req,res)=>{
    ManagerModel.getSchedules((err,data)=>{
        if(err){
            res.status(500).send({
                message:"Something went wrong"
            })
        }else{
            console.log(data);
            res.status(200).send({
                message:"Success 1 2 3",
                data:data
            })
        }
    })
}