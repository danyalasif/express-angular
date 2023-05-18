import express from 'express';

const router = express.Router();

import { getUser } from '../../controllers/user';

// GET /api/user/:id
router.post('/', getUser);

module.exports = router;
