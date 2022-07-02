"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const historySchema = new mongoose_1.default.Schema({
    doctor: { type: mongoose_1.default.Types.ObjectId, ref: "users" },
    doctorID: { type: mongoose_1.default.Types.ObjectId },
    patientID: { type: mongoose_1.default.Types.ObjectId },
    mota: { type: String, require: true },
    files: { type: String },
}, { timestamps: true });
exports.default = mongoose_1.default.model("Histories", historySchema);
