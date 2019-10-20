const UserService = require('../services/user.service');
const UserModel = require('./../models/user.model');

module.exports.adminLogin = async (req, res, next) => {
  const { password, username } = req.body;
  res.json({ msg: 'pk' });
};

module.exports.nurseLogin = async (req, res, next) => {
  res.json({ msg: 'pk' });
};

module.exports.userLogin = async (req, res, next) => {
  res.json({ msg: 'pk' });
};
module.exports.userSignup = async (req, res, next) => {
  const { password, name, mobile } = req.body;
  const { country } = req.headers;
  const userService = new UserService(UserModel);
  const user = await userService.registerUser({
    password, name, mobile, country,
  });
  res.json({ user });
};

module.exports.doctorLogin = async (req, res, next) => {
  res.json({ msg: 'pk' });
};

module.exports.pharmaLogin = async (req, res, next) => {
  res.json({ msg: 'pk' });
};
