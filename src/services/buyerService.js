const Buyer = require('../models/buyerModel');

const getAllBuyers = async () => {
  return await Buyer.find();
};

const getBuyerById = async (id) => {
  return await Buyer.findById(id);
};

const createBuyer = async (buyerData) => {
  const buyer = new Buyer(buyerData);
  return await buyer.save();
};

const updateBuyer = async (id, updateData) => {
  return await Buyer.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteBuyer = async (id) => {
  return await Buyer.findByIdAndDelete(id);
};

module.exports = {
  getAllBuyers,
  getBuyerById,
  createBuyer,
  updateBuyer,
  deleteBuyer,
};
