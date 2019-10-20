const UserService = require('../services/user.service');
const UserModel = require('./../models/user.model');

module.exports.me = (req, res, next) => {
  const { id } = req.user;
  const userService = new UserService(UserModel);
  const user = userService.findOne({ _id: id });
  res.json(user);
};

module.exports.findOne = (req, res, next) => {
  const { id } = req.params;
  const userService = new UserService(UserModel);
  const users = userService.findOne({ _id: id });
  res.json(users);
};

module.exports.find = (req, res, next) => {
  const userService = new UserService(UserModel);
  const users = userService.findAll(req.query);
  res.json(users);
};
