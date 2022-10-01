import express, { Router } from 'express';
import UserController from '../controller/UserController';
import HotelController from '../controller/HotelController';
import { validRegister } from '../utils';
import { authenticate } from '../middleware';
const routes = express.Router();
export const initWebRoute = (app: any) => {
  //User Routes
  routes.post('/api/create-user', validRegister, UserController.createUser);
  routes.get('/api/get-user', UserController.getUser);
  routes.get('/api/get-user-by-id/:id', UserController.getUserById);
  routes.patch('/api/update-user/:id', UserController.updateUser);
  routes.delete('/api/delete-user/:id', UserController.deleteUser);
  routes.post('/api/login', UserController.login);
  routes.get('/api/logout', authenticate, UserController.logout);
  routes.post('/api/register', UserController.register);
  routes.post('/api/active-account', UserController.activeAccount);
  routes.get('/api/rf-token', UserController.refreshToken);
  // Hotel route
  routes.post('/api/create-hotel', HotelController.createHotel);
  routes.get('/api/get-hotel', HotelController.getHotel);
  return app.use('/', routes);
};
//validRegister,
