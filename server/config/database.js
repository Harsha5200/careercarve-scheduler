const sqlite3 = require('sqlite3').verbose();

const initDatabase = () => {
  return new Promise((resolve, reject) => {
    const db = new sqlite3.Database('./careercarve.db', (err) => {
      if (err) {
        console.error('Error connecting to database:', err.message);
        reject(err);
      } else {
        console.log('Connected to the SQLite database.');
        db.serialize(() => {
          db.run(`CREATE TABLE IF NOT EXISTS mentors (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            areas_of_expertise TEXT,
            is_premium BOOLEAN
          )`, (err) => {
            if (err) {
              reject(err);
            }
          });

          db.run(`CREATE TABLE IF NOT EXISTS students (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT
          )`, (err) => {
            if (err) {
              reject(err);
            }
          });

          db.run(`CREATE TABLE IF NOT EXISTS bookings (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            student_id INTEGER,
            mentor_id INTEGER,
            area_of_interest TEXT,
            duration INTEGER,
            start_time DATETIME,
            FOREIGN KEY (student_id) REFERENCES students(id),
            FOREIGN KEY (mentor_id) REFERENCES mentors(id)
          )`, (err) => {
            if (err) {
              reject(err);
            }
            resolve(db); // Resolve the promise after all tables are created
          });
        });
      }
    });
  });
};

module.exports = {
  initDatabase,
  getDatabase: () => new sqlite3.Database('./careercarve.db')
};
