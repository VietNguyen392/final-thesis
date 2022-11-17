"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const bookingSchema = new mongoose_1.default.Schema({
    user: { type: mongoose_1.default.Types.ObjectId, ref: 'User' },
    room: { type: mongoose_1.default.Types.ObjectId, ref: 'Room' },
    start_date: {
        type: Date,
    },
    end_date: {
        type: Date,
    },
    email: { type: String, require: true },
    billing: { type: Number }
}, { timestamps: true });
exports.default = mongoose_1.default.model('Booking', bookingSchema);
