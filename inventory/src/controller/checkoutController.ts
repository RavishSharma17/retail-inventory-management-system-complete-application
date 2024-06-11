import { CheckoutModel } from "../models/checkoutModel";
import { CheckoutService } from "../service/checkoutService";
import { Request, Response } from 'express';

export class CheckoutController {
    private checkoutServiceInstance: CheckoutService;

    constructor() {
        this.checkoutServiceInstance = new CheckoutService();
    }

    checkoutCustomer = (req: Request, res: Response) => {
        const body = req.body as unknown as CheckoutModel;

        if (!body) {
            res.status(400).json({
                message: "Bad Request"
            });
        }

        try {
            this.checkoutServiceInstance.performCheckout({
                // user related
                name: body.name, email: body.email, user_id: body.user_id
            });
            res.status(200).json({
                message: "Checkout successful"
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: "Internal Server Error"
            });
        }
    };
}