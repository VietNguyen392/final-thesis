import express from 'express';
import { UserController, HotelController, RoomController, BookingController } from '../controller';
import TestController from '../controller/TestController';
import { validRegister } from '../utils';
import { authenticate } from '../middleware';
const routes = express.Router();
export const initWebRoute = (app: any) => {
  //*User Routes
  routes.post('/api/create-user', validRegister, UserController.createUser);
  routes.get('/api/get-user', UserController.getUser);
  routes.get('/api/get-user-by-id/:id', UserController.getUserById);
  routes.patch('/api/update-user/:id', UserController.updateUser);
  routes.delete('/api/delete-user/:id', UserController.deleteUser);
  routes.post('/api/login', UserController.login);
  routes.get('/api/logout', authenticate, UserController.logout);
  routes.post('/api/register', validRegister, UserController.register);
  routes.post('/api/active-account', UserController.activeAccount);
  routes.get('/api/rf-token', UserController.refreshToken);
  //*Hotel routes
  routes.post('/api/create-hotel', HotelController.createHotel);
  routes.get('/api/get-hotel', HotelController.getHotel);
  routes.patch('/api/edit-hotel', HotelController.editHotel);
  //*Room routes
  routes.post('api/create-room', RoomController.createRoom);
  //*Booking routes
  routes.post('api/new-booking', BookingController.newBooking);
  routes.post('api/active-booking', BookingController.activeBooking);
  //*Test routes
  routes.post('api/create-company', TestController.createTest);
  routes.get('api/get-company', TestController.getTest);
  routes.patch('api/edit-company', TestController.editTest);
  routes.delete('api/delete-company', TestController.deleteTest);
  return app.use('/', routes);
};
//validRegister,
