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
  //On redirection to '/posts' render postView with userName
  res.render('postView', {userName: req.session.username});
});


//Router for the newPost page
router.get('/newPost', (req, res) => {
  res.render('newPost');
});

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
