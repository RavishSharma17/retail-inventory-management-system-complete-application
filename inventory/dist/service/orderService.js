"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const orderDao_1 = require("../dao/orderDao");
const uuid_1 = require("uuid");
class OrderService {
    constructor() {
        this.orderDaoInstance = new orderDao_1.orderDao();
    }
    insertTopOrder(amount, user_id) {
        const orderId = (0, uuid_1.v4)();
        this.orderDaoInstance.addOrder({
            id: orderId,
            amount: amount,
            user_id: user_id,
            created_at: new Date().toISOString()
        });
        return orderId;
    }
    insertOrder(category, product_id, orderId) {
        if (category === 'Tables') {
            this.orderDaoInstance.addOrderTable({
                order_id: orderId,
                table_id: product_id,
                id: (0, uuid_1.v4)()
            });
        }
        else if (category === 'Chairs') {
            this.orderDaoInstance.addOrderChairs({
                order_id: orderId,
                chair_id: product_id,
                id: (0, uuid_1.v4)()
            });
        }
        else if (category === 'Tops') {
            this.orderDaoInstance.addOrderTop({
                order_id: orderId,
                top_id: product_id,
                id: (0, uuid_1.v4)()
            });
        }
        else {
            throw new Error('Invalid category');
        }
        return orderId;
    }
}
exports.OrderService = OrderService;
