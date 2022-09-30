import { Request, Response } from 'express';
import Hotel from '../models/Hotel';
import { IHotel, IReqAuth } from '../utils';
const HotelController = {
  createHotel: async (req: Request, res: Response) => {
    // if (!req.user) return res.status(400).send({ msg: 'Invalid' });
    // if (req.user.role !== 'admin') return res.status(400).send({ msg: 'not have permision' });
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
      const isExist = await Hotel.findOne({ hotel_name });
      if (isExist) return res.status(500).send({ msg: 'Hotelis already create' });
      const newHotel = await Hotel.create({
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
  },
};
export default HotelController;
