import { Request, Response } from 'express';

const products = [
  {
    id: '1',
    name: 'Product 1',
    price: 10.99,
    description: 'This is product 1',
  },
  {
    id: '2',
    name: 'Product 2',
    price: 19.99,
    description: 'This is product 2',
  },
  {
    id: '3',
    name: 'Product 3',
    price: 7.99,
    description: 'This is product 3',
  },
];

// GET /api/products
const getProducts = (req: Request, res: Response) => {
  res.json(products);
};

// GET /api/products/:id
const getProduct = (req: Request, res: Response) => {
  const productId = req.params.id;
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }

  res.json(product);
};

module.exports = {
  getProducts,
  getProduct,
};
