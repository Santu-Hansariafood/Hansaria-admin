const mongoose = require("mongoose");

const companyProfileSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
      trim: true,
    },
    state: {
      type: String,
      required: true,
      trim: true,
    },
    brokerageRate: {
      type: Number,
      required: true,
    },
    groupOfCompany: {
      type: String,
    },
    locations: [
      {
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
        pin: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const CompanyProfile = mongoose.model("CompanyProfile", companyProfileSchema);

module.exports = CompanyProfile;
