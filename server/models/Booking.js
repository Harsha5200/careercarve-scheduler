const { getDatabase } = require('../config/database');

class Booking {
  static create(bookingData, callback) {
    const db = getDatabase();
    const { student_id, mentor_id, area_of_interest, duration, start_time } = bookingData;
    db.run(
      `INSERT INTO bookings (student_id, mentor_id, area_of_interest, duration, start_time) 
       VALUES (?, ?, ?, ?, ?)`,
      [student_id, mentor_id, area_of_interest, duration, start_time],
      function(err) {
        if (err) {
          return callback(err);
        }
        callback(null, this.lastID);
      }
    );
  }

  static getForMentor(mentorId, callback) {
    const db = getDatabase();
    db.all("SELECT * FROM bookings WHERE mentor_id = ?", [mentorId], (err, rows) => {
      if (err) {
        return callback(err);
      }
      callback(null, rows);
    });
  }

  static getForStudent(studentId, callback) {
    const db = getDatabase();
    db.all("SELECT * FROM bookings WHERE student_id = ?", [studentId], (err, rows) => {
      if (err) {
        return callback(err);
      }
      callback(null, rows);
    });
  }
}

module.exports = Booking;