const mongoose = require('mongoose');

const { Schema } = mongoose;

const specialitySchema = new Schema({
  ref: { type: mongoose.Schema.Types.ObjectId },
  name: { type: String },
});

const doctorSchema = new Schema({
  ref: { type: mongoose.Schema.Types.ObjectId },
  name: { type: String },
  nameAr: { type: String },
  logo: { type: String },
});

const clinicSchema = new Schema({
  name: { type: String, required: true },
  address: { type: String },
  phone: { type: String },
  desc: { type: String },
  speciality: specialitySchema,
  subSpeciality: [{ type: String }],
  doctor: doctorSchema,

});

module.exports = mongoose.model('User', clinicSchema);
