import express from 'express';

const router = express.Router();

const { getProducts, getProduct } = require('../controllers/products');

// GET /api/products
router.get('/', getProducts);

// GET /api/products/:id
router.get('/:id', getProduct);

module.exports = router;
