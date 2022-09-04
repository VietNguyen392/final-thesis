import mongoose from "mongoose";
import { IBooking } from "../utils";
const bookingSchema = new mongoose.Schema(
  {
    doctor: { type: mongoose.Types.ObjectId, ref: "users" },
    statusID: { type: String, default: "new" },
    doctorID: { type: mongoose.Types.ObjectId },
    patientID: { type: mongoose.Types.ObjectId },
    date: { type: String },
    time: { type: String },
  },
  { timestamps: true }
);
export default mongoose.model<IBooking>("Bookings", bookingSchema);
