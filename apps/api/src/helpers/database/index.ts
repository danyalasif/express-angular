import * as mongoose from 'mongoose';
import { seedProducts } from './seed';

export const DBInit = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log('DB connected');
      seedProducts();
    })
    .catch((err) => console.log(err));
};
