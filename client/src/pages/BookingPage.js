// src/pages/BookingPage.js
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './BookingPage.css'

const BookingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { mentor, isPremium } = location.state || {};

  const [areaOfInterest, setAreaOfInterest] = useState('');
  const [duration, setDuration] = useState(30);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const calculatePrice = () => {
    let basePrice = duration === 30 ? 2000 : duration === 45 ? 3000 : 4000;
    if (isPremium) {
      basePrice += 1000;
    }
    return basePrice;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/bookings', {
        student_id: 1, // Hardcoded for simplicity
        mentor_id: mentor.id,
        area_of_interest: areaOfInterest,
        duration,
        start_time: `${date}T${time}:00.000Z`,
        is_premium: isPremium
      });
      navigate(`/payment?bookingId=${response.data.id}&price=${calculatePrice()}`);
    } catch (error) {
      console.error('Error creating booking:', error);
      alert('Failed to create booking. Please try again.');
    }
  };

  return (
    <div className="booking-page">
      <h2>Book a Session with {mentor.name}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Area of Interest:</label>
          <input 
            type="text" 
            value={areaOfInterest} 
            onChange={(e) => setAreaOfInterest(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Duration:</label>
          <select value={duration} onChange={(e) => setDuration(Number(e.target.value))}>
            <option value={30}>30 minutes</option>
            <option value={45}>45 minutes</option>
            <option value={60}>60 minutes</option>
          </select>
        </div>
        <div>
          <label>Date:</label>
          <input 
            type="date" 
            value={date} 
            onChange={(e) => setDate(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Time:</label>
          <input 
            type="time" 
            value={time} 
            onChange={(e) => setTime(e.target.value)} 
            required 
          />
        </div>
        <div className="price-info">
          <p>Price: ₹{calculatePrice()}</p>
          {isPremium && <p className="premium-info">Includes ₹1000 premium charge</p>}
        </div>
        <button type="submit">Proceed to Payment</button>
      </form>
    </div>
  );
};

export default BookingPage;