import React, { useState, useEffect } from "react";
import { Link, Routes, Route, Router } from "react-router-dom";
import { Button } from "react-bootstrap";
import FilterSidebar from '../components//FilterSidebar';
import ProfileList from '../components/ProfileList';
import ProfileCard from "../components/ProfileCard";
import FilterSection from "../components/FilterSection";

export default function Home() {
  const [profiles, setProfiles] = useState([{
    id: 1,
    name: "Ravindu Perera",
    location: "USA",
    age: 30,
    ethnicity: "Black",
    occupation: "Software Developer",
    civilStatus: "Single",
    educationLevel: "Masters",
    height: "5'10",
    differentlyAbled: "No",
    smoking: "No",
    drinking: "No"
  },
  {
    id: 1,
    name: "Chanaka Perera",
    location: "USA",
    age: 30,
    ethnicity: "Black",
    occupation: "Software Developer",
    civilStatus: "Single",
    educationLevel: "Masters",
    height: "5'10",
    differentlyAbled: "No",
    smoking: "No",
    drinking: "No"
  }]);
  useEffect(() => {
    // Fetch profiles from an API and set them in state
  }, []);
  return (
    <div className="navigation-container">
      <nav className="navbar">
        <div className="logo">
          <Link to="/">Partner Seeker</Link>
        </div>
        <div className="nav-links">
          <Link to="/girls">Girls</Link>
          <Link to="/boys">Boys</Link>
          <Link to="/About">About</Link>
        </div>
        <div className="nav-actions">
          <Link to="/dashboard" className="dashboard-btn">
            Dashboard
          </Link>
          <Link to="/login" className="login-btn">
            Login
          </Link>
        </div>
      </nav>
      <div className="main-content">
        <FilterSidebar />
        <div className="home-sections">
        <FilterSection/>
        <ProfileList profiles={profiles} />
        </div>
    </div>      
    </div>
    
    
    
  );
}
