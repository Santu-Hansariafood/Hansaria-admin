const Purchaser = require("../models/purchaserModel");

exports.createPurchaser = async (purchaserData) => {
  const purchaser = new Purchaser(purchaserData);
  return await purchaser.save();
};

exports.getAllPurchasers = async () => {
  return await Purchaser.find();
};

exports.getPurchaserById = async (id) => {
  return await Purchaser.findById(id);
};

exports.updatePurchaser = async (id, purchaserData) => {
  return await Purchaser.findByIdAndUpdate(id, purchaserData, { new: true });
};

exports.deletePurchaser = async (id) => {
  return await Purchaser.findByIdAndDelete(id);
};
