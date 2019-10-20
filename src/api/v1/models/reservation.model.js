const mongoose = require('mongoose');

const { Schema } = mongoose;


const reservationSchema = new Schema({
  clinic: {
    ref: { type: mongoose.Types.ObjectId, ref: 'Clinic' },
    name: String,
    avatar: String,
  },
  doctor: {
    ref: { type: mongoose.Types.ObjectId, ref: 'Doctor' },
    name: String,
    avatar: String,
  },
  user: {
    ref: { type: mongoose.Types.ObjectId, ref: 'User' },
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

reservationSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform(doc, ret) {
    delete ret._id;
  },
});
module.exports = mongoose.model('Reservation', reservationSchema);
