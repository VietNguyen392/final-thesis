"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const clinicSchema = new mongoose_1.default.Schema({
    address: {
        type: String,
        require: [true, "Hãy nhập địa chỉ phòng khám"],
    },
    name: {
        type: String,
        require: [true, "Hãy nhập tên phòng khám"],
    },
    mota: { type: String },
    avatar: {
        type: String,
        default: "https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png",
    },
}, { timestamps: true });
exports.default = mongoose_1.default.model("Clinics", clinicSchema);
