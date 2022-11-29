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
const mongoose_1 = __importDefault(require("mongoose"));
const Booking_1 = __importDefault(require("../models/Booking"));
const sendEmail_1 = __importDefault(require("../config/sendEmail"));
const genToken_1 = require("../config/genToken");
const utils_1 = require("../utils");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const middleware_1 = require("../middleware");
const BookingController = {
    newBooking: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        // if (!req.user) return res.status(400).send({ msg: 'Invalid' });
        try {
            const { start_date, room, email, end_date, user, billing, adult_quantity, children_quantity, } = req.body;
            const booking = yield Booking_1.default.create(Object.assign({}, req.body));
            const active_code = (0, genToken_1.generateActiveToken)({ booking });
            const url = `${process.env.APP_URL}/active-booking/${active_code}`;
            if ((0, utils_1.validateEmail)(email)) {
                (0, sendEmail_1.default)(email, url, 'Xác nhận đặt phòng', email);
                return res.send({ msg: 'Success' });
            }
            res.json({
                status: 200,
                msg: 'Success',
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
            /*const isBooking = await Booking.find({
              start_date: newBooking.start_date,
              end_date: newBooking.end_date,
            });
            if (isBooking) return res.status(400).json({ msg: 'Booking already create' });*/
            const new_Booking = new Booking_1.default(newBooking);
            yield new_Booking.save();
            res.json({ msg: 'Success', data: new_Booking });
        }
        catch (e) {
            res.json({
                status: 500,
                msg: e.message,
            });
        }
    }),
    updateBookingStatus: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const newStatus = yield Booking_1.default.updateOne({ _id: req.params.id }, {
                $set: { status: req.body.status },
            });
            if (newStatus)
                return res.json({ status: 200, msg: 'Success change booking status' });
        }
        catch (e) {
            return next(e);
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
    }),
    getBookingByUser: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        // if (!req.user) return res.json({ status: 404, msg: 'Invalid' });
        const { limit, skip } = (0, middleware_1.Pagination)(req);
        try {
            const data = yield Booking_1.default.aggregate([
                {
                    $facet: {
                        totalData: [
                            {
                                $match: {
                                    user: new mongoose_1.default.Types.ObjectId(req.params.id),
                                },
                            },
                            {
                                $lookup: {
                                    from: 'users',
                                    let: { user_id: '$user' },
                                    pipeline: [
                                        { $match: { $expr: { $eq: ['$_id', '$$user_id'] } } },
                                        { $project: { password: 0 } },
                                    ],
                                    as: 'user',
                                },
                            },
                            { $unwind: '$user' },
                            { $sort: { createdAt: -1 } },
                            { $skip: skip },
                            { $limit: limit },
                        ],
                        totalCount: [
                            {
                                $match: {
                                    user: new mongoose_1.default.Types.ObjectId(req.params.id),
                                },
                            },
                            { $count: 'count' },
                        ],
                    },
                },
                {
                    $project: {
                        count: { $arrayElemAt: ['$totalCount.count', 0] },
                        totalData: 1,
                    },
                },
            ]);
            const booking = data[0].totalData;
            const count = data[0].count;
            let total = 0;
            if (count % limit === 0) {
                total = count / limit;
            }
            else {
                total = Math.floor(count / limit) + 1;
            }
            res.send({ booking, total });
        }
        catch (e) {
            res.json({ status: 500, meg: e.message });
        }
    }),
    getBookingByRoom: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { limit, skip } = (0, middleware_1.Pagination)(req);
        try {
            const data = yield Booking_1.default.aggregate([
                {
                    $facet: {
                        totalData: [
                            {
                                $match: {
                                    room: new mongoose_1.default.Types.ObjectId(req.params.id),
                                },
                            },
                            {
                                $lookup: {
                                    from: 'hotels',
                                    let: { hotel_id: '$hotel' },
                                    pipeline: [
                                        { $match: { $expr: { $eq: ['$_id', '$$hotel_id'] } } },
                                        // { $project: { password: 0 } },
                                    ],
                                    as: 'hotel',
                                },
                            },
                            { $unwind: '$hotel' },
                            { $sort: { createdAt: -1 } },
                            { $skip: skip },
                            { $limit: limit },
                        ],
                        totalCount: [
                            {
                                $match: {
                                    room: new mongoose_1.default.Types.ObjectId(req.params.id),
                                },
                            },
                            { $count: 'count' },
                        ],
                    },
                },
                {
                    $project: {
                        count: { $arrayElemAt: ['$totalCount.count', 0] },
                        totalData: 1,
                    },
                },
            ]);
            const booking = data[0].totalData;
            const count = data[0].count;
            let total = 0;
            if (count % limit === 0) {
                total = count / limit;
            }
            else {
                total = Math.floor(count / limit) + 1;
            }
            res.send({ booking, total });
        }
        catch (e) {
            return res.json({ status: 500, msg: e });
        }
    }),
    deleteBooking: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const booking = yield Booking_1.default.findByIdAndDelete(req.params.id);
            if (!booking)
                return res.status(404).send({ msg: 'Not Found' });
            res.json({ msg: 'delete success' });
        }
        catch (error) {
            return res.json({ status: 500, msg: error });
        }
    }),
    deleteAllBooking: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield Booking_1.default.deleteMany();
            res.status(200).send({ msg: 'delete all booking success' });
        }
        catch (error) {
            return res.json({ status: 500, msg: error });
        }
    }),
};
exports.default = BookingController;
