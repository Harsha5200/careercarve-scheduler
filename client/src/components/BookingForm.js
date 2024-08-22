// src/components/BookingForm.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './BookingForm.css';

const BookingForm = ({ selectedMentor, isPremium }) => {
  const navigate = useNavigate();
  const [areaOfInterest, setAreaOfInterest] = useState('');
  const [duration, setDuration] = useState(30);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const basePrice = duration === 30 ? 2000 : duration === 45 ? 3000 : 4000;
    const premiumCharge = isPremium ? 1000 : 0;
    setPrice(basePrice + premiumCharge);
  }, [duration, isPremium]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/bookings', {
        student_id: 1, // Hardcoded for simplicity
        mentor_id: selectedMentor.id,
        area_of_interest: areaOfInterest,
        duration,
        start_time: `${date}T${time}:00.000Z`,
        is_premium: isPremium
      });
      const bookingId = response.data.id;
      navigate(`/payment?bookingId=${bookingId}&price=${price}`);
    } catch (error) {
      console.error('Error creating booking:', error);
      alert('Failed to create booking. Please try again.');
    }
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <h2>Book a Session with {selectedMentor.name}</h2>
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
        <p>Price: ₹{price}</p>
        {isPremium && <p className="premium-info">Includes ₹1000 premium charge</p>}
      </div>
      <button type="submit">Book Session</button>
    </form>
  );
};

export default BookingForm;