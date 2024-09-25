const CompanyProfile = require("../models/companyProfileModel");

const addCompanyProfile = async (data) => {
  const newProfile = new CompanyProfile(data);
  return await newProfile.save();
};

const getCompanyProfiles = async () => {
  return await CompanyProfile.find();
};

const getCompanyProfileById = async (id) => {
  return await CompanyProfile.findById(id);
};

const updateCompanyProfile = async (id, data) => {
  return await CompanyProfile.findByIdAndUpdate(id, data, { new: true });
};

const deleteCompanyProfile = async (id) => {
  return await CompanyProfile.findByIdAndDelete(id);
};

module.exports = {
  addCompanyProfile,
  getCompanyProfiles,
  getCompanyProfileById,
  updateCompanyProfile,
  deleteCompanyProfile,
};
