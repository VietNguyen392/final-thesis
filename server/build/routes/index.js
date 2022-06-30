"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initWebRoute = void 0;
const express_1 = __importDefault(require("express"));
const api_1 = __importDefault(require("../controller/api"));
const utils_1 = require("../utils");
const routes = express_1.default.Router();
const initWebRoute = (app) => {
    routes.post("/api/create-user", utils_1.validRegister, api_1.default.createUser);
    return app.use("/", routes);
};
exports.initWebRoute = initWebRoute;
