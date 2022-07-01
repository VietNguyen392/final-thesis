"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const scheduleSchema = new mongoose_1.default.Schema({
    doctor: { type: mongoose_1.default.Types.ObjectId, ref: 'users' },
    currentNumber: { type: Number },
    maxNumber: { type: Number },
    doctorID: { type: mongoose_1.default.Types.ObjectId },
    date: { type: Date },
    timeType: { type: Date }
}, { timestamps: true });
exports.default = mongoose_1.default.model('Schedules', scheduleSchema);
