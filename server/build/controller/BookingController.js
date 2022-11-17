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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const BookingController = {
    newBooking: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { start_date, room, email, end_date, user } = req.body;
            const booking = yield Booking_1.default.create({
                start_date,
                end_date,
                room,
                email,
                user
            });
            const newBooking = new Booking_1.default(booking);
            yield newBooking.save();
            // const active_code = generateActiveToken({ booking });
            // const url = `${process.env.APP_URL}/active-booking/${active_code}`;
            // if (validateEmail(email)) {
            //   sendMail(email, url, 'Xác nhận đặt phòng', email);
            //   return res.send({ msg: 'Success' });
            // }
            res.json({
                status: 200,
                msg: 'Success',
                data: booking,
                // active_code,
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
            console.log(newBooking);
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
    getAllBooking: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const data = yield Booking_1.default.find().sort('-createAt');
            if (!data)
                res.status(404).send({ msg: 'not found' });
            res.json({ data });
        }
        catch (e) {
            res.status(500).send({ msg: e });
        }
    })
};
exports.default = BookingController;
