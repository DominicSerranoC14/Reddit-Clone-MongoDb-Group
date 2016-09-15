const { Router } = require('express');
const router = Router();

/////////////////////////////////////////
router.get('/', (req,res) => {
    res.render('login')
});

router.get('/posts', (req, res) => {
  //On redirection to '/posts' render postView with userName
  res.render('postView', {userName: req.session.username});
});
/////////////////////////////////////////


/////////////////////////////////////////
router.post('/', (req, res) => {

  //Stores the username in a local session on sign in
  req.session.username = req.body.username;

  res.redirect('/posts');

});
/////////////////////////////////////////

module.exports = router;
