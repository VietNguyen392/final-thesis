import mongoose from 'mongoose';
import { ISchedule } from '../utils';
const scheduleSchema = new mongoose.Schema(
  {
    doctor: { type: mongoose.Types.ObjectId, ref: 'users' },
    currentNumber: { type: Number },
    maxNumber: { type: Number },
    doctorID: { type: mongoose.Types.ObjectId },
    date: { type: Date },
    time: { type: Date },
  },
  { timestamps: true },
);
export default mongoose.model<ISchedule>('Schedules', scheduleSchema);
