import express from "express";
import API from "../controller/api";
import { validRegister } from "../utils";
const routes = express.Router();
export const initWebRoute = (app: any) => {
  routes.post("/api/create-user",  API.createUser);
  routes.get("/api/read-user", API.readUser);
  routes.get("/api/read-user-by-id/:id", API.getUserById);
  routes.patch('/api/update-user/:id', API.updateUser);
  routes.delete('/api/delete-user/:id', API.deleteUser);
  routes.post('/api/login', API.login);
  return app.use("/", routes);
};
//validRegister,