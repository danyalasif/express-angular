import { model, Schema, Model, Document } from 'mongoose';

export interface IProduct extends Document {
  name: string;
  price: number;
  stock: number;
  description: string;
  imageUrl: string;
}

const ProductSchema: Schema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
});

export const Product = model<IProduct>('Product', ProductSchema);
