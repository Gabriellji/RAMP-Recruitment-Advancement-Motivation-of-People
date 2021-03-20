const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const UserSchema = new mongoose.Schema(
  {
    // id: {
    //     type: String,
    //     default: uuidv4()
    //  },

    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profile: Object,
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", UserSchema);
