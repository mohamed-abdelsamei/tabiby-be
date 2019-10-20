const Joi = require('@hapi/joi');
Joi.objectId = require('joi-objectid')(Joi);

module.exports = {
  create: {
    body: {
      name: Joi.string().required(),
      email: Joi.string().required(),
      password: Joi.string().required(),
    },
  },
  find: {

  },
  findOne: {
    params: {
      id: Joi.objectId().required(),
    },
  },
  update: {
    name: Joi.string(),
    email: Joi.string(),
    avatar: Joi.string(),
    phone: Joi.string(),

  },
  remove: {
    params: {
      id: Joi.objectId().required(),
    },
  },
};
