import express from 'express';
import { UserController, HotelController, RoomController, BookingController } from '../controller';
import TestController from '../controller/TestController';
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
  //*Hotel routes
  routes.route('/api/hotel').post(HotelController.createHotel).get(HotelController.getHotel);
  routes
    .route('/api/hotel/:id')
    .get(HotelController.getRoomById)
    .patch(HotelController.editHotel)
    .delete(HotelController.deleteHotel);
  //*Room routes
  routes.post('api/create-room', RoomController.createRoom);
  //*Booking routes
  routes.post('api/new-booking', BookingController.newBooking);
  routes.post('api/active-booking', BookingController.activeBooking);
  //*Test routes
  routes.post('/api/create-company', TestController.createTest);
  routes.get('/api/get-company', TestController.getTest);
  routes.patch('/api/edit-company/:id', TestController.editTest);
  routes.delete('/api/delete-company/:id', TestController.deleteTest);

  return app.use('/', routes);
};
//validRegister,
