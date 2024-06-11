"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const productService_1 = require("../service/productService");
class ProductController {
    constructor() {
        this.getProducts = (req, res) => {
            const category = req.query.category;
            if (category) {
                const products = (0, productService_1.getProductsByCategory)(category);
                res.json(products);
            }
            else {
                const products = (0, productService_1.getProducts)();
                res.json(products);
            }
        };
    }
}
exports.ProductController = ProductController;
