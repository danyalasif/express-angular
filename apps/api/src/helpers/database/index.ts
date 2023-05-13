import * as mongoose from 'mongoose';

export const DBInit = () => {
  mongoose.connect(process.env.MONGO_URL);
  mongoose.connection.on(
    'error',
    console.error.bind(console, 'connection error:')
  );
  mongoose.connection.once('open', () => {
    console.log('DB connected');
  });
};
