const Clinic = require('./../models/clinic.model');
const Speciality = require('./../models/speciality.model');

module.exports.create = async (req, res, next) => {
  try {
    const { name, address, phone } = req.body;
    const payload = { name, address, phone };
    const clinic = await Clinic.create(payload);
    res.json(clinic);
  } catch (error) {
    next(error);
  }
};

module.exports.find = async (req, res, next) => {
  const clinics = await Clinic.find(req.query);
  res.json(clinics);
};


module.exports.findOne = async (req, res, next) => {
  const { id } = req.params;
  const clinic = await Clinic.findById(id);
  res.json(clinic);
};

module.exports.update = async (req, res, next) => {
  const { id } = req.params;
  const clinic = await Clinic.findByIdAndUpdate(id, req.body, { new: true });
  res.json(clinic);
};

module.exports.updateSpeciality = async (req, res, next) => {
  const { id } = req.params;
  const { specId } = req.body;
  const speciality = await Speciality.findById(specId);
  if (!speciality) return res.status(404).json({ msg: 'spec not found' });
  const clinic = await Clinic.findByIdAndUpdate(id, req.body, { new: true });
  res.json(clinic);
};


module.exports.remove = async (req, res, next) => {
  const { id } = req.params;
  const clinic = await Clinic.findByIdAndRemove(id);
  res.json(clinic);
};
