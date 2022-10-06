"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initWebRoute = void 0;
const express_1 = __importDefault(require("express"));
const controller_1 = require("../controller");
const utils_1 = require("../utils");
const middleware_1 = require("../middleware");
const routes = express_1.default.Router();
const initWebRoute = (app) => {
    //User Routes
    routes.post('/api/create-user', utils_1.validRegister, controller_1.UserController.createUser);
    routes.get('/api/get-user', controller_1.UserController.getUser);
    routes.get('/api/get-user-by-id/:id', controller_1.UserController.getUserById);
    routes.patch('/api/update-user/:id', controller_1.UserController.updateUser);
    routes.delete('/api/delete-user/:id', controller_1.UserController.deleteUser);
    routes.post('/api/login', controller_1.UserController.login);
    routes.get('/api/logout', middleware_1.authenticate, controller_1.UserController.logout);
    routes.post('/api/register', controller_1.UserController.register);
    routes.post('/api/active-account', controller_1.UserController.activeAccount);
    routes.get('/api/rf-token', controller_1.UserController.refreshToken);
    // Hotel route
    routes.post('/api/create-hotel', controller_1.HotelController.createHotel);
    routes.get('/api/get-hotel', controller_1.HotelController.getHotel);
    routes.patch('/api/edit-hotel', controller_1.HotelController.editHotel);
    return app.use('/', routes);
};
exports.initWebRoute = initWebRoute;
//validRegister,
