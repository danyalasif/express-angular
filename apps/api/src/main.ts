import express from 'express';
import * as path from 'path';
import { DBInit } from './helpers/database';
import { checkJwt } from './helpers/methods/authenticateUser';
import cors from 'cors';
import morgan from 'morgan';
const app = express();

app.use(morgan('combined'));

app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use(express.json());
app.use(cors());

app.use('/api/products', require('./routes/public/products'));
app.use('/api/products', [checkJwt], require('./routes/private/products'));

app.use('/api/user', require('./routes/public/user'));
app.use('/api/user', [checkJwt], require('./routes/private/user'));

app.get('/api/health', (req, res) => {
  res.status(200).send('OK');
});

// Handle errors.
app.use(function (err, req, res, next) {
  console.log({ err });
  res.status(err.status || 500);
  res.json({ error: err });
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
DBInit();
