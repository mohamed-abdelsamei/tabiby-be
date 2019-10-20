const app = require('./startup/express');
const mongoose = require('./startup/mongoose');
const swagger = require('./startup/swagger');
const routes = require('./startup/routes');

routes(app);

swagger(app);

mongoose.connect();

module.exports = app;
