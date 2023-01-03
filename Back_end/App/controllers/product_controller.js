const ProductModel = require("../models/product_models");

exports.getProducts=(req,res)=>{
    
    ProductModel.getProducts((err,data)=>{
        if(err){
            res.status(500).send({
                message:err.message||"Something went Wrong"
            })
        }else{
            res.status(200).send({
                message:data
            });
        }
    })



}