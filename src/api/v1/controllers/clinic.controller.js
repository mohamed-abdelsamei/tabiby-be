const Clinic = require('./../models/clinic.model');

module.exports.create = async (req, res, next) => {
  const { name, address, phone } = req.body;
  const payload = {
    name, address, phone,
  };
  const clinic = new Clinic(payload);
  await clinic.save();
  res.json(clinic);
};
