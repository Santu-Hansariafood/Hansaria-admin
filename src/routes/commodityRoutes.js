const express = require("express");
const commodityController = require("../controllers/commodityController");
const router = express.Router();

router.post("/", commodityController.addCommodity);
router.get("/", commodityController.getCommodities);
router.get("/:id", commodityController.getCommodityById);
router.put("/:id", commodityController.updateCommodity);
router.delete("/:id", commodityController.deleteCommodity);

module.exports = router;
