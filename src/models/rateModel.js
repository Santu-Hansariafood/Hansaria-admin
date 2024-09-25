const mongoose = require("mongoose");

const rateEntrySchema = new mongoose.Schema({
  company: [{ type: String, required: true }],
  commodities: [
    {
      commodityName: { type: String, required: true },
      rates: [
        {
          date: { type: String, required: true },
          rate: { type: String, required: true },
        },
      ],
    },
  ],
  location: [{ type: String, required: true }],
});

module.exports = mongoose.model("RateEntry", rateEntrySchema);
