import express from 'express';
import { UserController, RoomController, BookingController } from '../controller';
import ServiceController from '../controller/ServiceController';
import { validRegister } from '../utils';
import { authenticate } from '../middleware';

const routes = express.Router();
export const initWebRoute = (app: any) => {
  //*User routes
  routes.post('/api/create-user', UserController.createUser);
  routes.get('/api/user', UserController.getAllUser);
  routes
    .route('/api/user/:id')
    .get(UserController.getUserById)
    .patch(UserController.updateUser)
    .delete(UserController.deleteUser);
  //*Auth routes
  routes.post('/api/login', UserController.login);
  routes.get('/api/logout', authenticate, UserController.logout);
  routes.post('/api/register', validRegister, UserController.register);
  routes.post('/api/active-account', UserController.activeAccount);
  routes.get('/api/rf-token', UserController.refreshToken);
  routes.post('/api/forgot-password', UserController.forgotPass);
  routes.put('/api/reset-password', UserController.resetPass);
  //*Hotel routes
  routes.route('/api/room').post(RoomController.createRoom).get(RoomController.getRoom);
  routes
    .route('/api/room/:id')
    .get(RoomController.getRoomById)
    .patch(RoomController.editRoom)
    .delete(RoomController.deleteRoom);
  //*Booking routes
  routes.post('/api/new-booking', BookingController.newBooking);
  routes.post('/api/active-booking', BookingController.activeBooking);
  routes.get('/api/get-all-booking', BookingController.getAllBooking);
  routes.get('/api/get-user-booking/:id', BookingController.getBookingByUser);
  routes.put('/api/change-booking-status/:id', BookingController.updateBookingStatus);
  routes.get('/api/get-room-booking/:id', BookingController.getBookingByRoom);
  routes.delete('/api/delete-booking/:id', BookingController.deleteBooking),
    routes.delete('/api/deleteAll-booking', BookingController.deleteAllBooking);
  //*Service routes
  routes
    .route('/api/service')
    .post(ServiceController.createService)
    .get(ServiceController.getService);
  routes
    .route('/api/service/:id')
    .patch(ServiceController.editService)
    .delete(ServiceController.deleteService);

  return app.use('/', routes);
};
//validRegister,
