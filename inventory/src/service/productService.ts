import ProductModel from '../models/productModel';

// Place the product json data here.
const products: ProductModel[] = [
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

export const getProducts = () => {
  return products;
};

export const getProductsByCategory = (category: string) => {
  return products.filter(product => product.category === category);
};

export const getProductById = (id: number) => {
  return products.find(product => product.id === id);
}
