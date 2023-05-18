import express from 'express';

const router = express.Router();

import {
  createProduct,
  updateProduct,
  deleteProduct,
} from '../../controllers/products';

// POST /api/products
router.post('/', createProduct);

// PUT /api/products/:id
router.put('/:id', updateProduct);

// DELETE /api/products/:id
router.delete('/:id', deleteProduct);
module.exports = router;
