import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Users from "../models/User";
import {generateActiveToken} from "../config/genToken";
import {
  IDecodedToken,
  IReqAuth,
  IUser,
  IUserParams,
  validateEmail,
} from "../utils";
import { handleUserLogin } from "../middleware";
const API = {
  createUser: async (req: Request, res: Response) => {

    try {
      const {
        name,
        email,
        password,
        gender,
        phoneNumber,
        avatar,
        address,
        role,
        content,
        mota,
        price,
        payment,
        clinic_name,
        clinic_address,
        city
      } = req.body;
      const userExist = await Users.findOne({ email });
      if (userExist) return res.status(400).send({ msg: "Email already in use" });
      const passwordHash = await bcrypt.hash(password, 10);
      const newUser = await Users.create({
        name,
        email,
        password:passwordHash,
        gender,
        phoneNumber,
        avatar,
        address,
        role,
        content,
        mota,
        price,
        payment,
        clinic_name,
        clinic_address,
        city
      });
      if(newUser){
        res.status(200).json({
          _id: newUser.id,
          name: newUser.name,
          token:generateActiveToken(newUser._id),
        })
      }else{
        res.status(400).send({ msg: "Error" })
      }
    } catch (e: any) {
      res.status(500).send({ msg: "Internal Server Error" });
      console.log(e);
    }
  },
  readUser: async (req: Request, res: Response) => {
    try {
      const user = await Users.find().select("-password").sort('-createdAt');
      if (!user) return res.status(404).send({ msg: "User not found" });
      res.json({ user });
    } catch (e: any) {
      res.status(500).send({ msg: "Internal Server Error" });
      console.log(e);
    }
  },
  getUserById: async (req: Request, res: Response) => {
    try {
      const userID = await Users.findById(req.params._id).select("-password");
      if (!userID) return res.status(404).send({ msg: "User not found" });
      res.json({ userID });
    } catch (e: any) {
      res.status(500).send({ msg: "Internal Server Error" });
      console.log(e);
    }
  },
  updateUser: async (req: Request, res: Response) => {
    // if(!req.user)return res.status(400).send({msg:"Invalid"})
    try {
      const {name,avatar,phoneNumber,address,role}=req.body
      const userUpdate = await Users.findOneAndUpdate({ _id: req.params.id },
      {name,avatar,phoneNumber,address,role},{new:true})
      res.json({ msg: "update success",userUpdate });
      console.log(userUpdate);
      
    } catch (e: any) {
      res.status(500).send({ msg: "Internal Server Error" });
      console.log(e);
    }
  },
  deleteUser: async (req: Request, res: Response) => {
    try {
      const user = await Users.findByIdAndDelete(req.params.id);
      if (!user) return res.status(404).send({ msg: "User not found" });
      res.json({ msg: "delete success" });
    } catch (e: any) {
      res.status(500).send({ msg: "Internal Server Error" });
      console.log(e);
    }
  },
  login: async (req: Request, res: Response) => {
   try {
      const { email, password } = req.body;
      const user = await Users.findOne({ email });
      if (!user)
        return res.status(400).send({ msg: "Tài khoản không tồn tại" })
       handleUserLogin(user,password,res)
    } catch (error: any) {
      return res.status(500).send({ msg: error.message });
    }
  }
};
export default API;
