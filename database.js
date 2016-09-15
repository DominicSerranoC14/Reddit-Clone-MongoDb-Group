const mongoose = require('mongoose');

const mongoUrl = 'mongodb://localhost:27017/reddit'

mongoose.Promise = Promise;

module.exports = () => mongoose.connect(mongoUrl);