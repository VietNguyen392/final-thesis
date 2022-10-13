'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const mongoose_1 = __importDefault(require('mongoose'));
const roomSchema = new mongoose_1.default.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    max: {
      type: Number,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    features: {
      type: String,
    },
    roomNumbers: [{ number: Number, unavailableDates: { type: [Date] } }],
  },
  { timestamps: true },
);
exports.default = mongoose_1.default.model('Room', roomSchema);
