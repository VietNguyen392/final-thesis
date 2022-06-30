import { Request, Response, NextFunction } from 'express'
import { Document } from "mongoose";
export interface IUser extends Document{
  name: string;
  email: string;
  password: string;
  gender:string;
  phoneNumber:number
  avatar: string;
  address:string
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

export const validRegister = async (req: Request, res: Response, next: NextFunction) => {
  const { name, email, password,phoneNumber } = req.body
  const regex=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,20}$/
  var phoneRegex=/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g
  const errors=[]
  if(!name){
    errors.push("Hãy nhập tên ")
  }else if(name.length > 20){
    errors.push("Your name is up to 20 character long.")
  }
  if(!email){
    errors.push("Please add your email ")
  }else if(!validateEmail(email)){
    errors.push("Email  format is incorrect.")
  }
  if((!password.match(regex))){
    errors.push('password must have at least 6 character 1 letter ,1 number,1 uppercase and 1 special character')
  }
  if((!phoneNumber.match(phoneRegex))){
    errors.push('Phone Number Invalid')
  }
  if(errors.length > 0) return res.status(400).json({msg: errors})

  next();
}
export function validateEmail(email: string) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}