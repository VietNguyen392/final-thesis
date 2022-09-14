import express from 'express';
import { API, timeAPI } from '../controller';
import { validRegister } from '../utils';
const routes = express.Router();
export const initWebRoute = (app: any) => {
  //User Routes
  routes.post('/api/create-user', validRegister, API.createUser);
  routes.get('/api/get-user', API.readUser);
  routes.get('/api/get-user-by-id/:id', API.getUserById);
  routes.patch('/api/update-user/:id', API.updateUser);
  routes.delete('/api/delete-user/:id', API.deleteUser);
  routes.post('/api/login', API.login);
  routes.get('/api/logout', API.logout);
  routes.get('/api/rf-token', API.refreshToken);
  //Schedule Routes
  routes.post('/api/create-schedule', timeAPI.createTime);
  return app.use('/', routes);
};
//validRegister,
