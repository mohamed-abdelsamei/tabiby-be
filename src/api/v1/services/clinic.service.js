// const clinicModel = require('./../models/clinic.model');

class ClinicService {
  constructor(clinicModel, specialityModel) {
    this.clinicModel = clinicModel;
    this.specialityModel = specialityModel;
  }

  async createClinic(content) {
    const clinic = await this.clinicModel.create(content);
    return clinic;
  }

  async findAll(query) {
    const clinics = await this.clinicModel.find(query);
    return clinics;
  }

  async findOne(query) {
    const clinic = await this.clinicModel.findOne(query);
    return clinic;
  }

  async updateClinic(query, payload) {
    if (payload.speciality) {
      const speciality = await this.specialityModel.findOne({ _id: payload.speciality }).select('id name nameAr');
      if (!speciality) throw new Error('Speciality not found');

      payload.speciality = {
        ref: speciality.id,
        name: speciality.name,
        nameAr: speciality.nameAr,
      };
    }

    const clinic = await this.clinicModel.findOneAndUpdate(query, payload, { new: true });
    return clinic;
  }

  async removeClinic(query) {
    const clinic = await this.clinicModel.findOneAndRemove(query);
    return clinic;
  }

  async updateSpeciality(clinicId, specialityId) {
    const speciality = await this.specialityModel.findById(specialityId);
    if (!speciality) throw new Error('Specielity not found');
    return this.update({ _id: clinicId }, {});
  }
}
module.exports = ClinicService;
