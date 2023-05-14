import express from 'express';
import * as path from 'path';
import { DBInit } from './helpers/database';
import passport from 'passport';
import { authenticateUser } from './helpers/methods/authenticateUser';

const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use(express.json());

// app.use('/api/products', require('./routes/private/products'));
app.use('/api/products', require('./routes/public/products'));

app.use('/api/user', require('./routes/public/user'));
app.use('/api/user', authenticateUser, require('./routes/private/user'));

app.get('/api/health', (req, res) => {
  res.status(200).send('OK');
});

// Handle errors.
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({ error: err });
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
DBInit();
