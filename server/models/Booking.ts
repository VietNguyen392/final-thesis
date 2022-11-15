import mongoose, { Schema } from 'mongoose';
import { IBooking } from '../utils';

const bookingSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Types.ObjectId, ref: 'User' },
    date: {
      type: [Date],
    },
    room: { type: mongoose.Types.ObjectId, ref: 'Room' },
    email: { type: String, require:true },
  },
  { timestamps: true },
);
export default mongoose.model<IBooking>('Booking', bookingSchema);
// export default
