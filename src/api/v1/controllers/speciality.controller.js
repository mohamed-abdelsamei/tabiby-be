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
  const { id } = req.params;
  const speciality = await Speciality.findByIdAndUpdate(id, req.body, { new: true });
  res.json(speciality);
};


module.exports.remove = async (req, res, nex) => {
  const { id } = req.params;
  const speciality = await Speciality.findByIdAndDelete(id);
  res.json(speciality);
};

module.exports.findOne = async (req, res, nex) => {
  const { id } = req.params;
  const speciality = await Speciality.findById(id);
  res.json(speciality);
};


module.exports.find = async (req, res, nex) => {
  const speciality = await Speciality.find(req.query);
  res.json(speciality);
};
