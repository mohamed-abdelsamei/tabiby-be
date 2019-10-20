
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { Schema } = mongoose;


const nurseSchema = new Schema({
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
  clinic: { type: mongoose.Schema.Types.ObjectId, ref: 'Clinic' },
});

nurseSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform(doc, ret) {
    delete ret._id;
    delete ret.password;
  },
});
// pre
nurseSchema.pre('save', (next) => {
  if (this.password) {
    const salt = bcrypt.genSaltSync(10);
    this.password = bcrypt.hashSync(this.password, salt);
  }
  next();
});


nurseSchema.methods.toJSON = () => {
  const obj = this.toObject();
  delete obj.password;
  obj.id = obj._id;
  return obj;
};

module.exports = mongoose.model('Nurse', nurseSchema);
