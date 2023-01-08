const PassgeModel=require("../models/passage_models");

exports.getPassages=(req,res)=>{
    PassgeModel.getPassages((err,data)=>{
        if(err){
            res.status(500).send({
                message:err||"Can not get data"
            })
        }else{
            res.status(200).send({
                message:"Success",
                passges:data
            })
        }
    })
}