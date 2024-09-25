const GroupOfCompany = require('../models/groupOfCompanyModel');

const createGroupOfCompany = async (data) => {
  try {
    const groupOfCompany = new GroupOfCompany(data);
    return await groupOfCompany.save();
  } catch (error) {
    throw new Error(error.message);
  }
};

const getAllGroups = async () => {
  try {
    return await GroupOfCompany.find();
  } catch (error) {
    throw new Error(error.message);
  }
};

const getGroupById = async (id) => {
  try {
    return await GroupOfCompany.findById(id);
  } catch (error) {
    throw new Error('Group not found');
  }
};

module.exports = {
  createGroupOfCompany,
  getAllGroups,
  getGroupById,
};
