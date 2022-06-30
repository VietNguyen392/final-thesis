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
            const { name, email, password, gender, phoneNumber, avatar, address, role } = req.body;
            const user = yield User_1.default.findOne({ email });
            if (user)
                return res.status(400).send({ msg: 'Email already in use' });
            const newUser = new User_1.default({
                name,
                email,
                password: yield bcrypt_1.default.hash(password, 10),
                gender,
                phoneNumber,
                avatar,
                address,
                role
            });
            yield newUser.save();
            res.json({ newUser });
        }
        catch (e) {
            res.status(500).send({ msg: 'Internal Server Error' });
            console.log(e);
        }
    }),
};
exports.default = API;
