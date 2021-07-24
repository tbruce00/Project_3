const mongoose = require('mongoose');

const { Schema } = mongoose;

const profileSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  bio: {
    type: String,
  },
  location: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  link: {
    type: String
  }


});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
