import log4js from "log4js";

import * as dotenv from "dotenv";
dotenv.config();

const logger = log4js.getLogger();
logger.level = process.env.LOGGER_MODE;

export default logger;
