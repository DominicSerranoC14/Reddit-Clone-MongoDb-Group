'use strict';

const { Router } = require('express');
const router = Router();
const Post = require('../models/post');
const { index, newPost, createPost } = require('../controllers/postsCtrl');
/////////////////////////////////////////


/////////////////////////////////////////
//Routes for '/posts'
router.get('/posts', index);
router.get('/newPost', newPost);
router.post('/newPost', createPost);
/////////////////////////////////////////


module.exports = router;
