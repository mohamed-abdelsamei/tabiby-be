// const doctorModel = require('./../models/doctor.model');

class DoctorService {
  constructor(doctorModel) {
    this.doctorModel = doctorModel;
  }

  async create(content) {
    const doctor = await this.doctorModel.create(content);
    return doctor;
  }

  async findAll(query) {
    const doctors = await this.doctorModel.find(query);
    return doctors;
  }

  async findOne(query) {
    const doctors = await this.doctorModel.findOne(query);
    return doctors;
  }

  async update(query, payload) {
    const doctor = await this.doctorModel.findOneAndUpdate(query, payload, { new: true });
    return doctor;
  }

  async delete(query) {
    const doctor = await this.doctorModel.findOneAndRemove(query);
    return doctor;
  }
}
module.exports = DoctorService;
