const { initDatabase } = require('./config/database');

const mentors = [
  { name: 'John Doe', areas_of_expertise: 'FMCG Sales, Digital Marketing', is_premium: true },
  { name: 'Jane Smith', areas_of_expertise: 'Equity Research, E-Commerce', is_premium: false },
  { name: 'Mike Johnson', areas_of_expertise: 'Digital Marketing, E-Commerce', is_premium: true },
  { name: 'Sarah Brown', areas_of_expertise: 'FMCG Sales, Equity Research', is_premium: false },
  { name: 'Chris Lee', areas_of_expertise: 'E-Commerce, Digital Marketing', is_premium: true },
];

const students = [
  { name: 'Alex Turner' },
  { name: 'Emily White' },
  { name: 'Ryan Green' },
  { name: 'Olivia Black' },
  { name: 'Daniel Gray' },
];

async function seedDatabase() {
  try {
    const db = await initDatabase();

    // Insert mentors
    const mentorStmt = db.prepare("INSERT INTO mentors (name, areas_of_expertise, is_premium) VALUES (?, ?, ?)");
    mentors.forEach(mentor => {
      mentorStmt.run(mentor.name, mentor.areas_of_expertise, mentor.is_premium ? 1 : 0);
    });
    mentorStmt.finalize();

    // Insert students
    const studentStmt = db.prepare("INSERT INTO students (name) VALUES (?)");
    students.forEach(student => {
      studentStmt.run(student.name);
    });
    studentStmt.finalize();

    console.log('Database seeded successfully');
    db.close();
  } catch (err) {
    console.error('Error seeding the database:', err);
  }
}

// Run the seeding function
seedDatabase();
