module.exports=app=>{

// const ProductController = require("../controllers/product_controller.js");

// var productRouter = require("express").Router();

productRouter.get("/", ProductController.getProducts);

// app.use('/api/product', productRouter);
}