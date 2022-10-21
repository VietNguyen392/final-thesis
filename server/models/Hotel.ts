import mongoose, { mongo } from 'mongoose';
import { IHotel } from '../utils';
const hotelSchema = new mongoose.Schema(
  {
    room_name: {
      type: String,
      require: true,
    },
    room_type: {
      type: String,
      required: true,
    },
    location: {
      type: String,
    },
    photo: {
      type: [String],
    },
    room_price: {
      type: Number,
    },
    rating: {
      type: Number,
      min: 0,
      max: 6,
    },
    cheap: {
      type: String,
    },
    desc: {
      type: String,
    },
    featured: {
      type: [String],
      default: false,
    },
  },
  { timestamps: true },
);
export default mongoose.model<IHotel>('Hotel', hotelSchema);
