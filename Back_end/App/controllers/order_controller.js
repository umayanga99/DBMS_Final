const orderModel=require("../models/order_models.js");

 exports.placeOrder=(req,res)=>{
    if(!req.body){
        res.status(400).send({
            message:"content can not be empty"
        });
    }

    let email=req.body.email;
    let year=req.body.year;
    let month=req.body.month;
    let date=req.body.date;
    let prefered_dilivery_date=year+"-"+month+"-"+date;
    let address=req.body.address;
    let route=req.body.route;
    let totalPrice=req.body.totalPrice;

    
 orderModel.placeOrder(email,prefered_dilivery_date,address,route,totalPrice,(err,data)=>{
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

//  const obj1 = {
//     "truck":truck1,
//     "driver":driver1
//  }

//  res.status(200).json({
//     "values" :[
//         {},
//         {},

//     ]
//  })