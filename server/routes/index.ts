import express from "express";
import API from "../controller/api";
import { validRegister } from "../utils";
const routes = express.Router();
export const initWebRoute = (app: any) => {
  routes.post("/api/create-user", validRegister, API.createUser);
  return app.use("/", routes);
};
