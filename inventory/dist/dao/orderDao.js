"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderDao = void 0;
const const_1 = require("../config/const");
const database_1 = __importDefault(require("../config/database"));
class orderDao {
    constructor() { }
    addOrder(orderItem) {
        try {
            database_1.default.query(`INSERT INTO ${const_1.TABLES.ORDERS} (id, amount, user_id, created_at) VALUES (?, ?, ?, ?)`, [orderItem.id, orderItem.amount, orderItem.user_id, orderItem.created_at]);
        }
        catch (err) {
            console.log(err);
        }
    }
    deleteOrder(order_id) {
        try {
            database_1.default.query(`DELETE FROM ${const_1.TABLES.ORDERS} WHERE order_id = ?`, [order_id]);
        }
        catch (err) {
            console.log(err);
        }
    }
    addOrderChairs(orderChairs) {
        try {
            database_1.default.query(`INSERT INTO ${const_1.TABLES.ORDER_CHAIRS} (id, order_id, chair_id) VALUES (?, ?, ?)`, [orderChairs.id, orderChairs.order_id, orderChairs.chair_id]);
        }
        catch (err) {
            console.log(err);
        }
    }
    deleteOrderChairs(order_id) {
        try {
            database_1.default.query(`DELETE FROM ${const_1.TABLES.ORDER_CHAIRS} WHERE order_id = ?`, [order_id]);
        }
        catch (err) {
            console.log(err);
        }
    }
    addOrderTable(orderTable) {
        try {
            database_1.default.query(`INSERT INTO ${const_1.TABLES.ORDER_TABLES} (id, order_id, table_id) VALUES (?, ?, ?)`, [orderTable.id, orderTable.order_id, orderTable.table_id]);
        }
        catch (err) {
            console.log(err);
        }
    }
    deleteOrderTable(order_id) {
        try {
            database_1.default.query(`DELETE FROM ${const_1.TABLES.ORDER_TABLES} WHERE order_id = ?`, [order_id]);
        }
        catch (err) {
            console.log(err);
        }
    }
    addOrderTop(orderTop) {
        try {
            database_1.default.query(`INSERT INTO ${const_1.TABLES.ORDER_TOPS} (id, order_id, top_id) VALUES (?, ?, ?)`, [orderTop.id, orderTop.order_id, orderTop.top_id]);
        }
        catch (err) {
            console.log(err);
        }
    }
    deleteOrderTop(order_id) {
        try {
            database_1.default.query(`DELETE FROM ${const_1.TABLES.ORDER_TOPS} WHERE order_id = ?`, [order_id]);
        }
        catch (err) {
            console.log(err);
        }
    }
}
exports.orderDao = orderDao;
