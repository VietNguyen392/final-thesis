'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.initWebRoute = void 0;
const express_1 = __importDefault(require('express'));
const UserController_1 = __importDefault(require('../controller/UserController'));
const HotelController_1 = __importDefault(require('../controller/HotelController'));
const utils_1 = require('../utils');
const middleware_1 = require('../middleware');
const routes = express_1.default.Router();
const initWebRoute = (app) => {
  //User Routes
  routes.post('/api/create-user', utils_1.validRegister, UserController_1.default.createUser);
  routes.get('/api/get-user', UserController_1.default.getUser);
  routes.get('/api/get-user-by-id/:id', UserController_1.default.getUserById);
  routes.patch('/api/update-user/:id', UserController_1.default.updateUser);
  routes.delete('/api/delete-user/:id', UserController_1.default.deleteUser);
  routes.post('/api/login', UserController_1.default.login);
  routes.get('/api/logout', middleware_1.authenticate, UserController_1.default.logout);
  routes.post('/api/register', UserController_1.default.register);
  routes.post('/api/active-account', UserController_1.default.activeAccount);
  routes.get('/api/rf-token', UserController_1.default.refreshToken);
  // Hotel route
  routes.post('/api/create-hotel', HotelController_1.default.createHotel);
  return app.use('/', routes);
};
exports.initWebRoute = initWebRoute;
//validRegister,
