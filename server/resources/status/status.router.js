const express = require('express');

const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

const {
  I_AM_A_TEAPOT,
  SERVER_ERROR,
  CREATED,
} = require('../../constants/httpCodes');
const {
  SERVER_ERROR_MSG,
  SECRET_MSG,
} = require('../../constants/errorMessages');

const Status = require('./status.model');

// PRIVATE
// POST /status
// creates one

router.post('/', auth, async (req, res) => {
  try {
    const { status } = req.body;
    const statusFields = {
      user_id: req.user.id,
      status,
    };

    const userStatus = await Status.findOneAndUpdate(
      { user_id: req.user.id },
      { $set: statusFields },
      { new: true, upsert: true, setDefaultsOnInsert: true },
    );
    res.status(CREATED).json(userStatus);
  } catch (err) {
    console.error(err.message);
    res.status(SERVER_ERROR).send(SERVER_ERROR_MSG);
  }
});

router.get('/:user_id', async (req, res) => {
  try {
    const status = await Status.findOne({
      user_id: req.params.user_id,
    }).populate('User');
    if (!status) {
      return res.status(I_AM_A_TEAPOT).json({ msg: SECRET_MSG });
    }
    res.json(status);
  } catch (err) {
    console.error(err);
    res.status(SERVER_ERROR).send(SERVER_ERROR_MSG);
  }
});

module.exports = router;
