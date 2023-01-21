const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  PORT: process.env.PORT,
  EMAIL_ID: process.env.EMAIL_ID,
  EMAIL_PASS: process.env.EMAIL_PASS,
  BROKER_URL: process.env.BROKER_URL,
  EXCHANGE_NAME: process.env.EXCHANGE_NAME,
  QUEUE_NAME: process.env.QUEUE_NAME,
  REMINDER_BINDING_KEY: process.env.REMINDER_BINDING_KEY,
};
