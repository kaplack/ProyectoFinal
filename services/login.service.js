import myConnect from "../config/dbConnect.js";
import UserService from "../services/user.service.js";

const userService = new UserService();

const validateUserServices = async (userName) => {
  let usersData = await userService.getUsers();
  let currUser = usersData.filter((u) => u.username == userName);
  return currUser;
};

export default validateUserServices;
