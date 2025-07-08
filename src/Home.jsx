import React, { useState } from "react";
import Filters from "./Components/Filters";
import MainContent from "./Components/MainContent";
import Header from "./Components/Header";
import "./Home.css";

export default function Home() {
  const [filters, setFilters] = useState({
    gender: '',
    ageMin: 18,
    ageMax: 60,
    countries: [],
    religions: [],
    civilStatus: [],
    educationLevel: [],
    drinking: [],
    smoking: []
  });

  const handleFiltersChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="home-container">
      <Header />
      <div className="main-content-wrapper">
        <Filters onFiltersChange={handleFiltersChange} />
        <MainContent filters={filters} />
      </div>
    </div>
  );
}
