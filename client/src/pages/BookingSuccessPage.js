// src/pages/BookingSuccessPage.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import './BookingSuccessPage.css'

const BookingSuccessPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const bookingId = searchParams.get('bookingId');

  return (
    <div className="booking-success-page">
      <h2>Booking Successful!</h2>
      <p>Your booking (ID: {bookingId}) has been confirmed.</p>
      <p>Thank you for using our service.</p>
    </div>
  );
};

export default BookingSuccessPage;
