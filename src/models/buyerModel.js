const mongoose = require('mongoose');

const buyerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  groupOfCompany: {
    type: String,
    required: true,
  },
  locations: [
    {
      type: String,
    },
  ],
  productCapacity: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

const Buyer = mongoose.model('Buyer', buyerSchema);

module.exports = Buyer;
