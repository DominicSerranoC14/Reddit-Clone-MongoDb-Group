'use strict';

const Post = require('../models/post');
/////////////////////////////////////////

/////////////////////////////////////////
module.exports.index = (req, res) => {
  Post
  .find()
  .then(post => {
    res.render('postView', {userName: req.session.username, posts: post});
  })
};

module.exports.newPost = (req, res) => {
  res.render('newPost');
};

module.exports.createPost = (req, res, err) => {
  //Adding the current user's name to the POST form obj
  //POST new user post to db
  Post
  .create(req.body)
  .then((post) => {
    console.log("Test post", post);
    res.redirect('/posts')
  })
  .catch(err);
};
/////////////////////////////////////////
