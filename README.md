# Student-Placement-Management-Portal
OVERVIEW
========
The College Placement Tracker is a full-stack web application designed to manage and monitor
student placement data in an educational institution. The system enables administrators to
track students, colleges, companies, and job roles, and provides a real-time dashboard that
displays live statistics fetched from the backend.
This project emphasizes a clean user interface, modular code structure, and API-driven
data handling.

FEATURES
========
Dashboard
---------
• Displays total counts of:
  - Students
  - Colleges
  - Companies
  - Job Roles
• Animated counters that increase smoothly from zero to the actual values
• Real-time data fetched from backend APIs

Student Management
------------------
• Add new students with academic and placement details
• View students in a responsive card layout
• Edit existing student records

Each student card displays:
• Profile photo
• Name
• Degree
• Graduation year
• Placement status

Colleges & Companies
-------------------
• Add and view colleges
• Add and view companies
• Card-based responsive layouts

Job Roles
---------
• View all available job roles
• Read-only display to prevent invalid data entry

UI & UX
-------
• Consistent header styling across all pages
• Responsive layout for desktop and mobile devices
• Clean and professional design using reusable CSS
• No external UI libraries used

TECHNOLOGY STACK
================
Frontend
--------
• HTML5
• CSS3
• JavaScript (Vanilla)

Backend
-------
• REST APIs hosted on Render

API ENDPOINTS
=============
• /api/students
• /api/colleges
• /api/companies
• /api/job-roles

HOW IT WORKS
============
1. The dashboard loads data from backend APIs.
2. JavaScript fetches the data and animates the counters dynamically.
3. Student data is displayed using card layouts generated from API responses.
4. Add and Edit Student pages interact with the backend using POST and PUT requests.
5. All pages share common styles to maintain UI consistency.

SETUP & USAGE
=============
1. Clone or download the project.
2. Open index.html in a web browser.
3. Ensure the backend API is accessible.
4. Use the dashboard to manage students, colleges, companies, and job roles.
No additional setup or build tools are required.

KEY HIGHLIGHTS
==============
• Fully API-driven architecture
• Clean separation of HTML, CSS, and JavaScript
• Defensive coding to handle varying API responses
• Responsive and professional UI
• Suitable for academic submission or real-world demonstration

FUTURE ENHANCEMENTS
===================
• Delete student functionality
• Role-based authentication
• Advanced filters and search
• Export reports
• Placement analytics and insights

PROJECT STRUCTURE
=================
/ (root)
│
├── index.html
├── student.html
├── addStudent.html
├── editStudent.html
├── colleges.html
├── companies.html
├── jobroles.html
│
├── CSS/
│   ├── header.css
│   ├── common.css
│   ├── index.css
│   ├── student.css
│
├── JavaScript/
│   ├── apis.js
│   ├── idx.js
│   ├── student.js
│   ├── addstudent.js
│   ├── editStudent.js
│   ├── colleges.js
│   ├── companies.js
│   ├── jobroles.js


AUTHOR
======
Yash Shinde
