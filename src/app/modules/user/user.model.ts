import bcrypt from 'bcrypt';
import { Schema, model } from 'mongoose';
import { TUser, TUserStatic } from './user.interface';
import config from '../../config';

export const userSchema = new Schema<TUser>(
  {
    id: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    needsPasswordChange: { type: Boolean, default: true },
    role: { type: String, enum: { values: ['student', 'faculty', 'admin'] } },
    status: {
      type: String,
      enum: { values: ['in-progress', 'blocked'] },
      default: 'in-progress',
    },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  },
);

userSchema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  );
  next();
});

userSchema.post('save', async function (doc, next) {
  doc.password = '';
  next();
});

userSchema.statics.isUserExists = async function (id: string) {
  const existingUser = await UserModel.findOne({ id });
  return existingUser;
};

export const UserModel = model<TUser, TUserStatic>('User', userSchema);
