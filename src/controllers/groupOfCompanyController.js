const groupOfCompanyService = require("../services/groupOfCompanyService");

const createGroupOfCompany = async (req, res) => {
  try {
    const group = await groupOfCompanyService.createGroupOfCompany(req.body);
    res.status(201).json({ success: true, data: group });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const getAllGroups = async (req, res) => {
  try {
    const groups = await groupOfCompanyService.getAllGroups();
    res.status(200).json({ success: true, data: groups });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getGroupById = async (req, res) => {
  try {
    const group = await groupOfCompanyService.getGroupById(req.params.id);
    if (!group) {
      return res
        .status(404)
        .json({ success: false, message: "Group not found" });
    }
    res.status(200).json({ success: true, data: group });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  createGroupOfCompany,
  getAllGroups,
  getGroupById,
};
