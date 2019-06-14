const mongoose = require('mongoose');

const { Schema } = mongoose;

const clinicSchema = new Schema({
  name: { type: String, required: true },
  address: { type: String },
  phone: { type: String },
  gellery: [],
  doctor: {
    ref: mongoose.Types.ObjectId,
    name: String,
    avatar: String,
  },
  nurses: [{
    ref: mongoose.Types.ObjectId,
    name: String,
    avatar: String,
  }],
  desc: { type: String },
  rate: { type: String },
  fees: { type: String },
  speciality: {
    ref: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String },
    nameAr: { type: String },
  },
  subSpeciality: [{ type: String }],
  workingHours: {
    sat: { hours: [{ from: String, to: String }] },
    sun: { hours: [{ from: String, to: String }] },
    mon: { hours: [{ from: String, to: String }] },
    tue: { hours: [{ from: String, to: String }] },
    wed: { hours: [{ from: String, to: String }] },
    thu: { hours: [{ from: String, to: String }] },
    fri: { hours: [{ from: String, to: String }] },
  },
});

module.exports = mongoose.model('User', clinicSchema);
