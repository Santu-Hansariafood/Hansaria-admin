const RateEntry = require("../models/rateModel");

const getAllRates = async (req, res) => {
  try {
    const rates = await RateEntry.find();
    res.status(200).json(rates);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching rate entries", error: error.message });
  }
};

const getRateById = async (req, res) => {
  try {
    const rate = await RateEntry.findById(req.params.id);
    if (!rate) {
      return res.status(404).json({ message: "Rate entry not found" });
    }
    res.status(200).json(rate);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching rate entry", error: error.message });
  }
};

const createRate = async (req, res) => {
  try {
    const { company, commodities, date, location } = req.body;

    const rateEntry = new RateEntry({
      company,
      commodities: commodities.map((commodity) => ({
        commodityName: commodity.commodityName,
        rates: [{ date, rate: commodity.rate }],
      })),
      location,
    });

    const savedRateEntry = await rateEntry.save();
    res.status(201).json(savedRateEntry);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating rate entry", error: error.message });
  }
};

const updateRate = async (req, res) => {
  try {
    const { companyName } = req.params;
    const { updates } = req.body;

    // Find all rate entries for the given company
    const rateEntries = await RateEntry.find({ company: companyName });

    if (!rateEntries || rateEntries.length === 0) {
      return res
        .status(404)
        .json({ message: "Rate entry not found for the company" });
    }

    // Loop through each update request
    updates.forEach(({ commodityName, date, rate }) => {
      rateEntries.forEach((entry) => {
        // Find the specific commodity
        const commodity = entry.commodities.find(
          (c) => c.commodityName === commodityName
        );

        if (commodity) {
          // Find if the rate for the given date exists
          const existingRate = commodity.rates.find((r) => r.date === date);

          if (existingRate) {
            // Update the existing rate
            existingRate.rate = rate;
          } else {
            // If the date does not exist, add a new rate entry
            commodity.rates.push({ date, rate });
          }
        }
      });
    });

    // Save the updated rate entries back to the database
    await Promise.all(rateEntries.map((entry) => entry.save()));

    return res.status(200).json({ message: "Rates updated successfully", rateEntries });
  } catch (error) {
    console.error("Error updating rates:", error);
    return res.status(500).json({ message: "Error updating rates", error: error.message });
  }
};

const deleteRate = async (req, res) => {
  try {
    const deletedRate = await RateEntry.findByIdAndDelete(req.params.id);
    if (!deletedRate) {
      return res.status(404).json({ message: "Rate entry not found" });
    }
    res.status(200).json({ message: "Rate entry deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting rate entry", error: error.message });
  }
};

module.exports = {
  getAllRates,
  getRateById,
  createRate,
  updateRate,
  deleteRate,
};
