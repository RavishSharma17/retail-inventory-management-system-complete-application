"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckoutController = void 0;
const checkoutService_1 = require("../service/checkoutService");
class CheckoutController {
    constructor() {
        this.checkoutCustomer = (req, res) => {
            const body = req.body;
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
            }
            catch (error) {
                console.log(error);
                res.status(500).json({
                    message: "Internal Server Error"
                });
            }
        };
        this.checkoutServiceInstance = new checkoutService_1.CheckoutService();
    }
}
exports.CheckoutController = CheckoutController;
