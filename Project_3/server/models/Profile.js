const mongoose = require('mongoose');

const { Schema } = mongoose;

const profileSchema = new Schema({

  linkedIn: {
    type: String
  },
  gitHub: {
    type: String
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
