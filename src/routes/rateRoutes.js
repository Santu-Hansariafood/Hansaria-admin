const express = require("express");
const router = express.Router();
const rateController = require("../controllers/rateController");

router.get("/", rateController.getAllRates);
router.get("/:id", rateController.getRateById);
router.post("/", rateController.createRate);
router.put("/:companyName", rateController.updateRate);
router.delete("/:id", rateController.deleteRate);

module.exports = router;
