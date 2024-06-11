import { cartDao } from "../dao/cartDao";
import CartModel from "../models/cartModel";

export class CartService {
    private cartDaoInstance: cartDao;

    constructor() {
        this.cartDaoInstance = new cartDao();
    }

    public addToCart(user_id: string, product_id: number, quantity: number) {
        // FE to assign a temp user_id for a cart.
        this.cartDaoInstance.addItem({
            user_id: user_id,
            product_id: product_id,
            quantity: quantity
        });
    }

    public removefromCart(user_id: string, product_id: string) {
        // FE to assign a temp user_id for a cart in the session.
        this.cartDaoInstance.removeFromCart(user_id, product_id);
    }

    public clearCart(user_id: string) {
        this.cartDaoInstance.clearCart(user_id);
    }

    public getCart(user_id: string): CartModel[] {
        return this.cartDaoInstance.getCartItems(user_id) as unknown as CartModel[];
    }
}