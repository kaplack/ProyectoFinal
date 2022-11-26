import { Router } from "express";
import multer from "multer";
import {
  signUpPageRenderService,
  signUpUserService,
} from "../controller/signup.controller.js";

const signUpRouter = new Router();

signUpRouter.get("/", signUpPageRenderService);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads/users");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

signUpRouter.post("/", upload.single("avatarFile"), signUpUserService);

export default signUpRouter;
