import express from "express";
import  API  from "../controller/api";
const routes = express.Router();
export const initWebRoute = (app:any) => {
  routes.post("/api/create-user", API.createUser);
  return app.use('/',routes)
};
