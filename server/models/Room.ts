import mongoose from 'mongoose';
import { IRoom } from '../utils';
const roomSchema = new mongoose.Schema(
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
export default mongoose.model<IRoom>('Room', roomSchema);
