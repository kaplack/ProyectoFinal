import mongoose from "mongoose";
import logger from "./myLogger.js";

const url =
  "mongodb+srv://ABurga:g5kNcaBKcEodAE83@cluster0.4upmc2o.mongodb.net/?retryWrites=true&w=majority";
const myConnect = () => {
  return mongoose.connect(
    url,
    { useNewUrlParser: true, useUnifiedTopology: true, dbName: "coloso" },
    (err) => {
      if (err) {
        logger.error(err);
        return;
      }
      logger.info("DB Connected");
    }
  );
};
export default myConnect;
