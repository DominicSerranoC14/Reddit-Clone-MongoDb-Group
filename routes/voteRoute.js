'use strict';

const router = require('./routes');
const Post = require('../models/post');


/////////////////////////////////////////
router.post('/post/:_id/upvote', (req, res) => {
  //Store the post's id and the current vote score
  const conditions = { _id: req.params._id}
  const update = {$inc: {score: 1}, $addToSet: {upvotes: req.session.username}}
  let canUpvote;
  Post.find(conditions)
  .then(post => {
    if(post[0].upvotes.length != 0){
      for(let i = 0; i < post[0].upvotes.length; i ++){
        if(post[0].upvotes[i] === req.session.username){
          res.redirect('/posts');
        } else {
          canUpvote = true;
          break;
        }
      }
      if(canUpvote === true){
        Post.update(conditions, update)
        .then(post => {
          res.redirect('/posts');
      })
      }
    }
    else {
      console.log('no')
      Post.update(conditions, update)
      .then(post => { res.redirect('/posts') })
    }

  })
})
/////////////////////////////////////////


/////////////////////////////////////////
router.post('/post/:_id/downvote', (req, res) => {
  //Store the post's id and the current vote score
  const conditions = { _id: req.params._id}
  const update = {$inc: {score: -1}, $addToSet: {upvotes: req.session.username}}
  let canDownVote;
  Post.find(conditions)
  .then(post => {
    if(post[0].upvotes.length != 0){
      for(let i = 0; i < post[0].upvotes.length; i ++){
        if(post[0].upvotes[i] === req.session.username){
          res.redirect('/posts');
          break;
        } else {
          canDownVote = true;
          break;
        }
      }
      if(canDownVote === true){
        Post.update(conditions, update)
        .then(post => {
          res.redirect('/posts');
      })
      }
    }
    else {
      console.log('no')
      Post.update(conditions, update)
      .then(post => { res.redirect('/posts') })
    }

  })
})
/////////////////////////////////////////


module.exports = router;
