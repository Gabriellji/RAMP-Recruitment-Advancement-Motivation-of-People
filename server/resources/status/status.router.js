const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");

const Status = require("./status.model");

// PRIVATE 
// POST /status
// creates one

router.post("/", auth, async (req, res) => {
  try {
    const { status } = req.body;
    const statusFields = {
      user_id: req.user.id,
      status,
    };

    const userStatus = await Status.findOneAndUpdate(
      { user_id: req.user.id },
      { $set: statusFields },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );
    res.status(201).json(userStatus);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
