const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
  path: path.join(__dirname, '../.env'),
});

module.exports = {
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
  MONGO_CONNECTION_STRING: process.env.MONGO_CONNECTION_STRING,
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
  AUTH_MODE: process.env.AUTH_MODE === 'true',
  GMAIL_USER_NAME: process.env.GMAIL_USER_NAME,
  GMAIL_USER_PASSWORD: process.env.GMAIL_USER_PASSWORD,
  SID: process.env.SID,
  AUTH: process.env.AUTH,
  NUMBER: process.env.NUMBER,
  TWILIO_NUMBER: process.env.TWILIO_NUMBER,
};
