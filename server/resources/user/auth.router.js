const express = require('express');

const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

const {
  SERVER_ERROR,
  BAD_REQUEST,
  UNAUTHORIZED,
} = require('../../constants/httpCodes');
const {
  SERVER_ERROR_MSG,
  BAD_REQUEST_MSG,
} = require('../../constants/errorMessages');

const User = require('./user.model');

// GET /auth
// gets auth user
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(SERVER_ERROR).json(SERVER_ERROR_MSG);
  }
});

// POST /auth
// log in
router.post(
  '/',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(UNAUTHORIZED).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email });

      if (!user) {
        return res
          .status(BAD_REQUEST)
          .json({ errors: [{ msg: BAD_REQUEST_MSG }] });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res
          .status(BAD_REQUEST)
          .json({ errors: [{ msg: BAD_REQUEST_MSG }] });
      }

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
    } catch (err) {
      console.error(err.message);
      res.status(SERVER_ERROR).send(SERVER_ERROR_MSG);
    }
  },
);

module.exports = router;
