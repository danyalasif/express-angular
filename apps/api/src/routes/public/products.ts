import express from 'express';

const router = express.Router();

import { getProducts, getProduct } from '../../controllers/products';

// GET /api/products
router.get('/', getProducts);

// GET /api/products/:id
router.get('/:id', getProduct);

module.exports = router;
