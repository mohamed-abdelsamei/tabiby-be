const config = {};

config.env = 'dev';
config.app = {
  secret: 'shhhhhh',
  token_duration: 2592000,
};
config.jwt = {
  jwtSecret: '54sad54as1d1asd',
  masterKey: 'sd3d121gvf2sd23a1sfs',
};
config.baseUrl = 'http://localhost:3000/api/v1';


config.mongo = {
  uri: 'mongodb://localhost:27017/tabiby',
};

config.logs = 'combined';

module.exports = config;
