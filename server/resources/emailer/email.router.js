const { Router } = require('express');
const nodemailer = require('nodemailer');
const { GMAIL_USER_NAME, GMAIL_USER_PASSWORD } = require('../../common/config');

const router = Router();

const userEmail = GMAIL_USER_NAME;
const userPassword = GMAIL_USER_PASSWORD;

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: userEmail,
    pass: userPassword,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Ready to Send');
  }
});

router.post('/subscribe', (req, res) => {
  // const { email } = req.body;

  const mail = {
    from: 'SUBSCRIBE REQUEST',
    to: userEmail,
    subject: 'SUBSCRIBE REQUEST',
    html: `<h2> Dear Zheniya,</h2>
    <p style="color:grey;font-size:17px;">
    as a result of your application <br/>
    for the position of <b>full stack developer</b>, <br/>
    I would like to invite you to join our platform <br/>
    where we can continue the second stage of our interview process.</p>
    <hr/>
    <p style="color:grey;font-size:17px;">Log in with your email and this password: <b>test123456</b></p>
            <img src='https://i.imgur.com/XmFPltc.png' alt='starhack_logo'/>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: 'ERROR' });
    } else {
      res.json({ status: 'SENT' });
    }
  });
});

module.exports = router;
