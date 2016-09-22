'use strict';

const { Router } = require('express');
const router = Router();
const { index, view } = require('../controllers/rootCtrl');
/////////////////////////////////////////

/////////////////////////////////////////
router.get('/', index);
router.post('/', view);
/////////////////////////////////////////

module.exports = router;
