const ProductModel = require("../models/product_models");

exports.getProductsById=(req,res)=>{
    const id = req.params.id
    // console.log(req.p)
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
<<<<<<< HEAD
            res.status(200).send(data
            );
=======
            res.status(200).send(data);
>>>>>>> Shehan_23
        }
    })
}