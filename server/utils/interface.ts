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
  hotel_name: string;
  hotel_type: string;
  city: string;
  address: string;
  photo: string;
  distance: string;
  rating: number;
  rooms: string[];
  cheap: number;
  desc: string;
  featured: string[];
}
export interface IRoom extends Document {
  title: string;
  price: number;
  max: number;
  desc: string;
  roomNumbers: number;
}
export interface INewUser {
  fullName: string;
  email: string;
  password: string;
}
export interface IDecodedToken {
  id?: string;
  newRegister?: INewUser;
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
  hotel: string;
  user: string;
  date: object;
  _doc: object;
}
