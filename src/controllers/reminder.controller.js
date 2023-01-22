const { Notification_Ticket } = require("../models/index");

class ReminderController {
  async test(data) {
    console.log("printing data ==> ", data);
  }

  async create(data) {
    try {
      const ticket = await Notification_Ticket.create(data);
      return "ticket created successfully";
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

module.exports = new ReminderController();
