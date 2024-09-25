const express = require("express");
const {
  addCompanyProfile,
  getCompanyProfiles,
  getCompanyProfileById,
  updateCompanyProfile,
  deleteCompanyProfile,
} = require("../controllers/companyProfileController");

const router = express.Router();

router.post("/", addCompanyProfile);

router.get("/", getCompanyProfiles);

router.get("/:id", getCompanyProfileById);

router.put("/:id", updateCompanyProfile);

router.delete("/:id", deleteCompanyProfile);

module.exports = router;
