import getUsersServices from "../services/user.service.js";

const getUsersController = (req, res) => {
  getUsersServices().then((datos) => res.json(datos));
};

export default getUsersController;
