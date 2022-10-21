'use strict';
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const Test_1 = __importDefault(require('../models/Test'));
const TestController = {
  createTest: (req, res) =>
    __awaiter(void 0, void 0, void 0, function* () {
      try {
        const { company_name, director_name } = req.body;
        const newTest = yield Test_1.default.create({
          company_name,
          director_name,
        });
        if (newTest) {
          res.status(200).json({
            code: 0,
            _id: newTest.id,
            name: newTest.company_name,
          });
        } else {
          res.status(400).send({ msg: 'error' });
        }
      } catch (error) {
        res.status(500).send({ msg: 'Server error' });
      }
    }),
  getTest: (_req, res) =>
    __awaiter(void 0, void 0, void 0, function* () {
      try {
        const data = yield Test_1.default.find().sort('-createdAt');
        if (!data) res.status(404).send({ msg: 'not found' });
        res.json({ data });
      } catch (error) {
        return res.status(500).send({ msg: error.message });
      }
    }),
  editTest: (req, res) =>
    __awaiter(void 0, void 0, void 0, function* () {
      try {
        const { company_name, director_name } = req.body;
        const updateTest = yield Test_1.default.findOneAndUpdate(
          { _id: req.params.id },
          {
            company_name,
            director_name,
          },
          { new: true },
        );
        res.json({ msg: 'update success', updateTest });
      } catch (err) {
        return res.status(500).send({ msg: 'Sever error' });
      }
    }),
  deleteTest: (req, res) =>
    __awaiter(void 0, void 0, void 0, function* () {
      try {
        const test = yield Test_1.default.findByIdAndDelete(req.params.id);
        if (!test) return res.status(404).send({ msg: 'User not found' });
        res.json({ msg: 'delete success' });
      } catch (error) {
        res.status(500).json({ msg: 'Server error' });
      }
    }),
};
exports.default = TestController;
