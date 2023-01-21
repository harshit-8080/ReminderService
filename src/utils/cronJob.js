const cron = require("node-cron");
const sendMailHelper = require("./sendMail");
const { EMAIL_ID } = require("../config/server.config");
const {
  fetchPendingEmails,
  updateStatus,
} = require("../services/reminder.service");

exports.runCron = () => {
  cron.schedule("*/1 * * * *", async () => {
    console.log("running a task every minute");

    const tickets = await fetchPendingEmails();

    tickets.map(async (t) => {  
      try {
        const response = sendMailHelper(
          EMAIL_ID,
          t.recepientEmail,
          t.subject,
          t.content
        );
        if (response) {
          console.log("mail sent");
          updateStatus(t.id, "SUCCESS");
        }
      } catch (error) {
        console.log("mail Failed to send");
        updateStatus(t.id, "FAILED");
      }
    });
  });
};
