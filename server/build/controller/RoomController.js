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
        const { title, price, max, desc, features, roomNumbers, hotel } = req.body;
        const roomExist = yield Room_1.default.findOne({ hotel });
        if (roomExist) return res.status(400).send({ msg: 'Room already create' });
        const newRoom = yield Room_1.default.create({
          title,
          price,
          max,
          desc,
          features,
          roomNumbers,
          hotel,
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
  /*getRoomByHotel:async(req:Request,res:Response)=> {
      const {limit,skip}=Pagination(req)
    try {
      const data = await Room.find().sort('-createdAt');
      if (!data) res.status(404).send({msg: 'not found'});
      res.json({data});
    } catch (e: any) {
  
    }
  }*/
};
exports.default = RoomController;
