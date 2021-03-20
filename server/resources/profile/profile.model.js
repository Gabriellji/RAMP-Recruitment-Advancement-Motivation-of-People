const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      require: true,
    },
    linkedin: {
      type: String,
    },
    github: {
      type: String,
    },
    website: {
      type: String,
    },
    country: {
      type: String,
      require: true,
    },
    date_of_birth: {
      type: Date,
    },
    profile_picture: {
      type: String,
    },
    cv: {
      type: String,
    },
  },
  { timestamps: true },
);

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
