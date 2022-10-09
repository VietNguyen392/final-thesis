import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import mongoose from 'mongoose';
import { Server, Socket } from 'socket.io';
import { createServer } from 'http';
import { initWebRoute } from './routes';
import { SocketServer } from './config/socket';
require('dotenv').config();
const app = express();
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(cors());
app.use(cookieParser());
app.use(morgan('dev'));
const http = createServer(app);
export const io = new Server(http);
io.on('connection', (socket: Socket) => {
  SocketServer(socket);
});
initWebRoute(app);
const URI = process.env.DATABASE_URL;
mongoose
  .connect(`${URI!}`, {
    autoIndex: true,
    serverSelectionTimeoutMS: 5000,
    keepAlive: true,
    family: 4,
  })
  .then(() => {
    console.log('connect success to mongodb 🍃');
  })
  .catch((err: string) => {
    throw err;
  });
var port = process.env.PORT || 6030;
http.listen(port, () => {
  console.log('Server is run on port 🚀 ', port);
});
