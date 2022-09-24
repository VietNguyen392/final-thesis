"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.io = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
const socket_io_1 = require("socket.io");
const http_1 = require("http");
const routes_1 = require("./routes");
require('dotenv').config();
const app = (0, express_1.default)();
app.use(body_parser_1.default.json({ limit: '50mb' }));
app.use(body_parser_1.default.urlencoded({ extended: true, limit: '50mb' }));
app.use((0, cors_1.default)());
app.use((0, cookie_parser_1.default)());
app.use((0, morgan_1.default)('dev'));
const http = (0, http_1.createServer)(app);
exports.io = new socket_io_1.Server(http);
const socket_1 = require("./config/socket");
exports.io.on('connection', (socket) => {
    (0, socket_1.SocketServer)(socket);
});
(0, routes_1.initWebRoute)(app);
require("./config/database");
var port = process.env.PORT || 6030;
http.listen(port, () => {
    console.log('server is run on port 🚀 ', port);
});
