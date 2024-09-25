const express = require("express");
const router = express.Router();
const groupOfCompanyController = require("../controllers/groupOfCompanyController");

router.post("/", groupOfCompanyController.createGroupOfCompany);
router.get("/", groupOfCompanyController.getAllGroups);
router.get("/:id", groupOfCompanyController.getGroupById);

module.exports = router;
