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
      // if (!req.user) return res.status(400).send({ msg: 'Invalid' });
      // if (req.user.role !== 'admin') return res.status(400).send({ msg: 'no permision' });
      try {
        const { room_name, room_type, city, location, photo, room_price, rating, desc, featured } =
          req.body;
        const isExist = yield Hotel_1.default.findOne({ room_name });
        if (isExist) return res.status(500).send({ msg: 'Hotel already exist' });
        const newHotel = yield Hotel_1.default.create({
          room_name,
          room_type,
          city,
          location,
          photo,
          room_price,
          rating,
          desc,
          featured,
        });
        if (newHotel) {
          res.status(200).json({
            code: 0,
            _id: newHotel.id,
            name: newHotel.room_name,
          });
        } else {
          res.status(400).send({ msg: 'error' });
        }
      } catch (error) {
        res.status(500).send({ msg: 'Server error' });
        console.log(error);
      }
    }),
  getHotel: (_req, res) =>
    __awaiter(void 0, void 0, void 0, function* () {
      try {
        const data = yield Hotel_1.default.find().sort('-createdAt');
        if (!data) res.status(404).send({ msg: 'not found' });
        res.json({ data });
      } catch (error) {
        return res.status(500).send({ msg: error.message });
      }
    }),
  getRoomById: (req, res) =>
    __awaiter(void 0, void 0, void 0, function* () {
      try {
        const room = yield Hotel_1.default.findById(req.params.id);
        if (!room) return res.status(404).send({ msg: 'Not found' });
        res.json({ room });
      } catch (error) {
        res.status(500).send({ msg: 'Internal server error' });
      }
    }),
  editHotel: (req, res) =>
    __awaiter(void 0, void 0, void 0, function* () {
      try {
        const { room_name, room_type, city, location, photo, room_price, rating, desc, featured } =
          req.body;
        const updateHotel = yield Hotel_1.default.findOneAndUpdate(
          { _id: req.params.id },
          {
            room_name,
            room_type,
            city,
            location,
            photo,
            room_price,
            rating,
            desc,
            featured,
          },
          { new: true },
        );
        res.json({ msg: 'update success', updateHotel });
      } catch (err) {
        return res.status(500).send({ msg: 'Sever error' });
      }
    }),
  deleteHotel: (req, res) =>
    __awaiter(void 0, void 0, void 0, function* () {
      try {
        const hotel = yield Hotel_1.default.findByIdAndDelete(req.params.id);
        if (!hotel) return res.status(404).send({ msg: 'Not Found' });
        res.json({ msg: 'delete success' });
      } catch (error) {
        res.status(500).json({ msg: 'Server error' });
      }
    }),
};
exports.default = HotelController;
