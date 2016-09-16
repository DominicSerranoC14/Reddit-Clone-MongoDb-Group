'use strict';

const mongoose = require('mongoose');

const mongoUrl = process.env.MONGODB_URL || 'mongodb://localhost:27017/reddit';

mongoose.Promise = Promise;

module.exports = () => mongoose.connect(mongoUrl);
