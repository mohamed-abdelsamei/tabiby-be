const ClinicService = require('../services/clinic.service');
const SpecialityModel = require('./../models/speciality.model');
const ClinicModel = require('./../models/clinic.model');

module.exports.create = async (req, res, next) => {
  try {
    const { name, address, phone } = req.body;
    const payload = { name, address, phone };
    const clinicService = new ClinicService(ClinicModel);
    const clinic = await clinicService.createClinic(payload);
    res.json(clinic);
  } catch (error) {
    next(error);
  }
};

module.exports.find = async (req, res, next) => {
  const clinicService = new ClinicService(ClinicModel);
  const clinics = await clinicService.findAll(req.query);
  res.json(clinics);
};


module.exports.findOne = async (req, res, next) => {
  const { id } = req.params;
  const clinicService = new ClinicService(ClinicModel);
  const clinic = await clinicService.findOne({ _id: id });
  res.json(clinic);
};

module.exports.update = async (req, res, next) => {
  const { id } = req.params;
  const payload = req.body;
  const clinicService = new ClinicService(ClinicModel, SpecialityModel);
  const clinic = await clinicService.updateClinic({ _id: id }, payload);
  res.json(clinic);
};

module.exports.updateSpeciality = async (req, res, next) => {
  const { id } = req.params;
  const { speciality } = req.body;
  const clinicService = new ClinicService(ClinicModel, SpecialityModel);
  const clinic = await clinicService.updateSpeciality(id, speciality);
  res.json(clinic);
};


module.exports.remove = async (req, res, next) => {
  const { id } = req.params;
  const clinicService = new ClinicService(ClinicModel);

  const clinic = await clinicService.removeClinic(id);
  res.json(clinic);
};
