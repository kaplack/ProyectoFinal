import { Router } from "express";
import getHomeController from "../controller/home.controller.js";

const userRouter = new Router();

userRouter.get("/", getHomeController);

export default userRouter;
