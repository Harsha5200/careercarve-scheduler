const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

router.post('/', bookingController.createBooking);
router.get('/mentor/:mentorId', bookingController.getBookingsForMentor);
router.get('/student/:studentId', bookingController.getBookingsForStudent);

module.exports = router;