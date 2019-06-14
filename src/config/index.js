const env = process.env.NODE_ENV || 'test';
// eslint-disable-next-line import/no-dynamic-require
const cfg = require(`./config.${env}`);


module.exports = cfg;
