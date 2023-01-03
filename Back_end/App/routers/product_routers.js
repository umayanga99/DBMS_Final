module.exports=app=>{

const ProductController = require("../controllers/product_controller.js");

var productRouter = require("express").Router();

registerRouter.post("/", ProductController.addUser);

app.use('/api/product', productRouter);
}