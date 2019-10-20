
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { Schema } = mongoose;


const userSchema = new Schema({
  name: { type: String, required: true },
  phone: {
    number: {
      type: String, required: true, unique: true, trim: true, lowercase: true,
    },
    country: { type: String, lowercase: true, trim: true },
    verified: { type: Boolean, default: false },
  },
  avatar: { type: String },
  email: { type: String, lowercase: true, trim: true },
  password: { type: String },
});

userSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform(doc, ret) {
    delete ret._id;
    delete ret.password;
  },
});
// pre
userSchema.pre('save', (next) => {
  if (this.password) {
    const salt = bcrypt.genSaltSync(10);
    this.password = bcrypt.hashSync(this.password, salt);
  }
  next();
});


module.exports = mongoose.model('User', userSchema);
