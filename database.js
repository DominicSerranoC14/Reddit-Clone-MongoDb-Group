'use strict';

const mongoose = require('mongoose');

const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost:27017/reddit';

mongoose.Promise = Promise;

module.exports = () => mongoose.connect(MONGODB_URL);
