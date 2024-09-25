const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  location: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  pin: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 6,
  },
}, {
  timestamps: true,
});

const location = mongoose.model('location', locationSchema);

module.exports = location;
