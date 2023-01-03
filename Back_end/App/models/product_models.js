const mysql = require("./db.js");

// constructor
const Product = function(file) {
};

Product.getProducts=(result)=>{
    mysql.query("select * from product",(err,res)=>{
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