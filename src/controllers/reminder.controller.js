const { Notification_Ticket } = require("../models/index");

exports.create = async (req, res) => {
  try {
    const ticket = await Notification_Ticket.create(req.body);
    return res.status(201).json({
      response: ticket,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      response: "Internal Server Error",
      success: false,
    });
  }
};
