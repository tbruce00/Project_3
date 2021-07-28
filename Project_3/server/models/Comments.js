const mongoose = require('mongoose');

const { Schema } = mongoose;

const commentsSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  comment:{
      type: String
  }


});

const Comments = mongoose.model('Comments', commentsSchema);

module.exports = Comments;
