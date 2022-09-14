import mongoose from 'mongoose';
import { IUser, validateEmail } from '../utils';
const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, 'Hãy nhập tên cho tài khoản'],
      trim: true,
      maxLength: [20, 'Tên tài khoản giới hạn trong 20 ký tự'],
    },
    email: {
      type: String,
      required: [true, 'Hãy nhập email của bạn'],
      trim: true,
      unique: true,
      validate: [validateEmail, 'Hãy nhập đúng định dạng mail'],
    },
    password: {
      type: String,
      required: [true, 'Hãy nhập mật khẩu'],
      MaxLength: [20, 'Pass length require 6 to 20 char'],
    },
    gender: {
      type: String,
      required: [true, 'Hãy chọn giới tính'],
      unique: false,
    },
    phoneNumber: {
      type: String,
      require: [true, 'Hãy nhập số điện thoại'],
      MaxLength: [10, 'Phone Number limit to 10'],
    },
    avatar: {
      type: String,
      default:
        'https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png',
    },
    address: {
      type: String,
      required: [true, 'Hãy nhập địa chỉ'],
    },
    content: {
      type: String,
      // minLength:2000
    },
    bank: {
      type: String,
      // minLength: 50,
      // maxLength: 200
    },
    price: { type: Number, default: 0 },
    payment: { type: String },
    clinic: { type: String },
    role: {
      type: String,
      default: 'doctor',
    },

    rf_token: { type: String, select: false },
  },
  { timestamps: true },
);

export default mongoose.model<IUser>('Users', userSchema);
//,require:[true,'Hãy nhập giá tiền']
