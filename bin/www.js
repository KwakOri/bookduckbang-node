const app = require("../app");

const logger = require("../config/logger");

app.listen(process.env.PORT, () => {
  logger.info("Server is working");
});
