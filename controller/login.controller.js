import validateUsersServices from "../services/login.service.js";
import UserServices from "../services/user.service.js";
import bcryptjs from "bcryptjs";
import logger from "../config/myLogger.js";

const getLoginController = async (req, res) => {
  let user = req.session.currentUser;
  let currUser = validateUsersServices(user);
  res.render("login", {
    user: currUser[0],
  });
};

const loginController = async (req, res) => {
  const usersServices = new UserServices();

  const usersData = await usersServices.getUsers();
  let user = {
    user: req.body.user,
    password: String(req.body.password),
  };
  //console.log(user);
  const userExist = usersData.some((u) => {
    return u.username == user.user;
  });

  if (userExist) {
    let currUser = usersData.filter((u) => u.username == user.user);
    //console.log(currUser);
    let compare = bcryptjs.compareSync(user.password, currUser[0].password);
    if (compare) {
      req.session.currentUser = user.user;
      req.session.currentUserID = currUser[0].id;
      res.redirect("/");
    } else {
      res.send("la clave no es correcta");
    }
  } else {
    res.send("Usuario no Existe");
  }
};

export { getLoginController, loginController };
