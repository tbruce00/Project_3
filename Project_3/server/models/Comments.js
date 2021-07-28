const mongoose = require('mongoose');

const { Schema } = mongoose;

const commentsSchema = new Schema({

  Name: {
    type: String,
  },
  Comment: {
    type: String,
  },


});

const Comments = mongoose.model('Comments', commentsSchema);

module.exports = Comments;