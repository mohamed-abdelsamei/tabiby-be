class ClinicService {
  constructor(clinicModel, specialityModel) {
    this.clinicModel = clinicModel;
    this.specialityModel = specialityModel;
  }

  async createClinic(payload) {
    if (payload.speciality) {
      const speciality = await this.specialityModel.findOne({ _id: payload.speciality }).select('id name nameAr');
      if (!speciality) throw new Error('Speciality not found');
      console.log(speciality);
      console.log(speciality.mini());

      payload.speciality = speciality.mini();
    }

    const clinic = await this.clinicModel.create(payload);
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
      payload.speciality = speciality.mini();
    }

    const clinic = await this.clinicModel.findOneAndUpdate(query, payload, { new: true });
    return clinic;
  }

  async removeClinic(query) {
    const clinic = await this.clinicModel.findOneAndRemove(query);
    return clinic;
  }
}
module.exports = ClinicService;
