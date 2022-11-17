import mongoose, { Schema } from 'mongoose';
import { IBooking } from '../utils';

const bookingSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Types.ObjectId, ref: 'User' },
    room: { type: mongoose.Types.ObjectId, ref: 'Room' },
    start_date: {
      type: Date,
    },
      end_date: {
      type: Date,
    },
    email: { type: String, require:true },
    billing:{type:Number}
  },
  { timestamps: true },
);
export default mongoose.model<IBooking>('Booking', bookingSchema);


