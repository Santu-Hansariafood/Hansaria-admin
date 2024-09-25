const commodityService = require("../services/commodityService");

exports.addCommodity = async (req, res) => {
  const { commodityName } = req.body;
  if (!commodityName) {
    return res.status(400).json({ msg: "Please enter all required fields" });
  }

  try {
    const newCommodity = await commodityService.createCommodity({
      commodityName,
    });
    res.status(201).json(newCommodity);
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
};

exports.getCommodities = async (req, res) => {
  try {
    const commodities = await commodityService.getCommodities();
    res.status(200).json(commodities);
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
};

exports.getCommodityById = async (req, res) => {
  try {
    const commodity = await commodityService.getCommodityById(req.params.id);
    if (!commodity) {
      return res.status(404).json({ msg: "Commodity not found" });
    }
    res.status(200).json(commodity);
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
};

exports.updateCommodity = async (req, res) => {
  try {
    const updatedCommodity = await commodityService.updateCommodity(
      req.params.id,
      req.body
    );
    if (!updatedCommodity) {
      return res.status(404).json({ msg: "Commodity not found" });
    }
    res.status(200).json(updatedCommodity);
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
};

exports.deleteCommodity = async (req, res) => {
  try {
    const deletedCommodity = await commodityService.deleteCommodity(
      req.params.id
    );
    if (!deletedCommodity) {
      return res.status(404).json({ msg: "Commodity not found" });
    }
    res.status(200).json({ msg: "Commodity deleted successfully" });
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
};
