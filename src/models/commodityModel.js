const mongoose = require("mongoose");

const CommoditySchema = new mongoose.Schema({
  commodityName: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Commodity", CommoditySchema);
