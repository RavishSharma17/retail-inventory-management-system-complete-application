"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductById = exports.getProductsByCategory = exports.getProducts = void 0;
// Place the product json data here.
const products = [
    {
        id: 1,
        name: 'Lounge Chair',
        price: 2000,
        category: 'Chairs'
    },
    {
        id: 2,
        name: 'Dining Chair',
        price: 1800,
        category: 'Chairs'
    },
    {
        id: 3,
        name: 'Table1',
        price: 3000,
        category: 'Tables'
    },
    {
        id: 4,
        name: 'Table2',
        price: 3200,
        category: 'Tables'
    },
    {
        id: 5,
        name: 'Table3',
        price: 3100,
        category: 'Tables'
    },
    {
        id: 6,
        name: 'Dining Top',
        price: 900,
        category: 'Tops'
    }
];
const getProducts = () => {
    return products;
};
exports.getProducts = getProducts;
const getProductsByCategory = (category) => {
    return products.filter(product => product.category === category);
};
exports.getProductsByCategory = getProductsByCategory;
const getProductById = (id) => {
    return products.find(product => product.id === id);
};
exports.getProductById = getProductById;
