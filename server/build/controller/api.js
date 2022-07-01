"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const User_1 = __importDefault(require("../models/User"));
const API = {
    createUser: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { name, email, password, gender, phoneNumber, avatar, address, role, content, mota } = req.body;
            const user = yield User_1.default.findOne({ email });
            if (user)
                return res.status(400).send({ msg: "Email already in use" });
            const newUser = new User_1.default({
                name,
                email,
                password: yield bcrypt_1.default.hash(password, 10),
                gender,
                phoneNumber,
                avatar,
                address,
                role,
                content,
                mota
            });
            // const activeToken=generateActiveToken(newUser)
            yield newUser.save();
            res.json({ newUser });
        }
        catch (e) {
            res.status(500).send({ msg: "Internal Server Error" });
            console.log(e);
        }
    }),
    readUser: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const user = yield User_1.default.find().select("-password").sort('-createdAt');
            if (!user)
                return res.status(404).send({ msg: "User not found" });
            res.json({ user });
        }
        catch (e) {
            res.status(500).send({ msg: "Internal Server Error" });
            console.log(e);
        }
    }),
    getUserById: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const userID = yield User_1.default.findById(req.params._id).select("-password");
            if (!userID)
                return res.status(404).send({ msg: "User not found" });
            res.json({ userID });
        }
        catch (e) {
            res.status(500).send({ msg: "Internal Server Error" });
            console.log(e);
        }
    }),
    updateUser: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        // if(!req.user)return res.status(400).send({msg:"Invalid"})
        try {
            const { name, avatar, phoneNumber, address, role } = req.body;
            const userUpdate = yield User_1.default.findOneAndUpdate({ _id: req.params.id }, { name, avatar, phoneNumber, address, role }, { new: true });
            res.json({ msg: "update success", userUpdate });
            console.log(userUpdate);
        }
        catch (e) {
            res.status(500).send({ msg: "Internal Server Error" });
            console.log(e);
        }
    }),
    deleteUser: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const user = yield User_1.default.findByIdAndDelete(req.params.id);
            if (!user)
                return res.status(404).send({ msg: "User not found" });
            res.json({ msg: "delete success" });
        }
        catch (e) {
            res.status(500).send({ msg: "Internal Server Error" });
            console.log(e);
        }
    }),
    login: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { email, password } = req.body;
            const user = yield User_1.default.findOne({ email });
            if (!user)
                return res.status(400).send({ msg: "Tài khoản không tồn tại" });
            const isMatch = yield bcrypt_1.default.compare(password, user.password);
            if (!isMatch)
                return res.status(400).send({ msg: "Sai mật khẩu" });
            return res.status(200).send('login ok');
        }
        catch (error) {
            return res.status(500).send({ msg: error.message });
        }
    })
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
exports.default = API;
