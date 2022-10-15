import { Request, Response } from 'express';
import Room from '../models/Room';
import Hotel from '../models/Hotel';
import { Pagination } from '../middleware';
const RoomController = {
  createRoom: async (req: Request, res: Response) => {
    try {
      const { title, price, max, desc, features, roomNumbers, hotel } = req.body;
      const roomExist = await Room.findOne({ hotel });
      if (roomExist) return res.status(400).send({ msg: 'Room already create' });
      const newRoom = await Room.create({
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
    } catch (e: any) {
      res.status(500).send({ msg: 'Internal server error' });
      console.log(e);
    }
  },
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

export default RoomController;
