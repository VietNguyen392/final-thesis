import { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import Booking from '../models/Booking';
import sendMail from '../config/sendEmail';
import { generateActiveToken } from '../config/genToken';
import { IBooking, IDecodedToken, validateEmail, IReqAuth } from '../utils';
import jwt from 'jsonwebtoken';
import { Pagination } from '../middleware';
import Users from '../models/User';
import { io } from '../index';
const BookingController = {
  newBooking: async (req: IReqAuth, res: Response) => {
    // if (!req.user) return res.status(400).send({ msg: 'Invalid' });
    try {
      const { start_date, room, email, end_date, user, billing, quantity } = req.body;
      const booking = await Booking.create({
        ...req.body,
      });
      const active_code = generateActiveToken({ booking });
      const url = `${process.env.APP_URL}/active-booking/${active_code}`;
      if (validateEmail(email)) {
        sendMail(email, url, 'Xác nhận đặt phòng', email);
        return res.send({ msg: 'Success' });
      }
      res.json({
        status: 200,
        msg: 'Success',
        active_code,
      });
    } catch (e: any) {
      res.status(500).send({ msg: 'Error' });
    }
  },
  activeBooking: async (req: Request, res: Response) => {
    try {
      const { active_code } = req.body;
      const decoded = <IDecodedToken>jwt.verify(active_code, `${process.env.ACTIVE_TOKEN_SECRET}`);
      const { newBooking } = decoded;

      if (!newBooking) return res.status(400).send({ msg: 'Invalid ' });

      /*const isBooking = await Booking.find({
        start_date: newBooking.start_date,
        end_date: newBooking.end_date,
      });
      if (isBooking) return res.status(400).json({ msg: 'Booking already create' });*/
      const new_Booking = new Booking(newBooking);

      await new_Booking.save();

      res.json({ msg: 'Success', data: new_Booking });
    } catch (e: any) {
      res.json({
        status: 500,
        msg: e.message,
      });
    }
  },
  updateBookingStatus: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const newStatus = await Booking.updateOne(
        { _id: req.params.id },
        {
          $set: { status: req.body.status },
        },
      );
      if (newStatus) return res.json({ status: 200, msg: 'Success change booking status' });
    } catch (e: any) {
      return next(e);
    }
  },
  getAllBooking: async (req: Request, res: Response) => {
    try {
      const data = await Booking.find().sort('-createAt');
      if (!data) res.status(404).send({ msg: 'not found' });
      res.json({ data });
    } catch (e: any) {
      res.status(500).send({ msg: e });
    }
  },
  getBookingByUser: async (req: IReqAuth, res: Response) => {
    // if (!req.user) return res.json({ status: 404, msg: 'Invalid' });
    const { limit, skip } = Pagination(req);
    try {
      const data = await Booking.aggregate([
        {
          $facet: {
            totalData: [
              {
                $match: {
                  user: new mongoose.Types.ObjectId(req.params.id),
                },
              },
              {
                $lookup: {
                  from: 'users',
                  let: { user_id: '$user' },
                  pipeline: [
                    { $match: { $expr: { $eq: ['$_id', '$$user_id'] } } },
                    { $project: { password: 0 } },
                  ],
                  as: 'user',
                },
              },
              { $unwind: '$user' },
              { $sort: { createdAt: -1 } },
              { $skip: skip },
              { $limit: limit },
            ],
            totalCount: [
              {
                $match: {
                  user: new mongoose.Types.ObjectId(req.params.id),
                },
              },
              { $count: 'count' },
            ],
          },
        },
        {
          $project: {
            count: { $arrayElemAt: ['$totalCount.count', 0] },
            totalData: 1,
          },
        },
      ]);
    
      
      const booking = data[0].totalData;
      const count = data[0].count;
      let total = 0;
      if (count % limit === 0) {
        total = count / limit;
      } else {
        total = Math.floor(count / limit) + 1;
      }
      res.send({ booking, total });
    } catch (e: any) {
      res.json({ status: 500, meg: e.message });
    }
  },
  getBookingByRoom: async (req: Request, res: Response) => {
    const { limit, skip } = Pagination(req);
    try {
      const data = await Booking.aggregate([
        {
          $facet: {
            totalData: [
              {
                $match: {
                  room: new mongoose.Types.ObjectId(req.params.id),
                },
              },
              {
                $lookup: {
                  from: 'hotels',
                  let: { hotel_id: '$hotel' },
                  pipeline: [
                    { $match: { $expr: { $eq: ['$_id', '$$hotel_id'] } } },
                    // { $project: { password: 0 } },
                  ],
                  as: 'hotel',
                },
              },
              { $unwind: '$hotel' },
              { $sort: { createdAt: -1 } },
              { $skip: skip },
              { $limit: limit },
            ],
            totalCount: [
              {
                $match: {
                  room: new mongoose.Types.ObjectId(req.params.id),
                },
              },
              { $count: 'count' },
            ],
          },
        },
        {
          $project: {
            count: { $arrayElemAt: ['$totalCount.count', 0] },
            totalData: 1,
          },
        },
      ]);
    
      
      const booking = data[0].totalData;
      const count = data[0].count;
      let total = 0;
      if (count % limit === 0) {
        total = count / limit;
      } else {
        total = Math.floor(count / limit) + 1;
      }
      res.send({ booking, total });
    } catch (e: any) {
      return res.json({ status: 500, msg: e });
    }
  },
  deleteBooking: async (req: Request, res: Response) => {
    try {
      const booking = await Booking.findByIdAndDelete(req.params.id);
      if (!booking) return res.status(404).send({ msg: 'Not Found' });
      res.json({ msg: 'delete success' });
    } catch (error: any) {
      return res.json({ status: 500, msg: error });
    }
  },
  deleteAllBooking: async (req: Request, res: Response) => {
    try {
      await Booking.deleteMany();
      res.status(200).send({ msg: 'delete all booking success' });
    } catch (error: any) {
      return res.json({ status: 500, msg: error });
    }
  },
};
export default BookingController