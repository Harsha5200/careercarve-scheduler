const Mentor = require('../models/Mentor');

exports.getAllMentors = (req, res) => {
  Mentor.getAll((err, mentors) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(mentors);
  });
};

exports.getMentorsByAreaOfInterest = (req, res) => {
  const { area } = req.params;
  Mentor.getByAreaOfInterest(area, (err, mentors) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(mentors);
  });
};