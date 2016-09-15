'use strict';

const mongoose = require('mongoose');
/////////////////////////////////////////


/////////////////////////////////////////
//Every collection in mongoose needs its own model
//Mongoose model: the post object should match the model obj passed at the second arg
module.exports = mongoose.model('Post', {
  title: {type: String, required: [true, 'Please enter a title for the post']},
  owner: {type: String, required: true, lowercase: true},
  imgUrl: {type: String, required: [true, 'Please enter an image url']},
  linkUrl: String,
  score: {type: Number, default: 0},
  upvotes: [String]
});
/////////////////////////////////////////
