import { Request, Response } from 'express';
import Booking from '../models/Booking';
import sendMail from '../config/sendEmail';
import { generateActiveToken } from '../config/genToken';
import { IBooking, IDecodedToken, validateEmail } from '../utils';
import jwt from 'jsonwebtoken';
import Users from '../models/User';
import { io } from '../index';
const BookingController = {
  newBooking: async (req: Request, res: Response) => {
    try {
      const {  date, room,email} = req.body;
      // const isExist = await Booking.findOne({ room });
      // if (isExist) return res.status(500).send({ msg: 'Room already booking' });
      const booking = await Booking.create({
        date,
        room,
        email
      });
      const active_code = generateActiveToken({ booking });
      const url = `${process.env.APP_URL}/active/${active_code}`;
      if (validateEmail(email)) {
        sendMail(email, url, 'Xác nhận đặt phòng', email);
        return res.send({ msg: 'Success' });
      }
      res.json({
        status: 200,
        msg: 'Success',
        data: booking,
        active_code,
      });
    } catch (e: any) {
      console.log(e);
      
      res.status(500).send({ msg: 'Error' });

    }
  },
  activeBooking: async (req: Request, res: Response) => {
    try {
      const { active_code } = req.body;
      const decoded = <IDecodedToken>jwt.verify(active_code, `${process.env.ACTIVE_TOKEN_SECRET}`);
      const { newBooking } = decoded;
      console.log(newBooking);

      if (!newBooking) return res.status(400).send({ msg: 'Invalid ' });

      const booking = await Booking.findOne({ room: newBooking.room });
      if (booking) return res.status(400).json({ msg: 'Booking already create' });
      const new_Booking = new Booking(newBooking);

      await new_Booking.save();

      res.json({ msg: 'đặt phòng thành công' });
    } catch (e: any) {
      res.json({
        status: 500,
        msg: e.message,
      });
    }
  },
};
export default BookingController;
