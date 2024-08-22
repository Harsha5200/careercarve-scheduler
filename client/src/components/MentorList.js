// src/components/MentorList.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MentorList.css';

const MentorList = ({ mentors, areaOfInterest }) => {
  const navigate = useNavigate();

  const openBookingForm = (mentor) => {
    navigate(`/booking`, { 
      state: { 
        mentor,
        isPremium: areaOfInterest ? false : true
      }
    });
  };

  return (
    <div className="mentor-list">
      <h2>Available Mentors</h2>
      <ul>
        {mentors.map(mentor => (
          <li key={mentor.id}>
            <span>{mentor.name} - {mentor.areas_of_expertise}</span>
            <button onClick={() => openBookingForm(mentor)}>
              {areaOfInterest ? 'Select' : 'Select (Premium)'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MentorList;