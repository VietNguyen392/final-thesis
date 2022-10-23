import { Request, Response } from 'express';
import Hotel from '../models/Hotel';
import { IHotel, IReqAuth } from '../utils';
import { Pagination } from '../middleware';
const HotelController = {
  createHotel: async (req: IReqAuth, res: Response) => {
    // if (!req.user) return res.status(400).send({ msg: 'Invalid' });
    // if (req.user.role !== 'admin') return res.status(400).send({ msg: 'no permision' });
    try {
      const { room_name, room_type, location, photo, room_price, rating, desc, featured } =
        req.body;
      const isExist = await Hotel.findOne({ room_name });
      if (isExist) return res.status(500).send({ msg: 'Hotel already exist' });
      const newHotel = await Hotel.create({
        room_name,
        room_type,
        location,
        photo,
        room_price,
        rating,
        desc,
        featured,
      });
      if (newHotel) {
        res.status(200).json({
          _id: newHotel.id,
          name: newHotel.room_name,
          type: newHotel.room_type,
          price: newHotel.room_price,
          locate: newHotel.location,
          description: newHotel.desc,
          gallery: newHotel.photo,
          features: newHotel.featured,
        });
      } else {
        res.status(400).send({ msg: 'error' });
      }
    } catch (error) {
      res.status(500).send({ msg: 'Server error' });
      console.log(error);
    }
  },
  getHotel: async (_req: Request, res: Response) => {
    try {
      const data = await Hotel.find().sort('-createdAt');
      if (!data) res.status(404).send({ msg: 'not found' });
      res.json({ data });
    } catch (error: any) {
      return res.status(500).send({ msg: error.message });
    }
  },
  getRoomById: async (req: Request, res: Response) => {
    try {
      const room = await Hotel.findById(req.params.id);
      if (!room) return res.status(404).send({ msg: 'Not found' });
      res.json({ room });
    } catch (error: any) {
      res.status(500).send({ msg: 'Internal server error' });
    }
  },
  editHotel: async (req: Request, res: Response) => {
    try {
      const { room_name, room_type, city, location, photo, room_price, rating, desc, featured } =
        req.body;
      const updateHotel = await Hotel.findOneAndUpdate(
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
    } catch (err: any) {
      return res.status(500).send({ msg: 'Sever error' });
    }
  },
  deleteHotel: async (req: Request, res: Response) => {
    try {
      const hotel = await Hotel.findByIdAndDelete(req.params.id);
      if (!hotel) return res.status(404).send({ msg: 'Not Found' });
      res.json({ msg: 'delete success' });
    } catch (error: any) {
      res.status(500).json({ msg: 'Server error' });
    }
  },
};
export default HotelController;
