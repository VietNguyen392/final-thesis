"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const doctorSchema = new mongoose_1.default.Schema({
    doctorID: {
        type: Number
    },
    priceID: {
        type: String
    },
    paymentID: {
        type: String,
    },
    addressClinic: {
        type: String,
    },
    nameClinic: {
        type: String,
    },
    note: {
        type: String,
    },
    count: {
        type: Number,
    },
    description: {
        type: String,
        minlength: 50,
        maxlength: 300
    },
    mainContent: {
        type: String,
        required: true,
        minlength: 2000
    }
}, { timestamps: true });
exports.default = mongoose_1.default.model('Doctors', doctorSchema);
