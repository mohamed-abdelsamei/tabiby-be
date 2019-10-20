const libphonenumber = require('libphonenumber-js/max');

class UserService {
  constructor(userModel) {
    this.userModel = userModel;
  }

  async create(content) {
    const user = await this.userModel.create(content);
    return user;
  }

  async registerUser(content) {
    const number = libphonenumber.parsePhoneNumberFromString(content.mobile, content.country);
    if (number.getType() !== 'MOBILE') throw new Error('Please enter a avlid number');
    const phone = { number: number.number, country: content.country };
    const user = await this.userModel.create({ ...content, phone });
    return user;
  }

  async findAll(query) {
    const users = await this.userModel.find(query);
    return users;
  }

  async findOne(query) {
    const users = await this.userModel.findOne(query);
    return users;
  }

  async update(query, payload) {
    const user = await this.userModel.findOneAndUpdate(query, payload, { new: true });
    return user;
  }

  async delete(query) {
    const user = await this.userModel.findOneAndRemove(query);
    return user;
  }
}
module.exports = UserService;
