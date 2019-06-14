const app = require('./services/express');
const mongoose = require('./services/mongoose');

mongoose.connect();

module.exports = app;
