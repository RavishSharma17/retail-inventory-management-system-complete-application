import { orderDao } from "../dao/orderDao";
import { v4 as uuidv4 } from 'uuid';

export class OrderService {
  private orderDaoInstance: orderDao;

  constructor() {
    this.orderDaoInstance = new orderDao();
  }

  public insertTopOrder(amount: number, user_id: string): string {
    const orderId = uuidv4();
    this.orderDaoInstance.addOrder({
      id: orderId,
      amount: amount,
      user_id: user_id,
      created_at: new Date().toISOString()
    });
    return orderId;
  }

  public insertOrder(category: string, product_id: number, orderId: string) : string {
    if (category === 'Tables') {
      this.orderDaoInstance.addOrderTable({
        order_id: orderId,
        table_id: product_id,
        id: uuidv4()
      });
    } else if (category === 'Chairs') {
      this.orderDaoInstance.addOrderChairs({
        order_id: orderId,
        chair_id: product_id,
        id: uuidv4()
      });
    } else if (category === 'Tops') {
      this.orderDaoInstance.addOrderTop({
        order_id: orderId,
        top_id: product_id,
        id: uuidv4()
      });
    } else {
      throw new Error('Invalid category');
    }
    return orderId;
  }
}