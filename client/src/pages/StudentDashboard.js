import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import MentorList from '../components/MentorList';
import './StudentDashboard.css';

const StudentDashboard = () => {
  const [mentors, setMentors] = useState([]);
  const [areaOfInterest, setAreaOfInterest] = useState('');

  const fetchMentors = useCallback(async () => {
    try {
      const url = areaOfInterest 
        ? `http://localhost:5000/api/mentors/${areaOfInterest}`
        : 'http://localhost:5000/api/mentors';
      const response = await axios.get(url);
      setMentors(response.data);
    } catch (error) {
      console.error('Error fetching mentors:', error);
    }
  }, [areaOfInterest]);

  useEffect(() => {
    fetchMentors();
  }, [fetchMentors]);

  return (
    <div className="student-dashboard">
      <h1>Student Dashboard</h1>
      <div className="area-of-interest">
        <label>Area of Interest:</label>
        <input 
          type="text" 
          value={areaOfInterest} 
          onChange={(e) => setAreaOfInterest(e.target.value)} 
          placeholder="Enter area of interest or leave blank to see all mentors"
        />
      </div>
      <MentorList mentors={mentors} areaOfInterest={areaOfInterest} />
    </div>
  );
};

export default StudentDashboard;
