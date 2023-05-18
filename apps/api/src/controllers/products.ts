import { Request, Response } from 'express';
import { Product } from '../helpers/database/schema/product.schema';

// GET /api/products
export const getProducts = async (req: Request, res: Response) => {
  const products = await Product.find().catch((error) =>
    res.status(404).json({ error })
  );
  res.json(products);
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

// POST /api/products
export const createProduct = async (req, res) => {
  const productData = req.body;

  const product = new Product(productData);
  product
    .save()
    .then(() => {
      res.status(201).json(product);
    })
    .catch((error) => {
      console.error('Failed to create product', error);
      res.status(500).json({ error: 'Failed to create product' });
    });
};

// PUT /api/products/:id
export const updateProduct = (req, res) => {
  const productId = req.params.id;
  const productData = req.body;

  Product.findByIdAndUpdate(productId, productData, { new: true })
    .then((product) => {
      if (product) {
        res.json(product);
      } else {
        res.status(404).json({ error: 'Product not found' });
      }
    })
    .catch((error) => {
      console.error('Failed to update product', error);
      res.status(500).json({ error: 'Failed to update product' });
    });
};

// DELETE /api/products/:id
export const deleteProduct = (req, res) => {
  const productId = req.params.id;

  Product.findByIdAndDelete(productId)
    .then(() => {
      res.sendStatus(204);
    })
    .catch((error) => {
      console.error('Failed to delete product', error);
      res.status(500).json({ error: 'Failed to delete product' });
    });
};
