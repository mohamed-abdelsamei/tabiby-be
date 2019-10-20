const mongoose = require('mongoose');

const { Schema } = mongoose;

const clinicSchema = new Schema({
  name: { type: String, required: true },
  address: { type: String },
  phone: { type: String },
  gellery: [],
  doctor: {
    ref: { type: mongoose.Types.ObjectId, ref: 'Doctor' },
    name: String,
    avatar: String,
  },
  nurses: [{
    ref: { type: mongoose.Types.ObjectId, ref: 'Nurse' },
    name: String,
    avatar: String,
  }],
  desc: { type: String },
  rate: { type: String },
  fees: { type: String },
  speciality: {
    ref: { type: mongoose.Schema.Types.ObjectId, ref: 'Speciality' },
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

clinicSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform(doc, ret) { delete ret._id; },
});

clinicSchema.methods = {
  minView() {
    const {
      id, name, address, phone,
    } = this;
    return {
      id, name, address, phone,
    };
  },
};

clinicSchema.plugin(require('mongoose-keywords'), { paths: ['name', 'speciality.name', 'speciality.nameAr'] });


module.exports = mongoose.model('Clinic', clinicSchema);
