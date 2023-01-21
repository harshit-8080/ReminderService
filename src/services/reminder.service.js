const { Notification_Ticket } = require("../models/index");
const { Op } = require("sequelize");

exports.fetchPendingEmails = async () => {
  try {
    const tickets = await Notification_Ticket.findAll({
      where: {
        status: "PENDING",
        notificationTime: {
          [Op.lte]: new Date(),
        },
      },
    });
    return tickets;
  } catch (error) {
    console.log(error);
    throw "internal error: " + error;
  }
};

exports.updateStatus = async (id, status) => {
  try {
    const ticket = await Notification_Ticket.findByPk(id);
    ticket.status = status;
    await ticket.save();
  } catch (error) {
    console.log(error);
    throw "internal error: " + error;
  }
};
