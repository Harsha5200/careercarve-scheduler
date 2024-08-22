1x1 Scheduler for MBA Students and Mentors
Welcome to the 1x1 Scheduler project for MBA students and mentors. This web application facilitates scheduling 1x1 sessions between MBA students and mentors, allowing students to book time slots based on their area of interest or preferred mentor, with considerations for mentor availability and session duration.

Features
Mentor Availability Priority

The scheduler prioritizes the mentor's availability over the student's preference.
Mentors prefer back-to-back sessions rather than scattered ones. For example, if two students need to be scheduled with the same mentor, the system will aim to book them consecutively (e.g., 7pm-7:30pm and 7:30pm-8pm) rather than with breaks in between (e.g., 7pm-7:30pm and then 9:30pm-10pm).
Area of Interest and Mentor Selection

Students can choose an area of interest from 42 predefined roles (e.g., FMCG Sales, Equity Research, Digital Marketing).
The system assigns an available mentor from the selected area of interest.
Students can opt for a specific mentor (based on positive feedback) for an additional charge. This is considered a premium service.
Session Duration Options

Students can select session durations of 30, 45, or 60 minutes when booking a session.
Payment Processing

The payment page is generated based on the selected duration:
30 minutes: 2000
45 minutes: 3000
60 minutes: [amount to be determined]
Additional charges apply if a specific mentor is selected.
Technology Stack
Frontend: React JS
Backend: Node.js and Express
Database: SQLite
Deployment:
Backend: Render
Getting Started
To get started with the project, follow these steps:

Prerequisites
Node.js, React and npm installed on your machine
SQLite database setup
