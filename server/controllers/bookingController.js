const Booking = require('../models/Booking');

exports.createBooking = (req, res) => {
  const bookingData = req.body;
  Booking.create(bookingData, (err, bookingId) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: bookingId, message: 'Booking created successfully' });
  });
};

exports.getBookingsForMentor = (req, res) => {
  const { mentorId } = req.params;
  Booking.getForMentor(mentorId, (err, bookings) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(bookings);
  });
};

exports.getBookingsForStudent = (req, res) => {
  const { studentId } = req.params;
  Booking.getForStudent(studentId, (err, bookings) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(bookings);
  });
};