import CartModel from "../models/cartModel";
import {TABLES} from '../config/const';
import connection from "../config/database";

export class cartDao {
    constructor() { }

    public addItem(cartItem: CartModel) {
        try{
            connection.query(
                `INSERT INTO ${TABLES.CART} (user_id, product_id, quantity) VALUES (?, ?, ?)`,
                [cartItem.user_id, cartItem.product_id, cartItem.quantity]
              );
        } catch(err) {
            console.log(err);
        }
    }

    public getCartItems(user_id: string) {
        try{
            return connection.query(`SELECT * FROM ${TABLES.CART} WHERE user_id = ?`, [user_id]);
        } catch(err) {
            console.log(err);
        }

        return null;
    }

    public removeFromCart(user_id: string, product_id: string) {
        try{
            connection.query(`DELETE FROM ${TABLES.CART} WHERE user_id = ? AND product_id = ?`, [user_id, product_id]);
        } catch(err) {
            console.log(err);
        }
    }

    public clearCart(user_id: string) {
        try{
            connection.query(`DELETE FROM ${TABLES.CART} WHERE user_id = ?`, [user_id]);
        } catch(err) {
            console.log(err);
        }
    }
}