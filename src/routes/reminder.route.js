const express = require("express");
const remainderController = require("../controllers/reminder.controller");

const remainderRouter = express.Router();

// remainderRouter.get("/subscribe", remainderController.consumedata);
// remainderRouter.post("/tickets", remainderController.create);

module.exports = remainderRouter;
