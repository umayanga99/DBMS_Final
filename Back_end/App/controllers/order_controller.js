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
    let monthS;
    let dateS;
    if(month<10){
         monthS="0"+String(month);
    }
    else{
         monthS=String(month);
    }
    if(date<10){
         dateS="0"+String(date);
    }
    else{
        dateS=String(date)
    }
    let prefered_dilivery_date=String(year)+"-"+monthS+"-"+dateS;
    // console.log(date,dates,prefered_dilivery_date)
    let address=req.body.Address;
    let route=req.body.route;
    let totalPrice=req.body.totalPrice;
    console.log(prefered_dilivery_date);
    
 orderModel.placeOrder(email,prefered_dilivery_date,address,route,totalPrice,(err,data)=>{
    if(err){
        res.status(200).send({
            message:"error occured",
            date:false
            
        });
    }
        else{
            if(data==0){
                res.status(200).send({
                    message:"payment can not be accept",
                    data:false
                })
            }
            else{
                res.status(200).send({
                    message:"successfull",
                    data:true
                    
        });
            }
        }
    })
 } 

//  exports.getTotal=(req,res)=>{
//     let email=req.query.email;
//     const data=req.query.date

//     orderModel.getTotal(email,(err,data)=>{
//         if(err){
//             res.status(200).send({
//                 message:"Fail",            
//             })
//         }else{
//             res.status(200).send({
//                 message:"Successfull"
//             });
//         }
//     });
//  }

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
