const UserService = require('../services/user.service');
const UserModel = require('./../models/user.model');

module.exports.me = (req, res, next) => {
  const { id } = req.user;
  const userService = new UserService(UserModel);
  const user = userService.findOne({ _id: id });
  res.json(user);
};
