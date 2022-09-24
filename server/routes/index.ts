import express from 'express';
import UserController from '../controller/UserController';
import { validRegister } from '../utils';
const routes = express.Router();
export const initWebRoute = (app: any) => {
  //User Routes
  routes.post('/api/create-user', validRegister, UserController.createUser);
  routes.get('/api/get-user', UserController.getUser);
  routes.get('/api/get-user-by-id/:id', UserController.getUserById);
  routes.patch('/api/update-user/:id', UserController.updateUser);
  routes.delete('/api/delete-user/:id', UserController.deleteUser);
  routes.post('/api/login', UserController.login);
  routes.get('/api/logout', UserController.logout);
  routes.get('/api/rf-token', UserController.refreshToken);

  return app.use('/', routes);
};
//validRegister,
