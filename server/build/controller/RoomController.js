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
const Room_1 = __importDefault(require('../models/Room'));
const RoomController = {
  createRoom: (req, res) =>
    __awaiter(void 0, void 0, void 0, function* () {
      try {
        const { title, price, max, desc, features, roomNumbers } = req.body;
        const roomExist = yield Room_1.default.findOne({ roomNumbers });
        if (roomExist) return res.status(400).send({ msg: 'Room already create' });
        const newRoom = yield Room_1.default.create({
          title,
          price,
          max,
          desc,
          features,
          roomNumbers,
        });
        if (newRoom) {
          res.status(200).json({
            code: 0,
            _id: newRoom.id,
            title: newRoom.title,
          });
        } else {
          res.status(400).send({ msg: 'Can not create' });
        }
      } catch (e) {
        res.status(500).send({ msg: 'Internal server error' });
        console.log(e);
      }
    }),
};
exports.default = RoomController;
