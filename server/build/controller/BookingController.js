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
const Booking_1 = __importDefault(require("../models/Booking"));
const sendEmail_1 = __importDefault(require("../config/sendEmail"));
const genToken_1 = require("../config/genToken");
const utils_1 = require("../utils");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const BookingController = {
    newBooking: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { user, date, room, hotel } = req.body;
            const isExist = yield Booking_1.default.findOne({ room });
            if (isExist)
                return res.status(500).send({ msg: 'Room already booking' });
            const booking = yield Booking_1.default.create({
                user,
                date,
                room,
                hotel,
            });
            const active_code = (0, genToken_1.generateActiveToken)({ booking });
            const url = `${process.env.APP_URL}/active/${active_code}`;
            if ((0, utils_1.validateEmail)(user)) {
                (0, sendEmail_1.default)(user, url, 'Xác nhận đặt phòng', user);
                return res.send({ msg: 'Success' });
            }
            res.json({
                status: 200,
                msg: 'Success',
                data: booking,
                active_code,
            });
        }
        catch (e) {
            res.status(500).send({ msg: 'Error' });
        }
    }),
    activeBooking: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { active_code } = req.body;
            const decoded = jsonwebtoken_1.default.verify(active_code, `${process.env.ACTIVE_TOKEN_SECRET}`);
            const { newBooking } = decoded;
            if (!newBooking)
                return res.status(400).send({ msg: 'Invalid ' });
            const booking = yield Booking_1.default.findOne({ room: newBooking.room });
            if (booking)
                return res.status(400).json({ msg: 'Booking already create' });
            const new_Booking = new Booking_1.default(newBooking);
            yield new_Booking.save();
            res.json({ msg: 'đặt phòng thành công' });
        }
        catch (e) {
            res.json({
                status: 500,
                msg: e.message,
            });
        }
    }),
};
exports.default = BookingController;
