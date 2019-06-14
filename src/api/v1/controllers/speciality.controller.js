const Speciality = require('./../models/speciality.model');

module.exports.create = async (req, res, next) => {
  const { name, nameAr } = req.body;
  const payload = {
    name, nameAr,
  };
  const speciality = new Speciality(payload);
  await speciality.save();
  res.json(speciality);
};

module.exports.update = async (req, res, next) => {
  const { name, nameAr } = req.body;
  const { id } = req.params;
  const speciality = await Speciality.findOne({ _id: id });
  speciality.name = name;
  speciality.nameAr = nameAr;
  await speciality.save();
  res.json(speciality);
};


module.exports.delete = async (req, res, nex) => {
  const { id } = req.params;
  const speciality = await Speciality.findOne({ _id: id });
  await speciality.remove();
  res.json(speciality);
};

module.exports.findOne = async (req, res, nex) => {
  const { id } = req.params;
  const speciality = await Speciality.findOne({ _id: id });
  res.json(speciality);
};


module.exports.find = async (req, res, nex) => {
  const speciality = await Speciality.find(req.query);
  res.json(speciality);
};
