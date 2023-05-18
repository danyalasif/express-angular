import express from 'express';

const router = express.Router();

import { signup, login } from '../../controllers/user';

router.post('/signup', signup);
router.post('/login', login);

module.exports = router;
