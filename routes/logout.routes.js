import { Router } from "express";

const logOutRouter = new Router();

logOutRouter.post("/", (req, res) => {
  let user = req.session.currentUser;
  req.session.destroy();
  res.send(`<h1>Hasta luego ${user} </h1>`);
});

export default logOutRouter;
