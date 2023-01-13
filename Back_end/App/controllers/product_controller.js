const ProductModel = require("../models/product_models");

exports.getProductsById=(req,res)=>{
    const id = req.params.id
<<<<<<< HEAD
    // console.log(req.p)
=======
>>>>>>> Shehan_23
    ProductModel.getProductsById(id, (err,data)=>{
        if(err){
            res.status(500).send({
                message:err.message||"Something went Wrong"
            })
        }else{
            res.status(200).send(data);
        }
    })
}

exports.getProducts=(req,res)=>{
    ProductModel.getProducts((err,data)=>{
        if(err){
            res.status(500).send({
                message:err.message||"Something went Wrong"
            })
        }else{
            res.status(200).send(data);
        }
    })
}