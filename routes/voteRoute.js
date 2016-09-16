'use strict';

const router = require('./routes');
const Post = require('../models/post');


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

module.exports = router;
