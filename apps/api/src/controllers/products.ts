import { Request, Response } from 'express';
import { Product } from '../helpers/database/schema/product.schema';
const localProducts = [
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
export const getProducts = async (req: Request, res: Response) => {
  const products = await Product.find().catch(console.log);
  res.json(localProducts);
};

// GET /api/products/:id
export const getProduct = async (req: Request, res: Response) => {
  const productId = req.params.id;
  const product = await Product.find({ _id: productId });

  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }

  res.json(product);
};
