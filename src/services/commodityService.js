const Commodity = require("../models/commodityModel");

exports.createCommodity = async (data) => {
  const commodity = new Commodity(data);
  return await commodity.save();
};

exports.getCommodities = async () => {
  return await Commodity.find();
};

exports.getCommodityById = async (id) => {
  return await Commodity.findById(id);
};

exports.updateCommodity = async (id, data) => {
  return await Commodity.findByIdAndUpdate(id, data, { new: true });
};

exports.deleteCommodity = async (id) => {
  return await Commodity.findByIdAndDelete(id);
};
