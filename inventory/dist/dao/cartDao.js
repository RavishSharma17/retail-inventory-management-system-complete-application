"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartDao = void 0;
const const_1 = require("../config/const");
const database_1 = __importDefault(require("../config/database"));
class cartDao {
    constructor() { }
    addItem(cartItem) {
        try {
            database_1.default.query(`INSERT INTO ${const_1.TABLES.CART} (user_id, product_id, quantity) VALUES (?, ?, ?)`, [cartItem.user_id, cartItem.product_id, cartItem.quantity]);
        }
        catch (err) {
            console.log(err);
        }
    }
    getCartItems(user_id) {
        try {
            return database_1.default.query(`SELECT * FROM ${const_1.TABLES.CART} WHERE user_id = ?`, [user_id]);
        }
        catch (err) {
            console.log(err);
        }
        return null;
    }
    removeFromCart(user_id, product_id) {
        try {
            database_1.default.query(`DELETE FROM ${const_1.TABLES.CART} WHERE user_id = ? AND product_id = ?`, [user_id, product_id]);
        }
        catch (err) {
            console.log(err);
        }
    }
    clearCart(user_id) {
        try {
            database_1.default.query(`DELETE FROM ${const_1.TABLES.CART} WHERE user_id = ?`, [user_id]);
        }
        catch (err) {
            console.log(err);
        }
    }
}
exports.cartDao = cartDao;
