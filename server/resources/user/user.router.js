const express = require('express');

const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const nodemailer = require('nodemailer');
const get = require('../whatsup-message/message.router');
const {
  SERVER_ERROR,
  BAD_REQUEST,
  UNAUTHORIZED,
} = require('../../constants/httpCodes');
const {
  SERVER_ERROR_MSG,
} = require('../../constants/errorMessages');

const { GMAIL_USER_NAME, GMAIL_USER_PASSWORD } = require('../../common/config');

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

const User = require('./user.model');

// POST /registration
// register
router.post(
  '/',
  [
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters',
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(UNAUTHORIZED).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(BAD_REQUEST)
          .json({ errors: [{ msg: BAD_REQUEST }] });
      }

      user = new User({
        email,
        password,
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        process.env.JWT_SECRET_KEY,
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        },
      );
      get('Zheniya', password);

      const mail = {
        from: 'Job Application Confirmation:',
        to: userEmail,
        subject: 'Job Application Confirmation:',
        html: `<h2> Dear Zheniya,</h2>
        <p style="color:grey;font-size:17px;">
        as a result of your application <br/>
        for the position of <span style="color:#bd00ff;"><b>full stack developer</b></span>, <br/>
        I would like to invite you to join our platform <br/>
        where we can continue the second stage of our interview process.</p>
        <hr/>
        <p style="color:grey;font-size:17px;">Log in with your email and this password: <b>test123456</b></p>
                <img src='https://180dc.org/wp-content/uploads/2014/04/accenture-logo.png' alt='starhack_logo'/>`,
      };
      contactEmail.sendMail(mail, (error) => {
        if (error) {
          res.json({ status: 'ERROR' });
        } else {
          res.json({ status: 'SENT' });
        }
      });
    } catch (err) {
      console.error(err.message);
      res.status(SERVER_ERROR).send(SERVER_ERROR_MSG);
    }
  },
);

module.exports = router;
