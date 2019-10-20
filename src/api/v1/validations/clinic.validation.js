const Joi = require('@hapi/joi');
Joi.objectId = require('joi-objectid')(Joi);

module.exports = {
  create: {
    body: {
      name: Joi.string().required(),
      address: Joi.string().required(),
      phone: Joi.string().required(),
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
    params: {
      id: Joi.objectId().required(),
    },
    body: {
      speciality: Joi.objectId(),
    },
  },
  updateSpeciality: {},
  remove: {},
};
