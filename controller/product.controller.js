import {
  getProductsServices,
  postProductService,
} from "../services/products.service.js";
import UserService from "../services/user.service.js";
import validateUserServices from "../services/login.service.js";
import logger from "../config/myLogger.js";

const getProductsController = async (req, res) => {
  let user = req.session.currentUser;
  user = await validateUserServices(user);
  logger.info("product controller", user);
  getProductsServices().then((datos) =>
    res.render("productos", {
      user: user[0],
      listExists: true,
      products: datos,
    })
  );
};

const postProductController = (req, res, next) => {
  const file = req.file;
  logger.info(file);
  if (!file) {
    const error = new Error("Please upload file");
    error.httpStatusCode = 400;
    return next(400);
  }

  let item = {
    name: req.body.title,
    userID: req.session.currentUserID,
    price: req.body.price,
    description: req.body.description,
    stock: req.body.stock,
    thumbnail: file.path,
  };

  const newItem = postProductService(item);
  res.redirect("/");
};

export { getProductsController, postProductController };
