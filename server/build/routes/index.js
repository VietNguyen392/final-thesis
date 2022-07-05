"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initWebRoute = void 0;
const express_1 = __importDefault(require("express"));
const api_1 = __importDefault(require("../controller/api"));
const routes = express_1.default.Router();
const initWebRoute = (app) => {
    routes.post("/api/create-user", api_1.default.createUser);
    routes.get("/api/get-user", api_1.default.readUser);
    routes.get("/api/get-user-by-id/:id", api_1.default.getUserById);
    routes.patch('/api/update-user/:id', api_1.default.updateUser);
    routes.delete('/api/delete-user/:id', api_1.default.deleteUser);
    routes.post('/api/login', api_1.default.login);
    routes.get('/api/logout', api_1.default.logout);
    routes.get('/api/rf-token', api_1.default.refreshToken);
    return app.use("/", routes);
};
exports.initWebRoute = initWebRoute;
//validRegister,
