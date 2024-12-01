const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const router = require("./routes/index");

const logger = require("./config/logger");

logger.info("hello world");
logger.error("hello world");
logger.warn("hello world");
logger.debug("hello world");
logger.verbose("hello world");
logger.silly("hello world");

app.use(express.json());
app.use("/", router);

module.exports = app;
