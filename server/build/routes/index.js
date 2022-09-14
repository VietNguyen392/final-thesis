'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.initWebRoute = void 0;
const express_1 = __importDefault(require('express'));
const controller_1 = require('../controller');
const utils_1 = require('../utils');
const routes = express_1.default.Router();
const initWebRoute = (app) => {
  //User Routes
  routes.post('/api/create-user', utils_1.validRegister, controller_1.API.createUser);
  routes.get('/api/get-user', controller_1.API.readUser);
  routes.get('/api/get-user-by-id/:id', controller_1.API.getUserById);
  routes.patch('/api/update-user/:id', controller_1.API.updateUser);
  routes.delete('/api/delete-user/:id', controller_1.API.deleteUser);
  routes.post('/api/login', controller_1.API.login);
  routes.get('/api/logout', controller_1.API.logout);
  routes.get('/api/rf-token', controller_1.API.refreshToken);
  //Schedule Routes
  routes.post('/api/create-schedule', controller_1.timeAPI.createTime);
  return app.use('/', routes);
};
exports.initWebRoute = initWebRoute;
//validRegister,
