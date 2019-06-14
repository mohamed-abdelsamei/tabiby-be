const mongoose = require('mongoose');

const { Schema } = mongoose;


const clinicSchema = new Schema({
  clinic: {
    ref: mongoose.Types.ObjectId,
    name: String,
    avatar: String,
  },
  doctor: {
    ref: mongoose.Types.ObjectId,
    name: String,
    avatar: String,
  },
  user: {
    ref: mongoose.Types.ObjectId,
    name: String,
    avatar: String,
  },
  fees: { type: String },
  desc: { type: String },
  notes: { type: String },
  perscription: [{
    id: String,
    name: String,
    notes: String,
    quantity: String,
  }],
});

module.exports = mongoose.model('User', clinicSchema);
