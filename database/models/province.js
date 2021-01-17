const mongoose = require('mongoose');
const ProvinceSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  cases: {
    type: Number,
    required: true
  },
  active: {
    type: Number,
    required: true
  },
  recovered: {
    type: Number,
    required: true
  },
  deaths: {
    type: Number,
    required: true
  },
  tests: {
    type: Number,
    required: true
  }
  
}, {
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