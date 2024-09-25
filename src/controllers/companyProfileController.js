const companyProfileService = require("../services/companyProfileService");

const addCompanyProfile = async (req, res) => {
  try {
    const { companyName, state, brokerageRate, groupOfCompany, locations } = req.body;

    const newProfile = await companyProfileService.addCompanyProfile({
      companyName,
      state,
      brokerageRate,
      groupOfCompany,
      locations,
    });

    res.status(201).json(newProfile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCompanyProfiles = async (req, res) => {
  try {
    const profiles = await companyProfileService.getCompanyProfiles();
    res.status(200).json(profiles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCompanyProfileById = async (req, res) => {
  try {
    const profile = await companyProfileService.getCompanyProfileById(req.params.id);
    res.status(200).json(profile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateCompanyProfile = async (req, res) => {
  try {
    const { companyName, state, brokerageRate, groupOfCompany, locations } = req.body;
    const updatedProfile = await companyProfileService.updateCompanyProfile(
      req.params.id,
      { companyName, state, brokerageRate, groupOfCompany, locations } // Add locations
    );

    res.status(200).json(updatedProfile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteCompanyProfile = async (req, res) => {
  try {
    const result = await companyProfileService.deleteCompanyProfile(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addCompanyProfile,
  getCompanyProfiles,
  getCompanyProfileById,
  updateCompanyProfile,
  deleteCompanyProfile,
};
