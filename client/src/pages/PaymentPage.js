// src/pages/PaymentPage.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './PaymentPage.css'

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const bookingId = searchParams.get('bookingId');
  const price = searchParams.get('price');

  const handlePayment = () => {
    // In a real application, you would integrate with a payment gateway here
    alert('Payment successful!');
    navigate(`/booking-success?bookingId=${bookingId}`);
  };

  return (
    <div className="payment-page">
      <h2>Payment</h2>
      <p>Booking ID: {bookingId}</p>
      <p>Total Amount: ₹{price}</p>
      {parseInt(price) > 4000 && (
        <p className="premium-info">Includes ₹1000 premium charge for specific mentor selection</p>
      )}
      <button onClick={handlePayment}>Confirm Payment</button>
    </div>
  );
};

export default PaymentPage;
