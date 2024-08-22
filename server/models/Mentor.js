const { getDatabase } = require('../config/database');

class Mentor {
  static getAll(callback) {
    const db = getDatabase();
    db.all("SELECT * FROM mentors", [], (err, rows) => {
      if (err) {
        return callback(err);
      }
      callback(null, rows);
    });
  }

  static getByAreaOfInterest(area, callback) {
    const db = getDatabase();
    db.all("SELECT * FROM mentors WHERE areas_of_expertise LIKE ?", [`%${area}%`], (err, rows) => {
      if (err) {
        return callback(err);
      }
      callback(null, rows);
    });
  }
}

module.exports = Mentor;