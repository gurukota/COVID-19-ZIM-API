const mongoose = require('mongoose');
const ProvinceSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  active: {
    type: Number,
    require: true,
  },
  cured: {
    type: Number,
    require: true,
  },
  death: {
    type: Number,
    require: true,
  },
  total: {
    type: Number,
    require: true,
  }
}, {
  timestamps: true,
  toObject: {
    transform: (doc, ret, options) => {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
      return ret;
    }
  }
});

module.exports = mongoose.model('Province', ProvinceSchema);