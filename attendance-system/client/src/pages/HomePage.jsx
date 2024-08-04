import React from 'react';
import './HomePage.css';
import HomeImage from '../assets/home.jpg';

const HomePage = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-left">
          <span className="navbar-logo">SCHOOL</span>
        </div>
        <div className="navbar-right">
          <ul className="navbar-menu">
            <li><a href="#about">Student</a></li>
            <li><a href="#services">Teacher</a></li>
            <li><a href="#contact">Non Staff</a></li>
            <li><button className="logout-button">Logout</button></li>
          </ul>
        </div>
      </nav>

      <div className="main-content">
        <div className="left-container">
          <h2>Welcome back to</h2>
          <h1>Student Attendance</h1>
          <p>
              Welcome to the Student Attendance System! Here, you can easily record and monitor attendance ensuring accurate tracking of student participation and helping to maintain an organized learning environment.
          </p>
          <button className="main-button">Get Started</button>
        </div>
        <div className="right-container">
          <img src={HomeImage} alt="School" className="main-image" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;