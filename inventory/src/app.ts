import express, { Express, Request, Response, NextFunction } from 'express';
import { ProductController } from './controller/productController';
import { CartController } from './controller/cartController';
import { CheckoutController } from './controller/checkoutController';
const cors = require('cors');


const app: Express = express();
const port = 3100;

const productController = new ProductController();
const checkoutController = new CheckoutController();
const cartController = new CartController();

const logRequestInfo = (req: Request, res: Response, next: NextFunction) => {
    console.log(`${req.method} ${req.url}`);
    next();
  };

app.use(cors());
app.use(express.json())
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
