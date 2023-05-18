import { model, Schema, Document } from 'mongoose';
import bcrypt from 'bcrypt';
import uniqueValidator from 'mongoose-unique-validator';
export interface IUser extends Document {
  email: string;
  password: string;
  role: string;
  isValidPassword: (password) => boolean;
}

const UserSchema: Schema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
  },
  { timestamps: true }
);

UserSchema.pre('save', async function (next) {
  const user = this as IUser;

  if (!user.isModified('password')) return;
  const hash = await bcrypt.hash(this.password, 2);
  this.password = hash;
  next();
});

UserSchema.methods.isValidPassword = async function (password) {
  const compare = await bcrypt.compare(password, this.password);

  return compare;
};

UserSchema.plugin(uniqueValidator, { message: 'This email is already taken' });

export const User = model<{
  isValidPassword: (password: string) => boolean;
}>('User', UserSchema);
