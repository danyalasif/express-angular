import { Request, Response } from 'express';
import { Product } from '../helpers/database/schema/product.schema';

// GET /api/products
const getProducts = async (req: Request, res: Response) => {
  const products = await Product.find().catch(console.log);
  res.json(products);
};

// GET /api/products/:id
const getProduct = async (req: Request, res: Response) => {
  const productId = req.params.id;
  const product = await Product.find({ _id: productId });

  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }

  res.json(product);
};

module.exports = {
  getProducts,
  getProduct,
};
