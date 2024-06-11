import { Request, Response } from 'express';
import { getProducts, getProductsByCategory } from '../service/productService';

export class ProductController {
  getProducts = (req: Request, res: Response) => {
    const category = req.query.category as string;
    if (category) {
      const products = getProductsByCategory(category);
      res.json(products);
    } else {
      const products = getProducts();
      res.json(products);
    }
  };
}
