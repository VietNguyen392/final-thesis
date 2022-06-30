import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from '../models/User'
import {
  generateActiveToken,
  generateAccessToken,
  generateRefreshToken,
} from "../config/genToken";
import { IDecodedToken, IReqAuth, IUser, IUserParams,validateEmail } from "../utils";
const API = {
  createUser: async (req: Request, res: Response) => {
  try {
    const {name,email,password,gender,phoneNumber,avatar,address,role}=req.body
    const user=await User.findOne({email})
    if(user) return res.status(400).send({msg:'Email already in use'})
    const newUser=new User({
      name,
      email,
      password:await bcrypt.hash(password,10),
      gender,
      phoneNumber,
      avatar,
      address,
      role
    })
    await newUser.save()
    res.json({newUser})
  } catch (e:any) {
    res.status(500).send({msg:'Internal Server Error'})
    console.log(e);
    
  }
    
  },
};
export default API;
