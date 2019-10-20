const mongoose = require('mongoose');

const { Schema } = mongoose;


const specialitySchema = new Schema({
  name: { type: String },
  nameAr: { type: String },
  logo: { type: String },
});

specialitySchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform(doc, ret) {
    delete ret._id;
  },
});

specialitySchema.methods.mini = function mini() {
  const { id, name, nameAr } = this;
  return { ref: id, name, nameAr };
};

module.exports = mongoose.model('Speciality', specialitySchema);
