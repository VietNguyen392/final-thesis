import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import { Server, Socket } from 'socket.io';
import { createServer } from 'http';
import { initWebRoute } from './routes';
require('dotenv').config();
const app = express();
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(cors());
app.use(cookieParser());
app.use(morgan('dev'));
const http = createServer(app);
export const io = new Server(http);
import { SocketServer } from './config/socket';
io.on('connection', (socket: Socket) => {
  SocketServer(socket);
});
initWebRoute(app);
import './config/database';
var port = process.env.PORT || 6030;
http.listen(port, () => {
  console.log('server is run on port 🚀 ', port);
});
