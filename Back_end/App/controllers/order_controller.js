const orderModel=require("../models/order_models.js");


 exports.placeOrder=(req,res)=>{
    if(!req.body){
        res.status(400).send({
            message:"content can not be empty"
        });
    }

    let cartID=req.body.cartID;
    let productID=req.body.productID;
    let quantity=req.body.quantity;
    let address=req.body.address;
    let destination=req.body.destination;
    let diliveryDate=req.body.diliveryDate;
    
 

 orderModel.placeOrder(cartID,productID,quantity,address,destination,diliveryDate,(err,data)=>{
    if(err){
        res.status(200).send({
            message:"error occured",
            date:{
                cartID:null
            }
            
        });
    }
        else{
            res.status(200).send({
            message:"successfull"
});
        }
    })
 } 


 exports.getTotal=(req,res)=>{
    let email=req.query.email;
    const data=req.query.date

    orderModel.getTotal(email,(err,data)=>{
        if(err){
            res.status(200).send({
                message:"Fail",
                
                
            })
        }else{
            res.status(200).send({
                message:"Successfull"
            });
        }
    });
 }