'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const mongoose_1 = __importDefault(require('mongoose'));
const hotelSchema = new mongoose_1.default.Schema(
  {
    hotel_name: {
      type: String,
      require: true,
    },
    hotel_type: {
      type: String,
    },
    city: {
      type: String,
    },
    address: {
      type: String,
      required: true,
    },
    photo: {
      type: [String],
    },
    title: {
      type: String,
    },
    distance: {
      type: String,
    },
    rating: {
      type: Number,
      min: 0,
      max: 6,
    },
    rooms: {
      type: [String],
    },
    cheap: {
      type: String,
    },
    desc: {
      type: String,
    },
    featured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);
exports.default = mongoose_1.default.model('Hotel', hotelSchema);
