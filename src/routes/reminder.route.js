const express = require("express");
const remainderController = require("../controllers/reminder.controller");

const remainderRouter = express.Router();

remainderRouter.get("/test", (req, res) => {
  return res.status(200).json({
    response: "from reminder service",
  });
});
// remainderRouter.post("/tickets", remainderController.create);

module.exports = remainderRouter;
