import { CartService } from "../service/cartService";
import { Request, Response } from 'express';


export class CartController {
    private cartServiceInstance: CartService

    constructor() {
        this.cartServiceInstance = new CartService();
    }

    addToCart = (req: Request, res: Response) => {
        try {
            const { user_id, product_id, quantity} = req.body;
            const cart = this.cartServiceInstance.addToCart(user_id, product_id, quantity);
            res.status(200).json({"message": "Item added"});
        } catch (error) {
            res.status(500).json({
                message: "Internal Server Error"
            });
        }
    };

    removeFromCart = (req: Request, res: Response) => {
        try {
            const user_id = req.query.user_id as string;
            const product_id = req.query.product_id as string;
            this.cartServiceInstance.removefromCart(user_id, product_id);
            res.status(200).json({"message": "Item removed"});
        } catch (error) {
            res.status(500).json({
                message: "Internal Server Error"
            });
        }
    };

    clearCart = (req: Request, res: Response) => {
        try {
            const user_id = req.query.user_id as string;
            this.cartServiceInstance.clearCart(user_id);
            res.status(200).json({"message": "Cart cleared"});
        } catch (error) {
            res.status(500).json({
                message: "Internal Server Error"
            });
        }
    };

    getCart = (req: Request, res: Response) => {
        try {
            const user_id = req.query.user_id as string;
            const cart = this.cartServiceInstance.getCart(user_id);
            res.status(200).json(cart);
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: "Internal Server Error"
            });
        }
    };
}