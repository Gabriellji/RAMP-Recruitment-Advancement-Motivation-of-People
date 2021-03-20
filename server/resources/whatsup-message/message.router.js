const accountSid = process.env.SID;
const authToken = process.env.AUTH;
const client = require('twilio')(accountSid, authToken);

const get = (name, password) => {
  client.messages
    .create({
      body: `Dear ${name}, as a result of your application
      for the position of full stack developer,
      I would like to invite you to join our platform
      where we can continue the second stage of our interview process.
      Log in with your email and this password: ${password}.
      We look forward to seeing you.
      Best regards,
      Thomas Gunn`,
      from: `whatsapp:${process.env.TWILIO_NUMBER}`,
      to: `whatsapp:${process.env.NUMBER}`,
    })
    .then((message) => console.log(message.sid))
    .done();
};

module.exports = get;
