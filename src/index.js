const bodyParser = require("body-parser");
const express = require("express");
const { PORT } = require("./config/server.config.js");
const app = express();
const sendMail = require("./utils/sendMail");
const job = require("./utils/cronJob");
const remainderRouter = require("./routes/reminder.route.js");
const { subscribe } = require("./services/reminder.service.js");

const setupAndStartServer = async (req, res) => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(remainderRouter);
  await subscribe();

  app.listen(PORT, (req, res) => {
    console.clear();
    console.log(`Server started at ${PORT}`);
    job.runCron();
  });
};

setupAndStartServer();
