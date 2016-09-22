'use strict';

module.exports.index = (req, res) => res.render('login');

module.exports.view = (req, res) => {

  // //Stores the username in a local session on sign in
  // req.session.username = req.body.username;

  res.redirect('/posts');

};
