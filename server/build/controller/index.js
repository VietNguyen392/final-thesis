"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelController = exports.BookingController = exports.UserController = void 0;
const BookingController_1 = __importDefault(require("./BookingController"));
exports.BookingController = BookingController_1.default;
const HotelController_1 = __importDefault(require("./HotelController"));
exports.HotelController = HotelController_1.default;
const UserController_1 = __importDefault(require("./UserController"));
exports.UserController = UserController_1.default;
