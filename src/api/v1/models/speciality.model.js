const mongoose = require('mongoose');

const { Schema } = mongoose;


const specialitySchema = new Schema({
  ref: { type: mongoose.Schema.Types.ObjectId },
  name: { type: String },
  nameAr: { type: String },
  logo: { type: String },
});


module.exports = mongoose.model('Speciality', specialitySchema);
