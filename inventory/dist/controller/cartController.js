"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartController = void 0;
const cartService_1 = require("../service/cartService");
class CartController {
    constructor() {
        this.addToCart = (req, res) => {
            try {
                const { user_id, product_id, quantity } = req.body;
                const cart = this.cartServiceInstance.addToCart(user_id, product_id, quantity);
                res.status(200).json({ "message": "Item added" });
            }
            catch (error) {
                res.status(500).json({
                    message: "Internal Server Error"
                });
            }
        };
        this.removeFromCart = (req, res) => {
            try {
                const user_id = req.query.user_id;
                const product_id = req.query.product_id;
                this.cartServiceInstance.removefromCart(user_id, product_id);
                res.status(200).json({ "message": "Item removed" });
            }
            catch (error) {
                res.status(500).json({
                    message: "Internal Server Error"
                });
            }
        };
        this.clearCart = (req, res) => {
            try {
                const user_id = req.query.user_id;
                this.cartServiceInstance.clearCart(user_id);
                res.status(200).json({ "message": "Cart cleared" });
            }
            catch (error) {
                res.status(500).json({
                    message: "Internal Server Error"
                });
            }
        };
        this.getCart = (req, res) => {
            try {
                const user_id = req.query.user_id;
                const cart = this.cartServiceInstance.getCart(user_id);
                res.status(200).json(cart);
            }
            catch (error) {
                console.log(error);
                res.status(500).json({
                    message: "Internal Server Error"
                });
            }
        };
        this.cartServiceInstance = new cartService_1.CartService();
    }
}
exports.CartController = CartController;
