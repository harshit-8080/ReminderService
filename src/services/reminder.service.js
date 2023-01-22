const { Notification_Ticket } = require("../models/index");
const { Op } = require("sequelize");
const { subscribe, createChannel } = require("../utils/channel.js");
const { REMINDER_BINDING_KEY } = require("../config/server.config.js");
const remainderController = require("../controllers/reminder.controller");

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

exports.subscribe = async () => {
  const channel = await createChannel();
  const data = await subscribe(
    channel,
    REMINDER_BINDING_KEY,
    this.eventHandler
  );
};

exports.eventHandler = async (payload) => {
  try {
    const event = payload.event;
    const data = payload.data;
    switch (event) {
      case "CREATE_TICKET":
        console.log("Data ==> ", data);
        remainderController.create(data);
        break;

      default:
        break;
    }
  } catch (error) {
    throw error;
  }
};
