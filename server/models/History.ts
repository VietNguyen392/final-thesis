import mongoose from "mongoose";
import { IHistory } from "../utils";
const historySchema = new mongoose.Schema({
    doctor: { type: mongoose.Types.ObjectId, ref: 'users' },
    doctorID: { type: mongoose.Types.ObjectId },
    patientID: { type: mongoose.Types.ObjectId },
    mota: { type: String,require:true},
    files: { type: String },
},
    { timestamps: true }
)
export default mongoose.model<IHistory>('Histories', historySchema)