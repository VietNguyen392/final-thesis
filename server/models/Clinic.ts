import mongoose from 'mongoose';
import { IClinic } from '../utils';
const clinicSchema = new mongoose.Schema(
  {
    address: {
      type: String,
      require: [true, 'Hãy nhập địa chỉ phòng khám'],
    },
    name: {
      type: String,
      require: [true, 'Hãy nhập tên phòng khám'],
    },
    mota: { type: String },
    avatar: {
      type: String,
      default:
        'https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png',
    },
  },
  { timestamps: true },
);
export default mongoose.model<IClinic>('Clinics', clinicSchema);
