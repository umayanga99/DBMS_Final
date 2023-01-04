module.exports=app=>{

const ProductController = require("../controllers/product_controller.js");

var productRouter = require("express").Router();

productRouter.get("/", ProductController.getProducts);
productRouter.get("/:id", ProductController.getProductsById);

app.use('/api/product', productRouter);
}