import { Request } from 'express'
import { Document } from "mongoose";
export interface IUser extends Document{
  name: string;
  email: string;
  password: string;
  gender:string;
  phoneNumber:number
  avatar: string;
  address:string;
  content:string;
  mota:string;
  price:number;
  payment:string;
  clinic_name:string;
  clinic_address:string;
  city:string;
  role: string;
  rf_token?: string;
  _doc: object;
}
export interface INewUser {
  name: string;
  email: string;
  password: string;
}
export interface IDecodedToken {
  id?: string;
  newUser?: INewUser;
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
export interface ISchedule extends Document{
  currentNumber:number;
  maxNumber:number;
  doctorID:number;
  date:Date;
  timeType:Date;
  _doc:object
}
export interface IBooking extends Document{
  statusID:string;
  doctorID:string;
  patientID:string;
  date:Date
  timeType:Date
  _doc:object
}
export interface IHistory extends Document{
  patientID:number;
  doctorID:number;
  mota:string;
  files:string;
  _doc:object
}
export interface IClinic extends Document{
  address:string;
  name:string;
  mota:string;
  avatar:string;
  _doc:object
}
// export interface IDoctor extends Document{
//   doctorID: string;
//   priceID:string;
//   paymentID:string;
//   addressClinic:string;
//   nameClinic:string;
//   note:string;
//   count:number;
//   description:string;
//   mainContent:string;
//  _doc: object;

// }
