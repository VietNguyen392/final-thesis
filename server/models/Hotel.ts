import mongoose, { mongo } from 'mongoose';
import { IHotel } from '../utils';
const hotelSchema = new mongoose.Schema(
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
export default mongoose.model<IHotel>('Hotel', hotelSchema);
