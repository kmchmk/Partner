import React, { useState, useEffect } from "react";
import { Link, Routes, Route, Router } from "react-router-dom";
import { Button } from "react-bootstrap";
import FilterSidebar from '../components//FilterSidebar';
import ProfileList from '../components/ProfileList';
import ProfileCard from "../components/ProfileCard";

export default function Home() {
  const [profiles, setProfiles] = useState([]);
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
        <ProfileList profiles={profiles} />
        <ProfileCard/>
    </div>      
    </div>
    
    
    
  );
}
