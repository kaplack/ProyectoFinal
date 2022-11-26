import { Router } from "express";
import multer from "multer";
import {
  getProductsController,
  postProductController,
} from "../controller/product.controller.js";

const productsRouter = new Router();

productsRouter.get("/", getProductsController);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads/products");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

productsRouter.post("/", upload.single("myFile"), postProductController);

export default productsRouter;
