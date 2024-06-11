"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartService = void 0;
const cartDao_1 = require("../dao/cartDao");
class CartService {
    constructor() {
        this.cartDaoInstance = new cartDao_1.cartDao();
    }
    addToCart(user_id, product_id, quantity) {
        // FE to assign a temp user_id for a cart.
        this.cartDaoInstance.addItem({
            user_id: user_id,
            product_id: product_id,
            quantity: quantity
        });
    }
    removefromCart(user_id, product_id) {
        // FE to assign a temp user_id for a cart in the session.
        this.cartDaoInstance.removeFromCart(user_id, product_id);
    }
    clearCart(user_id) {
        this.cartDaoInstance.clearCart(user_id);
    }
    getCart(user_id) {
        return this.cartDaoInstance.getCartItems(user_id);
    }
}
exports.CartService = CartService;
