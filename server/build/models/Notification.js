'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const mongoose_1 = __importDefault(require('mongoose'));
const notificationSchema = new mongoose_1.default.Schema({
  user: { type: mongoose_1.default.Types.ObjectId, ref: 'User' },
  content: {
    type: String,
    default: 'Bạn không có thông báo nào !',
  },
  state: {
    type: Boolean,
  },
});
exports.default = mongoose_1.default.model('Noti', notificationSchema);
