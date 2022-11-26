import UserService from "../services/user.service.js";
import { getProductsServices } from "../services/products.service.js";
import logger from "../config/myLogger.js";

const userService = new UserService();

const getHomeController = async (req, res) => {
  const products = await getProductsServices();
  let userData = await userService.getUsers();
  logger.info("userData", userData);
  let currUser = req.session.currentUser;
  const user = userData.filter((us) => {
    return us.username == currUser;
  });

  const userObj = user[0];
  logger.info("current user", user[0]);
  logger.info("current user", currUser);
  res.render("main", { user: userObj, products });
};

export default getHomeController;
