const purchaserService = require("../services/purchaserService");

exports.addPurchaser = async (req, res) => {
  try {
    const { name, company, location, item, phoneNumber } = req.body;

    if (!name || !company || !location || !item || !phoneNumber) {
      return res.status(400).json({ msg: "Please enter all required fields" });
    }

    const newPurchaser = await purchaserService.createPurchaser({
      name,
      company,
      location,
      item,
      phoneNumber,
    });
    res.status(201).json(newPurchaser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
};

exports.getAllPurchasers = async (req, res) => {
  try {
    const purchasers = await purchaserService.getAllPurchasers();
    res.status(200).json(purchasers);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
};

exports.getPurchaserById = async (req, res) => {
  try {
    const purchaser = await purchaserService.getPurchaserById(req.params.id);

    if (!purchaser) {
      return res.status(404).json({ msg: "Purchaser not found" });
    }

    res.status(200).json(purchaser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
};

exports.updatePurchaser = async (req, res) => {
  try {
    const { name, company, location, item, phoneNumber } = req.body;

    if (!name || !company || !location || !item || !phoneNumber) {
      return res.status(400).json({ msg: "Please enter all required fields" });
    }

    const updatedPurchaser = await purchaserService.updatePurchaser(
      req.params.id,
      { name, company, location, item, phoneNumber }
    );

    if (!updatedPurchaser) {
      return res.status(404).json({ msg: "Purchaser not found" });
    }

    res.status(200).json(updatedPurchaser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
};

exports.deletePurchaser = async (req, res) => {
  try {
    const purchaser = await purchaserService.deletePurchaser(req.params.id);

    if (!purchaser) {
      return res.status(404).json({ msg: "Purchaser not found" });
    }

    res.status(200).json({ msg: "Purchaser deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
};
