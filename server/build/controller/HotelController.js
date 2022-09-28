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
const Hotel_1 = __importDefault(require('../models/Hotel'));
const HotelController = {
  createHotel: (req, res) =>
    __awaiter(void 0, void 0, void 0, function* () {
      if (!req.user) return res.status(400).send({ msg: 'Invalid' });
      if (req.user.role !== 'admin') return res.status(400).send({ msg: 'deo phai bo doi' });
      try {
        const {
          hotel_name,
          hotel_type,
          city,
          address,
          photo,
          title,
          distance,
          rating,
          rooms,
          cheap,
          desc,
          featured,
        } = req.body;
        const isExist = yield Hotel_1.default.findOne({ hotel_name });
        if (isExist) return res.status(500).send({ msg: 'Hotelis already create' });
        const newHotel = yield Hotel_1.default.create({
          hotel_name,
          hotel_type,
          city,
          address,
          photo,
          title,
          distance,
          rating,
          rooms,
          cheap,
          desc,
          featured,
        });
        if (newHotel) {
          res.status(200).json({
            code: 0,
            _id: newHotel.id,
            name: newHotel.hotel_name,
          });
        } else {
          res.status(400).send({ msg: 'error' });
        }
      } catch (error) {
        res.status(500).send({ msg: 'Server error' });
        console.log(error);
      }
    }),
};
exports.default = HotelController;
