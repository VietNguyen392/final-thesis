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
            if (booking) {
                return res.status(200).json({
                    code: 0,
                    _id: booking.id,
                });
            }
            else {
                res.status(404).send({ msg: 'error' });
            }
        }
        catch (e) {
            res.status(500).send({ msg: 'Error' });
        }
    }),
};
exports.default = BookingController;
