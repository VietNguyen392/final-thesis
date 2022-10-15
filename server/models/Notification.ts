import mongoose from 'mongoose';
import { INoti } from '../utils';
const notificationSchema = new mongoose.Schema({
  user: { type: mongoose.Types.ObjectId, ref: 'User' },
  content: {
    type: String,
    default: 'Bạn không có thông báo nào !',
  },
  state: {
    type: Boolean,
  },
});
export default mongoose.model<INoti>('Noti', notificationSchema);
