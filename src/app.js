const app = require('./services/express');
const mongoose = require('./services/mongoose');
const swagger = require('./services/swagger');
const routes = require('./services/routes');

routes(app);
swagger(app);

mongoose.connect();

module.exports = app;
