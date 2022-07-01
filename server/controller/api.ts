import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Users from "../models/User";
import {
  generateActiveToken,
  generateAccessToken,
  generateRefreshToken,
} from "../config/genToken";
import {
  IDecodedToken,
  IReqAuth,
  IUser,
  IUserParams,
  validateEmail,
} from "../utils";
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
        mota
      } = req.body;
      const user = await Users.findOne({ email });
      if (user) return res.status(400).send({ msg: "Email already in use" });

      const newUser = new Users({
        name,
        email,
        password: await bcrypt.hash(password, 10),
        gender,
        phoneNumber,
        avatar,
        address,
        role,
        content,
        mota
      });
      // const activeToken=generateActiveToken(newUser)
      await newUser.save();
      res.json({ newUser });
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
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).send({ msg: "Sai mật khẩu" });
      return res.status(200).send('login ok')
    } catch (error: any) {
      return res.status(500).send({ msg: error.message });
    }
  }
};
// const loginUser = async (user: IUser, password: string, res: Response) => {
//   const isMatch = await bcrypt.compare(password, user.password);

//   if (!isMatch) {
//     let msgError = "Sai mật khẩu,vui lòng nhập lại."
//     return res.status(400).json({ msg: msgError });
//   }

//   const access_token = generateAccessToken({ id: user._id });
//   const refresh_token = generateRefreshToken({ id: user._id },res);
//   await Users.findOneAndUpdate(
//     { _id: user._id },
//     {
//       rf_token: refresh_token,
//     }
//   );

//   res.cookie("refreshtoken", refresh_token, {
//     httpOnly: true,
//     path: `/api/refresh_token`,
//     maxAge: 30 * 24 * 60 * 60 * 1000, // 30days
//   });

//   res.json({
//     msg: "Đăng nhập thành công!",
//     access_token,
//     user: { ...user._doc, password: "" },
//   });
// };
export default API;
