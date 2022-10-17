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
      type: String,
    },

    distance: {
      type: Number,
    },
    rating: {
      type: Number,
      min: 0,
      max: 6,
    },
    rooms: {
      type: Number,
      min:0,
      max:100
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
