import { OrderService } from "./orderService";
import { UserService } from "./userService";
import { CheckoutModel } from "../models/checkoutModel";
import { CartService } from "./cartService";
import CartModel from "../models/cartModel";
import { getProductById } from "./productService";
import ProductModel from "../models/productModel";

export class CheckoutService {
    private userServiceInstance: UserService;
    private orderServiceInstance: OrderService;
    private cartServiceInstance: CartService;
    
    constructor() {
        this.userServiceInstance = new UserService();
        this.orderServiceInstance = new OrderService();
        this.cartServiceInstance = new CartService();
    }

    public performCheckout(checkoutModel: CheckoutModel) {
        // First create a user
        this.userServiceInstance.createUser(checkoutModel.user_id, checkoutModel.name, checkoutModel.email);

        // getCart items
        const cartItems: CartModel[] = this.cartServiceInstance.getCart(checkoutModel.user_id);

        // Then begin transaction
        // Add each to order table
        const price = this.calculatePrice(cartItems);
        const orderId = this.orderServiceInstance.insertTopOrder(price, checkoutModel.user_id);

        for (let cartItem of cartItems) {
            const product = getProductById(cartItem.product_id) as ProductModel;
            this.orderServiceInstance.insertOrder(product.category, cartItem.product_id, orderId)
        }

        this.cartServiceInstance.clearCart(checkoutModel.user_id);
        // End transaction
    }

    private calculatePrice(cartItems: CartModel[]): number {
        var price = 0;
        for (let cartItem of cartItems) {
            const product = getProductById(cartItem.product_id) as ProductModel;
            price += product.price * cartItem.quantity;
        }
        return price;
    }
}