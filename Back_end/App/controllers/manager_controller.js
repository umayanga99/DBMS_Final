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

exports.getTruckSchedule=(req,res)=>{
    ManagerModel.getTruckSchedule((err,data)=>{
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

exports.getMostOrderReport=(req,res)=>{
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

exports.getQuarterlySalesReport=(req,res)=>{
    const year=req.query.year;
    ManagerModel.getQuarterlySalesReport(year,(err,data)=>{
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

exports.getQuarterlyOrderReport=(req,res)=>{
    const year=req.query.year;
    ManagerModel.getQuarterlyOrderReport(year,(err,data)=>{
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

exports.getMostOrdered=(req,res)=>{
    const year=req.query.year;
    ManagerModel.getMostOrdered(year,(err,data)=>{
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

exports.getCustomerOrderReport=(req,res)=>{
    const year=req.query.year;
    ManagerModel.getCustomerOrderReport(year,(err,data)=>{
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

exports.getCitiesRoutesReport=(req,res)=>{
    const year=req.query.year;
    ManagerModel.getCitiesRoutesReport(year,(err,data)=>{
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