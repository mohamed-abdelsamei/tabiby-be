class NurseService {
  constructor(nurseModel) {
    this.nurseModel = nurseModel;
  }

  async create(content) {
    const nurse = await this.nurseModel.create(content);
    return nurse;
  }

  async findAll(query) {
    const nurses = await this.nurseModel.find(query);
    return nurses;
  }

  async findOne(query) {
    const nurses = await this.nurseModel.findOne(query);
    return nurses;
  }

  async update(query, payload) {
    const nurse = await this.nurseModel.findOneAndUpdate(query, payload, { new: true });
    return nurse;
  }

  async delete(query) {
    const nurse = await this.nurseModel.findOneAndRemove(query);
    return nurse;
  }
}
module.exports = NurseService;
