const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");

const Profile = require("./profile.model");

// Private
// POST /profile
// Creates or updates profile

router.post(
  "/",
  [
    auth,
    check("name")
      .notEmpty()
      .withMessage("Name is required")
      .not()
      .custom((val) => /[^A-za-z0-9\s]/g.test(val))
      .withMessage("Name not use uniq characters"),
    check("surname")
      .notEmpty()
      .withMessage("Surname is required")
      .not()
      .custom((val) => /[^A-za-z0-9\s]/g.test(val))
      .withMessage("Surname not use uniq characters"),
    check("username")
      .notEmpty()
      .withMessage("Username is required")
      .not()
      .custom((val) => /[^A-za-z0-9\s]/g.test(val))
      .withMessage("Username not use uniq characters"),
    check("phone")
      .notEmpty()
      .withMessage("Phone number is required")
      .isMobilePhone()
      .withMessage("Please include a valid phone number"),
    check("country").notEmpty().withMessage("Country is required"),
    check("date_of_birth")
      .notEmpty()
      .withMessage("Date of birth is required")
      .isDate()
      .withMessage("Please include a valid date"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const {
        name,
        surname,
        username,
        phone,
        linkedin,
        github,
        website,
        country,
        date_of_birth,
        profile_picture,
        cv,
      } = req.body;
      console.log(req.user);
      const profileFields = {
        user_id: req.user.id,
        name,
        surname,
        username,
        phone,
        linkedin,
        github,
        website,
        country,
        date_of_birth,
        profile_picture,
        cv,
      };
      // Using upsert option (creates new doc if no match is found):
      const profile = await Profile.findOneAndUpdate(
        { user_id: req.user.id },
        { $set: profileFields },
        { new: true, upsert: true, setDefaultsOnInsert: true }
      );

      res.status(201).json(profile);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
