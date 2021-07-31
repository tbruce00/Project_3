const mongoose = require('mongoose');

const { Schema } = mongoose;
// const bcrypt = require('bcrypt');

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    },  
  email: {
    type: String,
    required: true,
    unique: true,
  },
  bio: {
    type: String,
  },
  location: {
    type: String,
  },
  avatarUrl: {
    type: String,
  },
  websiteUrl: {
    type: String,
  },
  profile: {
    type: Schema.Types.ObjectId,
    ref: 'Profile',
    required: true
  }
});

// // Set up pre-save middleware to create password
// userSchema.pre('save', async function (next) {
//   if (this.isNew || this.isModified('password')) {
//     const saltRounds = 10;
//     this.password = await bcrypt.hash(this.password, saltRounds);
//   }

//   next();
// });

// // Compare the incoming password with the hashed password
// userSchema.methods.isCorrectPassword = async function (password) {
//   await bcrypt.compare(password, this.password);
// };

const User = mongoose.model('User', userSchema);

module.exports = User;
