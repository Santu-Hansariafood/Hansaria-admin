const express = require("express");
const router = express.Router();
const purchaserController = require("../controllers/purchaserController");

router.post("/", purchaserController.addPurchaser);

router.get("/", purchaserController.getAllPurchasers);

router.get("/:id", purchaserController.getPurchaserById);

router.put("/:id", purchaserController.updatePurchaser);

router.delete("/:id", purchaserController.deletePurchaser);

module.exports = router;
