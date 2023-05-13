import express from 'express';
import * as path from 'path';
import { DBInit } from './helpers/database';

const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use(express.json());

app.use('/api/products', require('./routes/products'));
app.get('/api/health', (req, res) => {
  res.status(200).send('OK');
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
DBInit();
