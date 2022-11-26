import { Router } from "express";

import multer from "multer";

import {
  getLoginController,
  loginController,
} from "../controller/login.controller.js";

const loginRouter = new Router();
const upload = multer();

loginRouter.get("/", getLoginController);
loginRouter.post("/", upload.none(), loginController);

export default loginRouter;
