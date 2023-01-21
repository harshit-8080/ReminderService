const sender = require("../config/email.Config");

const sendMail = (from, to, subject, body) => {
  try {
    sender.sendMail({
      from,
      to,
      subject,
      text: body,
    });
    return "Mail sent successfully";
  } catch (error) {
    throw "error while sending mail";
  }
};

module.exports = sendMail;
