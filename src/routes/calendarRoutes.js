const express = require("express");
const calendarController = require("../controllers/calendarController");

const router = express.Router();

router.post("/:companyId/calendar", calendarController.createCalendar);
router.get("/:companyId/calendar", calendarController.getCalendar);
router.get("/calendar/:id", calendarController.getCalendarById);
router.put("/:companyId/calendar", calendarController.updateCalendar);
router.delete("/:companyId/calendar", calendarController.deleteCalendar);

module.exports = router;
