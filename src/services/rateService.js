const RateEntry = require("../models/rateModel");

const getAllRates = async () => {
  return await RateEntry.find();
};

const getRateById = async (id) => {
  return await RateEntry.findById(id);
};

const createRate = async (data) => {
  const newRate = new RateEntry(data);
  return await newRate.save();
};

const updateRate = async (req, res) => {
  try {
    const { companyName } = req.params;
    const { updates } = req.body;

    const updatedRateEntry = await rateService.updateRate(companyName, updates);

    if (!updatedRateEntry) {
      return res.status(404).json({ message: "Rate entry not found" });
    }

    res.status(200).json(updatedRateEntry);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating rate", error: error.message });
  }
};

const deleteRate = async (id) => {
  return await RateEntry.findByIdAndDelete(id);
};

module.exports = {
  getAllRates,
  getRateById,
  createRate,
  updateRate,
  deleteRate,
};
