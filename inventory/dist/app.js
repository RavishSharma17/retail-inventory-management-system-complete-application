"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productController_1 = require("./controller/productController");
const cartController_1 = require("./controller/cartController");
const checkoutController_1 = require("./controller/checkoutController");
const cors = require('cors');
const app = (0, express_1.default)();
const port = 3100;
const productController = new productController_1.ProductController();
const checkoutController = new checkoutController_1.CheckoutController();
const cartController = new cartController_1.CartController();
const logRequestInfo = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};
app.use(cors());
app.use(express_1.default.json());
app.use(logRequestInfo);
// list products
app.get('/products', productController.getProducts);
// Add to cart
app.post('/cart', cartController.addToCart);
// remove from cart
app.delete('/cart', cartController.removeFromCart);
// clear cart
app.delete('/cart/clear', cartController.clearCart);
// view cart
app.get('/cart', cartController.getCart);
// checkout
app.post('/checkout', checkoutController.checkoutCustomer);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
