const buyerService = require('../services/buyerService');

const getBuyers = async (req, res) => {
  try {
    const buyers = await buyerService.getAllBuyers();
    res.json(buyers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getBuyer = async (req, res) => {
  try {
    const buyer = await buyerService.getBuyerById(req.params.id);
    if (!buyer) return res.status(404).json({ message: 'Buyer not found' });
    res.json(buyer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createBuyer = async (req, res) => {
  try {
    const newBuyer = await buyerService.createBuyer(req.body);
    res.status(201).json(newBuyer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateBuyer = async (req, res) => {
  try {
    const updatedBuyer = await buyerService.updateBuyer(req.params.id, req.body);
    if (!updatedBuyer) return res.status(404).json({ message: 'Buyer not found' });
    res.json(updatedBuyer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteBuyer = async (req, res) => {
  try {
    const buyer = await buyerService.deleteBuyer(req.params.id);
    if (!buyer) return res.status(404).json({ message: 'Buyer not found' });
    res.json({ message: 'Buyer deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getBuyers,
  getBuyer,
  createBuyer,
  updateBuyer,
  deleteBuyer,
};
