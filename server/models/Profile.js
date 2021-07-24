const firebase = require('firebase');

const { Schema } = firebase;

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

const Profile = firebase.model('Profile', profileSchema);

module.exports = Profile;
