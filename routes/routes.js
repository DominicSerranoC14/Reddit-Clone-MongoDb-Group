'use strict';

const { Router } = require('express');
const router = Router();
const Post = require('../models/post');

/////////////////////////////////////////
//Router for login page
router.get('/', (req,res) => {
    res.render('login')
});


//Router for postView home page
router.get('/posts', (req, res) => {
  Post
  .find()
  .then(post => {
    res.render('postView', {userName: req.session.username, posts: post});
  })
  //On redirection to '/posts' render postView with userName

});


//Router for the newPost page
router.get('/newPost', (req, res) => {
  res.render('newPost');
});

router.post('/post/:_id/upvote', (req, res) => {
  const conditions = { _id: req.params._id}
  const update = {$inc: {score: 1}, $addToSet: {upvotes: req.session.username}}
  let canUpvote;
  Post.find(conditions)
  .then(post => {
    if(post[0].upvotes.length != 0){
      for(let i = 0; i < post[0].upvotes.length; i ++){
        if(post[0].upvotes[i] === req.session.username){
          break;
        } else {
          canUpvote = true;
          break;
        }
      }
      if(canUpvote === true){
        Post.update(conditions, update)
        .then(post => {
      })
      }
    }
    else {
      console.log('no')
      Post.update(conditions, update)
      .then(post => {})
    }

  })
})

/////////////////////////////////////////


/////////////////////////////////////////
//Post route for '/' login view
router.post('/', (req, res) => {

  //Stores the username in a local session on sign in
  req.session.username = req.body.username;

  res.redirect('/posts');

});


//Post route for newPost
router.post('/newPost', (req, res, err) => {

  //Adding the current user's name to the POST form obj
  req.body.owner = req.session.username;

  //POST new user post to db
  Post
  .create(req.body)
  .then((post) => {
    console.log("Test post", post);
    res.redirect('/posts')
  })
  .catch(err);

  //redirect to the home post page

});
/////////////////////////////////////////

module.exports = router;
