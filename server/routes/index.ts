import express from "express";
import API from "../controller/api";
import { validRegister } from "../utils";
const routes = express.Router();
export const initWebRoute = (app: any) => {
  routes.post("/api/create-user",  API.createUser);
  routes.get("/api/get-user", API.readUser);
  routes.get("/api/get-user-by-id/:id", API.getUserById);
  routes.patch('/api/update-user/:id', API.updateUser);
  routes.delete('/api/delete-user/:id', API.deleteUser);
  routes.post('/api/login', API.login);
  routes.get('/api/logout',API.logout);
  routes.get('/api/rf-token',API.refreshToken);
  return app.use("/", routes);
};
//validRegister,