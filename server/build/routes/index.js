"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initWebRoute = void 0;
const express_1 = __importDefault(require("express"));
const controller_1 = require("../controller");
const ServiceController_1 = __importDefault(require("../controller/ServiceController"));
const utils_1 = require("../utils");
const middleware_1 = require("../middleware");
const routes = express_1.default.Router();
const initWebRoute = (app) => {
    //*User routes
    routes.post('/api/create-user', controller_1.UserController.createUser);
    routes.get('/api/user', controller_1.UserController.getAllUser);
    routes
        .route('/api/user/:id')
        .get(controller_1.UserController.getUserById)
        .patch(controller_1.UserController.updateUser)
        .delete(controller_1.UserController.deleteUser);
    //*Auth routes
    routes.post('/api/login', controller_1.UserController.login);
    routes.get('/api/logout', middleware_1.authenticate, controller_1.UserController.logout);
    routes.post('/api/register', utils_1.validRegister, controller_1.UserController.register);
    routes.post('/api/active-account', controller_1.UserController.activeAccount);
    routes.get('/api/rf-token', controller_1.UserController.refreshToken);
    routes.post('/api/forgot-password', controller_1.UserController.forgotPass);
    routes.put('/api/reset-password', controller_1.UserController.resetPass);
    //*Hotel routes
    routes.route('/api/room').post(controller_1.RoomController.createRoom).get(controller_1.RoomController.getRoom);
    routes
        .route('/api/room/:id')
        .get(controller_1.RoomController.getRoomById)
        .patch(controller_1.RoomController.editRoom)
        .delete(controller_1.RoomController.deleteRoom);
    //*Booking routes
    routes.post('/api/new-booking', controller_1.BookingController.newBooking);
    routes.post('/api/active-booking', controller_1.BookingController.activeBooking);
    routes.get('/api/get-all-booking', controller_1.BookingController.getAllBooking);
    routes.get('/api/get-user-booking/:id', controller_1.BookingController.getBookingByUser);
    routes.put('/api/change-booking-status/:id', controller_1.BookingController.updateBookingStatus);
    routes.get('/api/get-room-booking/:id', controller_1.BookingController.getBookingByRoom);
    routes.delete('/api/delete-booking/:id', controller_1.BookingController.deleteBooking),
        routes.delete('/api/deleteAll-booking', controller_1.BookingController.deleteAllBooking);
    //*Service routes
    routes
        .route('/api/service')
        .post(ServiceController_1.default.createService)
        .get(ServiceController_1.default.getService);
    routes
        .route('/api/service/:id')
        .patch(ServiceController_1.default.editService)
        .delete(ServiceController_1.default.deleteService);
    return app.use('/', routes);
};
exports.initWebRoute = initWebRoute;
//validRegister,
