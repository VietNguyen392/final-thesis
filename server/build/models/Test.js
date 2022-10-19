'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const mongoose_1 = __importDefault(require('mongoose'));
const testSchema = new mongoose_1.default.Schema(
  {
    company_name: {
      type: String,
      require: true,
    },
    director_name: {
      type: String,
      require: true,
    },
  },
  { timestamps: true },
);
exports.default = mongoose_1.default.model('TestModel', testSchema);
