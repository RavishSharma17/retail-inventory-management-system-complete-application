import {TABLES} from '../config/const';
import connection from "../config/database";
import OrderModel from "../models/orderModel";
import {OrderChairModel, OrderTableModel, OrderTopModel} from "../models/orderItemsModel";

export class orderDao {
    constructor() { }

    public addOrder(orderItem: OrderModel) {
        try{
            connection.query(`INSERT INTO ${TABLES.ORDERS} (id, amount, user_id, created_at) VALUES (?, ?, ?, ?)`,
            [orderItem.id, orderItem.amount, orderItem.user_id, orderItem.created_at]);
        } catch(err) {
            console.log(err);
        }
    }

    public deleteOrder(order_id: string) {
        try{
            connection.query(`DELETE FROM ${TABLES.ORDERS} WHERE order_id = ?`, [order_id]);
        } catch(err) {
            console.log(err);
        }
    }

    public addOrderChairs(orderChairs: OrderChairModel) {
        try{
            connection.query(`INSERT INTO ${TABLES.ORDER_CHAIRS} (id, order_id, chair_id) VALUES (?, ?, ?)`,
            [orderChairs.id, orderChairs.order_id, orderChairs.chair_id]);
        } catch(err) {
            console.log(err);
        }
    }

    public deleteOrderChairs(order_id: string) {
        try{
            connection.query(`DELETE FROM ${TABLES.ORDER_CHAIRS} WHERE order_id = ?`, [order_id]);
        } catch(err) {
            console.log(err);
        }
    }

    public addOrderTable(orderTable: OrderTableModel) {
        try{
            connection.query(`INSERT INTO ${TABLES.ORDER_TABLES} (id, order_id, table_id) VALUES (?, ?, ?)`,
            [orderTable.id, orderTable.order_id, orderTable.table_id]);
        } catch(err) {
            console.log(err);
        }
    }

    public deleteOrderTable(order_id: string) {
        try{
            connection.query(`DELETE FROM ${TABLES.ORDER_TABLES} WHERE order_id = ?`, [order_id]);
        } catch(err) {
            console.log(err);
        }
    }

    public addOrderTop(orderTop: OrderTopModel) {
        try{
            connection.query(`INSERT INTO ${TABLES.ORDER_TOPS} (id, order_id, top_id) VALUES (?, ?, ?)`,
            [orderTop.id, orderTop.order_id, orderTop.top_id]);
        } catch(err) {
            console.log(err);
        }
    }

    public deleteOrderTop(order_id: string) {
        try{
            connection.query(`DELETE FROM ${TABLES.ORDER_TOPS} WHERE order_id = ?`, [order_id]);
        } catch(err) {
            console.log(err);
        }
    }
}