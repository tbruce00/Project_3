const firebase = require('firebase');

const { Schema } = firebase;

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

const Profile = firebase.model('Profile', profileSchema);

module.exports = Profile;
