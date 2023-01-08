const ManagerModel = require("../models/manager_models");

exports.getTrainSchedule=(req,res)=>{
    ManagerModel.getTrainSchedule((err,data)=>{
        if(err){
            res.status(500).send({
                message:"Something went wrong"
            })
        }else{
            // console.log(data);
            res.status(200).send({
                message:"Success",
                data:data
            })
        }
    })
}

exports.getAssistantSchedule=(req,res)=>{
    ManagerModel.getAssistantSchedule((err,data)=>{
        if(err){
            res.status(500).send({
                message:"Something went wrong"
            })
        }else{
            // console.log(data);
            res.status(200).send({
                message:"Success",
                data:data
            })
        }
    })
}

exports.getDriverSchedule=(req,res)=>{
    ManagerModel.getDriverSchedule((err,data)=>{
        if(err){
            res.status(500).send({
                message:"Something went wrong"
            })
        }else{
            // console.log(data);
            res.status(200).send({
                message:"Success",
                data:data
            })
        }
    })
}

exports.getReport=(req,res)=>{
    const year=req.query.year;
    ManagerModel.getreport(year,(err,data)=>{
        if(err){
            res.status(500).send({
                message:"Something went wrong"
            })
        }else{
            // console.log(data);
            res.status(200).send({
                message:"Success",
                data:data
            })
        }
    })
}