const mongoose = require("mongoose");

const commoditySchema = new mongoose.Schema({
  commodityId: { type: String, required: true },
  inputValue: { type: String },
});

const calendarSchema = new mongoose.Schema({
  companyId: { type: mongoose.Schema.Types.ObjectId, ref: "Company", required: true },
  month: { type: Number, required: true },
  year: { type: Number, required: true },
  calendar: [
    {
      day: { type: Number, required: true },
      commodityDetails: [commoditySchema],
    },
  ],
});

const Calendar = mongoose.model("Calendar", calendarSchema);
module.exports = Calendar;
