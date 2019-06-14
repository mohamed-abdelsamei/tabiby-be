const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { Schema } = mongoose;


const doctorSchema = new Schema({
  name: { type: String, required: true },
  phone: {
    number: { type: String, required: true, unique: true },
    code: { type: String },
    verified: { type: Boolean, default: false },
  },
  avatar: { type: String },
  email: { type: String },
  password: { type: String },
  speciality: { type: String },
  degree: { type: String },
  certificates: [],
  bio: { type: String },
});

// pre
doctorSchema.pre('save', (next) => {
  if (this.password) {
    const salt = bcrypt.genSaltSync(10);
    this.password = bcrypt.hashSync(this.password, salt);
  }
  next();
});


doctorSchema.methods.toJSON = () => {
  const obj = this.toObject();
  delete obj.password;
  obj.id = obj._id;
  return obj;
};

module.exports = mongoose.model('Doctor', doctorSchema);
