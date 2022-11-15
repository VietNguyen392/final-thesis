import { Request } from 'express';
import { Document } from 'mongoose';
export interface IUser extends Document {
  fullName: string;
  email: string;
  password: string;
  gender: string;
  phoneNumber: number;
  avatar: string;
  address: string;
  role: string;
  rf_token?: string;
  type: string;
  _doc: object;
}
export interface IHotel extends Document {
  room_name: string;
  room_type: string;
  location: string;
  photo: string[];
  room_price: number;
  rating: number;
  desc: string;
  featured: string[];
}
export interface IRoom extends Document {
  title: string;
  price: number;
  max: number;
  desc: string;
  roomNumbers: number;
  features: string;
  hotel: string;
}
export interface INewUser {
  fullName: string;
  email: string;
  password: string;
  gender: string;
  phoneNumber: number;
  address: string;
}
export interface IDecodedToken {
  id?: string;
  payload?: object | any;
  newRegister?: INewUser;
  newBooking?: IBooking;
  iat: number;
  exp: number;
}
export interface IUserParams {
  name: string;
  email: string;
  password: string;
  avatar?: string;
}

export interface IReqAuth extends Request {
  user?: IUser;
}
export interface IHistory extends Document {
  userId: string;
  roomID: number;
  mota: string;
  files: string;
  _doc: object;
}
export interface IBooking extends Document {
  room: string;
  email:string
  user: string;
  date: object;
  _doc: object;
}
export interface INoti extends Document {
  user: string;
  content: string;
  state: boolean;
}
