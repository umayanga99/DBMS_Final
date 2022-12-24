const orderModel=require("../models/order_models.js");


 exports.placeOrder=(req,res)=>{
    if(!req.body){
        res.status(400).send({
            message:"content can not be empty"
        });
    }

    const cartID=req.body.cartID;
    const productID=req.body.productID;
    const quantity=req.body.quantity;
    const address=req.body.address;
    const destination=req.body.destination;
    const diliveryDate=req.body.diliveryDate;
 

 orderModel.placeOrder(cartID,productID,quantity,address,destination,diliveryDate,(err,date)=>{
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