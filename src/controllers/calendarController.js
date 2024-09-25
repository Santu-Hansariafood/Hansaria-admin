const calendarService = require("../services/calendarService");

class CalendarController {
  async createCalendar(req, res) {
    try {
      const { month, year, calendar } = req.body;
      const { companyId } = req.params;
      const newCalendar = await calendarService.createCalendar(companyId, month, year, calendar);
      res.status(201).json(newCalendar);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getCalendar(req, res) {
    try {
      const { companyId } = req.params;
      const { month, year } = req.query;
      const calendar = await calendarService.getCalendar(companyId, month, year);
      if (!calendar) return res.status(404).json({ message: "Calendar not found" });
      res.status(200).json(calendar);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getCalendarById(req, res) {
    try {
      const { id } = req.params;
      const calendar = await calendarService.getCalendarById(id);
      if (!calendar) return res.status(404).json({ message: "Calendar not found" });
      res.status(200).json(calendar);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateCalendar(req, res) {
    try {
      const { month, year, calendar } = req.body;
      const { companyId } = req.params;
      const updatedCalendar = await calendarService.updateCalendar(companyId, month, year, calendar);
      res.status(200).json(updatedCalendar);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteCalendar(req, res) {
    try {
      const { companyId } = req.params;
      const { month, year } = req.query;
      await calendarService.deleteCalendar(companyId, month, year);
      res.status(204).json({ message: "Calendar deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new CalendarController();
