const Joi = require('@hapi/joi');
Joi.objectId = require('joi-objectid')(Joi);

module.exports = {
  doctorLogin: {
    body: {
      email: Joi.string().required(),
      password: Joi.string().min(6).required('password is required'),
    },
  },
  nurseLogin: {
    body: {
      email: Joi.string().required(),
      password: Joi.string().min(6).required('password is required'),
    },
  },
  userLogin: {
    body: {
      email: Joi.string().required(),
      password: Joi.string().min(6).required('password is required'),
    },
  },
  userSignup: {
    body: {
      mobile: Joi.string().required(),
      name: Joi.string().required(),
      password: Joi.string().min(6).required('Password is required'),
    },

  },
  adminLogin: {
    body: {
      email: Joi.string().required(),
      password: Joi.string().min(6).required('password is required'),
    },
  },
  pharmaLogin: {
    body: {
      email: Joi.string().required(),
      password: Joi.string().min(6).required('password is required'),
    },
  },

};
