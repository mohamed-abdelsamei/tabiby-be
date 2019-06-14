const mongoose = require('mongoose');

const { Schema } = mongoose;


const clinicSchema = new Schema({
  name: { type: String },
  address: { type: String },
  phone: { type: String },
  desc: { type: String },
  speciality: { ref:}

});


const specialirySchema = new Schema({
  ref: { type: mongoose.ObjectId },
  name: { type: String },
  nameAr: { type: String }
});
module.exports = mongoose.model('User', clinicSchema);
