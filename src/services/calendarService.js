const Calendar = require("../models/calendarModel");

class CalendarService {
  async createCalendar(companyId, month, year, calendarData) {
    const newCalendar = new Calendar({
      companyId,
      month,
      year,
      calendar: calendarData,
    });
    return await newCalendar.save();
  }

  async getCalendar(companyId, month, year) {
    return await Calendar.findOne({ companyId, month, year });
  }

  async getCalendarById(id) {
    return await Calendar.findById(id);
  }

  async updateCalendar(companyId, month, year, calendarData) {
    const calendar = await Calendar.findOneAndUpdate(
      { companyId, month, year },
      { calendar: calendarData },
      { new: true, upsert: true }
    );
    return calendar;
  }

  async deleteCalendar(companyId, month, year) {
    return await Calendar.findOneAndDelete({ companyId, month, year });
  }
}

module.exports = new CalendarService();
