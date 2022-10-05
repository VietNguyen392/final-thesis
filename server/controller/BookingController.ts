import { Request, Response } from 'express';
import Booking from '../models/Booking';
import { IBooking } from '../utils';

const BookingController = {
  newBooking: async (req: Request, res: Response) => {
    try {
      const { user, date, room, hotel } = req.body;
      const isExist = await Booking.findOne({ room });
      if (isExist) return res.status(500).send({ msg: 'Room already booking' });
      const booking = await Booking.create({
        user,
        date,
        room,
        hotel,
      });
      if (booking) {
        return res.status(200).json({
          code: 0,
          _id: booking.id,
        });
      } else {
        res.status(404).send({ msg: 'error' });
      }
    } catch (e: any) {
      res.status(500).send({ msg: 'Error' });
    }
  },
};
export default BookingController;
