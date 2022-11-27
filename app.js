import express from "express";
import userRouter from "./routes/users.routes.js";
import homeRouter from "./routes/home.routes.js";
import loginRouter from "./routes/login.routes.js";
import signUpRouter from "./routes/signup.routes.js";
import logOutRouter from "./routes/logout.routes.js";
import mySession from "./config/sessionConfig.js";
import logger from "./config/myLogger.js";
import productsRouter from "./routes/products.routes.js";

const app = express();
app.use(express.json());
app.use(express.static("public"));
app.use(mySession());

app.use("/public", express.static("public"));

app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/", homeRouter);
app.use("/products", productsRouter);
app.use("/login", loginRouter);
app.use("/signup", signUpRouter);
app.use("/logout", logOutRouter);

let PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  logger.info("app is running");
});
