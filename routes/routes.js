const { Router } = require('express');
const router = Router();

router.get('/', (req,res) => {
    res.render('home')
})

router.post('/', (req, res) => {

  //Stores the username in a local session on sign in
  req.session.username = req.body.username;

  res.render('');

});

module.exports = router;
