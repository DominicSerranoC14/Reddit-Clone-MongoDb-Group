const { Router } = require('express');
const router = Router();

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
  console.log(req.session.username);
  console.log("Test req.body", req.body);
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
/////////////////////////////////////////

module.exports = router;
