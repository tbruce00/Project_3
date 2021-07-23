const mongoose = require('mongoose');

const { Schema } = mongoose;

const profileSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
  }

});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
