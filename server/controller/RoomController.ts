import { Request, Response } from 'express';
import Room from '../models/Room';
const RoomController = {
  createRoom: async (req: Request, res: Response) => {
    try {
      const { title, price, max, desc, features, roomNumbers } = req.body;
      const roomExist = await Room.findOne({ roomNumbers });
      if (roomExist) return res.status(400).send({ msg: 'Room already create' });
      const newRoom = await Room.create({
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
    } catch (e: any) {
      res.status(500).send({ msg: 'Internal server error' });
      console.log(e);
    }
  },
};
export default RoomController;
