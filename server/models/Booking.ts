import mongoose from "mongoose";
import { IBooking } from "../utils";
const bookingSchema = new mongoose.Schema({
    doctor: { type: mongoose.Types.ObjectId, ref: 'users' },
    statusID:{type:Number,default:0},
    doctorID: { type: mongoose.Types.ObjectId },
    patientID: { type: mongoose.Types.ObjectId },
    date:{type:Date},
    timeType:{type:Date}
    
},
    { timestamps: true }
)
export default mongoose.model<IBooking>('Bookings', bookingSchema)