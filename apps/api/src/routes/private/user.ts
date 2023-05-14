import express from 'express';

const router = express.Router();

import { getUser, signup, login } from '../../controllers/user';

// GET /api/user/:id
router.get('/', getUser);

module.exports = router;
