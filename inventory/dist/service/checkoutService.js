"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckoutService = void 0;
const orderService_1 = require("./orderService");
const userService_1 = require("./userService");
const cartService_1 = require("./cartService");
const productService_1 = require("./productService");
class CheckoutService {
    constructor() {
        this.userServiceInstance = new userService_1.UserService();
        this.orderServiceInstance = new orderService_1.OrderService();
        this.cartServiceInstance = new cartService_1.CartService();
    }
    performCheckout(checkoutModel) {
        // First create a user
        this.userServiceInstance.createUser(checkoutModel.user_id, checkoutModel.name, checkoutModel.email);
        // getCart items
        const cartItems = this.cartServiceInstance.getCart(checkoutModel.user_id);
        // Then begin transaction
        // Add each to order table
        const price = this.calculatePrice(cartItems);
        const orderId = this.orderServiceInstance.insertTopOrder(price, checkoutModel.user_id);
        for (let cartItem of cartItems) {
            const product = (0, productService_1.getProductById)(cartItem.product_id);
            this.orderServiceInstance.insertOrder(product.category, cartItem.product_id, orderId);
        }
        this.cartServiceInstance.clearCart(checkoutModel.user_id);
        // End transaction
    }
    calculatePrice(cartItems) {
        var price = 0;
        for (let cartItem of cartItems) {
            const product = (0, productService_1.getProductById)(cartItem.product_id);
            price += product.price * cartItem.quantity;
        }
        return price;
    }
}
exports.CheckoutService = CheckoutService;
