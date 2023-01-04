const mysql = require("./db.js");

// constructor
const Product = function(file) {
};

Product.getProductsById=(id,result)=>{
    mysql.query("select * from product where id = ?",[id], (err,res)=>{
        if(err){
            result(err,null);
            return;
        }else{
            console.log(res);
            result(null,res);
            return;
        }
    })
}

Product.getProducts=(result)=>{
    mysql.query("select * from product", (err,res)=>{
        if(err){
            result(err,null);
            return;
        }else{
            result(null,res);
            return;
        }
    })
}

module.exports = Product;